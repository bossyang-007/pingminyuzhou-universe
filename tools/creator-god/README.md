# 创始神 · AI 内容生成工具

平民宇宙的世界由**纯数据**（场景配置）描述，因此可以让一个 AI agent 扮演「创始神」，自动为宇宙**生长出新地图**。这就是内容驱动架构的威力：AI 的输出是合法配置，引擎直接消费，**无需改任何代码**。

## 快速使用

```bash
# 生成一张新地图（模板 + 关键词，离线可用）
node tools/creator-god/generate.mjs "一座海边灯塔小镇，宁静治愈"

# 校验现有场景是否符合 schema
node tools/creator-god/generate.mjs --check
```

生成后刷新游戏，在右上角 ☰ 场景菜单里就能看到新地块。

## 它做了什么

1. 把自然语言 prompt 解析成 `scene` 配置对象（天空/地面色、道具、互动点、事件）；
2. 插入 `src/content/scenes.js` 数组末尾；
3. 下次刷新即被场景管理器读入并渲染。

## 接入大模型（可选）

默认用内置模板，开箱即用。若要更丰富的生成，设置环境变量后工具会调用大模型增强描述与配色，失败自动回退模板：

```bash
export LLM_ENDPOINT="https://你的兼容端点/v1/chat/completions"
export LLM_API_KEY="sk-xxxx"
node tools/creator-god/generate.mjs "赛博朋克地下集市"
```

## 让创始神自动长地图（定时自动化）

本工具是无状态的纯函数，非常适合挂成**定时任务 / 自动化**：

- 每天/每周自动跑一次，给宇宙添一块新地；
- 也可以编排成「先用大模型构思世界观 → 再生成地图 → 提交 PR」的工作流；
- 小红猫（本仓库 AI 协管）可被随时召唤来执行它。

## 配置规范

生成结果严格遵循 [src/content/schema.md](../../src/content/schema.md)。任何新场景都必须可被 `--check` 校验通过。
