// 场景分包 · 上城区（纯数据）· 与现实上城区一一映射
// 字段见 src/content/schema.md；geo/real/future 为现实—未来平行映射扩展字段。
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_shangcheng',
  name: '上城区 · 宋韵核心',
  meta: { author: '平民宇宙·杭州共创', style: '宋韵 + 数字孪生金融', note: '与现实上城区一一映射' },
  sky: '#bcd4e6',
  ground: '#caa98a',
  fog: 0.012,
  spawn: [0, 0, 5],
  geo: { lat: 30.245, lng: 120.17, areaKm2: 122, realPop: 140.2, realGdp: 3000, anchorsReal: ['德寿宫', '清河坊', '钱江新城', '胡雪岩故居'] },
  real: { pop: 140.2, gdp: 3000, summary: '全市政治文化核心，宋韵文化高地与钱江新城 CBD 并存，城镇化率 100%。' },
  future: {
    year: 2076, vision:
      '德寿宫遗址上叠加 AR 宋韵剧场，清河坊成为全息非遗市集；钱江新城双子塔化作东亚数字金融枢纽，市民可在镜像宇宙中预演职业与财富轨迹。',
    anchors: ['德寿宫·宋韵剧场', '清河坊·全息市集', '钱江新城·数字金融核'], tags: ['宋韵', '孪生金融'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#a87c4e' },
    { type: 'box', pos: [-3, 1.4, -3], size: [3, 2.8, 2], color: '#caa46a', emissive: '#ffd166' }, // 德寿宫
    { type: 'box', pos: [3.4, 1.8, -2], size: [1.2, 3.6, 1.2], color: '#7a6f4a' },                 // 清河坊牌坊
    { type: 'box', pos: [-4.5, 2.4, 2.5], size: [1.6, 4.8, 1.6], color: '#9fb6c9', emissive: '#39c6ff' }, // 钱江新城塔A
    { type: 'box', pos: [-2.8, 2.0, 2.5], size: [1.6, 4.0, 1.6], color: '#9fb6c9', emissive: '#39c6ff' }, // 钱江新城塔B
    { type: 'box', pos: [4.5, 1.0, 3], size: [2.4, 2.0, 1.6], color: '#8a6f4a' },                     // 胡雪岩故居
  ],
  spots: [
    {
      id: 'deshou', label: '德寿宫', pos: [-3, 0, -3], radius: 2.4,
      intro: '南宋皇城的余温还在砖瓦间浮动。',
      event: {
        title: '宋韵沉浸',
        desc: 'AR 幕布在你眼前铺开：八百年前的宫廷乐舞与现代全息投影重叠，你分不清哪边是真实。',
        choices: [
          { label: '学一段宋舞', hint: '快乐+4 知识+2', effect: { happy: 4, knowledge: 2 } },
          { label: '录进人生画廊', hint: '社交+3 声望+1', effect: { social: 3, reputation: 1 } },
        ],
      },
    },
    {
      id: 'cbd', label: '钱江新城', pos: [-4, 0, 2.5], radius: 2.6,
      intro: '双子塔的灯光秀在水面写诗。',
      event: {
        title: '观数字金融灯光秀',
        desc: '2076 年的钱江新城把全城经济数据编成光影交响。你忽然看懂了自己账户里每一笔流向。',
        choices: [
          { label: '投资镜像资产', hint: '金钱+40 知识-1', effect: { money: 40, knowledge: -1 } },
          { label: '只是欣赏', hint: '快乐+3', effect: { happy: 3 } },
        ],
      },
    },
  ],
});
