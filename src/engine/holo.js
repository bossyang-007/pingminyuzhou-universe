// 引擎层 · 全息特效：跟随角色的悬浮电子屏 + AI 光球伴侣 + 霓虹网格
const THREE = window.THREE;

export function createHolo(avatar, world) {
  // 霓虹网格地面（持久）
  const grid = new THREE.GridHelper(60, 30, 0x39d0ff, 0x1c4a5a);
  grid.material.transparent = true;
  grid.material.opacity = 0.12;
  grid.position.y = 0.02;
  world.scene.add(grid);

  // 悬浮电子屏（CanvasTexture 动态绘制）
  const canvas = document.createElement('canvas');
  canvas.width = 360; canvas.height = 220;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.3, 1.4),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.92 })
  );
  world.scene.add(screen);

  // AI 光球伴侣
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0x8fd6ff })
  );
  world.scene.add(orb);

  function draw(state) {
    ctx.clearRect(0, 0, 360, 220);
    ctx.fillStyle = 'rgba(10,26,38,0.82)';
    roundRect(ctx, 6, 6, 348, 208, 16); ctx.fill();
    ctx.strokeStyle = 'rgba(120,225,255,0.7)'; ctx.lineWidth = 2;
    roundRect(ctx, 6, 6, 348, 208, 16); ctx.stroke();

    ctx.fillStyle = '#8fd6ff';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(state.identityName || '平民', 20, 38);
    ctx.fillStyle = '#eaf7ff';
    ctx.font = '15px sans-serif';
    ctx.fillText(`${state.sceneName || ''} · ${state.age || 0}岁`, 20, 62);

    const bars = [
      ['健康', state.health], ['快乐', state.happy], ['精力', state.energy],
      ['知识', state.knowledge], ['社交', state.social], ['声望', state.reputation],
    ];
    bars.forEach((b, i) => {
      const x = 20 + (i % 2) * 175;
      const y = 90 + Math.floor(i / 2) * 42;
      ctx.fillStyle = '#9fb6c4'; ctx.font = '13px sans-serif';
      ctx.fillText(b[0], x, y);
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      roundRect(ctx, x, y + 6, 150, 10, 5); ctx.fill();
      ctx.fillStyle = '#39d0ff';
      roundRect(ctx, x, y + 6, Math.max(2, (b[1] || 0) * 1.5), 10, 5); ctx.fill();
    });

    ctx.fillStyle = '#ffd166';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('¥ ' + (state.money || 0), 20, 206);
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  world.onUpdate((dt, t) => {
    const p = avatar.group.position;
    screen.position.set(p.x + 1.6, p.y + 2.7, p.z + 0.8);
    screen.quaternion.copy(world.camera.quaternion); // 始终面向相机
    orb.position.set(p.x + Math.cos(t * 0.7) * 1.3, p.y + 2.3 + Math.sin(t * 1.5) * 0.15, p.z + Math.sin(t * 0.7) * 1.3);
  });

  return {
    draw,
    setState(state) { draw(state); tex.needsUpdate = true; },
  };
}
