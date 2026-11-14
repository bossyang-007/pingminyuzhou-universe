// 全局参数与主题（纯配置，无任何 Three.js 调用）
export const CONFIG = {
  moveSpeed: 6,            // 角色移动速度
  camera: { height: 5.4, back: 9, lerp: 0.08 }, // 第三人称相机
  start: {
    money: 2000,
    attrs: { health: 80, happy: 70, energy: 80, knowledge: 30, social: 30, reputation: 20 },
  },
  maxAttr: 100,
  retireAge: 65,
};

export const THEME = {
  glass: 'rgba(14,34,48,.46)',
  glassBorder: 'rgba(120,225,255,.55)',
  text: '#eaf7ff',
  accent: '#8fd6ff',
  panelMaxH: '34vh',
  sceneTint: 'rgba(20,40,55,.55)',
};
