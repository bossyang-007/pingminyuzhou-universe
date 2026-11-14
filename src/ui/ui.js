// UI 表现层 · 挂载所有界面并绑定到 game 门面
function el(tag, props = {}, kids = []) {
  const n = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (k === 'style') n.setAttribute('style', v);
    else n.setAttribute(k, v);
  });
  (Array.isArray(kids) ? kids : [kids]).forEach((c) => c && n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  return n;
}

export function mountUI(game) {
  const app = document.getElementById('app');
  let selectedId = game.identities[0].id;

  // ---------- 开始 / 身份页 ----------
  const idGrid = el('div', { class: 'id-grid' });
  function renderIds() {
    idGrid.innerHTML = '';
    game.identities.forEach((idf) => {
      const card = el('div', { class: 'id-card' + (idf.id === selectedId ? ' sel' : ''), onclick: () => { selectedId = idf.id; renderIds(); } }, [
        el('div', { class: 'id-ico' }, idf.ico),
        el('div', { class: 'id-name' }, idf.name),
        el('div', { class: 'id-desc' }, idf.desc),
      ]);
      idGrid.appendChild(card);
    });
  }
  renderIds();

  const startScreen = el('div', { class: 'screen' }, [
    el('div', { class: 'center' }, [
      el('div', { class: 'brand' }, 'PINGMIN YUZHOU'),
      el('div', { class: 'title' }, '平民宇宙'),
      el('div', { class: 'subtitle' }, '选择你的身份，开启一段平凡却闪耀的人生'),
      idGrid,
      el('div', { class: 'row' }, [
        el('button', { class: 'btn primary', onclick: () => { startScreen.remove(); game.start(selectedId); } }, '开始人生'),
        game.hasSave ? el('button', { class: 'btn ghost', onclick: () => { startScreen.remove(); game.continueGame(); } }, '继续上次') : null,
      ]),
      el('div', { class: 'hint', style: 'margin-top:14px;' }, '电脑：WASD / 方向键移动，E 互动 · 手机：左下摇杆 + 点「互动」'),
    ]),
  ]);
  app.appendChild(startScreen);

  // ---------- 顶部 HUD ----------
  const chipAge = el('div', { class: 'chip' }, '年龄 ');
  const chipMoney = el('div', { class: 'chip' }, '¥ ');
  const mkBar = (label) => {
    const fill = el('i', { style: 'width:60%' });
    return { wrap: el('div', { class: 'chip' }, [label + ' ', el('div', { class: 'bar' }, [fill])]), fill };
  };
  const bHealth = mkBar('健康'), bHappy = mkBar('快乐'), bEnergy = mkBar('精力');
  const musicBtn = el('button', { class: 'icon-btn', title: '背景音乐', onclick: () => { const on = game.toggleMusic(); musicBtn.classList.toggle('on', on); } }, '♪');
  const menuBtn = el('button', { class: 'icon-btn', title: '切换场景', onclick: () => sceneMenu.classList.add('show') }, '☰');
  const hud = el('div', { id: 'hud' }, [
    el('div', { class: 'hud-left' }, [chipAge, chipMoney, bHealth.wrap, bHappy.wrap, bEnergy.wrap]),
    el('div', { class: 'hud-right' }, [musicBtn, menuBtn]),
  ]);
  app.appendChild(hud);

  // ---------- 人生控制台（悬浮全息） ----------
  const pTitle = el('span', { id: 'pTitle' });
  const panelToggle = el('button', { id: 'panelToggle', onclick: () => panel.classList.toggle('collapsed') }, '—');
  const phead = el('div', { class: 'phead' }, [pTitle, panelToggle]);
  const stageLabel = el('div', { id: 'stageLabel' });

  const actionsWrap = el('div', { id: 'actions' });
  game.actions.forEach((a) => {
    actionsWrap.appendChild(el('button', { class: 'act', onclick: () => game.doAction(a.id) }, [
      el('span', { class: 'e' }, a.ico), a.name, el('span', { class: 'd' }, a.desc),
    ]));
  });

  const adTag = el('span', { class: 'tag' }, '广告');
  const adTitle = el('span', { class: 't' });
  const adSub = el('span', { class: 's' });
  const ad = el('div', { id: 'ad', onclick: () => { const a = currentAd; if (a && a.url) window.open(a.url, '_blank'); } }, [adTag, el('div', {}, [adTitle, el('br'), adSub])]);
  let currentAd = game.ads[0];

  const panel = el('div', { id: 'panel', class: 'float-on' }, [phead, stageLabel, actionsWrap, ad]);
  app.appendChild(panel);
  makeDraggable(panel, phead);

  // ---------- 互动提示 ----------
  const interactGo = el('button', { class: 'go', onclick: () => game.interact() }, '互动');
  const interactHint = el('div', { id: 'interactHint' }, [el('span', { id: 'interactTxt' }, ''), interactGo]);
  app.appendChild(interactHint);

  // ---------- 虚拟摇杆 ----------
  const nub = el('div', { class: 'nub' });
  const joystick = el('div', { id: 'joystick' }, [nub]);
  app.appendChild(joystick);
  makeJoystick(joystick, nub, game);

  // ---------- 事件弹窗 ----------
  const modal = el('div', { class: 'modal hidden' });
  app.appendChild(modal);
  function openEvent(ev, onChoice) {
    modal.innerHTML = '';
    const choices = el('div', { class: 'choices' });
    (ev.choices || []).forEach((c) => {
      choices.appendChild(el('button', { class: 'choice', onclick: () => { modal.classList.add('hidden'); onChoice(c.effect || {}); } }, [
        c.label, c.hint ? el('small', {}, c.hint) : null,
      ]));
    });
    modal.appendChild(el('div', { class: 'box' }, [
      el('h2', {}, ev.title || '事件'),
      ev.desc ? el('p', {}, ev.desc) : null,
      choices,
    ]));
    modal.classList.remove('hidden');
  }

  // ---------- 场景切换菜单 ----------
  const sceneList = el('div', { class: 'scene-list' });
  game.scenes.forEach((s) => {
    sceneList.appendChild(el('div', { class: 'scene-item', 'data-id': s.id, onclick: () => { game.switchScene(s.id); sceneMenu.classList.remove('show'); } }, s.name));
  });
  const sceneMenu = el('div', { id: 'sceneMenu' }, [
    el('div', { class: 'box' }, [
      el('h2', {}, '切换场景'),
      el('p', {}, '走到想去的生活里。'),
      sceneList,
      el('div', { class: 'row', style: 'margin-top:14px;' }, [el('button', { class: 'btn ghost', onclick: () => sceneMenu.classList.remove('show') }, '关闭')]),
    ]),
  ]);
  app.appendChild(sceneMenu);

  // ---------- 刷新 ----------
  function refresh(state) {
    const sc = game.scenes.find((s) => s.id === state.sceneId) || game.scenes[0];
    chipAge.textContent = '年龄 ' + state.age;
    chipMoney.textContent = '¥ ' + state.money;
    bHealth.fill.style.width = state.health + '%';
    bHappy.fill.style.width = state.happy + '%';
    bEnergy.fill.style.width = state.energy + '%';
    pTitle.innerHTML = '人生控制台 <small>' + (state.identityName || '') + '</small>';
    stageLabel.textContent = sc.name + ' · 第' + state.year + '年（' + state.age + '岁）';
    currentAd = game.ads[Math.floor(Math.random() * game.ads.length)];
    adTag.textContent = currentAd.tag;
    adTitle.textContent = currentAd.title;
    adSub.textContent = currentAd.sub;
    sceneList.querySelectorAll('.scene-item').forEach((n) => n.classList.toggle('cur', n.getAttribute('data-id') === state.sceneId));
  }

  function showInteract(spot) {
    document.getElementById('interactTxt').textContent = '走近【' + spot.label + '】 · 按 E 互动';
    interactHint.style.display = 'flex';
  }
  function hideInteract() { interactHint.style.display = 'none'; }

  return { refresh, openEvent, showInteract, hideInteract };
}

