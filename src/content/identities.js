// 内容数据层 · 身份配置（纯数据）
// 每个身份给出初始金钱与属性修正；选身份即决定人生起点。
export const identities = [
  {
    id: 'worker', name: '打工人', ico: '💼',
    desc: '朝九晚五，工资稳定但自由有限。',
    money: 3000, attrs: { health: 75, happy: 60, energy: 70, knowledge: 40, social: 40, reputation: 30 },
  },
  {
    id: 'student', name: '大学生', ico: '🎓',
    desc: '时间相对自由，钱包有点紧，未来可期。',
    money: 800, attrs: { health: 85, happy: 75, energy: 90, knowledge: 55, social: 60, reputation: 20 },
  },
  {
    id: 'biz', name: '个体户', ico: '🛒',
    desc: '自己当老板，收入波动大，操心也多。',
    money: 6000, attrs: { health: 70, happy: 65, energy: 65, knowledge: 45, social: 65, reputation: 35 },
  },
  {
    id: 'freelancer', name: '自由职业者', ico: '🎨',
    desc: '靠手艺吃饭，地点自由，靠自律维持节奏。',
    money: 2500, attrs: { health: 72, happy: 70, energy: 68, knowledge: 60, social: 45, reputation: 30 },
  },
  {
    id: 'retired', name: '退休大爷', ico: '🧓',
    desc: '半生奔波落定，时间最富足，爱凑热闹。',
    money: 5000, attrs: { health: 65, happy: 80, energy: 60, knowledge: 70, social: 70, reputation: 60 },
  },
];

export default identities;
