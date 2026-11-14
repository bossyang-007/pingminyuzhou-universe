// 创始神 · AI 内容生成工具
// 用法：
//   node tools/creator-god/generate.mjs "海边灯塔小镇，宁静治愈"   → 生成场景并插入 src/content/scenes.js
//   node tools/creator-god/generate.mjs --check                  → 校验现有 scenes.js 是否符合 schema
//
// 默认用「模板 + 关键词」离线生成，开箱即用；
// 若设置环境变量 LLM_ENDPOINT / LLM_API_KEY，则调用大模型生成更丰富的地图描述（失败自动回退模板）。
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const SCENES_PATH = join(ROOT, 'src', 'content', 'scenes.js');

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9一-龥]+/g, '_').replace(/^_|_$/g, '').slice(0, 24) || 'map';
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const PALETTES = {
  sea: { sky: '#9ec9e0', ground: '#c9b79a' },
  night: { sky: '#241d2e', ground: '#342a3a' },
  green: { sky: '#aed3e8', ground: '#6fa257' },
  city: { sky: '#aab8c4', ground: '#9aa6b0' },
  warm: { sky: '#c9b79a', ground: '#b98c5a' },
};
function pickPalette(prompt) {
  if (/海|岛|港|船|灯塔/.test(prompt)) return PALETTES.sea;
  if (/夜|霓|灯/.test(prompt)) return PALETTES.night;
  if (/山|森|公|草|田|园/.test(prompt)) return PALETTES.green;
  if (/城|市|商|街|楼|广/.test(prompt)) return PALETTES.city;
  return Math.random() > 0.5 ? PALETTES.warm : PALETTES.sea;
}

function templateProps(prompt, pal) {
  const props = [];
  if (/灯塔|塔/.test(prompt)) {
    props.push({ type: 'cyl', pos: [0, 4, -8], size: [1.2, 8], color: '#e8e2d0' });
    props.push({ type: 'cone', pos: [0, 9, -8], size: [1.7, 2], color: '#d8553a', emissive: '#ffb347' });
  } else if (/山|峰/.test(prompt)) {
    props.push({ type: 'cone', pos: [0, 3, -8], size: [4, 6], color: '#6f8f6a' });
  } else if (/市|商|楼|城/.test(prompt)) {
    props.push({ type: 'box', pos: [-4, 1.5, -6], size: [3, 3, 2], color: '#b9c2cb' });
    props.push({ type: 'box', pos: [4, 1.2, -6], size: [3, 2.4, 2], color: '#c7b0c0', emissive: '#ff9bd0' });
  } else {
    props.push({ type: 'box', pos: [0, 1, -6], size: [4, 2, 2], color: '#cbb89a', emissive: '#ffd166' });
  }
  props.push({ type: 'cyl', pos: [-5, 1.2, 2], size: [0.4, 2.4], color: '#6b4a2f' });
  props.push({ type: 'sphere', pos: [-5, 2.7, 2], size: [1.4], color: '#3f7d3f' });
  props.push({ type: 'sphere', pos: [5, 1.2, 3], size: [0.4], color: '#ffe9a8', emissive: '#ffd166' });
  props.push({ type: 'box', pos: [2, 0.4, 3], size: [2, 0.8, 1], color: '#9a7b4f' });
  return props;
}

function templateSpots(prompt) {
  return [
    {
      id: 'explore', label: '探索角落', pos: [0, 0, -4], radius: 2.6,
      intro: '这里似乎藏着什么。',
      event: {
        title: '在新地图探索',
        desc: `你在「${prompt.slice(0, 14)}」里四处张望，发现了意想不到的细节。`,
        choices: [
          { label: '仔细查看', hint: '知识+3 快乐+2', effect: { knowledge: 3, happy: 2 } },
          { label: '随手拍下', hint: '社交+2 快乐+2', effect: { social: 2, happy: 2 } },
        ],
      },
    },
    {
      id: 'rest', label: '歇脚处', pos: [2, 0, 3], radius: 2.4,
      intro: '走累了，正好坐会儿。',
      event: {
        title: '就地歇脚',
        desc: '风很轻，时间很慢。',
        choices: [
          { label: '闭眼养神', hint: '精力+5', effect: { energy: 5 } },
          { label: '发条动态', hint: '社交+3', effect: { social: 3 } },
        ],
      },
    },
    {
      id: 'trade', label: '小卖部', pos: [-5, 0, 2], radius: 2.6,
      intro: '路边支了个小摊。',
      event: {
        title: '顺便消费',
        desc: '摊主热情地招呼你。',
        choices: [
          { label: '买点特产', hint: '金钱-25 快乐+3', effect: { money: -25, happy: 3 } },
          { label: '只逛不买', hint: '快乐+1', effect: { happy: 1 } },
        ],
      },
    },
  ];
}

