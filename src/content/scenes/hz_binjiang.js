// 场景分包 · 滨江区（纯数据）· 与现实滨江区一一映射
import { SCENE_REGISTRY } from './registry.js';

SCENE_REGISTRY.push({
  id: 'hz_binjiang',
  name: '滨江区 · 具身智能之城',
  meta: { author: '平民宇宙·杭州共创', style: '高科技园区 + 机器人', note: '与现实滨江区一一映射' },
  sky: '#b6c2d6',
  ground: '#9aa6b0',
  fog: 0.012,
  spawn: [0, 0, 5],
  geo: { lat: 30.20, lng: 120.21, areaKm2: 73, realPop: 55.9, realGdp: 2600, anchorsReal: ['奥体中心', '物联网小镇', '高新企业集群', '互联网总部'] },
  real: { pop: 55.9, gdp: 2600, summary: '国家高新区第一方阵，世界一流高科技园区，人口密度与产值极高的产业核心。' },
  future: {
    year: 2076, vision:
      '「具身智能之城」：家用机器人走入千家万户，全息研发云让远程协作像面对面；奥体中心变身人机共演的未来秀场。',
    anchors: ['奥体·人机秀场', '全息研发云', '机器人社区'], tags: ['具身智能', '研发云'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [13, 0.1, 13], color: '#8a96a0' },
    { type: 'box', pos: [-3, 2.2, -2], size: [4, 4.4, 3], color: '#b9c2cb', emissive: '#7fdcff' }, // 奥体
    { type: 'sphere', pos: [-3, 5.2, -2], size: [1.8], color: '#cfe0ef', emissive: '#39c6ff' },
    { type: 'box', pos: [3.5, 1.8, 1], size: [2.6, 3.6, 2], color: '#c7b0c0', emissive: '#ff9bd0' }, // 科技楼
    { type: 'cyl', pos: [4.5, 1.2, 3.5], size: [0.35, 2.4], color: '#6b4a2f' },
    { type: 'sphere', pos: [4.5, 2.7, 3.5], size: [0.8], color: '#4a8c4a' },
  ],
  spots: [
    {
      id: 'arena', label: '奥体中心', pos: [-3, 0, -2], radius: 2.6,
      intro: '穹顶之下，人形机器人正在彩排。',
      event: {
        title: '看人机共演',
        desc: '2076 的奥体秀场里，舞者与机器人同台。你被邀请上台，体验一次「具身增强」的十秒钟。',
        choices: [
          { label: '上台体验', hint: '知识+5 快乐+3', effect: { knowledge: 5, happy: 3 } },
          { label: '在云端协作观看', hint: '社交+3', effect: { social: 3 } },
        ],
      },
    },
    {
      id: 'cloud', label: '全息研发云', pos: [3.5, 0, 1], radius: 2.4,
      intro: '一面悬浮的玻璃墙，数据流像星河。',
      event: {
        title: '接入研发云',
        desc: '你戴上轻量光环，与全球工程师在零延迟的全息空间里改一段代码。',
        choices: [
          { label: '提交一个补丁', hint: '知识+4 声望+2', effect: { knowledge: 4, reputation: 2 } },
          { label: '旁观学习', hint: '知识+2', effect: { knowledge: 2 } },
        ],
      },
    },
  ],
});
