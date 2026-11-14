// 系统层 · 人生引擎：初始状态 / 属性结算 / 推进年份
import { CONFIG } from '../config.js';
import { identities } from '../content/index.js';

const ATTRS = ['health', 'happy', 'energy', 'knowledge', 'social', 'reputation'];

export function clamp(v) {
  return Math.max(0, Math.min(CONFIG.maxAttr, v));
}

// 把事件/行动 effect 结算成状态补丁（不修改入参）
export function applyEffect(state, eff = {}) {
  const patch = {};
  ATTRS.forEach((k) => {
    if (eff[k] !== undefined) patch[k] = clamp((state[k] || 0) + eff[k]);
  });
  if (eff.money !== undefined) patch.money = Math.max(0, (state.money || 0) + eff.money);
  return patch;
}

// 新建一局游戏（根据身份决定起点）
export function newGameState(identityId) {
  const id = identities.find((i) => i.id === identityId) || identities[0];
  return {
    identityId: id.id,
    identityName: id.name,
    age: 22,
    year: 1,
    ended: false,
    money: id.money,
    health: id.attrs.health,
    happy: id.attrs.happy,
    energy: id.attrs.energy,
    knowledge: id.attrs.knowledge,
    social: id.attrs.social,
    reputation: id.attrs.reputation,
    sceneId: 'home',
    log: [],
  };
}

// 执行一个年度行动并推进一年
export function advanceYear(state, action) {
  const patch = applyEffect(state, action.effect);
  const age = state.age + 1;
  return {
    ...state,
    ...patch,
    age,
    year: state.year + 1,
    ended: age >= CONFIG.retireAge,
  };
}
