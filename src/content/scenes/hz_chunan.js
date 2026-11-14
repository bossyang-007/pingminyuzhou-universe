// 场景分包 · 淳安县（纯数据）· 与现实淳安县一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_chunan',
  name: '淳安县 · 千岛湖生态智算湖',
  meta: { author: '平民宇宙·杭州共创', style: '生态屏障 + 智算', note: '与现实淳安县一一映射' },
  sky: '#aed3e8',
  ground: '#5a9a6a',
  fog: 0.016,
  spawn: [0, 0, 5],
  geo: { lat: 29.61, lng: 119.05, areaKm2: 4427, realPop: 31.7, realGdp: 320, anchorsReal: ['千岛湖', '饮用水源保护区', '水下古城', '骑行绿道'] },
  real: { pop: 31.7, gdp: 320, summary: '千岛湖饮用水源保护区，绿水青山就是金山银山践行引领区。' },
  future: {
    year: 2076, vision:
      '全国生态智算湖：千岛湖既是杭州的「水缸」也是「算缸」，湖底清凉的智算中心与水面下的古城记忆共存；生态富民在镜像宇宙里被无限放大。',
    anchors: ['千岛湖智算中心', '水下古城记忆馆', '环湖零碳绿道'], tags: ['生态智算', '水源'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#4f8f5a' },
    { type: 'box', pos: [0, 0.1, -3], size: [7, 0.25, 5], color: '#2f7fb0', emissive: '#2b9cff' }, // 千岛湖
    { type: 'cone', pos: [-3.5, 1.2, 1], size: [1.6, 2.4], color: '#6f8f6a' },                     // 岛
    { type: 'cone', pos: [3.5, 1.0, 1], size: [1.3, 2.0], color: '#6f9f6a' },                       // 岛
    { type: 'cyl', pos: [4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'lake', label: '千岛湖', pos: [0, 0, -3], radius: 3.0,
      intro: '千座岛屿像撒在蓝绸上的绿宝石。',
      event: {
        title: '潜入水下古城',
        desc: '你戴上轻量潜镜，沉入湖底探访被淹的千年古城，它在镜像宇宙里依然完好如初。',
        choices: [
          { label: '带回一段古城记忆', hint: '知识+5 声望+3', effect: { knowledge: 5, reputation: 3 } },
          { label: '只赏湖光', hint: '快乐+4 健康+2', effect: { happy: 4, health: 2 } },
        ],
      },
    },
    {
      id: 'green', label: '零碳绿道', pos: [4.5, 0, 3], radius: 2.4,
      intro: '一道环湖绿道，骑行人像流动的标点。',
      event: {
        title: '环湖骑行',
        desc: '你骑过一座座绿岛，每一步都在为千岛湖的生态保护积分添砖加瓦。',
        choices: [
          { label: '骑完全程', hint: '健康+6 精力-2', effect: { health: 6, energy: -2 } },
          { label: '慢骑拍照', hint: '快乐+3 社交+1', effect: { happy: 3, social: 1 } },
        ],
      },
    },
  ],
});
