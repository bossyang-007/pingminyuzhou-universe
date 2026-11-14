// 系统层 · 事件系统：结算互动事件效果 + 年度随机事件库
import { applyEffect } from './lifeEngine.js';

// 把选项 effect 应用到 store（互动事件为即时探索，不推进年份）
export function settle(effect, store) {
  store.update((s) => ({ ...s, ...applyEffect(s, effect) }));
}

// 年度随机事件：每年有概率触发，增加复玩性（由 main 调用）
export const LIFE_EVENTS = [
  { title: '意外之财', desc: '抽屉里翻出一张忘记兑现的奖券。', choices: [
    { label: '兑换它', hint: '金钱+200', effect: { money: 200, happy: 3 } },
    { label: '捐出去', hint: '声望+6 快乐+2', effect: { reputation: 6, happy: 2 } },
  ] },
  { title: '小感冒', desc: '换季了，身体亮起黄灯。', choices: [
    { label: '请假休息', hint: '健康+5 精力+3 金钱-50', effect: { health: 5, energy: 3, money: -50 } },
    { label: '硬撑上班', hint: '声望+2 健康-4', effect: { reputation: 2, health: -4 } },
  ] },
  { title: '老友来电', desc: '多年没联系的朋友突然找你。', choices: [
    { label: '约饭叙旧', hint: '社交+6 快乐+4 金钱-40', effect: { social: 6, happy: 4, money: -40 } },
    { label: '简短寒暄', hint: '社交+2', effect: { social: 2 } },
  ] },
  { title: '技能变现', desc: '你随手做的东西被人看中。', choices: [
    { label: '接单赚钱', hint: '金钱+150 知识+2', effect: { money: 150, knowledge: 2 } },
    { label: '免费分享', hint: '声望+5 社交+3', effect: { reputation: 5, social: 3 } },
  ] },
  { title: '城市马拉松', desc: '楼下在报名，奖品是一套锅。', choices: [
    { label: '报名参赛', hint: '健康+6 快乐+3 精力-3', effect: { health: 6, happy: 3, energy: -3 } },
    { label: '当志愿者', hint: '声望+4 社交+3', effect: { reputation: 4, social: 3 } },
  ] },
];

export function pickRandomEvent() {
  return LIFE_EVENTS[Math.floor(Math.random() * LIFE_EVENTS.length)];
}
