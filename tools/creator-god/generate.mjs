// 创始神 · AI 内容生成工具
// 用法：
//   node tools/creator-god/generate.mjs "海边灯塔小镇，宁静治愈"   → 生成场景分包并聚合到 src/content/scenes/
//   node tools/creator-god/generate.mjs --check                  → 校验现有场景是否符合 schema
//
// 默认用「主题库 + 模板」离线生成，开箱即用；
// 若设置环境变量 LLM_ENDPOINT / LLM_API_KEY，则调用大模型生成更丰富的地图描述（失败自动回退模板）。
// 生成的场景写入 src/content/scenes/<id>.js，并自动调用 sync-scenes 聚合到 index.js（零冲突）。
//
// ───────────────────────────────────────────────────────────────────────────
//  进化蓝图（每一次进化都强于上一版，方向清晰、可落地）
//  ───────────────────────────────────────────────────────────────────────────
//  v1（基线，已上线）：主题无关的通用模板——3 个固定互动点 + 套话文案 + 粗糙几何道具。
//      痛点：千篇一律、细节不足、互动雷同、可操作性弱。
//  v2（本轮落地）：【主题化生成】
//      改进点：① 每个主题独立调色板与天空/地面/雾；② 主题专属道具（霓虹/树木/机械臂…）；
//              ③ 每主题 5 个专属互动点，每轮随机取 4 个 → 同主题复用时也不重样；
//              ④ 互动点带主题文案 + 2~3 个覆盖不同属性的选项（健康/快乐/精力/知识/社交/声望/金钱）；
//              ⑤ 写入 meta（作者=创始神、风格、v2 标记）→ 体验更专业、可追溯。
//      预期效果：地图"长得不一样、玩得不一样、看得懂"，复用旧主题也不再雷同。
//  v3（下一阶段，待实现）：【更深互动】
//      改进点：① 引入"隐藏点"（小半径、偏僻位，需探索才触发奖励）；② 选项带连锁后果
//              （二段选择）；③ 互动点增加 repeatable/需前置属性（如 money>0 才能交易）；
//              ④ 每主题 7 个互动点池，随机取 5 → 复玩性再升。
//      预期效果：探索有惊喜、选择有代价，单场景可玩时长翻倍。
//  v4（后续）：【叙事与美术】
//      改进点：① 默认走 LLM 生成主题专属一句话氛围叙事 + 落地 groundTex/art 占位；
//              ② 跨场景 NPC/任务链雏形（event 引用其他场景 id）；③ 接入杭州心跳状态，
//              把 HZ_STATE 现实数据注入镜像街区。
//      预期效果：每个场景有"故事"、有"视觉资产入口"、与现实联动。
//  ───────────────────────────────────────────────────────────────────────────
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { syncScenes } from '../sync-scenes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const SCENES_DIR = join(ROOT, 'src', 'content', 'scenes');
const SCENES_INDEX = join(SCENES_DIR, 'index.js');

const GEN_VERSION = 2; // 本版生成器版本，写入 meta.note 以便追溯进化

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9一-龥]+/g, '_').replace(/^_|_$/g, '').slice(0, 24) || 'map';
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ── 调色板（按氛围分类，替代旧版单一随机）────────────────────────────────────
const PALETTES = {
  night:  { sky: '#241d2e', ground: '#342a3a' },
  sea:    { sky: '#1b6ca8', ground: '#0f4c75' },
  green:  { sky: '#aed3e8', ground: '#6fa257' },
  warm:   { sky: '#c9b79a', ground: '#b98c5a' },
  city:   { sky: '#aab8c4', ground: '#9aa6b0' },
  cold:   { sky: '#cfe6f2', ground: '#e8f0f5' },
  space:  { sky: '#0b0b1a', ground: '#15152a' },
  dusk:   { sky: '#d98c6a', ground: '#8a5a3c' },
  mist:   { sky: '#c8d4dc', ground: '#9fb0b8' },
  sand:   { sky: '#e8c98a', ground: '#d9b06a' },
  digital:{ sky: '#0d1b2a', ground: '#1b263b' },
};

