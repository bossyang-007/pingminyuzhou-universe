// 场景分包 · 桐庐县（纯数据）· 与现实桐庐县一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_tonglu',
  name: '桐庐县 · 富春江生态智城',
  meta: { author: '平民宇宙·杭州共创', style: '县域共富 + 低空物流', note: '与现实桐庐县一一映射' },
  sky: '#aed3e8',
  ground: '#6fa257',
  fog: 0.014,
  spawn: [0, 0, 5],
  geo: { lat: 29.80, lng: 119.69, areaKm2: 1825, realPop: 46.2, realGdp: 550, anchorsReal: ['富春江', '瑶琳仙境', '美丽乡村', '快递之乡'] },
  real: { pop: 46.2, gdp: 550, summary: '美丽幸福的社会主义现代化示范县，县域共富与生态智城样板。' },
  future: {
    year: 2076, vision:
      '县域共富与低空物流样板：无人机把山货送到城市餐桌，富春江生态智城让每个村子都连入镜像宇宙，瑶琳成地下全息溶洞剧场。',
    anchors: ['低空物流网', '富春江智城', '瑶琳溶洞剧场'], tags: ['共富', '低空物流'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#5f8f4f' },
    { type: 'box', pos: [0, 0.1, -3], size: [5, 0.2, 3], color: '#3a7fb0', emissive: '#2b9cff' }, // 富春江
    { type: 'cone', pos: [-3.5, 1.8, -2], size: [2.4, 3.6], color: '#6f8f6a' },                  // 山
    { type: 'box', pos: [3.5, 1.1, 1], size: [2.4, 2.2, 2], color: '#cbb089' },                   // 美丽乡村
    { type: 'cyl', pos: [4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'river', label: '富春江', pos: [0, 0, -3], radius: 2.8,
      intro: '江雾里，一只物流无人机正掠过水面。',
      event: {
        title: '发一单山货',
        desc: '你用镜像宇宙下单，半小时后台州、上海的餐桌上就会出现桐庐的笋。',
        choices: [
          { label: '开一家云店铺', hint: '金钱+35 社交+2', effect: { money: 35, social: 2 } },
          { label: '看物流飞行', hint: '知识+2 快乐+1', effect: { knowledge: 2, happy: 1 } },
        ],
      },
    },
    {
      id: 'village', label: '美丽乡村', pos: [3.5, 0, 1], radius: 2.4,
      intro: '白墙黛瓦，院里晒着金黄的稻谷。',
      event: {
        title: '住一晚云村民宿',
        desc: '你把现实民宿的钥匙与镜像宇宙的家园绑定，从此有两处「家」。',
        choices: [
          { label: '成为云村民', hint: '社交+4 快乐+2', effect: { social: 4, happy: 2 } },
          { label: '只是歇脚', hint: '精力+4 健康+2', effect: { energy: 4, health: 2 } },
        ],
      },
    },
  ],
});
