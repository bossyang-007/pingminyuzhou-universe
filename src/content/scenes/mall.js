// 场景分包 · 商场（纯数据）
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'mall',
  name: '商场',
  sky: '#cdd6dd',
  ground: '#cfd6dc',
  fog: 0.012,
  spawn: [0, 0, 7],
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [16, 0.1, 12], color: '#c4ccd3' },
    { type: 'box', pos: [0, 3, -5], size: [14, 6, 0.5], color: '#dfe6ec' },
    { type: 'box', pos: [-4, 1.4, -4], size: [3, 2.8, 1], color: '#e7a9b8', emissive: '#ffd0dc' },
    { type: 'box', pos: [0, 1.4, -4], size: [3, 2.8, 1], color: '#a9c8e7', emissive: '#cfe6ff' },
    { type: 'box', pos: [4, 1.4, -4], size: [3, 2.8, 1], color: '#b8e0a9', emissive: '#d6f5c8' },
    { type: 'box', pos: [0, 1.6, 2], size: [2.4, 0.4, 1.2], color: '#b9a06a' },
  ],
  spots: [
    {
      id: 'clothes', label: '服饰店', pos: [-4, 0, -4], radius: 2.6,
      intro: '新品上新，模特笑得很自信。',
      event: {
        title: '逛服饰店',
        desc: '那件外套好像在等你。',
        choices: [
          { label: '买下它', hint: '金钱-120 快乐+6 声望+2', effect: { money: -120, happy: 6, reputation: 2 } },
          { label: '试穿拍照', hint: '快乐+3 社交+2', effect: { happy: 3, social: 2 } },
        ],
      },
    },
    {
      id: 'foodcourt', label: '美食层', pos: [0, 0, 2], radius: 2.6,
      intro: '各国味道在此交汇。',
      event: {
        title: '美食层巡视',
        desc: '选择困难症发作。',
        choices: [
          { label: '犒劳自己', hint: '金钱-50 快乐+5', effect: { money: -50, happy: 5 } },
          { label: '只喝杯奶茶', hint: '金钱-18 快乐+3', effect: { money: -18, happy: 3 } },
        ],
      },
    },
    {
      id: 'atrium', label: '中庭', pos: [4, 0, 2], radius: 2.6,
      intro: '中庭在办小展览。',
      event: {
        title: '中庭展览',
        desc: '一幅画让你驻足良久。',
        choices: [
          { label: '认真欣赏', hint: '知识+4 快乐+2', effect: { knowledge: 4, happy: 2 } },
          { label: '打卡拍照', hint: '社交+3', effect: { social: 3 } },
        ],
      },
    },
  ],
});
