// 场景分包 · 写字楼（纯数据）
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'office',
  name: '写字楼',
  meta: { author: '平民宇宙核心团队', style: '都市办公', note: '六大基础场景之一，打工人的日常' },
  sky: '#9fb3c4',
  ground: '#8c98a3',
  fog: 0.014,
  spawn: [0, 0, 5],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [14, 0.1, 12], color: '#9aa6b0' },
    { type: 'box', pos: [0, 2.5, -6], size: [12, 5, 0.4], color: '#33414d', emissive: '#1c2b3a' },
    { type: 'box', pos: [-3, 0.6, 0], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
    { type: 'box', pos: [0, 0.6, 1], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
    { type: 'box', pos: [3, 0.6, 0], size: [2.4, 1.2, 1.4], color: '#c9d2da' },
    { type: 'box', pos: [-3, 1.1, 0], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
    { type: 'box', pos: [0, 1.1, 1], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
    { type: 'box', pos: [3, 1.1, 0], size: [1, 0.6, 0.1], color: '#10151a', emissive: '#39d0ff' },
    { type: 'cyl', pos: [5, 1.5, 4], size: [0.4, 3], color: '#5b6b76' },
  ],
  spots: [
    {
      id: 'cubicle', label: '工位', pos: [0, 0, 1], radius: 2.4,
      intro: '屏幕亮着，待办清单还有三页。',
      event: {
        title: '工位上的抉择',
        desc: '临近下班，最后一项任务要不要现在收尾？',
        choices: [
          { label: '加班搞定', hint: '声望+4 精力-4', effect: { reputation: 4, energy: -4 } },
          { label: '明天再说', hint: '快乐+3 声望-2', effect: { happy: 3, reputation: -2 } },
        ],
      },
    },
    {
      id: 'pantry', label: '茶水间', pos: [5, 0, 4], radius: 2.2,
      intro: '咖啡机咕噜咕噜。',
      event: {
        title: '茶水间闲聊',
        desc: '同事递来一杯咖啡，聊起周末的安排。',
        choices: [
          { label: '加入八卦', hint: '社交+4 快乐+2', effect: { social: 4, happy: 2 } },
          { label: '安静喝完', hint: '精力+3', effect: { energy: 3 } },
        ],
      },
    },
    {
      id: 'meeting', label: '会议室', pos: [-5, 0, -3], radius: 2.6,
      intro: '白板上写满了箭头。',
      event: {
        title: '突发会议',
        desc: '老板临时拉会，要你提一个方案。',
        choices: [
          { label: '主动发言', hint: '声望+5 知识-1', effect: { reputation: 5, knowledge: -1 } },
          { label: '默默记录', hint: '知识+3', effect: { knowledge: 3 } },
        ],
      },
    },
  ],
});
