// 场景分包 · 西湖区（纯数据）· 与现实西湖区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_xihu',
  name: '西湖区 · 绿心数字孪生',
  meta: { author: '平民宇宙·杭州共创', style: '世界遗产 + 生态脑', note: '与现实西湖区一一映射' },
  sky: '#aed3e8',
  ground: '#6fa257',
  fog: 0.013,
  spawn: [0, 0, 5],
  geo: { lat: 30.26, lng: 120.13, areaKm2: 312, realPop: 118.0, realGdp: 2000, anchorsReal: ['西湖', '西溪湿地', '龙坞茶村', '浙江大学'] },
  real: { pop: 118.0, gdp: 2000, summary: '拥江揽湖核心区，西湖与西溪双世界/国家湿地资源，科教文化高地。' },
  future: {
    year: 2076, vision:
      '西湖与西溪构成「城市绿心数字孪生」：无人机观光与生态脑联动，龙坞茶村成为零碳度假社区，每一棵古树都有链上身份。',
    anchors: ['西湖·生态脑', '西溪·碳汇湿地', '龙坞·零碳茶村'], tags: ['生态', '零碳'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#5f8f4f' },
    { type: 'box', pos: [0, 0.1, -3], size: [6, 0.2, 4], color: '#3a7fb0', emissive: '#2b9cff' }, // 西湖水面
    { type: 'cone', pos: [-4, 1.4, 2], size: [2.2, 2.8], color: '#6f8f6a' },                     // 远山
    { type: 'box', pos: [4, 1.2, 2], size: [2, 2.4, 2], color: '#caa06a', emissive: '#ffd166' },   // 雷峰塔意象
    { type: 'cyl', pos: [3.5, 1.0, -2], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [3.5, 2.2, -2], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'lake', label: '西湖', pos: [0, 0, -3], radius: 2.8,
      intro: '断桥残雪、三潭印月，水波里映着整座城的呼吸。',
      event: {
        title: '租一艘无人观光舟',
        desc: '生态脑为你规划了一条「负碳航线」，沿途古树用链上身份向你问好。',
        choices: [
          { label: '巡湖一圈', hint: '快乐+5 精力+3', effect: { happy: 5, energy: 3 } },
          { label: '认养一棵古树', hint: '声望+4 社交+1', effect: { reputation: 4, social: 1 } },
        ],
      },
    },
    {
      id: 'xixi', label: '西溪湿地', pos: [4, 0, 2], radius: 2.4,
      intro: '芦苇深处，白鹭起落如呼吸。',
      event: {
        title: '进入碳汇湿地',
        desc: '你踩着浮桥，脚下的每一步都在为城市贡献碳汇积分。',
        choices: [
          { label: '做一天湿地守护者', hint: '健康+4 声望+2', effect: { health: 4, reputation: 2 } },
          { label: '拍段生态纪录片', hint: '社交+3 知识+1', effect: { social: 3, knowledge: 1 } },
        ],
      },
    },
  ],
});
