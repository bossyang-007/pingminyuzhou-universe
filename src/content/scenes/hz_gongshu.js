// 场景分包 · 拱墅区（纯数据）· 与现实拱墅区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_gongshu',
  name: '拱墅区 · 运河元宇宙长廊',
  meta: { author: '平民宇宙·杭州共创', style: '运河文化 + 水上自动驾驶', note: '与现实拱墅区一一映射' },
  sky: '#a9cbe0',
  ground: '#9fb0a0',
  fog: 0.012,
  spawn: [0, 0, 5],
  geo: { lat: 30.32, lng: 120.15, areaKm2: 119, realPop: 120.1, realGdp: 2500, anchorsReal: ['拱宸桥', '京杭大运河', '运河大剧院', '大运河博物院'] },
  real: { pop: 120.1, gdp: 2500, summary: '京杭大运河杭州段核心，大运河国家文化公园样板，城镇化率 100%。' },
  future: {
    year: 2076, vision:
      '千年运河升级为「运河元宇宙长廊」：水上自动驾驶画舫与空中绿廊并行，拱宸桥化作时空门，连起隋代漕船与 2076 无人货运。',
    anchors: ['拱宸桥·时空门', '运河自动驾驶画舫', '空中绿廊'], tags: ['运河', '零碳交通'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#8fae9a' },
    { type: 'box', pos: [0, 0.1, -4], size: [3, 0.2, 10], color: '#3a6fb0', emissive: '#2b6cff' }, // 运河水面
    { type: 'box', pos: [-3.5, 1.2, -2], size: [4, 2.4, 1], color: '#b08a5a' },                    // 拱宸桥
    { type: 'box', pos: [3.5, 1.6, 1], size: [2.4, 3.2, 1.6], color: '#cbb089', emissive: '#ffd166' }, // 运河大剧院
    { type: 'cyl', pos: [4.6, 1.2, 3.5], size: [0.4, 2.4], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.6, 2.7, 3.5], size: [1.2], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'bridge', label: '拱宸桥', pos: [-3.5, 0, -2], radius: 2.4,
      intro: '桥下涟漪里浮着八百年前的倒影。',
      event: {
        title: '走过时空门',
        desc: '你踏上拱宸桥，桥面投影出隋代漕船、清代码头与 2076 的无人货运船队，三重时间叠在一起。',
        choices: [
          { label: '与古人对话', hint: '知识+4 社交+1', effect: { knowledge: 4, social: 1 } },
          { label: '登自动驾驶画舫', hint: '快乐+3 精力+2', effect: { happy: 3, energy: 2 } },
        ],
      },
    },
    {
      id: 'theatre', label: '运河大剧院', pos: [3.5, 0, 1], radius: 2.4,
      intro: '穹顶正在上演一场关于水的歌剧。',
      event: {
        title: '看一场运河歌剧',
        desc: '全息水幕讲述大运河如何哺育这座城。散场时，你收到一张「运河共居者」数字身份。',
        choices: [
          { label: '加入共居者', hint: '声望+3 社交+2', effect: { reputation: 3, social: 2 } },
          { label: '只是鼓掌', hint: '快乐+2', effect: { happy: 2 } },
        ],
      },
    },
  ],
});
