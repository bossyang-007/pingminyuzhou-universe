# 架构设计 · ARCHITECTURE

> 本文档说明平民宇宙 v2 的架构理念与模块边界，是协作开发的「图纸」。

## 1. 设计目标

1. **内容驱动**：场景 / 身份 / 行动 / 事件 / 广告全部为纯数据，新增内容不改动引擎。
2. **分层解耦**：UI、系统、引擎、内容、运行环境五层各司其职，依赖单向向下。
3. **AI 可扩展**：世界由配置描述，AI agent（创始神）可自动产出合法配置，长出新地图。
4. **零构建依赖**：原生 ES Module + 全局 `THREE`，开发者只需 Node 起一个静态服务器即可运行。

## 2. 分层架构

```
① UI 表现层      src/ui/ui.js
② 游戏系统层     src/systems/{store,lifeEngine,eventSystem,save}.js
③ 引擎层         src/engine/{world,sceneManager,avatar,input,holo,camera}.js
④ 内容数据层     src/content/{scenes,identities,actions,ads}.js  (+ schema.md)
⑤ 运行环境       three.min.js · 浏览器 · Web Audio · localStorage
```

- 上层依赖下层，下层不感知上层。
- ④ 内容层是**纯数据**，不包含任何 Three.js 调用与游戏逻辑。
- ③ 引擎层只负责「把配置变成 3D 与交互」，不关心数值平衡。
- ② 系统层负责游戏规则（年份推进、属性结算、事件触发、存档），与渲染无关。
- ① UI 层订阅系统层状态并渲染，不直接操作引擎内部。

## 3. 数据流（内容驱动）

```
场景配置 ──▶ 场景管理器 ──▶ 3D 场景（可走动 / 可互动）
事件配置 ──▶ 事件系统   ──▶ 互动悬浮卡（点击即弹出）
身份配置 ──▶ 人生引擎   ──▶ 人生轨迹（属性与剧情）
```

新增内容的唯一入口是 `src/content/`：

- 加场景：在 `scenes.js` 数组追加一个对象（或在 `tools/creator-god` 生成后自动并入）。
- 加身份：在 `identities.js` 追加。
- 加年度行动：在 `actions.js` 追加。
- 加互动事件：写在对应场景 `spots[].event` 里，或独立 `events` 引用。

引擎与系统**完全不用改**，因此零回归风险。

## 4. 模块职责（精简）

| 模块 | 职责 | 关键接口 |
|------|------|----------|
| `engine/world` | 渲染器、相机、灯光、渲染循环、resize、激活场景切换 | `createWorld()`, `world.setScene(group)`, `world.onUpdate(fn)` |
| `engine/sceneManager` | 按配置生成地面/天空/雾/道具/发光互动点 | `buildScene(cfg) -> {group, spots}` |
| `engine/avatar` | 拟人化人偶（分段四肢、五官、发型），行走摆动 | `createAvatar() -> {group, update(dt, moving)}` |
| `engine/input` | 键盘 + 触摸摇杆，输出移动向量 | `createInput()`, `input.move -> {x, z}` |
| `engine/holo` | 跟随角色的悬浮电子屏（CanvasTexture）、AI 光球、霓虹网格 | `createHolo(avatar)`, `holo.update(state)` |
| `engine/camera` | 第三人称跟随（lerp） | `followTarget(camera, target, dt)` |
| `systems/store` | 中央状态 + 订阅（pub/sub） | `createStore(initial)` |
| `systems/lifeEngine` | 新建游戏、推进年份、结算属性与金钱 | `newGame(id)`, `applyEffect(eff)` |
| `systems/eventSystem` | 按配置弹出事件并应用选项效果 | `openEvent(ev, onClose)` |
| `systems/save` | localStorage 读写 | `save.load()/write()/clear()` |
| `ui/ui` | HUD 状态条、悬浮控制台、事件卡、摇杆、BGM | `mountUI(game)` |

## 5. 状态模型（store）

```js
state = {
  identityId, sceneId, age, year,
  money, health, happy, energy, knowledge, social, reputation,
  ended, log: []
}
```

所有 UI 通过 `store.subscribe` 响应变化；所有规则改动通过 `store.update` 提交。

## 6. 创始神（AI 扩展）如何融入架构

```
自然语言 prompt
   │
   ▼
tools/creator-god/generate.mjs   （模板 / LLM 生成 scene 配置）
   │
   ▼
src/content/scenes.js            （插入新场景对象）
   │  （下次刷新）
   ▼
场景管理器自动读入 → 游戏中多一张可探索地图
```

- 配置即数据，所以 AI 的输出可被引擎直接消费，无需改代码。
- 可把 `generate.mjs` 挂成定时任务，让宇宙随时间自动生长。

## 7. 为什么不用打包工具？

- 目标用户是「想一起玩/一起改的普通开发者」，零配置上手最重要。
- 原生 ESM + 全局 `THREE` 已足够；`tools/serve.mjs` 提供零依赖本地服务器。
- 需要单文件分发时，`tools/build.mjs` 可把模块内联成一份 HTML（可选）。
