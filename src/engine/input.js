// 引擎层 · 输入：键盘（WASD/方向键）+ 触摸摇杆（由 UI 写入）
export function createInput() {
  const keys = new Set();
  let joy = { x: 0, z: 0 };
  const interactCbs = new Set();

  const map = {
    KeyW: 'f', ArrowUp: 'f', KeyS: 'b', ArrowDown: 'b',
    KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r',
  };

  window.addEventListener('keydown', (e) => {
    if (map[e.code]) { keys.add(map[e.code]); e.preventDefault(); }
    if ((e.code === 'KeyE' || e.code === 'Space') && !e.repeat) {
      interactCbs.forEach((cb) => cb());
    }
  });
  window.addEventListener('keyup', (e) => { if (map[e.code]) keys.delete(map[e.code]); });
  window.addEventListener('blur', () => keys.clear());

  // 返回相机相对移动向量：x=右(+右/-左)，z=前(-前/+后)
  function getMove() {
    let x = joy.x, z = joy.z;
    if (keys.has('l')) x -= 1;
    if (keys.has('r')) x += 1;
    if (keys.has('f')) z -= 1;
    if (keys.has('b')) z += 1;
    const len = Math.hypot(x, z);
    if (len > 1) { x /= len; z /= len; }
    return { x, z };
  }

  return {
    getMove,
    setJoy(x, z) { joy = { x, z }; },
    onInteract(cb) { interactCbs.add(cb); return () => interactCbs.delete(cb); },
  };
}
