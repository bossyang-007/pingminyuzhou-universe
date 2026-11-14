// 引擎层 · 场景管理器：按配置生成地面 / 道具 / 发光互动点
const THREE = window.THREE;

function makeMesh(p) {
  let geo;
  if (p.type === 'box') geo = new THREE.BoxGeometry(p.size[0], p.size[1], p.size[2]);
  else if (p.type === 'cyl') geo = new THREE.CylinderGeometry(p.size[0], p.size[0], p.size[1], 16);
  else if (p.type === 'cone') geo = new THREE.ConeGeometry(p.size[0], p.size[1], 16);
  else if (p.type === 'sphere') geo = new THREE.SphereGeometry(p.size[0], 18, 14);
  else geo = new THREE.BoxGeometry(1, 1, 1);

  const mat = new THREE.MeshLambertMaterial({
    color: new THREE.Color(p.color || '#cccccc'),
  });
  if (p.emissive) {
    mat.emissive = new THREE.Color(p.emissive);
    mat.emissiveIntensity = 0.9;
  }
  const m = new THREE.Mesh(geo, mat);
  m.position.set(p.pos[0], p.pos[1], p.pos[2]);
  if (p.rotY) m.rotation.y = p.rotY;
  return m;
}

// 构建一个发光互动点（自发光球 + 地面光环）
function makeSpot(spot) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0x8fd6ff })
  );
  core.position.y = 1.1;
  g.add(core);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(spot.radius * 0.9, spot.radius, 32),
    new THREE.MeshBasicMaterial({ color: 0x39d0ff, transparent: true, opacity: 0.16, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  g.add(ring);
  g.position.set(spot.pos[0], spot.pos[1], spot.pos[2]);
  g.userData = { spot, core, base: 1.1 };
  return g;
}

// 按场景配置构建 3D 场景；world 用于设置背景/雾并注册脉动动画
export function buildScene(cfg, world) {
  const group = new THREE.Group();

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshLambertMaterial({ color: new THREE.Color(cfg.ground || '#888888') })
  );
  ground.rotation.x = -Math.PI / 2;
  group.add(ground);

  (cfg.props || []).forEach((p) => group.add(makeMesh(p)));

  const spots = [];
  (cfg.spots || []).forEach((s) => {
    const g = makeSpot(s);
    group.add(g);
    spots.push({ id: s.id, label: s.label, pos: s.pos, radius: s.radius, event: s.event, group: g });
  });

  world.setBackground(cfg.sky || '#222');
  world.setFog(cfg.fog || 0, cfg.sky || '#222');

  // 互动点脉动：上下浮动 + 缩放呼吸
  const off = world.onUpdate((dt, t) => {
    spots.forEach((sp, i) => {
      const y = sp.group.userData.base + Math.sin(t * 2 + i) * 0.12;
      sp.group.userData.core.position.y = y;
      const s = 1 + Math.sin(t * 3 + i) * 0.08;
      sp.group.userData.core.scale.set(s, s, s);
    });
  });

  return { group, spots, dispose: off };
}
