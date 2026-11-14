// 引擎层 · 世界容器：渲染器 / 相机 / 灯光 / 渲染循环 / 场景切换
const THREE = window.THREE;

export function createWorld(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  renderer.domElement.id = 'scene';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(0, 6, 12);
  camera.lookAt(0, 1.5, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x556070, 1.0));
  const dir = new THREE.DirectionalLight(0xffffff, 0.55);
  dir.position.set(10, 18, 8);
  scene.add(dir);

  const clock = new THREE.Clock();
  const updaters = new Set();
  let active = null;

  function setScene(group) {
    if (active) scene.remove(active);
    active = group;
    if (group) scene.add(group);
  }

  function setBackground(hex) { scene.background = new THREE.Color(hex); }
  function setFog(v, hex) {
    scene.fog = v > 0 ? new THREE.Fog(new THREE.Color(hex), 14, 70) : null;
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  function loop() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    updaters.forEach((fn) => fn(dt, t));
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  return {
    THREE, scene, camera, renderer, clock,
    setScene, setBackground, setFog,
    onUpdate(fn) { updaters.add(fn); return () => updaters.delete(fn); },
  };
}
