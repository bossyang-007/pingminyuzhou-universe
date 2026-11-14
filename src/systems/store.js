// 系统层 · 中央状态仓库（pub/sub）
export function createStore(initial) {
  let state = initial;
  const subs = new Set();
  return {
    get: () => state,
    set: (patch) => { state = { ...state, ...patch }; subs.forEach((f) => f(state)); },
    update: (fn) => { state = fn(state) || state; subs.forEach((f) => f(state)); },
    subscribe: (f) => { subs.add(f); return () => subs.delete(f); },
  };
}
