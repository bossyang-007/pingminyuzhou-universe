// 场景分包 · 临安区（纯数据）· 与现实临安区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_linan',
  name: '临安区 · 科创生态山地城',
  meta: { author: '平民宇宙·杭州共创', style: '科创 + 生态碳汇', note: '与现实临安区一一映射' },
  sky: '#aed3e8',
  ground: '#6fa257',
  fog: 0.015,
  spawn: [0, 0, 5],
  geo: { lat: 30.23, lng: 119.72, areaKm2: 3119, realPop: 65.7, realGdp: 900, anchorsReal: ['天目山', '青山湖', '城西科创走廊西端', '吴越国文化'] },
  real: { pop: 65.7, gdp: 900, summary: '城西科创新城·美丽幸福临安，山城相依、生态屏障。' },
  future: {
    year: 2076, vision:
      '「科创 + 生态」山地未来城：天目山成为国家级碳汇大脑，青山湖是零碳数据中心的水冷家园，科创人群隐居在云和林之间。',
    anchors: ['天目山·碳汇大脑', '青山湖·零碳数谷', '吴越文化带'], tags: ['碳汇', '零碳数谷'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#5f8f4f' },
    { type: 'cone', pos: [-3, 2.2, -2], size: [3, 4.4], color: '#5f8f5a' },                     // 天目山
    { type: 'box', pos: [0, 0.1, -4], size: [3, 0.2, 10], color: '#3a7fb0', emissive: '#2b9cff' }, // 青山湖
    { type: 'box', pos: [3.5, 1.3, 1], size: [2.4, 2.6, 2], color: '#aeb8c2', emissive: '#7fdcff' }, // 科创园
    { type: 'cyl', pos: [4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'tianmu', label: '天目山', pos: [-3, 0, -2], radius: 2.8,
      intro: '古银杏的影子铺满石阶。',
      event: {
        title: '接入碳汇大脑',
        desc: '你把手贴在一棵千年银杏上，全山的碳呼吸在眼前汇成一条发光的数据河。',
        choices: [
          { label: '认购一吨碳汇', hint: '声望+5 金钱-30', effect: { reputation: 5, money: -30 } },
          { label: '只是吸氧', hint: '健康+5 精力+3', effect: { health: 5, energy: 3 } },
        ],
      },
    },
    {
      id: 'lake', label: '青山湖', pos: [0, 0, -4], radius: 2.8,
      intro: '水上森林泡在镜面般的水里。',
      event: {
        title: '参观零碳数谷',
        desc: '湖底的数据中心用水冷安静运转，为全城镜像宇宙供能。',
        choices: [
          { label: '看一眼算力', hint: '知识+3', effect: { knowledge: 3 } },
          { label: '划一程皮艇', hint: '健康+3 快乐+2', effect: { health: 3, happy: 2 } },
        ],
      },
    },
  ],
});
