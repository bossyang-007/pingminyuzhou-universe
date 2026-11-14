// 启动编排：组装世界 / 实体 / 系统 / UI，并驱动主循环
import { CONFIG } from './config.js';
import { scenes, identities, actions, ads } from './content/index.js';
import { createWorld } from './engine/world.js';
import { buildScene } from './engine/sceneManager.js';
import { createAvatar } from './engine/avatar.js';
import { createInput } from './engine/input.js';
import { createHolo } from './engine/holo.js';
import { followTarget } from './engine/camera.js';
import { createStore } from './systems/store.js';
import { newGameState, advanceYear } from './systems/lifeEngine.js';
import { settle, pickRandomEvent } from './systems/eventSystem.js';
import { save } from './systems/save.js';
import { mountUI } from './ui/ui.js';

const THREE = window.THREE;

const store = createStore(newGameState(identities[0].id));
const world = createWorld(document.body);
const avatar = createAvatar();
world.scene.add(avatar.group);
const holo = createHolo(avatar, world);
const input = createInput();
input.onInteract(() => interact());

let current = null;     // { group, spots, dispose }
let nearbySpot = null;
let ui = null;

function loadScene(id) {
  const cfg = scenes.find((s) => s.id === id) || scenes[0];
  if (current) { current.dispose(); }
  current = buildScene(cfg, world);
  world.setScene(current.group);
  const sp = cfg.spawn || [0, 0, 4];
  avatar.group.position.set(sp[0], 0, sp[2]);
  avatar.group.rotation.y = 0;
  nearbySpot = null;
  store.set({ sceneId: cfg.id });
}

// ---------- 音乐（Web Audio 程序化环境音） ----------
let audioCtx = null, musicOn = false, musicTimer = null, musicGain = null;
function toggleMusic() {
  musicOn = !musicOn;
  if (musicOn) startMusic(); else stopMusic();
  return musicOn;
}
function startMusic() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  musicGain = audioCtx.createGain();
  musicGain.gain.value = 0.06;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass'; filter.frequency.value = 800;
  musicGain.connect(filter); filter.connect(audioCtx.destination);
  const chords = [[220, 277, 330], [196, 247, 294], [165, 220, 262], [233, 294, 349]];
  let i = 0;
  const playChord = () => {
    chords[i % chords.length].forEach((f) => {
      const o = audioCtx.createOscillator();
      o.type = 'sine'; o.frequency.value = f;
      o.connect(musicGain); o.start(); o.stop(audioCtx.currentTime + 3.2);
    });
    i++;
  };
  playChord();
  musicTimer = setInterval(playChord, 3200);
}
function stopMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
  if (musicGain) { try { musicGain.disconnect(); } catch {} musicGain = null; }
}

// ---------- 游戏门面（供 UI 调用） ----------
const game = {
  store, scenes, identities, actions, ads,
  hasSave: !!save.load(),
  start(id) {
    const s = newGameState(id);
    store.set(s); save.write(s);
    loadScene(s.sceneId);
    ui.refresh(s); holo.setState(s);
  },
  continueGame() {
    const s = save.load();
    if (!s) return;
    store.set(s); loadScene(s.sceneId);
    ui.refresh(s); holo.setState(s);
  },
  doAction(id) {
    const a = actions.find((x) => x.id === id);
    if (!a) return;
    store.update((st) => advanceYear(st, a));
    save.write(store.get());
    ui.refresh(store.get());
    if (store.get().ended) { endGame(); return; }
    if (Math.random() < 0.35) {
      const ev = pickRandomEvent();
      ui.openEvent(ev, (eff) => { settle(eff, store); ui.refresh(store.get()); });
    }
  },
  interact() {
    if (nearbySpot && nearbySpot.event) {
      ui.openEvent(nearbySpot.event, (eff) => { settle(eff, store); ui.refresh(store.get()); });
    }
  },
  switchScene(id) { loadScene(id); ui.refresh(store.get()); },
  setJoy(x, z) { input.setJoy(x, z); },
  toggleMusic,
};

ui = mountUI(game);

// 状态变化 → 刷新 HUD / 全息屏
store.subscribe((s) => { if (ui) ui.refresh(s); holo.setState(s); });

// ---------- 邻近互动点检测 ----------
function checkProximity() {
  const p = avatar.group.position;
  let best = null, bestD = Infinity;
  (current ? current.spots : []).forEach((sp) => {
    const d = Math.hypot(p.x - sp.pos[0], p.z - sp.pos[2]);
    if (d <= sp.radius && d < bestD) { best = sp; bestD = d; }
  });
  if (best !== nearbySpot) {
    nearbySpot = best;
    if (best) ui.showInteract(best); else ui.hideInteract();
  }
}

function endGame() {
  const s = store.get();
  ui.openEvent({
    title: '人生落幕',
    desc: `你走完了 ${s.age} 年的人生。资产 ¥${s.money}，声望 ${s.reputation}，快乐 ${s.happy}。平凡，却也独一无二。`,
    choices: [{ label: '再活一次', hint: '重新开始', effect: {} }],
  }, () => { game.start(s.identityId); });
}

// ---------- 主循环 ----------
world.onUpdate((dt) => {
  const mv = input.getMove();
  const moving = mv.x !== 0 || mv.z !== 0;
  if (moving) {
    const dir = new THREE.Vector3(mv.x, 0, mv.z);
    avatar.group.position.addScaledVector(dir, CONFIG.moveSpeed * dt);
    avatar.group.position.x = Math.max(-28, Math.min(28, avatar.group.position.x));
    avatar.group.position.z = Math.max(-28, Math.min(28, avatar.group.position.z));
    avatar.group.rotation.y = Math.atan2(mv.x, mv.z);
    checkProximity();
  }
  avatar.update(dt, moving);
  followTarget(world.camera, avatar.group, dt, CONFIG.camera);
});

// 预载场景作为开始页背景
loadScene('home');
holo.setState(store.get());