// 控制台拖拽（双击复位）
function makeDraggable(panel, handle) {
  let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
  handle.addEventListener('pointerdown', (e) => {
    dragging = true; panel.classList.add('dragging'); panel.classList.remove('float-on');
    const r = panel.getBoundingClientRect();
    ox = r.left; oy = r.top; sx = e.clientX; sy = e.clientY;
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    let nx = ox + (e.clientX - sx), ny = oy + (e.clientY - sy);
    nx = Math.max(4, Math.min(window.innerWidth - panel.offsetWidth - 4, nx));
    ny = Math.max(50, Math.min(window.innerHeight - 60, ny));
    panel.style.left = nx + 'px'; panel.style.top = ny + 'px';
    panel.style.right = 'auto'; panel.style.bottom = 'auto';
  });
  handle.addEventListener('pointerup', (e) => { dragging = false; panel.classList.remove('dragging'); handle.releasePointerCapture(e.pointerId); });
  handle.addEventListener('dblclick', () => { panel.style.left = ''; panel.style.top = ''; panel.style.right = ''; panel.style.bottom = ''; panel.classList.add('float-on'); });
}

// 触摸摇杆 → 写入移动向量
function makeJoystick(zone, nub, game) {
  let active = false, cx = 0, cy = 0;
  const R = 45;
  zone.addEventListener('pointerdown', (e) => { active = true; const r = zone.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; zone.setPointerCapture(e.pointerId); move(e); });
  zone.addEventListener('pointermove', (e) => { if (active) move(e); });
  zone.addEventListener('pointerup', (e) => { active = false; nub.style.transform = 'translate(0,0)'; game.setJoy(0, 0); zone.releasePointerCapture(e.pointerId); });
  function move(e) {
    let dx = e.clientX - cx, dy = e.clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > R) { dx = dx / len * R; dy = dy / len * R; }
    nub.style.transform = `translate(${dx}px,${dy}px)`;
    game.setJoy(dx / R, dy / R);
  }
}
