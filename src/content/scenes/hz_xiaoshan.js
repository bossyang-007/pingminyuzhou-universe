// 场景分包 · 萧山区（纯数据）· 与现实萧山区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_xiaoshan',
  name: '萧山区 · 亚运国际低空港',
  meta: { author: '平民宇宙·杭州共创', style: '会展 + 低空经济', note: '与现实萧山区一一映射' },
  sky: '#bcd0e0',
  ground: '#b0a98a',
  fog: 0.013,
  spawn: [0, 0, 5],
  geo: { lat: 30.18, lng: 120.27, areaKm2: 1170, realPop: 218.4, realGdp: 2600, anchorsReal: ['亚运村', '杭州南站', '湘湖', '萧山国际机场(邻)'] },
  real: { pop: 218.4, gdp: 2600, summary: '杭州人口第一大区，亚运国际城，临空经济与先进制造重镇。' },
  future: {
    year: 2076, vision:
      '全球会展与低空经济枢纽：自动驾驶飞行港昼夜起降，湘湖成为水上会展岛，亚运遗产化作全龄运动元宇宙。',
    anchors: ['飞行港', '湘湖会展岛', '亚运运动元宇宙'], tags: ['低空经济', '临空'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#9a946f' },
    { type: 'box', pos: [-3, 1.6, -2], size: [4, 3.2, 3], color: '#c9b079', emissive: '#ffd166' }, // 亚运村
    { type: 'box', pos: [3.5, 1.0, 1], size: [3, 2.0, 2], color: '#aeb8c2' },                       // 杭州南站
    { type: 'cone', pos: [4.5, 1.6, -3], size: [1.4, 3.2], color: '#9fb6c9', emissive: '#7fdcff' },  // 飞行港塔
    { type: 'cyl', pos: [-4.5, 1.0, 3], size: [0.4, 2.0], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4.5, 2.3, 3], size: [1.0], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'port', label: '低空飞行港', pos: [4.5, 0, -3], radius: 2.4,
      intro: '一架自动驾驶飞行舱正缓缓升空。',
      event: {
        title: '预约一次空中通勤',
        desc: '你坐进飞行舱，城市在脚下展开成电路图。十分钟后，你已站在另一座城的镜像节点。',
        choices: [
          { label: '飞往余杭科创城', hint: '知识+3 精力-1', effect: { knowledge: 3, energy: -1 } },
          { label: '只是看起飞', hint: '快乐+2', effect: { happy: 2 } },
        ],
      },
    },
    {
      id: 'lake', label: '湘湖', pos: [-3, 0, -2], radius: 2.6,
      intro: '水面安静，倒映着会展岛的轮廓。',
      event: {
        title: '登上会展岛',
        desc: '湘湖中央浮起一座零碳会展岛，全球创作者在此展出自己的「人生原型」。',
        choices: [
          { label: '展出我的原型', hint: '声望+4 社交+2', effect: { reputation: 4, social: 2 } },
          { label: '逛展', hint: '快乐+3 知识+1', effect: { happy: 3, knowledge: 1 } },
        ],
      },
    },
  ],
});