// ── 主题库：每个主题独立调色板 + 专属道具 + 5 个专属互动点 ─────────────────────
// 字段同 src/content/schema.md；互动点 effect 覆盖健康/快乐/精力/知识/社交/声望/金钱。
const THEME_LIB = {
  '赛博地下城': {
    cat: '赛博', pal: 'night', fog: 0.02,
    props: [
      { type: 'box', pos: [-5, 2, -6], size: [2, 4, 2], color: '#2b2f45', emissive: '#ff2bd6' },
      { type: 'box', pos: [5, 1.6, -6], size: [2, 3.2, 2], color: '#2b2f45', emissive: '#2bffea' },
      { type: 'cyl', pos: [0, 3, -9], size: [0.3, 6], color: '#555a7a' },
      { type: 'sphere', pos: [0, 6.4, -9], size: [0.5], color: '#ff2bd6', emissive: '#ff2bd6' },
      { type: 'box', pos: [-2, 0.6, 2], size: [1.6, 1.2, 1.2], color: '#3a3f5c', emissive: '#39d0ff' },
      { type: 'box', pos: [3, 0.5, 3], size: [1.2, 1, 1], color: '#444a66' },
    ],
    spots: [
      { id: 'hack', label: '黑客终端', pos: [-3, 0, 1], radius: 2.4,
        intro: '一台没人管的老终端还亮着，光标一闪一闪。',
        event: { title: '潜入数据残骸', desc: '你试着从废弃节点里扒点有用的东西。', choices: [
          { label: '破解防火墙', hint: '知识+5 精力-3', effect: { knowledge: 5, energy: -3 } },
          { label: '顺手拷贝资料', hint: '知识+3 声望-2', effect: { knowledge: 3, reputation: -2 } },
        ] } },
      { id: 'bar', label: '霓虹酒馆', pos: [3, 0, 1], radius: 2.6,
        intro: '合成酒精的味道混着电流声。',
        event: { title: '霓虹下的闲谈', desc: '酒保是个话痨，知道不少地下消息。', choices: [
          { label: '请他喝一杯', hint: '社交+5 金钱-20', effect: { social: 5, money: -20 } },
          { label: '打听情报', hint: '知识+3 社交+2', effect: { knowledge: 3, social: 2 } },
        ] } },
      { id: 'clinic', label: '义体诊所', pos: [0, 0, -4], radius: 2.6,
        intro: '冷光手术台上还有未擦净的机油。',
        event: { title: '临时义体维护', desc: '你的关节在报警，得修一修。', choices: [
          { label: '全面保养', hint: '健康+6 金钱-40', effect: { health: 6, money: -40 } },
          { label: '随便缝两针', hint: '健康+3 精力-2', effect: { health: 3, energy: -2 } },
        ] } },
      { id: 'deal', label: '黑市摊', pos: [-5, 0, 3], radius: 2.6,
        intro: '摊主用三只眼睛打量你。',
        event: { title: '地下交易', desc: '明码标价，童叟无欺（大概）。', choices: [
          { label: '淘件装备', hint: '金钱-60 健康+2', effect: { money: -60, health: 2 } },
          { label: '只砍价不买', hint: '社交+2 快乐+1', effect: { social: 2, happy: 1 } },
        ] } },
      { id: 'roof', label: '天台', pos: [5, 0, 4], radius: 3,
        intro: '城市在脚下流淌成一条光河。',
        event: { title: '天台发呆', desc: '高处风大，脑子反而清醒。', choices: [
          { label: '吹风放空', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
          { label: '记一笔账', hint: '知识+2 声望+1', effect: { knowledge: 2, reputation: 1 } },
        ] } },
    ],
  },
  '云端图书馆': {
    cat: '空灵', pal: 'mist', fog: 0.016,
    props: [
      { type: 'box', pos: [0, 1.5, -7], size: [8, 3, 1], color: '#e8eef2' },
      { type: 'box', pos: [-3, 1.5, -5], size: [2, 3, 1.2], color: '#d6e0e8' },
      { type: 'box', pos: [3, 1.5, -5], size: [2, 3, 1.2], color: '#d6e0e8' },
      { type: 'cyl', pos: [0, 2, 0], size: [0.3, 4], color: '#b8c4cc' },
      { type: 'sphere', pos: [0, 4.2, 0], size: [0.6], color: '#ffe9a8', emissive: '#ffd166' },
      { type: 'box', pos: [4, 0.5, 3], size: [1.4, 1, 1.2], color: '#c9b79a' },
    ],
    spots: [
      { id: 'read', label: '悬浮书岛', pos: [-3, 0, 1], radius: 2.6,
        intro: '书页自己翻动，像有看不见的手。',
        event: { title: '沉浸式阅读', desc: '你陷进一张会发光的阅读椅。', choices: [
          { label: '读一上午', hint: '知识+6 精力-2', effect: { knowledge: 6, energy: -2 } },
          { label: '速览目录', hint: '知识+3', effect: { knowledge: 3 } },
        ] } },
      { id: 'archive', label: '记忆档案', pos: [3, 0, 1], radius: 2.6,
        intro: '玻璃球里封存着陌生人的回忆。',
        event: { title: '翻阅记忆', desc: '别人的人生在你眼前快进。', choices: [
          { label: '认真共情', hint: '社交+4 快乐+2', effect: { social: 4, happy: 2 } },
          { label: '当作故事', hint: '知识+2', effect: { knowledge: 2 } },
        ] } },
      { id: 'tea', label: '云顶茶座', pos: [0, 0, -4], radius: 2.4,
        intro: '茶香从雾里飘出来。',
        event: { title: '喝口热茶', desc: '温度刚好，肩膀松了下来。', choices: [
          { label: '慢慢品', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
          { label: '边喝边写', hint: '知识+3 快乐+1', effect: { knowledge: 3, happy: 1 } },
        ] } },
      { id: 'quiz', label: '问答水晶', pos: [-5, 0, 3], radius: 2.6,
        intro: '水晶用老人的声音提问。',
        event: { title: '知识问答', desc: '答对有奖，答错……也长见识。', choices: [
          { label: '认真作答', hint: '知识+4 声望+2', effect: { knowledge: 4, reputation: 2 } },
          { label: '蒙一个', hint: '知识+1 快乐+1', effect: { knowledge: 1, happy: 1 } },
        ] } },
      { id: 'balcony', label: '观云台', pos: [5, 0, 4], radius: 3,
        intro: '云在脚下而不是头上。',
        event: { title: '凭栏远眺', desc: '世界安静得只剩风。', choices: [
          { label: '放空冥想', hint: '精力+4 快乐+3', effect: { energy: 4, happy: 3 } },
          { label: '拍张照', hint: '社交+3', effect: { social: 3 } },
        ] } },
    ],
  },
  '海底城市': {
    cat: '深海', pal: 'sea', fog: 0.03,
    props: [
      { type: 'sphere', pos: [0, 2, -7], size: [2.4], color: '#1f8fb0', emissive: '#2bd6ff' },
      { type: 'cyl', pos: [-4, 1.5, -4], size: [0.5, 3], color: '#0d6b86' },
      { type: 'box', pos: [4, 1.2, -4], size: [2.4, 2.4, 2], color: '#0e7d99', emissive: '#1bd0ff' },
      { type: 'cone', pos: [2, 1, 2], size: [1.2, 2], color: '#0c5f78' },
      { type: 'sphere', pos: [-3, 0.6, 3], size: [0.5], color: '#aef0ff', emissive: '#aef0ff' },
      { type: 'box', pos: [0, 0.3, 4], size: [3, 0.6, 1.4], color: '#0a4f66' },
    ],
    spots: [
      { id: 'coral', label: '珊瑚园', pos: [-3, 0, 1], radius: 2.6,
        intro: '荧光珊瑚随暗流摆动。',
        event: { title: '珊瑚养护', desc: '你帮小丑鱼整理了下家园。', choices: [
          { label: '仔细照料', hint: '快乐+4 知识+2', effect: { happy: 4, knowledge: 2 } },
          { label: '喂喂鱼群', hint: '快乐+3 社交+1', effect: { happy: 3, social: 1 } },
        ] } },
      { id: 'wreck', label: '沉船', pos: [3, 0, 1], radius: 2.6,
        intro: '锈蚀的船舱里似乎有反光。',
        event: { title: '沉船探宝', desc: '你钻进幽暗的货舱。', choices: [
          { label: '撬开宝箱', hint: '金钱+80 精力-4', effect: { money: 80, energy: -4 } },
          { label: '只拍照留念', hint: '知识+2 社交+2', effect: { knowledge: 2, social: 2 } },
        ] } },
      { id: 'dome', label: '观景穹顶', pos: [0, 0, -4], radius: 2.6,
        intro: '巨大玻璃罩外是游过的鲸影。',
        event: { title: '穹顶发呆', desc: '鲸歌低频震着胸口。', choices: [
          { label: '静坐聆听', hint: '精力+5 快乐+3', effect: { energy: 5, happy: 3 } },
          { label: '记录声纹', hint: '知识+3', effect: { knowledge: 3 } },
        ] } },
      { id: 'market', label: '海沟集市', pos: [-5, 0, 3], radius: 2.6,
        intro: '章鱼商贩用触手比划价格。',
        event: { title: '深海交易', desc: '这里的货币是会发光的珍珠。', choices: [
          { label: '买珍珠', hint: '金钱-30 快乐+2', effect: { money: -30, happy: 2 } },
          { label: '帮工换货', hint: '社交+4 精力-2', effect: { social: 4, energy: -2 } },
        ] } },
      { id: 'spring', label: '热泉口', pos: [5, 0, 4], radius: 2.8,
        intro: '黑烟囱喷着温热的矿浆。',
        event: { title: '热泉泡汤', desc: '矿物质温泉，泡着很解乏。', choices: [
          { label: '泡一会儿', hint: '健康+5 精力+3', effect: { health: 5, energy: 3 } },
          { label: '采点矿石', hint: '金钱+40 精力-2', effect: { money: 40, energy: -2 } },
        ] } },
    ],
  },
  '废弃游乐园': {
    cat: '废土', pal: 'dusk', fog: 0.022,
    props: [
      { type: 'cyl', pos: [0, 3, -7], size: [0.4, 6], color: '#7a5a3a' },
      { type: 'box', pos: [0, 6.4, -7], size: [3, 0.4, 0.4], color: '#8a6a4a' },
      { type: 'cone', pos: [0, 6.7, -7], size: [1.6, 1.4], color: '#b5533a', emissive: '#ffb347' },
      { type: 'box', pos: [-4, 0.8, -3], size: [3, 1.6, 1.4], color: '#6b5a4a' },
      { type: 'sphere', pos: [4, 1, 2], size: [1], color: '#9a8a6a', emissive: '#ffd166' },
      { type: 'box', pos: [2, 0.4, 3], size: [2, 0.8, 1], color: '#7a6a4a' },
    ],
    spots: [
      { id: 'ferris', label: '生锈摩天轮', pos: [0, 0, -4], radius: 3,
        intro: '车厢在风里吱呀作响，像在叹气。',
        event: { title: '坐上摩天轮', desc: '最高处能看见整个被遗忘的园区。', choices: [
          { label: '慢慢转一圈', hint: '快乐+4 精力-2', effect: { happy: 4, energy: -2 } },
          { label: '在顶舱发呆', hint: '精力+3 快乐+2', effect: { energy: 3, happy: 2 } },
        ] } },
      { id: 'hall', label: '鬼屋入口', pos: [-4, 0, 1], radius: 2.6,
        intro: '半开的门后黑得发甜。',
        event: { title: '胆量测试', desc: '你决定进去看一眼。', choices: [
          { label: '硬着头皮进', hint: '快乐+3 声望+2', effect: { happy: 3, reputation: 2 } },
          { label: '门口张望', hint: '知识+1', effect: { knowledge: 1 } },
        ] } },
      { id: 'stage', label: '废弃舞台', pos: [4, 0, 1], radius: 2.6,
        intro: '话筒线拖在地上，还能通电。',
        event: { title: '即兴表演', desc: '没有观众，但你唱得很尽兴。', choices: [
          { label: '放声唱', hint: '快乐+5 社交+1', effect: { happy: 5, social: 1 } },
          { label: '录下来', hint: '社交+3 知识+1', effect: { social: 3, knowledge: 1 } },
        ] } },
      { id: 'booth', label: '旧摊位', pos: [-5, 0, 3], radius: 2.6,
        intro: '摊板下压着一张褪色奖券。',
        event: { title: '淘宝摊位', desc: '你翻了翻蒙尘的杂物。', choices: [
          { label: '捡漏', hint: '金钱+50 快乐+1', effect: { money: 50, happy: 1 } },
          { label: '只怀旧', hint: '快乐+2', effect: { happy: 2 } },
        ] } },
      { id: 'lake', label: '干涸喷池', pos: [5, 0, 4], radius: 2.8,
        intro: '池底裂着缝，长出自发光的苔藓。',
        event: { title: '池边小坐', desc: '寂静里反而听得见自己。', choices: [
          { label: '静坐放空', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
          { label: '收集苔藓', hint: '知识+2', effect: { knowledge: 2 } },
        ] } },
    ],
  },
  '沙漠绿洲驿站': {
    cat: '荒漠', pal: 'sand', fog: 0.018,
    props: [
      { type: 'cyl', pos: [-3, 2, -5], size: [0.4, 4], color: '#7a5a3a' },
      { type: 'sphere', pos: [-3, 4.4, -5], size: [1.8], color: '#3f7d3f' },
      { type: 'box', pos: [3, 1, -4], size: [2.4, 2, 2], color: '#c9a86a' },
      { type: 'cone', pos: [0, 1.2, -7], size: [2, 2.4], color: '#d9b06a' },
      { type: 'sphere', pos: [4, 0.6, 2], size: [0.5], color: '#ffe9a8', emissive: '#ffd166' },
      { type: 'box', pos: [-4, 0.4, 3], size: [1.4, 0.8, 1.2], color: '#a88a5a' },
    ],
    spots: [
      { id: 'well', label: '清泉井', pos: [0, 0, -3], radius: 2.6,
        intro: '井水凉得能照见星星。',
        event: { title: '痛饮清泉', desc: '一路风沙，这口水解了渴也解了乏。', choices: [
          { label: '大口喝', hint: '健康+5 精力+3', effect: { health: 5, energy: 3 } },
          { label: '装满水壶', hint: '精力+2', effect: { energy: 2 } },
        ] } },
      { id: 'tent', label: '商队帐篷', pos: [-4, 0, 1], radius: 2.6,
        intro: '骆驼在帐外嚼着草。',
        event: { title: '商队夜话', desc: '老向导讲起沙海另一头的城。', choices: [
          { label: '听故事', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
          { label: '换点补给', hint: '金钱-25 健康+2', effect: { money: -25, health: 2 } },
        ] } },
      { id: 'market', label: '香料摊', pos: [4, 0, 1], radius: 2.6,
        intro: '孜然与玫瑰的混合味扑面。',
        event: { title: '香料交易', desc: '一捧藏红花能换不少钱。', choices: [
          { label: '倒卖获利', hint: '金钱+60 声望-1', effect: { money: 60, reputation: -1 } },
          { label: '买来下厨', hint: '金钱-20 快乐+3', effect: { money: -20, happy: 3 } },
        ] } },
      { id: 'dune', label: '沙丘顶', pos: [5, 0, 4], radius: 3,
        intro: '风把沙丘的曲线雕得很慢。',
        event: { title: '沙丘滑沙', desc: '顺着陡坡一路冲下去。', choices: [
          { label: '痛快滑一次', hint: '快乐+5 精力-2', effect: { happy: 5, energy: -2 } },
          { label: '看日落', hint: '精力+3 快乐+3', effect: { energy: 3, happy: 3 } },
        ] } },
      { id: 'shade', label: '棕榈荫', pos: [-5, 0, 4], radius: 2.6,
        intro: '树荫下比太阳下凉十度。',
        event: { title: '树荫小憩', desc: '蝉鸣成了最好的白噪音。', choices: [
          { label: '眯一觉', hint: '精力+6 健康+1', effect: { energy: 6, health: 1 } },
          { label: '写张明信片', hint: '社交+3', effect: { social: 3 } },
        ] } },
    ],
  },
  '蒸汽朋克车站': {
    cat: '蒸汽', pal: 'warm', fog: 0.02,
    props: [
      { type: 'box', pos: [0, 1.5, -7], size: [9, 3, 1.4], color: '#6b5640' },
      { type: 'cyl', pos: [-3, 1.5, -4], size: [0.5, 3], color: '#5a4636', emissive: '#ff8c3a' },
      { type: 'cyl', pos: [3, 1.5, -4], size: [0.5, 3], color: '#5a4636', emissive: '#ff8c3a' },
      { type: 'sphere', pos: [0, 3.6, -7], size: [0.6], color: '#ffb347', emissive: '#ffb347' },
      { type: 'box', pos: [4, 0.6, 2], size: [1.6, 1.2, 1.2], color: '#7a6346' },
      { type: 'cone', pos: [-4, 1, 2], size: [1, 2], color: '#6b5640' },
    ],
    spots: [
      { id: 'train', label: '黄铜列车', pos: [0, 0, -4], radius: 3,
        intro: '锅炉嘶鸣，蒸汽扑上脸。',
        event: { title: '登车出发', desc: '乘务员问你要去哪条时间线。', choices: [
          { label: '买张票', hint: '金钱-35 快乐+4', effect: { money: -35, happy: 4 } },
          { label: '帮司炉加煤', hint: '精力-3 声望+3', effect: { energy: -3, reputation: 3 } },
        ] } },
      { id: 'clock', label: '巨型钟楼', pos: [-4, 0, 1], radius: 2.6,
        intro: '齿轮在玻璃后缓缓咬合。',
        event: { title: '校对手表', desc: '你对上了这座城的节拍。', choices: [
          { label: '认真校准', hint: '知识+3 精力+1', effect: { knowledge: 3, energy: 1 } },
          { label: '听钟声', hint: '快乐+2', effect: { happy: 2 } },
        ] } },
      { id: 'pub', label: '铆钉酒馆', pos: [4, 0, 1], radius: 2.6,
        intro: '机械侍者托着冒泡的铜杯。',
        event: { title: '收尾一杯', desc: '旅人聚在吧台交换见闻。', choices: [
          { label: '请客闲聊', hint: '社交+5 金钱-20', effect: { social: 5, money: -20 } },
          { label: '独酌听故事', hint: '知识+2 快乐+2', effect: { knowledge: 2, happy: 2 } },
        ] } },
      { id: 'shop', label: '零件铺', pos: [-5, 0, 3], radius: 2.6,
        intro: '螺丝、发条、真空管堆成小山。',
        event: { title: '淘零件', desc: '你拼出个能用的小玩意。', choices: [
          { label: '倒卖零件', hint: '金钱+45 知识+1', effect: { money: 45, knowledge: 1 } },
          { label: '亲手改造', hint: '知识+4 精力-2', effect: { knowledge: 4, energy: -2 } },
        ] } },
      { id: 'platform', label: '月台尽头', pos: [5, 0, 4], radius: 3,
        intro: '铁轨没入雾里，不知通向何方。',
        event: { title: '月台发呆', desc: '等待本身成了一种享受。', choices: [
          { label: '看车来车往', hint: '精力+3 快乐+2', effect: { energy: 3, happy: 2 } },
          { label: '写旅行日记', hint: '知识+3 社交+1', effect: { knowledge: 3, social: 1 } },
        ] } },
    ],
  },
  '森林树屋社区': {
    cat: '自然', pal: 'green', fog: 0.014,
    props: [
      { type: 'cyl', pos: [-3, 2, -5], size: [0.5, 4], color: '#6b4a2f' },
      { type: 'sphere', pos: [-3, 4.4, -5], size: [2], color: '#3f7d3f' },
      { type: 'box', pos: [0, 2.4, -4], size: [3, 1.6, 2.4], color: '#9a7b4f' },
      { type: 'cyl', pos: [4, 2, -3], size: [0.5, 4], color: '#6b4a2f' },
      { type: 'sphere', pos: [4, 4.4, -3], size: [1.8], color: '#4f8f4f' },
      { type: 'box', pos: [2, 0.4, 3], size: [2, 0.8, 1], color: '#8a6f4a' },
    ],
    spots: [
      { id: 'treehouse', label: '主树屋', pos: [0, 0, -3], radius: 2.8,
        intro: '绳梯晃悠悠，屋内飘着松木香。',
        event: { title: '树屋茶会', desc: '邻居们邀你一起吃点心。', choices: [
          { label: '欣然加入', hint: '社交+5 快乐+3', effect: { social: 5, happy: 3 } },
          { label: '帮忙布置', hint: '声望+3 精力-2', effect: { reputation: 3, energy: -2 } },
        ] } },
      { id: 'bridge', label: '吊桥', pos: [-4, 0, 1], radius: 2.6,
        intro: '桥板随脚步轻晃，下面是溪。',
        event: { title: '走吊桥', desc: '你一步步踩稳了心跳。', choices: [
          { label: '慢慢走完', hint: '健康+3 快乐+2', effect: { health: 3, happy: 2 } },
          { label: '中途看景', hint: '快乐+3', effect: { happy: 3 } },
        ] } },
      { id: 'garden', label: '空中菜园', pos: [4, 0, 1], radius: 2.6,
        intro: '番茄和薄荷在风里招手。',
        event: { title: '采摘料理', desc: '你现摘现做了一盘沙拉。', choices: [
          { label: '健康餐', hint: '健康+5 快乐+2', effect: { health: 5, happy: 2 } },
          { label: '分给邻居', hint: '社交+4 声望+2', effect: { social: 4, reputation: 2 } },
        ] } },
      { id: 'bird', label: '鸟巢观察点', pos: [-5, 0, 3], radius: 2.6,
        intro: '一只翠鸟正教雏鸟飞。',
        event: { title: '观鸟', desc: '你屏住呼吸看了很久。', choices: [
          { label: '记观察笔记', hint: '知识+4 快乐+1', effect: { knowledge: 4, happy: 1 } },
          { label: '拍下来分享', hint: '社交+3', effect: { social: 3 } },
        ] } },
      { id: 'hammock', label: '吊床', pos: [5, 0, 4], radius: 2.6,
        intro: '两张树之间的吊床等着你。',
        event: { title: '吊床小睡', desc: '风穿过叶隙，像在哄你。', choices: [
          { label: '睡个午觉', hint: '精力+6 健康+1', effect: { energy: 6, health: 1 } },
          { label: '躺着听声', hint: '精力+3 快乐+2', effect: { energy: 3, happy: 2 } },
        ] } },
    ],
  },
  '极地科考站': {
    cat: '极地', pal: 'cold', fog: 0.02,
    props: [
      { type: 'box', pos: [0, 1, -6], size: [5, 2, 3], color: '#dfeaf2', emissive: '#aee0ff' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#b8c8d4' },
      { type: 'sphere', pos: [-4, 3.4, -3], size: [1.4], color: '#e8f4fa' },
      { type: 'cone', pos: [4, 1.2, -3], size: [1.4, 2.4], color: '#cfe0ea' },
      { type: 'box', pos: [3, 0.5, 3], size: [1.4, 1, 1.2], color: '#9ab0c0' },
      { type: 'box', pos: [-3, 0.3, 4], size: [1.2, 0.6, 1], color: '#aec4d2' },
    ],
    spots: [
      { id: 'lab', label: '实验舱', pos: [0, 0, -3], radius: 2.8,
        intro: '冰芯样本在冷光里泛蓝。',
        event: { title: '数据分析', desc: '你对着屏幕解读万年冰层。', choices: [
          { label: '深挖论文', hint: '知识+6 精力-2', effect: { knowledge: 6, energy: -2 } },
          { label: '记录日志', hint: '知识+3 声望+1', effect: { knowledge: 3, reputation: 1 } },
        ] } },
      { id: 'aurora', label: '极光观测台', pos: [-4, 0, 1], radius: 3,
        intro: '头顶的绿光像在呼吸。',
        event: { title: '守候极光', desc: '你等了三小时，值了。', choices: [
          { label: '静静欣赏', hint: '快乐+5 精力-2', effect: { happy: 5, energy: -2 } },
          { label: '拍延时', hint: '社交+3 知识+1', effect: { social: 3, knowledge: 1 } },
        ] } },
      { id: 'sled', label: '雪橇房', pos: [4, 0, 1], radius: 2.6,
        intro: '哈士奇们集体看你。',
        event: { title: '雪橇训练', desc: '你学着给狗队下令。', choices: [
          { label: '带狗出巡', hint: '健康+4 快乐+3', effect: { health: 4, happy: 3 } },
          { label: '喂狗互动', hint: '社交+3 快乐+1', effect: { social: 3, happy: 1 } },
        ] } },
      { id: 'radio', label: '通讯塔', pos: [-5, 0, 3], radius: 2.6,
        intro: '电波穿越冰原，连向世界。',
        event: { title: '呼叫基地', desc: '你给家人发了条平安信。', choices: [
          { label: '报平安', hint: '社交+5 快乐+2', effect: { social: 5, happy: 2 } },
          { label: '传回数据', hint: '声望+4 知识+1', effect: { reputation: 4, knowledge: 1 } },
        ] } },
      { id: 'sauna', label: '暖房', pos: [5, 0, 4], radius: 2.6,
        intro: '零下三十度外，这里是天堂。',
        event: { title: '蒸个暖房', desc: '冷热交替，浑身通透。', choices: [
          { label: '好好放松', hint: '健康+5 精力+3', effect: { health: 5, energy: 3 } },
          { label: '顺便搓澡', hint: '健康+3 快乐+1', effect: { health: 3, happy: 1 } },
        ] } },
    ],
  },
  '古风集市': {
    cat: '古风', pal: 'warm', fog: 0.016,
    props: [
      { type: 'box', pos: [0, 1.2, -6], size: [7, 2.4, 1.4], color: '#a8503a' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#6b4a2f' },
      { type: 'sphere', pos: [-4, 3.4, -3], size: [1.6], color: '#3f7d3f' },
      { type: 'box', pos: [4, 0.6, 1], size: [2, 1.2, 1.4], color: '#c9a86a' },
      { type: 'cone', pos: [2, 1, 3], size: [1.2, 2], color: '#b5533a' },
      { type: 'box', pos: [-3, 0.4, 4], size: [1.4, 0.8, 1.2], color: '#8a6f4a' },
    ],
    spots: [
      { id: 'tea', label: '茶寮', pos: [0, 0, -3], radius: 2.8,
        intro: '幡旗写着"一盏知春秋"。',
        event: { title: '品茗听书', desc: '说书人正讲到紧要处。', choices: [
          { label: '听得入迷', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
          { label: '与邻客对弈', hint: '知识+3 社交+2', effect: { knowledge: 3, social: 2 } },
        ] } },
      { id: 'lantern', label: '花灯铺', pos: [-4, 0, 1], radius: 2.6,
        intro: '兔子灯晃着暖黄的光。',
        event: { title: '猜灯谜', desc: '你盯着谜面皱起眉。', choices: [
          { label: '猜中谜底', hint: '知识+3 快乐+2', effect: { knowledge: 3, happy: 2 } },
          { label: '买盏灯', hint: '金钱-15 快乐+2', effect: { money: -15, happy: 2 } },
        ] } },
      { id: 'food', label: '小吃摊', pos: [4, 0, 1], radius: 2.6,
        intro: '糖画与臭豆腐齐飞。',
        event: { title: '市井觅食', desc: '烟火气最抚凡人心。', choices: [
          { label: '大快朵颐', hint: '快乐+4 健康+2', effect: { happy: 4, health: 2 } },
          { label: '请摊主吃', hint: '社交+4 金钱-20', effect: { social: 4, money: -20 } },
        ] } },
      { id: 'craft', label: '铁匠铺', pos: [-5, 0, 3], radius: 2.6,
        intro: '叮当声里火星四溅。',
        event: { title: '打一把小刀', desc: '你抡起锤，像模像样。', choices: [
          { label: '认真学艺', hint: '知识+3 精力-2', effect: { knowledge: 3, energy: -2 } },
          { label: '买现成的', hint: '金钱-30 声望+1', effect: { money: -30, reputation: 1 } },
        ] } },
      { id: 'bridge', label: '石桥', pos: [5, 0, 4], radius: 3,
        intro: '桥下水巷摇着乌篷船。',
        event: { title: '桥上发呆', desc: '桨声灯影里，时间慢了。', choices: [
          { label: '看船来船往', hint: '精力+3 快乐+3', effect: { energy: 3, happy: 3 } },
          { label: '题句诗', hint: '知识+2 声望+2', effect: { knowledge: 2, reputation: 2 } },
        ] } },
    ],
  },
  '太空港口': {
    cat: '太空', pal: 'space', fog: 0.025,
    props: [
      { type: 'box', pos: [0, 1.5, -7], size: [10, 3, 1.6], color: '#1f2540', emissive: '#39d0ff' },
      { type: 'cyl', pos: [-5, 2, -4], size: [0.6, 4], color: '#33405e' },
      { type: 'sphere', pos: [-5, 4.4, -4], size: [1.4], color: '#9fd6ff', emissive: '#39d0ff' },
      { type: 'cone', pos: [5, 1.2, -4], size: [1.4, 2.4], color: '#2a3358', emissive: '#ff9bd0' },
      { type: 'box', pos: [3, 0.6, 3], size: [1.6, 1.2, 1.2], color: '#2a3358' },
      { type: 'sphere', pos: [-3, 1, 2], size: [0.6], color: '#ffe9a8', emissive: '#ffd166' },
    ],
    spots: [
      { id: 'dock', label: '泊位控制台', pos: [0, 0, -4], radius: 3,
        intro: '屏幕滚动着各星系的到港时刻。',
        event: { title: '调度飞船', desc: '你指挥一艘货船安全入港。', choices: [
          { label: '精准调度', hint: '声望+5 知识+2', effect: { reputation: 5, knowledge: 2 } },
          { label: '随便放行', hint: '快乐+2 声望-2', effect: { happy: 2, reputation: -2 } },
        ] } },
      { id: 'shop', label: '星际商栈', pos: [-4, 0, 1], radius: 2.6,
        intro: '玻璃罐里漂着会发光的矿石。',
        event: { title: '外星交易', desc: '用地球特产换点稀罕物。', choices: [
          { label: '精明议价', hint: '金钱+70 知识+1', effect: { money: 70, knowledge: 1 } },
          { label: '换纪念品', hint: '金钱-40 快乐+3', effect: { money: -40, happy: 3 } },
        ] } },
      { id: 'window', label: '观星窗', pos: [4, 0, 1], radius: 2.6,
        intro: '整面墙是星海，地球只是颗蓝点。',
        event: { title: '凝视星海', desc: '在尺度面前，烦恼变小了。', choices: [
          { label: '静静看', hint: '精力+4 快乐+3', effect: { energy: 4, happy: 3 } },
          { label: '画下来', hint: '知识+2 社交+1', effect: { knowledge: 2, social: 1 } },
        ] } },
      { id: 'bar', label: '失重酒吧', pos: [-5, 0, 3], radius: 2.6,
        intro: '酒球悬浮着，被吸管追。',
        event: { title: '船员夜话', desc: '各星球的故事撞在一起。', choices: [
          { label: '请客聊嗨', hint: '社交+5 金钱-25', effect: { social: 5, money: -25 } },
          { label: '安静听', hint: '知识+3 快乐+1', effect: { knowledge: 3, happy: 1 } },
        ] } },
      { id: 'sim', label: '训练舱', pos: [5, 0, 4], radius: 2.6,
        intro: '模拟驾驶舱等你上手。',
        event: { title: '模拟飞行', desc: '你过了一次星际航道考核。', choices: [
          { label: '全力通关', hint: '知识+4 精力-3', effect: { knowledge: 4, energy: -3 } },
          { label: '热身练习', hint: '精力-1 知识+2', effect: { energy: -1, knowledge: 2 } },
        ] } },
    ],
  },
  '悬浮寺庙': {
    cat: '空灵', pal: 'mist', fog: 0.018,
    props: [
      { type: 'box', pos: [0, 1.5, -6], size: [6, 3, 2], color: '#e6ddcf', emissive: '#ffe9c8' },
      { type: 'cyl', pos: [-3, 1.2, -3], size: [0.3, 2.4], color: '#b8a98a' },
      { type: 'cone', pos: [-3, 2.8, -3], size: [1, 1.2], color: '#c0392b' },
      { type: 'cyl', pos: [3, 1.2, -3], size: [0.3, 2.4], color: '#b8a98a' },
      { type: 'cone', pos: [3, 2.8, -3], size: [1, 1.2], color: '#c0392b' },
      { type: 'sphere', pos: [0, 4, -6], size: [0.6], color: '#ffd166', emissive: '#ffd166' },
    ],
    spots: [
      { id: 'hall', label: '大殿', pos: [0, 0, -3], radius: 2.8,
        intro: '香雾缭绕，钟声很远。',
        event: { title: '殿内静修', desc: '你跟着僧侣念了一段经。', choices: [
          { label: '诚心礼佛', hint: '精力+4 快乐+3', effect: { energy: 4, happy: 3 } },
          { label: '抄一份经', hint: '知识+3 声望+1', effect: { knowledge: 3, reputation: 1 } },
        ] } },
      { id: 'bell', label: '钟楼', pos: [-4, 0, 1], radius: 2.6,
        intro: '铜钟等你撞响。',
        event: { title: '撞钟祈福', desc: '一声钟响，山谷回荡。', choices: [
          { label: '用力撞', hint: '快乐+4 声望+2', effect: { happy: 4, reputation: 2 } },
          { label: '轻叩三下', hint: '精力+2 快乐+1', effect: { energy: 2, happy: 1 } },
        ] } },
      { id: 'spring', label: '心泉', pos: [4, 0, 1], radius: 2.6,
        intro: '泉眼冒着温热的雾。',
        event: { title: '掬泉净手', desc: '冷水激得人清醒。', choices: [
          { label: '净手静心', hint: '精力+3 健康+2', effect: { energy: 3, health: 2 } },
          { label: '饮一口', hint: '健康+3', effect: { health: 3 } },
        ] } },
      { id: 'garden', label: '枯山水', pos: [-5, 0, 3], radius: 2.6,
        intro: '白砂上的纹路像水波。',
        event: { title: '耙砂入定', desc: '你一下下理着砂纹。', choices: [
          { label: '慢慢耙', hint: '精力+4 快乐+2', effect: { energy: 4, happy: 2 } },
          { label: '赏其形', hint: '知识+2', effect: { knowledge: 2 } },
        ] } },
      { id: 'cliff', label: '崖边台', pos: [5, 0, 4], radius: 3,
        intro: '脚下是翻涌的云海。',
        event: { title: '崖边打坐', desc: '风从万丈下升上来。', choices: [
          { label: '坐忘片刻', hint: '精力+5 快乐+3', effect: { energy: 5, happy: 3 } },
          { label: '望远方', hint: '知识+1 快乐+2', effect: { knowledge: 1, happy: 2 } },
        ] } },
    ],
  },
  '地下黑市': {
    cat: '暗市', pal: 'night', fog: 0.026,
    props: [
      { type: 'box', pos: [0, 1.4, -6], size: [8, 2.8, 1.6], color: '#2a2330', emissive: '#ff8c3a' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.3, 3], color: '#4a3f4a' },
      { type: 'sphere', pos: [-4, 3.2, -3], size: [1], color: '#ff8c3a', emissive: '#ff8c3a' },
      { type: 'box', pos: [4, 0.8, 1], size: [2, 1.6, 1.4], color: '#332b38' },
      { type: 'cone', pos: [2, 1, 3], size: [1, 2], color: '#3a3038' },
      { type: 'box', pos: [-3, 0.4, 4], size: [1.4, 0.8, 1.2], color: '#4a3f4a' },
    ],
    spots: [
      { id: 'info', label: '情报贩子', pos: [0, 0, -3], radius: 2.8,
        intro: '帽檐压得很低，只露一双眼睛。',
        event: { title: '买情报', desc: '一条消息可能值一座城。', choices: [
          { label: '重金购密', hint: '金钱-50 知识+4', effect: { money: -50, knowledge: 4 } },
          { label: '以物易讯', hint: '社交+3 声望-1', effect: { social: 3, reputation: -1 } },
        ] } },
      { id: 'forge', label: '地下军火', pos: [-4, 0, 1], radius: 2.6,
        intro: '枪油味混着汗味。',
        event: { title: '淘装备', desc: '你挑了把顺手的。', choices: [
          { label: '武装自己', hint: '金钱-60 声望-2', effect: { money: -60, reputation: -2 } },
          { label: '只看看', hint: '知识+1', effect: { knowledge: 1 } },
        ] } },
      { id: 'food', label: '暗巷食摊', pos: [4, 0, 1], radius: 2.6,
        intro: '不知名肉串滋滋冒油。',
        event: { title: '果腹', desc: '难吃但顶饿。', choices: [
          { label: '管饱一顿', hint: '健康+3 快乐+1', effect: { health: 3, happy: 1 } },
          { label: '请流浪儿', hint: '社交+3 声望+3', effect: { social: 3, reputation: 3 } },
        ] } },
      { id: 'lottery', label: '地下赌档', pos: [-5, 0, 3], radius: 2.6,
        intro: '骰盅起落，呼吸都屏住。',
        event: { title: '小赌怡情', desc: '你押了一注。', choices: [
          { label: '孤注一掷', hint: '金钱+90 快乐+4 健康-2', effect: { money: 90, happy: 4, health: -2 } },
          { label: '见好就收', hint: '金钱+20 快乐+2', effect: { money: 20, happy: 2 } },
        ] } },
      { id: 'shadow', label: '暗角', pos: [5, 0, 4], radius: 2.6,
        intro: '这里没人注意你。',
        event: { title: '隐身片刻', desc: '你需要喘口气。', choices: [
          { label: '闭眼养神', hint: '精力+5', effect: { energy: 5 } },
          { label: '观察众人', hint: '知识+2 社交+1', effect: { knowledge: 2, social: 1 } },
        ] } },
    ],
  },
  '机械花园': {
    cat: '机械', pal: 'green', fog: 0.016,
    props: [
      { type: 'cyl', pos: [-3, 1.5, -5], size: [0.4, 3], color: '#5a8a6a' },
      { type: 'sphere', pos: [-3, 3.4, -5], size: [1.6], color: '#7fd6a0', emissive: '#39ffa0' },
      { type: 'box', pos: [3, 1, -4], size: [2.4, 2, 2], color: '#4a6a5a', emissive: '#39d0a0' },
      { type: 'cone', pos: [0, 1.2, -7], size: [1.6, 2.4], color: '#6a9a7a' },
      { type: 'sphere', pos: [4, 0.6, 2], size: [0.5], color: '#aef0c8', emissive: '#aef0c8' },
      { type: 'box', pos: [-4, 0.4, 3], size: [1.4, 0.8, 1.2], color: '#5a7a6a' },
    ],
    spots: [
      { id: 'garden', label: '自动花圃', pos: [0, 0, -3], radius: 2.8,
        intro: '齿轮玫瑰跟着光照开合。',
        event: { title: '培育机械花', desc: '你调校了它的光合作用模块。', choices: [
          { label: '细心培育', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
          { label: '采朵送人', hint: '社交+4 快乐+1', effect: { social: 4, happy: 1 } },
        ] } },
      { id: 'pond', label: '水银池', pos: [-4, 0, 1], radius: 2.6,
        intro: '液态金属荡着涟漪。',
        event: { title: '池边冥想', desc: '倒影里是个更平静的你。', choices: [
          { label: '静坐', hint: '精力+4 快乐+3', effect: { energy: 4, happy: 3 } },
          { label: '取样研究', hint: '知识+3', effect: { knowledge: 3 } },
        ] } },
      { id: 'bench', label: '藤椅', pos: [4, 0, 1], radius: 2.6,
        intro: '藤蔓是仿生材料，触感温热。',
        event: { title: '花园小坐', desc: '鸟鸣其实是扬声器播放的。', choices: [
          { label: '享受假自然', hint: '快乐+4 精力+2', effect: { happy: 4, energy: 2 } },
          { label: '拆解扬声器', hint: '知识+2 精力-1', effect: { knowledge: 2, energy: -1 } },
        ] } },
      { id: 'lab', label: '培育舱', pos: [-5, 0, 3], radius: 2.6,
        intro: '里面漂着发光的种子。',
        event: { title: '基因调配', desc: '你试着配出会发光的果子。', choices: [
          { label: '大胆实验', hint: '知识+5 精力-2', effect: { knowledge: 5, energy: -2 } },
          { label: '保守培育', hint: '知识+3 健康+1', effect: { knowledge: 3, health: 1 } },
        ] } },
      { id: 'fountain', label: '动力喷泉', pos: [5, 0, 4], radius: 3,
        intro: '蒸汽推动的水柱循环往复。',
        event: { title: '喷泉旁发呆', desc: '节奏让人犯困又安心。', choices: [
          { label: '放空', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
          { label: '测水压', hint: '知识+2', effect: { knowledge: 2 } },
        ] } },
    ],
  },
  '镜面迷宫': {
    cat: '幻镜', pal: 'night', fog: 0.024,
    props: [
      { type: 'box', pos: [0, 1.5, -6], size: [1, 3, 0.2], color: '#cfd8e0', emissive: '#9fd6ff' },
      { type: 'box', pos: [-3, 1.5, -4], size: [0.2, 3, 1], color: '#cfd8e0', emissive: '#9fd6ff' },
      { type: 'box', pos: [3, 1.5, -4], size: [0.2, 3, 1], color: '#cfd8e0', emissive: '#9fd6ff' },
      { type: 'box', pos: [4, 1.5, 1], size: [1, 3, 0.2], color: '#cfd8e0', emissive: '#9fd6ff' },
      { type: 'sphere', pos: [0, 3.2, -6], size: [0.5], color: '#fff', emissive: '#cfe8ff' },
      { type: 'box', pos: [-4, 0.4, 3], size: [1.2, 0.8, 1], color: '#9fb0c0' },
    ],
    spots: [
      { id: 'center', label: '镜心', pos: [0, 0, -3], radius: 2.8,
        intro: '无数个你同时回头看你。',
        event: { title: '凝视镜像', desc: '你分不清哪个是真的自己。', choices: [
          { label: '与镜中对话', hint: '知识+3 快乐+2', effect: { knowledge: 3, happy: 2 } },
          { label: '一笑置之', hint: '快乐+3', effect: { happy: 3 } },
        ] } },
      { id: 'puzzle', label: '谜题镜', pos: [-4, 0, 1], radius: 2.6,
        intro: '镜面浮着一道光做的算式。',
        event: { title: '解镜中谜', desc: '你的大脑开始高速运转。', choices: [
          { label: '解出答案', hint: '知识+5 精力-2', effect: { knowledge: 5, energy: -2 } },
          { label: '撞碎看后', hint: '快乐+2 精力-1', effect: { happy: 2, energy: -1 } },
        ] } },
      { id: 'hall', label: '无尽回廊', pos: [4, 0, 1], radius: 2.6,
        intro: '往前走，尽头还是你。',
        event: { title: '穿越回廊', desc: '你数着脚步找出口。', choices: [
          { label: '冷静寻路', hint: '精力+3 知识+2', effect: { energy: 3, knowledge: 2 } },
          { label: '奔跑宣泄', hint: '健康+3 快乐+2', effect: { health: 3, happy: 2 } },
        ] } },
      { id: 'gift', label: '镜中礼物', pos: [-5, 0, 3], radius: 2.6,
        intro: '某个镜像手里多了个盒子。',
        event: { title: '取镜中物', desc: '你伸手，它竟递了出来。', choices: [
          { label: '收下宝物', hint: '金钱+60 快乐+2', effect: { money: 60, happy: 2 } },
          { label: '礼尚往来', hint: '社交+3 声望+2', effect: { social: 3, reputation: 2 } },
        ] } },
      { id: 'rest', label: '静镜台', pos: [5, 0, 4], radius: 3,
        intro: '一面不反光的黑镜，正好歇脚。',
        event: { title: '镜台小坐', desc: '没有倒影，反而轻松。', choices: [
          { label: '闭眼养神', hint: '精力+5', effect: { energy: 5 } },
          { label: '理妆容', hint: '快乐+2 社交+1', effect: { happy: 2, social: 1 } },
        ] } },
    ],
  },
  '数据神殿': {
    cat: '数字', pal: 'digital', fog: 0.022,
    props: [
      { type: 'box', pos: [0, 2, -7], size: [8, 4, 0.4], color: '#16263a', emissive: '#39d0ff' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#26344a' },
      { type: 'sphere', pos: [-4, 3.4, -3], size: [1.2], color: '#39d0ff', emissive: '#39d0ff' },
      { type: 'cone', pos: [4, 1.2, -3], size: [1.2, 2.4], color: '#1b2b40', emissive: '#2bffea' },
      { type: 'box', pos: [3, 0.6, 3], size: [1.6, 1.2, 1.2], color: '#26344a' },
      { type: 'sphere', pos: [-3, 1, 2], size: [0.6], color: '#ffe9a8', emissive: '#ffd166' },
    ],
    spots: [
      { id: 'core', label: '神殿核心', pos: [0, 0, -4], radius: 3,
        intro: '数据流如星河在穹顶奔流。',
        event: { title: '接入核心', desc: '你向主脑提交了一次查询。', choices: [
          { label: '深度检索', hint: '知识+6 精力-3', effect: { knowledge: 6, energy: -3 } },
          { label: '快速扫一眼', hint: '知识+3', effect: { knowledge: 3 } },
        ] } },
      { id: 'altar', label: '算力祭坛', pos: [-4, 0, 1], radius: 2.6,
        intro: '献祭一点算力，换一份答案。',
        event: { title: '献祭算力', desc: '你用闲时 GPU 换了情报。', choices: [
          { label: '豪掷算力', hint: '知识+5 精力-2', effect: { knowledge: 5, energy: -2 } },
          { label: '量力而行', hint: '知识+2 精力-1', effect: { knowledge: 2, energy: -1 } },
        ] } },
      { id: 'library', label: '云端书库', pos: [4, 0, 1], radius: 2.6,
        intro: '每一本书都是一段代码。',
        event: { title: '研读代码', desc: '你啃下了一份难懂的开源。', choices: [
          { label: '精读并复现', hint: '知识+5 声望+2', effect: { knowledge: 5, reputation: 2 } },
          { label: '抄录要点', hint: '知识+3', effect: { knowledge: 3 } },
        ] } },
      { id: 'node', label: '节点市集', pos: [-5, 0, 3], radius: 2.6,
        intro: '数据包在摊位间被买卖。',
        event: { title: '数据交易', desc: '你卖掉了冗余的备份。', choices: [
          { label: '变现', hint: '金钱+55 声望-1', effect: { money: 55, reputation: -1 } },
          { label: '换资源', hint: '知识+3 社交+1', effect: { knowledge: 3, social: 1 } },
        ] } },
      { id: 'void', label: '静默区', pos: [5, 0, 4], radius: 3,
        intro: '这里没有信号，只有你。',
        event: { title: '断网放空', desc: '难得的不被追踪。', choices: [
          { label: '彻底放空', hint: '精力+5 快乐+3', effect: { energy: 5, happy: 3 } },
          { label: '写私密日记', hint: '知识+2 快乐+1', effect: { knowledge: 2, happy: 1 } },
        ] } },
    ],
  },
  '杭州镜像街区': {
    cat: '都市', pal: 'city', fog: 0.016,
    props: [
      { type: 'box', pos: [0, 1.4, -6], size: [8, 2.8, 1.4], color: '#aab8c4', emissive: '#cfe0ea' },
      { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#9aa6b0' },
      { type: 'sphere', pos: [-4, 3.4, -3], size: [1.4], color: '#7fd6ff', emissive: '#7fd6ff' },
      { type: 'box', pos: [4, 1, -3], size: [2, 2, 2], color: '#b9c2cb', emissive: '#ffd166' },
      { type: 'cone', pos: [2, 1, 3], size: [1, 2], color: '#aab8c4' },
      { type: 'box', pos: [-3, 0.4, 4], size: [1.4, 0.8, 1.2], color: '#9aa6b0' },
    ],
    spots: [
      { id: 'westlake', label: '西湖一隅', pos: [0, 0, -3], radius: 2.8,
        intro: '断桥的影子落在水面上。',
        event: { title: '湖畔漫步', desc: '你沿着苏堤走了半里。', choices: [
          { label: '慢慢走', hint: '精力+3 快乐+3', effect: { energy: 3, happy: 3 } },
          { label: '租船游湖', hint: '金钱-30 快乐+4', effect: { money: -30, happy: 4 } },
        ] } },
      { id: 'coffee', label: '街角咖啡', pos: [-4, 0, 1], radius: 2.6,
        intro: '桂花拿铁香得不像话。',
        event: { title: '咖啡小憩', desc: '你看着窗外车流发呆。', choices: [
          { label: '品一杯', hint: '精力+4 快乐+2', effect: { energy: 4, happy: 2 } },
          { label: '约朋友', hint: '社交+4 金钱-20', effect: { social: 4, money: -20 } },
        ] } },
      { id: 'market', label: '夜市', pos: [4, 0, 1], radius: 2.6,
        intro: '葱包桧儿和定胜糕争香。',
        event: { title: '逛夜市', desc: '烟火气里全是生活。', choices: [
          { label: '吃遍小吃', hint: '快乐+4 健康+2', effect: { happy: 4, health: 2 } },
          { label: '淘小玩意', hint: '金钱-25 社交+2', effect: { money: -25, social: 2 } },
        ] } },
      { id: 'library', label: '城市书房', pos: [-5, 0, 3], radius: 2.6,
        intro: '24 小时书房灯还亮着。',
        event: { title: '书房夜读', desc: '你翻开一本关于这座城的书。', choices: [
          { label: '沉浸阅读', hint: '知识+5 精力-2', effect: { knowledge: 5, energy: -2 } },
          { label: '写读书笔记', hint: '知识+3 社交+1', effect: { knowledge: 3, social: 1 } },
        ] } },
      { id: 'metro', label: '地铁口', pos: [5, 0, 4], radius: 3,
        intro: '通向全城的脉络在你脚下。',
        event: { title: '通勤观察', desc: '你看了会儿人间百态。', choices: [
          { label: '观察众生', hint: '社交+3 知识+1', effect: { social: 3, knowledge: 1 } },
          { label: '规划路线', hint: '知识+2 精力+1', effect: { knowledge: 2, energy: 1 } },
        ] } },
    ],
  },
};

// ── 通用回退：未知主题时，按关键词猜调色板 + 注入主题名的通用互动点 ──────────
function genericBuild(prompt) {
  let palKey = 'warm';
  if (/海|岛|港|船|灯塔|水/.test(prompt)) palKey = 'sea';
  else if (/夜|霓|灯|赛博|黑市|镜|数据/.test(prompt)) palKey = 'night';
  else if (/山|森|公|草|田|园|树/.test(prompt)) palKey = 'green';
  else if (/城|市|商|街|楼|广|港/.test(prompt)) palKey = 'city';
  else if (/沙|漠|驿/.test(prompt)) palKey = 'sand';
  else if (/极|冰|雪|寒/.test(prompt)) palKey = 'cold';
  else if (/空|宇|星|天/.test(prompt)) palKey = 'space';
  else if (/寺|庙|云|雾|仙/.test(prompt)) palKey = 'mist';
  const p = PALETTES[palKey];
  const short = prompt.slice(0, 10) || '神秘地块';
  const props = [
    { type: 'box', pos: [0, 0.05, 0], size: [16, 0.1, 12], color: p.ground },
    { type: 'box', pos: [0, 1.4, -6], size: [4, 2.8, 1.4], color: '#b9b0a0', emissive: '#ffd166' },
    { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4, 3.4, -3], size: [1.6], color: '#3f7d3f' },
    { type: 'box', pos: [4, 0.8, 1], size: [2, 1.6, 1.4], color: '#9a8a6a' },
    { type: 'sphere', pos: [3, 0.6, 3], size: [0.5], color: '#ffe9a8', emissive: '#ffd166' },
  ];
  const mk = (id, label, pos, intro, title, choices) => ({ id, label, pos, radius: 2.6, intro, event: { title, desc: intro, choices } });
  const spots = [
    mk('explore', '探索角落', [0, 0, -4], `你在「${short}」里四处张望，发现了细节。`, '就地探索', [
      { label: '仔细查看', hint: '知识+3 快乐+2', effect: { knowledge: 3, happy: 2 } },
      { label: '随手拍下', hint: '社交+2 快乐+2', effect: { social: 2, happy: 2 } },
    ]),
    mk('rest', '歇脚处', [4, 0, 1], '走累了，正好坐会儿。', '就地歇脚', [
      { label: '闭眼养神', hint: '精力+5', effect: { energy: 5 } },
      { label: '发条动态', hint: '社交+3', effect: { social: 3 } },
    ]),
    mk('trade', '小卖部', [-4, 0, 1], '路边支了个小摊。', '顺便消费', [
      { label: '买点特产', hint: '金钱-25 快乐+3', effect: { money: -25, happy: 3 } },
      { label: '只逛不买', hint: '快乐+1', effect: { happy: 1 } },
    ]),
    mk('view', '观景位', [5, 0, 4], '这里视野不错。', '凭栏远眺', [
      { label: '放空', hint: '精力+3 快乐+2', effect: { energy: 3, happy: 2 } },
      { label: '记一笔', hint: '知识+2', effect: { knowledge: 2 } },
    ]),
  ];
  return { palKey, p, fog: 0.016, props, spots, cat: '通用' };
}

function buildSceneData(prompt) {
  const lib = THEME_LIB[prompt];
  const cfg = lib || genericBuild(prompt);
  // 主题库条目用 pal(键名) 解析调色板；通用回退直接带 p(对象)，两者兼容
  const p = cfg.p || PALETTES[cfg.pal] || PALETTES.warm;
  // 每轮随机取 4 个互动点（主题库 5 选 4）→ 同主题复用时也不重样
  const chosenSpots = shuffle(cfg.spots).slice(0, 4);
  // 道具随机取 5~6 个，增加观感差异
  const chosenProps = shuffle(cfg.props).slice(0, Math.min(cfg.props.length, 6));
  return {
    id: 'god_' + slug(prompt) + '_' + Date.now().toString(36).slice(-4),
    name: prompt.slice(0, 12) || '神秘地块',
    sky: p.sky,
    ground: p.ground,
    fog: cfg.fog != null ? cfg.fog : 0.014,
    spawn: [0, 0, 6],
    props: chosenProps,
    spots: chosenSpots,
    meta: {
      author: '创始神',
      style: (cfg.cat || '通用') + ' · 自动生成',
      note: `v${GEN_VERSION} 主题化生成 · 主题「${prompt}」`,
    },
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
  return json.split('\n').map((l) => '  ' + l).join('\n');
}

// 写场景分包文件，并重新聚合 index.js（避免手改聚合器导致冲突）
async function writeSceneFile(scene) {
  const fname = scene.id + '.js';
  const content =
    `// 场景分包 · ${scene.name}（由创始神 v${GEN_VERSION} 自动生成，纯数据）\n` +
    '// 字段见 src/content/schema.md\n' +
    "import { SCENE_REGISTRY } from './registry.js';\n\n" +
    `SCENE_REGISTRY.push(${toSource(scene)});\n`;
  await writeFile(join(SCENES_DIR, fname), content, 'utf8');
  await syncScenes(); // 重新聚合 index.js
}

async function checkScenes() {
  const mod = await import('file://' + SCENES_INDEX);
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

  console.log(`  ✷ 创始神 v${GEN_VERSION} 正在孕育「${prompt}」...`);
  let scene = buildSceneData(prompt);
  scene = await llmEnrich(prompt, scene);
  await writeSceneFile(scene);
  console.log(`  ✓ 已生成场景分包 src/content/scenes/${scene.id}.js 并聚合到 index.js`);
  console.log(`    id=${scene.id}  name=${scene.name}  props=${scene.props.length}  spots=${scene.spots.length}  style=${scene.meta.style}`);
  console.log('    刷新游戏即可在新场景切换菜单中看到它。');
  await checkScenes(); // 生成后顺带校验
}

main().catch((e) => { console.error('  ✗ 生成失败:', e.message); process.exit(1); });
