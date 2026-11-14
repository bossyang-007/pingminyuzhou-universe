// 场景分包 · 钱塘区（纯数据）· 与现实钱塘区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_qiantang',
  name: '钱塘区 · 零碳产业新城',
  meta: { author: '平民宇宙·杭州共创', style: '智能制造 + 产城融合', note: '与现实钱塘区一一映射' },
  sky: '#b6c2d6',
  ground: '#a9a890',
  fog: 0.013,
  spawn: [0, 0, 5],
  geo: { lat: 30.31, lng: 120.42, areaKm2: 531, realPop: 81.0, realGdp: 1500, anchorsReal: ['大江东', '下沙大学城', '制造集群', '杭州湾'] },
  real: { pop: 81.0, gdp: 1500, summary: '杭州湾数字经济与高端制造融合区，产城融合示范区。' },
  future: {
    year: 2076, vision:
      '杭州湾零碳产业新城：数字孪生工厂群自我优化能耗，大学城成为终身学习云，潮起潮落都被用来发电。',
    anchors: ['孪生工厂群', '终身学习云', '潮汐电站'], tags: ['零碳', '孪生工厂'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#9a967e' },
    { type: 'box', pos: [-3, 1.5, -2], size: [4, 3.0, 2.6], color: '#aeb8c2', emissive: '#7fdcff' }, // 孪生工厂
    { type: 'box', pos: [3.5, 1.1, 1], size: [2.6, 2.2, 2], color: '#c9b079' },                      // 大学城
    { type: 'box', pos: [0, 0.1, -4], size: [3, 0.2, 10], color: '#3a6fb0', emissive: '#2b9cff' },    // 杭州湾水面
    { type: 'cyl', pos: [-4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'twin', label: '孪生工厂', pos: [-3, 0, -2], radius: 2.6,
      intro: '厂房外墙是整面能源可视化屏。',
      event: {
        title: '巡视零碳产线',
        desc: '你看著实时碳流：每一件产品都带着「出生即零碳」的链上证书。',
        choices: [
          { label: '优化一能耗参数', hint: '知识+4 声望+2', effect: { knowledge: 4, reputation: 2 } },
          { label: '只是看数据', hint: '知识+1', effect: { knowledge: 1 } },
        ],
      },
    },
    {
      id: 'tide', label: '杭州湾', pos: [0, 0, -4], radius: 2.8,
      intro: '潮水一次次扑上发电护岸。',
      event: {
        title: '看潮汐发电',
        desc: '钱塘潮在 2076 不止壮观，更是一座巨型电池，为整座新城充电。',
        choices: [
          { label: '存一度潮电', hint: '知识+3 金钱+10', effect: { knowledge: 3, money: 10 } },
          { label: '等下一浪', hint: '快乐+2', effect: { happy: 2 } },
        ],
      },
    },
  ],
});
