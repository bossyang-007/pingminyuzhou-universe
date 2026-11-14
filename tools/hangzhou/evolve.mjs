// 杭州镜像宇宙 · 定时演化工具
// 用法：
//   node tools/hangzhou/evolve.mjs            → 推进一个步长（默认 +2 模拟年），刷新状态并生成状态报告
//   node tools/hangzhou/evolve.mjs --step 1   → 自定义步长
//   node tools/hangzhou/evolve.mjs --init     → 重置到 2026 基线（仅首次或回滚用）
//
// 输入：tools/hangzhou/model.js（13 区县基线：2026 现实人口 / 2076 目标人口 / 初始繁荣度）
// 输出：src/content/scenes/hangzhou.state.js（HZ_STATE 动态状态，供游戏运行时读取）
//       HANGZHOU_STATUS.md（人类可读的「城市脉搏」报告，随每次演化更新）
//
// 设计要点（与定时任务机制对应）：
//   · 模拟时钟 simYear 从 2026 向 2076 推进，每个步长 = 一次「世界心跳」；
//   · 各区人口按线性插值从现实值逼近 2076 目标，繁荣度/能量/情绪做有界随机游走（状态同步）；
//   · phase 模拟全城统一的时间相位（昼夜节律），让镜像宇宙与现实昼夜平行；
//   · feed 滚动记录最近 N 条「城市事件」，模拟镜像宇宙自发涌现的生活流。
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const STATE_PATH = join(ROOT, 'src', 'content', 'scenes', 'hangzhou.state.js');
const STATUS_PATH = join(ROOT, 'HANGZHOU_STATUS.md');

const SIM_START = 2026;
const SIM_END = 2076;
const STEP_DEFAULT = 2;

// —— 13 区县基线模型（现实锚点取自 2025 统计；2076 目标为按城市总规趋势的外推） ——
const MODEL = [
  { id: 'hz_shangcheng', name: '上城区', pop0: 140.2, pop1: 198 },
  { id: 'hz_gongshu',    name: '拱墅区', pop0: 120.1, pop1: 168 },
  { id: 'hz_xihu',       name: '西湖区', pop0: 118.0, pop1: 160 },
  { id: 'hz_binjiang',   name: '滨江区', pop0: 55.9,  pop1: 92 },
  { id: 'hz_xiaoshan',   name: '萧山区', pop0: 218.4, pop1: 300 },
  { id: 'hz_yuhang',     name: '余杭区', pop0: 143.8, pop1: 215 },
  { id: 'hz_linping',    name: '临平区', pop0: 116.0, pop1: 168 },
  { id: 'hz_qiantang',   name: '钱塘区', pop0: 81.0,  pop1: 122 },
  { id: 'hz_fuyang',     name: '富阳区', pop0: 86.4,  pop1: 120 },
  { id: 'hz_linan',      name: '临安区', pop0: 65.7,  pop1: 92 },
  { id: 'hz_tonglu',     name: '桐庐县', pop0: 46.2,  pop1: 64 },
  { id: 'hz_chunan',     name: '淳安县', pop0: 31.7,  pop1: 44 },
  { id: 'hz_jiande',     name: '建德市', pop0: 44.2,  pop1: 62 },
];

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const rnd = (a, b) => a + Math.random() * (b - a);
const round1 = (v) => Math.round(v * 10) / 10;

function initState() {
  const districts = {};
  for (const m of MODEL) {
    districts[m.id] = {
      name: m.name,
      pop0: m.pop0, pop1: m.pop1,
      pop: m.pop0, prosperity: 60, energy: 70, mood: 72, phase: 8,
    };
  }
  return {
    simYear: SIM_START, realYear: new Date().getFullYear(), lastSync: new Date().toISOString(),
    tick: 0, districts, feed: [],
  };
}

async function readState() {
  try {
    const mod = await import('file://' + STATE_PATH + '?t=' + Date.now());
    return mod.HZ_STATE || initState();
  } catch {
    return initState();
  }
}

