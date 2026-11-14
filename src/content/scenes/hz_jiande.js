// 场景分包 · 建德市（纯数据）· 与现实建德市一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_jiande',
  name: '建德市 · 新安江零碳休闲城',
  meta: { author: '平民宇宙·杭州共创', style: '宜居江城 + 航空联运', note: '与现实建德市一一映射' },
  sky: '#aed3e8',
  ground: '#6fa257',
  fog: 0.014,
  spawn: [0, 0, 5],
  geo: { lat: 29.48, lng: 119.27, areaKm2: 2364, realPop: 44.2, realGdp: 550, anchorsReal: ['新安江', '梅城古镇', '航空小镇', '大慈岩'] },
  real: { pop: 44.2, gdp: 550, summary: '幸福美丽宜居江城、杭州西部绿色增长极、浙西综合交通枢纽。' },
  future: {
    year: 2076, vision:
      '新安江畔零碳休闲与航空联运节点：建德航空小镇成为低空旅游枢纽，新安江的「冬暖夏凉」水温被用作区域空调，梅城重现严州古韵。',
    anchors: ['航空小镇枢纽', '新安江水温空调', '梅城古韵'], tags: ['零碳休闲', '低空旅游'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#5f8f4f' },
    { type: 'box', pos: [0, 0.1, -3], size: [5, 0.2, 3], color: '#3a7fb0', emissive: '#2b9cff' }, // 新安江
    { type: 'box', pos: [-3.5, 1.2, 1], size: [3, 2.4, 2], color: '#b08a5a' },                    // 梅城古镇
    { type: 'cone', pos: [4, 1.6, -2], size: [1.8, 3.2], color: '#6f8f6a' },                       // 大慈岩
    { type: 'cyl', pos: [4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'river', label: '新安江', pos: [0, 0, -3], radius: 2.8,
      intro: '江面晨雾未散，水雾凉得刚好。',
      event: {
        title: '体验水温空调',
        desc: '2076 的新安江把恒定的水温送进全城管网，夏天天然凉爽、冬天天然温暖，零碳。',
        choices: [
          { label: '接一户水温空调', hint: '金钱-20 健康+3', effect: { money: -20, health: 3 } },
          { label: '江边发呆', hint: '快乐+3 精力+2', effect: { happy: 3, energy: 2 } },
        ],
      },
    },
    {
      id: 'air', label: '航空小镇', pos: [4, 0, -2], radius: 2.4,
      intro: '一架观光飞机正滑过草坪。',
      event: {
        title: '预约低空观光',
        desc: '你坐进电动飞机，俯瞰新安江在群山间拐出的那道温柔的弯。',
        choices: [
          { label: '飞一圈', hint: '快乐+5 知识+1', effect: { happy: 5, knowledge: 1 } },
          { label: '看别人飞', hint: '快乐+2', effect: { happy: 2 } },
        ],
      },
    },
  ],
});
