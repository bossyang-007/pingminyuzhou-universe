// 场景分包 · 公园（纯数据）
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'park',
  name: '公园',
  meta: { author: '平民宇宙核心团队', style: '自然治愈', note: '六大基础场景之一，松弛感的来源' },
  sky: '#aed3e8',
  ground: '#7fae6a',
  fog: 0.012,
  spawn: [0, 0, 6],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [18, 0.1, 14], color: '#6fa257' },
    { type: 'cyl', pos: [-4, 1.5, -3], size: [0.4, 3], color: '#6b4a2f' },
    { type: 'sphere', pos: [-4, 3.4, -3], size: [1.8], color: '#3f7d3f' },
    { type: 'cyl', pos: [4, 1.5, -2], size: [0.4, 3], color: '#6b4a2f' },
    { type: 'sphere', pos: [4, 3.4, -2], size: [1.8], color: '#3f7d3f' },
    { type: 'box', pos: [0, 0.4, 0], size: [3, 0.8, 1], color: '#9a7b4f' },
    { type: 'cyl', pos: [6, 0.1, 4], size: [3, 0.2], color: '#5b8fb0' },
    { type: 'box', pos: [-6, 0.5, 4], size: [1.2, 1, 1.2], color: '#b9a06a' },
  ],
  spots: [
    {
      id: 'bench', label: '长椅', pos: [0, 0, 0], radius: 2.4,
      intro: '老人遛狗经过，狗对你摇尾巴。',
      event: {
        title: '公园长椅',
        desc: '阳光正好，适合发一会儿呆。',
        choices: [
          { label: '晒晒太阳', hint: '健康+4 快乐+3', effect: { health: 4, happy: 3 } },
          { label: '喂喂鸽子', hint: '快乐+3 社交+1', effect: { happy: 3, social: 1 } },
        ],
      },
    },
    {
      id: 'lake', label: '湖边', pos: [6, 0, 4], radius: 3,
      intro: '水面把云朵揉碎了。',
      event: {
        title: '湖边沉思',
        desc: '你想起好久没联系的朋友。',
        choices: [
          { label: '发条消息', hint: '社交+5', effect: { social: 5 } },
          { label: '写篇日记', hint: '知识+2 快乐+2', effect: { knowledge: 2, happy: 2 } },
        ],
      },
    },
    {
      id: 'gym', label: '健身角', pos: [-6, 0, 4], radius: 2.4,
      intro: '单杠上还留着上个人的温度。',
      event: {
        title: '公园健身',
        desc: '身体是革命的本钱。',
        choices: [
          { label: '拉伸一组', hint: '健康+5 精力-2', effect: { health: 5, energy: -2 } },
          { label: '慢跑两圈', hint: '健康+6 精力-3', effect: { health: 6, energy: -3 } },
        ],
      },
    },
  ],
});
