// 系统层 · 本地存档（localStorage）
const KEY = 'pingmin-yuzhou-save-v2';
export const save = {
  load() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  },
  write(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* 忽略写入失败 */ }
  },
  clear() {
    try { localStorage.removeItem(KEY); } catch { /* 忽略 */ }
  },
};
