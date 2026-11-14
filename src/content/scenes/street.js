// 场景分包 · 街角（纯数据）
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'street',
  name: '街角',
  meta: { author: '平民宇宙核心团队', style: '市井烟火', note: '六大基础场景之一，城市毛细血管' },
  sky: '#aebfc9',
  ground: '#6f7a82',
  fog: 0.016,
  spawn: [0, 0, 6],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [16, 0.1, 10], color: '#5d6970' },
    { type: 'box', pos: [0, 0.1, 0], size: [16, 0.02, 1.2], color: '#d8d2c4' },
    { type: 'cyl', pos: [-5, 2.5, -3], size: [0.3, 5], color: '#3c4650' },
    { type: 'sphere', pos: [-5, 5.1, -3], size: [0.5], color: '#ffe9a8', emissive: '#ffd166' },
    { type: 'box', pos: [5, 1.2, -3], size: [3, 2.4, 2], color: '#c46a4a' },
    { type: 'box', pos: [5, 2.6, -3], size: [3.2, 0.6, 2.2], color: '#a8543a', emissive: '#ffb347' },
    { type: 'box', pos: [-2, 0.5, 2], size: [2.4, 1, 0.8], color: '#7a8a92' },
    { type: 'cyl', pos: [2, 0.6, -1], size: [0.6, 1.2], color: '#9aa6ad' },
  ],
  spots: [
    {
      id: 'store', label: '便利店', pos: [5, 0, -3], radius: 2.6,
      intro: '关东煮的热气糊了玻璃。',
      event: {
        title: '便利店补给',
        desc: '夜班前的能量补给站。',
        choices: [
          { label: '买份便当', hint: '金钱-25 健康+3', effect: { money: -25, health: 3 } },
          { label: '只买饮料', hint: '金钱-8 快乐+1', effect: { money: -8, happy: 1 } },
        ],
      },
    },
    {
      id: 'busstop', label: '公交站', pos: [-5, 0, 3], radius: 2.6,
      intro: '末班车还有七分钟。',
      event: {
        title: '等车的陌生人',
        desc: '旁边的人也在看手机，你们相视一笑。',
        choices: [
          { label: '主动搭话', hint: '社交+3', effect: { social: 3 } },
          { label: '保持距离', hint: '精力+1', effect: { energy: 1 } },
        ],
      },
    },
    {
      id: 'busker', label: '街头艺人', pos: [2, 0, 2], radius: 2.4,
      intro: '吉他声把整条街都暖了。',
      event: {
        title: '为才华驻足',
        desc: '你听入迷，口袋里的零钱蠢蠢欲动。',
        choices: [
          { label: '投币支持', hint: '金钱-10 快乐+4', effect: { money: -10, happy: 4 } },
          { label: '鼓掌离开', hint: '快乐+2', effect: { happy: 2 } },
        ],
      },
    },
  ],
});
