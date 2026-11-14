// 引擎层 · 拟人化人偶（分段四肢 / 五官 / 发型），含行走摆动
const THREE = window.THREE;

export function createAvatar(opts = {}) {
  const skin = new THREE.MeshLambertMaterial({ color: 0xf2c9a0 });
  const cloth = new THREE.MeshLambertMaterial({ color: opts.cloth || 0x3b6ea5 });
  const cloth2 = new THREE.MeshLambertMaterial({ color: opts.cloth2 || 0x2b4f73 });
  const hair = new THREE.MeshLambertMaterial({ color: opts.hair || 0x33271c });
  const dark = new THREE.MeshLambertMaterial({ color: 0x20242a });

  const group = new THREE.Group();

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.4), cloth);
  torso.position.y = 1.15; group.add(torso);

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.35, 0.38), cloth2);
  pelvis.position.y = 0.62; group.add(pelvis);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 16), skin);
  head.position.y = 1.85; group.add(head);

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
  hairCap.position.y = 1.88; group.add(hairCap);

  const eyeGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const eyeL = new THREE.Mesh(eyeGeo, dark); eyeL.position.set(-0.12, 1.88, 0.29); group.add(eyeL);
  const eyeR = new THREE.Mesh(eyeGeo, dark); eyeR.position.set(0.12, 1.88, 0.29); group.add(eyeR);

  function limb(w, h, d, mat) { return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); }

  const legL = limb(0.22, 0.7, 0.24, cloth2); legL.position.set(-0.18, 0.35, 0); group.add(legL);
  const legR = limb(0.22, 0.7, 0.24, cloth2); legR.position.set(0.18, 0.35, 0); group.add(legR);

  const armL = limb(0.18, 0.65, 0.2, cloth); armL.position.set(-0.46, 1.15, 0); group.add(armL);
  const armR = limb(0.18, 0.65, 0.2, cloth); armR.position.set(0.46, 1.15, 0); group.add(armR);

  const parts = { legL, legR, armL, armR, torso, head };

  let t = 0;
  function update(dt, moving) {
    t += dt;
    if (moving) {
      const sw = Math.sin(t * 9) * 0.5;
      legL.rotation.x = sw; legR.rotation.x = -sw;
      armL.rotation.x = -sw * 0.8; armR.rotation.x = sw * 0.8;
      group.position.y = Math.abs(Math.sin(t * 9)) * 0.06;
    } else {
      [legL, legR, armL, armR].forEach((p) => { p.rotation.x *= 0.8; });
      group.position.y *= 0.8;
    }
  }

  return { group, parts, update };
}
