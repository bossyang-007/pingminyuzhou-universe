// 引擎层 · 第三人称跟随相机（固定世界朝向，稳定不晕）
const THREE = window.THREE;

export function followTarget(camera, target, dt, cfg) {
  const desired = new THREE.Vector3(target.position.x, target.position.y + cfg.height, target.position.z + cfg.back);
  camera.position.lerp(desired, cfg.lerp);
  camera.lookAt(target.position.x, target.position.y + 1.4, target.position.z);
}