// 推进一个步长：插值人口、游走繁荣/能量/情绪、推进时间相位、生成事件
function advance(state, step) {
  state.simYear = Math.min(SIM_END, state.simYear + step);
  const t = (state.simYear - SIM_START) / (SIM_END - SIM_START); // 0→1 进度
  const events = [];
  for (const m of MODEL) {
    const d = state.districts[m.id];
    d.pop = round1(m.pop0 + (m.pop1 - m.pop0) * t + rnd(-0.4, 0.4));
    d.prosperity = clamp(round1(d.prosperity + rnd(-1.5, 2.5)), 40, 100);
    d.energy = clamp(round1(d.energy + rnd(-3, 3)), 30, 100);
    d.mood = clamp(round1(d.mood + rnd(-2.5, 2.5)), 35, 100);
    d.phase = (d.phase + step * 0.5) % 24; // 每步推进半天左右的昼夜相位
  }
  state.realYear = new Date().getFullYear();
  state.lastSync = new Date().toISOString();
  state.tick += 1;

  // 滚动事件：从各区随机挑 1~2 条，模拟镜像宇宙自发涌现的生活流
  const POOL = [
    (n) => `${n}一处社区镜像完成了零碳改造，邻里能量 +。`,
    (n) => `${n}的空中绿廊今晨迎来了第一班自动驾驶通勤者。`,
    (n) => `${n}的数字孪生节点与城市中枢完成了一次心跳同步。`,
    (n) => `${n}一所全息学堂开课，老人与孩子在镜像宇宙同堂。`,
    (n) => `${n}的潮汐/水温空调为全城节省了一次峰值负荷。`,
    (n) => `${n}的生态脑报告：本月碳汇超额完成目标。`,
    (n) => `${n}的低空物流网把山货送到了 30 公里外的餐桌。`,
  ];
  const nPicks = 1 + (Math.random() < 0.5 ? 1 : 0);
  for (let i = 0; i < nPicks; i++) {
    const m = MODEL[Math.floor(Math.random() * MODEL.length)];
    const line = POOL[Math.floor(Math.random() * POOL.length)](m.name);
    events.push({ year: state.simYear, district: m.id, text: line });
  }
  state.feed = [...events.reverse(), ...state.feed].slice(0, 20);
  return events;
}

function buildStateFile(state) {
  return (
    '// 杭州镜像宇宙 · 动态状态（由 tools/hangzhou/evolve.mjs 自动生成，请勿手改）\n' +
    '// HZ_STATE 记录「智能平民宇宙·杭州」的模拟时钟与各区实时脉搏，供游戏运行时读取，实现状态同步。\n' +
    'export const HZ_STATE = ' + JSON.stringify(state, null, 2) + ';\n'
  );
}

function buildStatus(state, events) {
  const rows = MODEL.map((m) => {
    const d = state.districts[m.id];
    return `| ${m.name} | ${d.pop.toFixed(1)} | ${d.prosperity.toFixed(0)} | ${d.energy.toFixed(0)} | ${d.mood.toFixed(0)} |`;
  }).join('\n');
  const feed = (state.feed.length ? state.feed : []).map((f) => `- 【${f.year}】${f.text}`).join('\n');
  return `# 杭州 · 智能平民宇宙 城市脉搏

> 自动生成于 ${state.lastSync} · 模拟年 ${state.simYear}（进度 ${Math.round(((state.simYear - SIM_START) / (SIM_END - SIM_START)) * 100)}%）· 第 ${state.tick} 次心跳
> 本文件由 \`tools/hangzhou/evolve.mjs\` 在定时任务中自动刷新，反映镜像宇宙相对现实杭州的平行演化。

## 全市概览
- 模拟年份：${state.simYear} / 目标 ${SIM_END}
- 13 区县合计模拟人口：约 ${round1(MODEL.reduce((s, m) => s + state.districts[m.id].pop, 0))} 万
- 时间相位：全城昼夜节律同步（phase 0~24）

## 各区实时脉搏（人口万 / 繁荣 / 能量 / 情绪）
| 区县 | 人口(万) | 繁荣 | 能量 | 情绪 |
|---|---|---|---|---|
${rows}

## 最近涌现的城市事件
${feed || '-（暂无）'}

## 说明
- **人口**：按城市总规趋势从 2026 现实值线性插值逼近 2076 目标，带轻微噪声。
- **繁荣/能量/情绪**：有界随机游走（0~100），模拟镜像宇宙的自组织波动。
- **状态同步**：游戏运行时读取 \`src/content/scenes/hangzhou.state.js\` 的 \`HZ_STATE\`，即可把上述脉搏映射到星图光柱高度、中枢亮度与全息屏文案，实现「地图数据自动刷新 → 状态同步」。
`;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--init')) {
    const s = initState();
    await writeFile(STATE_PATH, buildStateFile(s), 'utf8');
    await writeFile(STATUS_PATH, buildStatus(s, []), 'utf8');
    console.log('  ✓ 已重置杭州镜像宇宙状态到 2026 基线');
    return;
  }
  const step = (() => {
    const i = args.indexOf('--step');
    return i >= 0 && args[i + 1] ? Number(args[i + 1]) || STEP_DEFAULT : STEP_DEFAULT;
  })();
  const state = await readState();
  const before = state.simYear;
  const events = advance(state, step);
  await writeFile(STATE_PATH, buildStateFile(state), 'utf8');
  await writeFile(STATUS_PATH, buildStatus(state, events), 'utf8');
  console.log(`  ✓ 杭州镜像宇宙推进：${before} → ${state.simYear}（第 ${state.tick} 次心跳）`);
  console.log('    本轮事件：');
  events.forEach((e) => console.log(`      · 【${e.year}】${e.text}`));
}

main().catch((e) => { console.error('  ✗ 演化失败:', e.message); process.exit(1); });