function buildSceneData(prompt) {
  const pal = pickPalette(prompt);
  return {
    id: 'god_' + slug(prompt) + '_' + Date.now().toString(36).slice(-4),
    name: prompt.slice(0, 12) || '神秘地块',
    sky: pal.sky,
    ground: pal.ground,
    fog: 0.014,
    spawn: [0, 0, 5],
    props: templateProps(prompt, pal),
    spots: templateSpots(prompt),
  };
}

// 可选：大模型增强（设置 LLM_ENDPOINT / LLM_API_KEY 后启用，失败自动回退模板）
async function llmEnrich(prompt, base) {
  const ep = process.env.LLM_ENDPOINT, key = process.env.LLM_API_KEY;
  if (!ep || !key) return base;
  try {
    const r = await fetch(ep, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
      body: JSON.stringify({ prompt: `用一句话描述场景「${prompt}」的氛围，并给出 sky 和 ground 的十六进制颜色（分别 field）。只返回 JSON。`, max_tokens: 200 }),
    });
    const data = await r.json();
    const txt = data.choices?.[0]?.text || data.content || '';
    const m = txt.match(/\{[\s\S]*\}/);
    if (m) {
      const j = JSON.parse(m[0]);
      if (j.sky) base.sky = j.sky;
      if (j.ground) base.ground = j.ground;
    }
  } catch (e) { /* 回退模板 */ }
  return base;
}

function toSource(obj) {
  const json = JSON.stringify(obj, null, 2);
  // 把双引号键/字符串转为与仓库一致的单引号风格（可选），此处保持 JSON 风格亦可
  return json.split('\n').map((l) => '  ' + l).join('\n');
}

async function insertScene(scene) {
  const content = await readFile(SCENES_PATH, 'utf8');
  const idx = content.lastIndexOf('];');
  if (idx < 0) throw new Error('未在 scenes.js 找到数组结尾');
  const block = ',\n\n' + toSource(scene) + '\n';
  const next = content.slice(0, idx) + block + content.slice(idx);
  await writeFile(SCENES_PATH, next, 'utf8');
}

async function checkScenes() {
  const mod = await import('file://' + SCENES_PATH);
  const list = mod.scenes || [];
  let ok = true;
  list.forEach((s, i) => {
    const errs = [];
    if (!s.id) errs.push('缺少 id');
    if (!s.name) errs.push('缺少 name');
    if (!Array.isArray(s.spots)) errs.push('spots 非数组');
    if (errs.length) { ok = false; console.log(`  ✗ [${i}] ${s.id || '?'}: ${errs.join(', ')}`); }
  });
  console.log(ok ? `  ✓ 校验通过：${list.length} 个场景，schema 完整` : '  ✗ 存在不规范场景');
  process.exit(ok ? 0 : 1);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--check')) return checkScenes();

  const prompt = args.join(' ').trim();
  if (!prompt) { console.log('用法: node tools/creator-god/generate.mjs "场景描述"  (或 --check)'); process.exit(1); }

  console.log(`  ✷ 创始神正在孕育「${prompt}」...`);
  let scene = buildSceneData(prompt);
  scene = await llmEnrich(prompt, scene);
  await insertScene(scene);
  console.log(`  ✓ 已生成场景并插入 src/content/scenes.js`);
  console.log(`    id=${scene.id}  name=${scene.name}  props=${scene.props.length}  spots=${scene.spots.length}`);
  console.log('    刷新游戏即可在新场景切换菜单中看到它。');
}

main().catch((e) => { console.error('  ✗ 生成失败:', e.message); process.exit(1); });
