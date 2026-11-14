// 场景分包 · 夜市（纯数据）
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'nightmarket',
  name: '夜市',
  meta: { author: '平民宇宙核心团队', style: '夜晚集市', note: '六大基础场景之一，烟火气最浓的地方' },
  sky: '#2a2233',
  ground: '#3a2f3f',
  fog: 0.02,
  spawn: [0, 0, 7],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [18, 0.1, 8], color: '#2f2633' },
    { type: 'box', pos: [-4, 1, -2], size: [3, 2, 1.6], color: '#b5472f', emissive: '#ff7a3d' },
    { type: 'box', pos: [0, 1, -2], size: [3, 2, 1.6], color: '#2f7d6b', emissive: '#3df0c8' },
    { type: 'box', pos: [4, 1, -2], size: [3, 2, 1.6], color: '#7a4fb0', emissive: '#c08bff' },
    { type: 'sphere', pos: [-4, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
    { type: 'sphere', pos: [0, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
    { type: 'sphere', pos: [4, 3, -2], size: [0.4], color: '#ffd166', emissive: '#ffb347' },
    { type: 'cyl', pos: [2, 0.6, 2], size: [0.5, 1.2], color: '#caa06a' },
  ],
  spots: [
    {
      id: 'food', label: '小吃摊', pos: [-4, 0, -2], radius: 2.6,
      intro: '烤串的烟直往鼻子里钻。',
      event: {
        title: '夜市觅食',
        desc: '肚子和钱包开始谈判。',
        choices: [
          { label: '放开吃', hint: '金钱-40 快乐+6 健康-2', effect: { money: -40, happy: 6, health: -2 } },
          { label: '浅尝辄止', hint: '金钱-15 快乐+3', effect: { money: -15, happy: 3 } },
        ],
      },
    },
    {
      id: 'game', label: '游戏摊', pos: [0, 0, -2], radius: 2.6,
      intro: '套圈摊主冲你挤眼睛。',
      event: {
        title: '游戏摊挑战',
        desc: '十块钱三个圈，奖品是一只瓷猪。',
        choices: [
          { label: '试试手气', hint: '金钱-10 快乐+5', effect: { money: -10, happy: 5 } },
          { label: '看看就好', hint: '快乐+1', effect: { happy: 1 } },
        ],
      },
    },
    {
      id: 'craft', label: '手作摊', pos: [4, 0, -2], radius: 2.6,
      intro: '摊主在串一颗星。',
      event: {
        title: '手作小物',
        desc: '你被一枚木质书签吸引。',
        choices: [
          { label: '买下留念', hint: '金钱-20 快乐+4', effect: { money: -20, happy: 4 } },
          { label: '聊聊天', hint: '社交+4 知识+1', effect: { social: 4, knowledge: 1 } },
        ],
      },
    },
  ],
});
