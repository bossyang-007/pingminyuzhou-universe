// 场景分包 · 富阳区（纯数据）· 与现实富阳区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_fuyang',
  name: '富阳区 · 富春山居智城',
  meta: { author: '平民宇宙·杭州共创', style: '数字文旅 + 硬科技', note: '与现实富阳区一一映射' },
  sky: '#aed3e8',
  ground: '#6fa257',
  fog: 0.013,
  spawn: [0, 0, 5],
  geo: { lat: 30.05, lng: 119.96, areaKm2: 1821, realPop: 86.4, realGdp: 1200, anchorsReal: ['富春江', '龙门古镇', '银湖新区', '黄公望隐居地'] },
  real: { pop: 86.4, gdp: 1200, summary: '硬科技创新示范区、绿色发展标杆，《富春山居图》实景地。' },
  future: {
    year: 2076, vision:
      '富春山居数字文旅与硬科技双引擎：黄公望的山水被实时重绘成可漫步的全息长卷，银湖新区成为硬科技「隐居于山水间」的花园园区。',
    anchors: ['富春山居长卷', '银湖·花园硬科技', '龙门古镇'], tags: ['数字文旅', '硬科技'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#5f8f4f' },
    { type: 'box', pos: [0, 0.1, -3], size: [5, 0.2, 3], color: '#3a7fb0', emissive: '#2b9cff' }, // 富春江
    { type: 'box', pos: [-3.5, 1.2, 1], size: [3, 2.4, 2], color: '#b08a5a' },                    // 龙门古镇
    { type: 'cone', pos: [4, 1.6, -2], size: [2.2, 3.2], color: '#6f8f6a' },                       // 远山
    { type: 'cyl', pos: [4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'scroll', label: '富春山居长卷', pos: [0, 0, -3], radius: 2.8,
      intro: '一幅会呼吸的山水，随你脚步流动。',
      event: {
        title: '走进全息长卷',
        desc: '黄公望的笔意在眼前铺成可行走的村落。你在画里遇见 700 年前的自己。',
        choices: [
          { label: '题一句诗', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
          { label: '只是漫步', hint: '快乐+3 健康+1', effect: { happy: 3, health: 1 } },
        ],
      },
    },
    {
      id: 'town', label: '龙门古镇', pos: [-3.5, 0, 1], radius: 2.4,
      intro: '孙氏宗祠的砖雕在灯下泛光。',
      event: {
        title: '访千年宗族',
        desc: '古镇把族谱写成可查询的链上记忆，你找到一位同名祖先。',
        choices: [
          { label: '认领家族记忆', hint: '社交+3 声望+1', effect: { social: 3, reputation: 1 } },
          { label: '听一段往事', hint: '知识+2', effect: { knowledge: 2 } },
        ],
      },
    },
  ],
});
