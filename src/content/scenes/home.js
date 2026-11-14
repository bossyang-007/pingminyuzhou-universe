// 场景分包 · 温馨小家（纯数据，引擎据此生成 3D 与玩法）
// 字段见 src/content/schema.md
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'home',
  name: '温馨小家',
  meta: { author: '平民宇宙核心团队', style: '居家治愈', note: '六大基础场景之一，普通人的小窝' },
  sky: '#c9b79a',
  ground: '#b98c5a',
  fog: 0.01,
  spawn: [0, 0, 4],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [11, 0.1, 11], color: '#a87c4e' },
    { type: 'box', pos: [-3.4, 0.6, -3], size: [3, 1.2, 1.4], color: '#6b8e9e' },
    { type: 'box', pos: [2.4, 0.5, 1.2], size: [2, 1, 1.2], color: '#8a6f4a' },
    { type: 'box', pos: [0, 1.7, -5.2], size: [3.4, 1.8, 0.2], color: '#10151a', emissive: '#2b6cff' },
    { type: 'box', pos: [3.6, 0.4, -3.4], size: [2.6, 0.8, 1.8], color: '#7d6a8a' },
    { type: 'cyl', pos: [-4.6, 0.4, 3], size: [0.5, 0.8], color: '#b5642f' },
    { type: 'sphere', pos: [-4.6, 1.3, 3], size: [0.9], color: '#4a8c4a' },
    { type: 'box', pos: [4.8, 1.1, 3.2], size: [1.4, 2.2, 0.5], color: '#caa06a' },
  ],
  spots: [
    {
      id: 'kitchen', label: '厨房', pos: [3.6, 0, -3.4], radius: 2.4,
      intro: '锅铲碰撞，香味钻进鼻子。',
      event: {
        title: '在厨房折腾一顿饭',
        desc: '你决定给自己做点好吃的，哪怕只是泡面升级版。',
        choices: [
          { label: '认真做饭', hint: '快乐+4 健康+3', effect: { happy: 4, health: 3 } },
          { label: '点外卖算了', hint: '金钱-30 精力+3', effect: { money: -30, energy: 3 } },
        ],
      },
    },
    {
      id: 'desk', label: '书桌', pos: [4.8, 0, 3.2], radius: 2.2,
      intro: '台灯下摊着没看完的书。',
      event: {
        title: '深夜书桌',
        desc: '世界安静下来，只剩翻书声。',
        choices: [
          { label: '读一小时书', hint: '知识+4 精力-2', effect: { knowledge: 4, energy: -2 } },
          { label: '刷手机', hint: '快乐+2 知识-1', effect: { happy: 2, knowledge: -1 } },
        ],
      },
    },
    {
      id: 'balcony', label: '阳台', pos: [0, 0, 5], radius: 2.4,
      intro: '风把窗帘吹得鼓起来。',
      event: {
        title: '阳台发呆',
        desc: '楼下的猫在打架，远处的霓虹一闪一闪。',
        choices: [
          { label: '深呼吸放空', hint: '精力+5 快乐+2', effect: { energy: 5, happy: 2 } },
          { label: '计划明天', hint: '声望+2', effect: { reputation: 2 } },
        ],
      },
    },
  ],
});
