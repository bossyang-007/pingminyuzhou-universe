// 场景分包 · 临平区（纯数据）· 与现实临平区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_linping',
  name: '临平区 · 智能制造中试都',
  meta: { author: '平民宇宙·杭州共创', style: '智能制造 + 融沪桥头堡', note: '与现实临平区一一映射' },
  sky: '#b6c2d6',
  ground: '#a9a890',
  fog: 0.012,
  spawn: [0, 0, 5],
  geo: { lat: 30.42, lng: 120.30, areaKm2: 286, realPop: 116.0, realGdp: 1200, anchorsReal: ['艺尚小镇', '老板电器', '高铁枢纽', '超山'] },
  real: { pop: 116.0, gdp: 1200, summary: '全省智能制造中心、融沪桥头堡，先进制造与时尚产业并进。' },
  future: {
    year: 2076, vision:
      '长三角智能制造与具身机器人中试之都：每条产线都能在镜像宇宙先跑一万次再落地，超山梅花开成四季零碳花海。',
    anchors: ['机器人中试场', '艺尚·全息时尚', '超山花海'], tags: ['智能制造', '中试'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#9a967e' },
    { type: 'box', pos: [-3, 1.4, -2], size: [3.4, 2.8, 2.4], color: '#aeb8c2', emissive: '#7fdcff' }, // 智能工厂
    { type: 'box', pos: [3.5, 1.2, 1], size: [2.4, 2.4, 2], color: '#c7b0c0', emissive: '#ff9bd0' },    // 艺尚小镇
    { type: 'cone', pos: [4.5, 1.3, -3], size: [1.4, 2.6], color: '#6f8f6a' },                           // 超山
    { type: 'cyl', pos: [-4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'factory', label: '智能工厂', pos: [-3, 0, -2], radius: 2.6,
      intro: '机械臂在空气中画着发光的轨迹。',
      event: {
        title: '在镜像宇宙试产',
        desc: '你戴上一副触觉手套，先在虚拟产线上调试新品；跑通一万次后，真实机器才轻轻启动。',
        choices: [
          { label: '调试一条产线', hint: '知识+5 声望+2', effect: { knowledge: 5, reputation: 2 } },
          { label: '旁观', hint: '知识+2', effect: { knowledge: 2 } },
        ],
      },
    },
    {
      id: 'plum', label: '超山', pos: [4.5, 0, -3], radius: 2.4,
      intro: '梅林四时常开，香气被传感器记成数据。',
      event: {
        title: '漫步零碳花海',
        desc: '超山的梅被做成「嗅觉数据」，远方的亲友也能在镜像宇宙里闻到同一阵香。',
        choices: [
          { label: '寄一缕香给家人', hint: '社交+4 快乐+2', effect: { social: 4, happy: 2 } },
          { label: '静静走', hint: '健康+3 精力+2', effect: { health: 3, energy: 2 } },
        ],
      },
    },
  ],
});
