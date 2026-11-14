// 场景分包 · 杭州总览·平民宇宙星图（纯数据，引擎据此生成 3D 与玩法）
// 字段见 src/content/schema.md；geo/real/future 为「现实—未来」平行映射扩展字段。
// 本场景把杭州市 13 个区县按真实经纬度投影到一张星图平面（北为 -z），与真实空间一一映射。
import { SCENE_REGISTRY } from './registry.js';

// 13 个区县的真实质心经纬度（约值），投影到 16×16 的星图平面：
//   x = (lng - 119.05) / 1.37 * 16 - 8 ;  z = -(lat - 29.48) / 0.94 * 16 + 8  （北→远处 -z）
const DISTRICTS = [
  { id: 'hz_chunan',     lng: 119.05, lat: 29.61, pop: 31.7,  color: '#5ad9e0' }, // 淳安
  { id: 'hz_jiande',     lng: 119.27, lat: 29.48, pop: 44.2,  color: '#d9a05a' }, // 建德
  { id: 'hz_linan',      lng: 119.72, lat: 30.23, pop: 65.7,  color: '#5a8cd9' }, // 临安
  { id: 'hz_tonglu',     lng: 119.69, lat: 29.80, pop: 46.2,  color: '#7ad95a' }, // 桐庐
  { id: 'hz_fuyang',     lng: 119.96, lat: 30.05, pop: 86.4,  color: '#9ad95a' }, // 富阳
  { id: 'hz_xihu',       lng: 120.13, lat: 30.26, pop: 118.0, color: '#4a9d6a' }, // 西湖
  { id: 'hz_shangcheng', lng: 120.17, lat: 30.245,pop: 140.2, color: '#d98c5a' }, // 上城
  { id: 'hz_gongshu',    lng: 120.15, lat: 30.32, pop: 120.1, color: '#5aa0d9' }, // 拱墅
  { id: 'hz_binjiang',   lng: 120.21, lat: 30.20, pop: 55.9,  color: '#7a6fd0' }, // 滨江
  { id: 'hz_xiaoshan',   lng: 120.27, lat: 30.18, pop: 218.4, color: '#d9c15a' }, // 萧山
  { id: 'hz_qiantang',   lng: 120.42, lat: 30.31, pop: 81.0,  color: '#d95a5a' }, // 钱塘
  { id: 'hz_yuhang',     lng: 120.20, lat: 30.42, pop: 143.8, color: '#d95a8c' }, // 余杭
  { id: 'hz_linping',    lng: 120.30, lat: 30.42, pop: 116.0, color: '#5ad9c1' }, // 临平
];
const projX = (lng) => ((lng - 119.05) / 1.37) * 16 - 8;
const projZ = (lat) => -((lat - 29.48) / 0.94) * 16 + 8;

// 每个区县一支「光柱信标」：高度随常住人口缩放，颜色区分，顶部发光球代表该区数字孪生节点
const beaconProps = DISTRICTS.flatMap((d) => {
  const x = +projX(d.lng).toFixed(2);
  const z = +projZ(d.lat).toFixed(2);
  const h = +(2 + d.pop * 0.06).toFixed(1);
  return [
    { type: 'cyl', pos: [x, h / 2, z], size: [0.35, h], color: d.color, emissive: d.color },
    { type: 'sphere', pos: [x, h + 0.5, z], size: [0.7], color: d.color, emissive: d.color },
  ];
});

SCENE_REGISTRY.push({
  id: 'hangzhou_hub',
  name: '杭州总览 · 平民宇宙星图',
  meta: { author: '平民宇宙·杭州共创', style: '现实—未来平行星图', note: '按真实经纬度投影 13 区县，与真实空间一一映射' },
  sky: '#0e1b2b',
  ground: '#0a1420',
  fog: 0.018,
  spawn: [0, 0, 9],
  geo: { lat: 30.27, lng: 119.96, areaKm2: 16596, realPop: 1270.0, note: '杭州市行政辖区质心（约）' },
  real: {
    pop: 1270.0, gdp: 21800, summary:
      '2025 年末常住人口 1270 万、城镇化率 85.3%；下辖 10 区 2 县 1 县级市，地铁 12 线 516 公里，城市大脑 3.0 建设中。',
  },
  future: {
    year: 2076, vision:
      '全球影响力的世界名城 + AI 原生城市。每个区县都是一座数字孪生节点，平民可在镜像宇宙中预演人生选择；城市中枢（城市大脑演化体）实时调度全城能量、人口与事件流。',
    tags: ['AI原生', '数字孪生', '零碳', '世界名城'],
  },
  props: [
    { type: 'box', pos: [0, 0.05, 0], size: [17, 0.1, 17], color: '#0c1828' },
    // 星图连线底盘：一条贯穿南北的钱塘江光带 + 一条东西大运河光带
    { type: 'box', pos: [0, 0.12, -2], size: [0.3, 0.06, 14], color: '#2b6cff', emissive: '#2b6cff' },
    { type: 'box', pos: [-1, 0.12, 1], size: [11, 0.06, 0.3], color: '#39c6ff', emissive: '#39c6ff' },
    // 城市中枢：城市大脑演化体
    { type: 'cyl', pos: [0, 9, 0], size: [0.9, 18], color: '#9fe8ff', emissive: '#39c6ff' },
    { type: 'sphere', pos: [0, 18.8, 0], size: [1.6], color: '#bff0ff', emissive: '#7fdcff' },
    ...beaconProps,
  ],
  spots: [
    {
      id: 'core', label: '城市中枢', pos: [0, 0, 0], radius: 3.2,
      intro: '城市大脑演化体悬浮在星图正中，十三道光柱向它汇流。',
      event: {
        title: '接入城市中枢',
        desc: '你把手按在光核上，全城十三区的实时脉搏在眼前展开：人口、能量、情绪、事件流……你正站在 2076 年的杭州镜像中枢。',
        choices: [
          { label: '读取全城脉搏', hint: '知识+5 声望+3', effect: { knowledge: 5, reputation: 3 } },
          { label: '选择一个区县深入', hint: '在场景菜单切换到具体区县', effect: { social: 2 } },
        ],
      },
    },
    {
      id: 'map', label: '星图说明', pos: [6, 0, 6], radius: 3.2,
      intro: '脚下的光点按真实经纬度排布，北在远处，每柱高度=常住人口。',
      event: {
        title: '平行映射星图',
        desc: '这张星图与现实杭州一一对应：北面的余杭、临平最高（人口红利），西南的淳安、建德最低（生态屏障）。想走进哪座城，就从场景菜单选对应区县。',
        choices: [
          { label: '记住布局', hint: '知识+3', effect: { knowledge: 3 } },
          { label: '回到现实坐标', hint: '精力+2', effect: { energy: 2 } },
        ],
      },
    },
  ],
});
