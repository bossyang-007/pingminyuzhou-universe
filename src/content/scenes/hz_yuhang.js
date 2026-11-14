// 场景分包 · 余杭区（纯数据）· 与现实余杭区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_yuhang',
  name: '余杭区 · 文明与算法共生城',
  meta: { author: '平民宇宙·杭州共创', style: '未来科技城 + 良渚文明', note: '与现实余杭区一一映射' },
  sky: '#aed3e8',
  ground: '#7faa6a',
  fog: 0.013,
  spawn: [0, 0, 5],
  geo: { lat: 30.42, lng: 120.20, areaKm2: 940, realPop: 143.8, realGdp: 3600, anchorsReal: ['良渚古城遗址', '未来科技城', '杭州西站', '南湖'] },
  real: { pop: 143.8, gdp: 3600, summary: 'GDP 全市第一，未来科技城与良渚文明双引擎，AI 原生城市样板。' },
  future: {
    year: 2076, vision:
      '「文明与算法共生之城」：良渚博物院升级为文明数据馆，未来科技城成为 AI 原生城市内核，五千年文明与最强算力在同一条街上对话。',
    anchors: ['良渚·文明数据馆', '未来科技城·AI内核', '西站·时空枢纽'], tags: ['AI原生', '文明数据'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#6f9a5a' },
    { type: 'box', pos: [-3.5, 1.3, -2], size: [3.2, 2.6, 2.4], color: '#caa46a', emissive: '#ffd166' }, // 良渚
    { type: 'box', pos: [3.5, 2.0, 1], size: [2.6, 4.0, 2], color: '#b9c2cb', emissive: '#7fdcff' },      // 未来科技城
    { type: 'cone', pos: [4.5, 1.4, -3], size: [1.6, 2.8], color: '#6f8f6a' },                             // 南湖山
    { type: 'cyl', pos: [-4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'liangzhu', label: '良渚古城', pos: [-3.5, 0, -2], radius: 2.6,
      intro: '土墩之下，埋着实证中华五千年文明的密码。',
      event: {
        title: '进入文明数据馆',
        desc: '2076 的良渚把玉器纹样译成可交互的数据诗。你和五千年前的工匠，在同一块屏幕上雕同一道线。',
        choices: [
          { label: '刻一道数据纹', hint: '知识+5 声望+3', effect: { knowledge: 5, reputation: 3 } },
          { label: '静默致敬', hint: '快乐+2 健康+1', effect: { happy: 2, health: 1 } },
        ],
      },
    },
    {
      id: 'tech', label: '未来科技城', pos: [3.5, 0, 1], radius: 2.6,
      intro: '楼群之间浮着无数半透明的协作气泡。',
      event: {
        title: '接入 AI 原生内核',
        desc: '你走进城市最强的算力心脏，这里每秒都在为平民宇宙推演无数种人生可能。',
        choices: [
          { label: '推演我的人生分支', hint: '知识+6 声望+2', effect: { knowledge: 6, reputation: 2 } },
          { label: '只参观', hint: '知识+2', effect: { knowledge: 2 } },
        ],
      },
    },
  ],
});
