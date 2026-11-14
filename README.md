# 平民宇宙 · PingMin YuZhou

> 一个**内容驱动**的 3D 人生模拟元宇宙。普通人选择身份、在六大场景里走动、逐年做出人生选择、探索支线事件，并穿插全息科技感与广告位。平民也能活出科技感。

本项目是开源协作版（v2），核心目标：**让加内容只改数据、不动引擎**，并支持由 **AI「创始神」自动扩展地图**。

---

## ✨ 特性

- 🧍 拟人化 3D 人偶，第一/三人称自由走动（电脑 WASD、手机虚拟摇杆）
- 🌆 六大场景：温馨小家 / 写字楼 / 街角 / 公园 / 夜市 / 商场，昼夜氛围
- 🪐 全息科技感：悬浮电子屏、AI 光球伴侣、霓虹网格、漂浮广告牌
- 🎭 身份选择 + 逐年 8 大人生行动 + 发光互动点的专属探索事件
- 🤖 **创始神模式**：一条命令让 AI 生成符合规范的新地图，自动并入游戏
- 💾 本地存档；预留广告位与 BGM 控制区
- 🧩 完全**内容驱动**：场景 / 身份 / 行动 / 事件 / 广告都是纯数据

---

## 🚀 快速开始

```bash
# 1. 克隆
git clone <你的远程仓库地址>
cd pingmin-yuzhou

# 2. 启动本地服务器（零依赖，仅需 Node.js）
npm run dev
# 然后浏览器打开 http://localhost:5173

# 3.（可选）召唤创始神，生成一张新地图
npm run god -- "一座海边灯塔小镇，宁静治愈"
```

> 运行时需要同目录的 `three.min.js`（已随仓库提供，Three.js r128）。

---

## 🏗️ 架构总览

分层、解耦、内容驱动。详见 [ARCHITECTURE.md](./ARCHITECTURE.md)。

```
① UI 表现层     全息控制台 HUD · 事件悬浮卡 · 虚拟摇杆 · 广告位 · BGM
② 游戏系统层    人生引擎(年份/属性) · 经济 · 事件系统 · 存档
③ 引擎层        场景管理器 · 相机跟随 · 输入 · 人偶与实体 · 全息特效
④ 内容数据层    场景 · 身份 · 年度行动 · 互动事件 · 广告（纯配置，零逻辑）
⑤ 运行环境      Three.js · 浏览器 · Web Audio · 本地存档
```

**关键原则**：内容数据层是纯配置（JS 模块导出的对象数组），引擎读取配置生成 3D 内容与玩法。加一个场景 / 事件 / 身份 = 新增一段配置，引擎零改动。

---

## 🤖 创始神（AI 内容生成）

`tools/creator-god/` 是一个 AI agent 工具：给定一句自然语言描述，按 `scene` schema 生成一张新场景配置并插入 `src/content/scenes.js`，游戏下次刷新即出现。

- 默认用**模板 + 关键词**离线生成，开箱即用；
- 若设置 `OPENAI_API_KEY`（或兼容端点）则调用大模型生成更丰富的地图；
- 可把它挂成**定时自动化**：让「创始神」定期为宇宙长出新地块。详见 [tools/creator-god/README.md](./tools/creator-god/README.md)。

小红猫（本仓库的 AI 协管）也可以随时被召唤来跑它。

---

## 🤝 如何一起开发

1. 读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解内容驱动的开发方式；
2. 想加场景 / 身份 / 事件？**只改 `src/content/` 下的数据**，无需碰引擎；
3. 想改引擎 / 系统 / UI？在对应 `src/engine`、`src/systems`、`src/ui` 下提交；
4. 分支开发 → PR → 评审合并。

---

## 📁 目录结构

```
pingmin-yuzhou/
├─ index.html              入口（加载 three.min.js + 模块）
├─ three.min.js            Three.js r128（运行时依赖）
├─ src/
│  ├─ config.js            全局参数与主题
│  ├─ content/             ④ 内容数据层（纯配置）
│  │   ├─ scenes.js  identities.js  actions.js  ads.js  index.js
│  │   └─ schema.md        配置规范
│  ├─ engine/              ③ 引擎层
│  │   ├─ world.js  sceneManager.js  avatar.js  input.js  holo.js  camera.js
│  ├─ systems/             ② 游戏系统层
│  │   ├─ store.js  lifeEngine.js  eventSystem.js  save.js
│  ├─ ui/                  ① UI 表现层
│  │   └─ ui.js
│  └─ main.js              启动编排
├─ tools/
│  ├─ serve.mjs            零依赖本地服务器
│  ├─ build.mjs            可选：打包为单文件 HTML
│  └─ creator-god/         创始神 AI 内容生成
└─ docs/                   架构与协作文档
```

---

## 📜 许可证

[MIT](./LICENSE) — 欢迎自由使用、修改与分发。
