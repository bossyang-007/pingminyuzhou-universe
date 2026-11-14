// 内容数据层 · 年度行动（纯数据）
// 每年从 8 项中挑选执行，effect 即时结算到状态。
// effect 键：health / happy / energy / knowledge / social / reputation / money
export const actions = [
  { id: 'work', name: '努力工作', ico: '💼', desc: '加班加点，换取收入与口碑。', effect: { money: 200, reputation: 4, energy: -6 } },
  { id: 'study', name: '学习充电', ico: '📚', desc: '投资自己，知识缓慢积累。', effect: { knowledge: 6, energy: -3 } },
  { id: 'fit', name: '健身运动', ico: '🏃', desc: '身体是革命的本钱。', effect: { health: 7, energy: -2, happy: 2 } },
  { id: 'social', name: '社交聚会', ico: '🍻', desc: '人脉在一次次碰杯中生长。', effect: { social: 6, happy: 3, money: -60 } },
  { id: 'invest', name: '理财投资', ico: '📈', desc: '让钱生钱，也伴随风险。', effect: { money: 120, knowledge: 2, happy: -1 } },
  { id: 'rest', name: '休息放松', ico: '🛋️', desc: '什么都不做，也是一种补给。', effect: { energy: 8, happy: 3, health: 2 } },
  { id: 'startup', name: '创业尝试', ico: '🚀', desc: '赌一把，可能翻身也可能翻车。', effect: { money: -150, reputation: 6, knowledge: 3, energy: -5 } },
  { id: 'volunteer', name: '志愿公益', ico: '🤝', desc: '帮助他人，声望与人缘双增。', effect: { reputation: 8, social: 5, happy: 4, money: -20 } },
];

export default actions;
