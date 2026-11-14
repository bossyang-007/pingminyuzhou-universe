# 贡献指南 · CONTRIBUTING

欢迎来到平民宇宙！这里大多数贡献**只改数据、不动引擎**。

## 0. 环境

```bash
npm run dev      # 启动 http://localhost:5173
```

## 1. 我想加一张新地图（最常见）

打开 `src/content/scenes.js`，在数组里追加一个场景对象：

```js
{
  id: 'lighthouse',
  name: '海边灯塔',
  sky: '#9ec9e0',
  ground: '#d9c7a3',
  fog: 0.012,
  spawn: [0, 0, 6],
  props: [
    { type: 'cyl', pos: [0, 4, -8], size: [1.2, 8], color: '#e8e2d0', rotY: 0 },
    { type: 'cone', pos: [0, 9, -8], size: [1.6, 2], color: '#d8553a' },
    { type: 'box', pos: [4, 0.4, 2], size: [3, 0.8, 2], color: '#7a9aa8' },
  ],
  spots: [
    {
      id: 'deck', label: '观海平台', pos: [0, 0, 4], radius: 2.2,
      intro: '海风拂面，远处的货轮缓缓驶过。',
      event: {
        title: '在灯塔下远眺',
        desc: '你望着海平面发呆，突然想明白了一件事。',
        choices: [
          { label: '记录灵感', hint: '知识+3 快乐+2', effect: { knowledge: 3, happy: 2 } },
          { label: '继续发呆', hint: '精力+4', effect: { energy: 4 } },
        ],
      },
    },
  ],
}
```

保存刷新即可看到新场景出现在场景切换菜单。**无需改任何引擎代码。**

### 或者直接召唤创始神

```bash
npm run god -- "一座海边灯塔小镇，宁静治愈"
```

AI 会按上面的 schema 生成场景并自动插入 `scenes.js`。

## 2. 道具（props）类型速查

| type | size 含义 | 说明 |
|------|-----------|------|
| `box` | `[宽, 高, 深]` | 方体（家具/建筑） |
| `cyl` | `[半径, 高]` | 圆柱（树/柱/灯） |
| `cone` | `[半径, 高]` | 圆锥（屋顶/树冠） |
| `sphere` | `[半径]` | 球体（灯/装饰） |
| `plane` | `[宽, 深]` | 平面（默认地面已自动生成，少用） |

可选字段：`color`（十六进制）、`emissive`（自发光色，做霓虹/灯）、`rotY`（弧度旋转）。

## 3. 互动点（spots）与事件（event）

- `radius` 是玩家走进多近会提示「互动」。
- `event.choices[].effect` 支持的属性键：`health / happy / energy / knowledge / social / reputation / money`。
- 数值为正加、为负减；超出 0~100 会被钳制。

## 4. 加身份 / 年度行动 / 广告

- 身份：`src/content/identities.js`（含初始金钱与属性修正）。
- 年度行动：`src/content/actions.js`（每年 8 选做，effect 同上）。
- 广告：`src/content/ads.js`（漂浮广告牌与控制台广告位数据）。

## 5. 改引擎 / 系统 / UI（进阶）

- 引擎：`src/engine/*` —— 只动「如何把配置变成 3D / 交互」。
- 系统：`src/systems/*` —— 只动「游戏规则与数值」。
- UI：`src/ui/ui.js` —— 只动「如何呈现状态与操作」。
- 保持依赖单向：上层用下层，下层不反向依赖。

## 6. 提交规范

1. 从 `main` 切特性分支：`git checkout -b feat/xxx`
2. 自测：`npm run dev` 打开浏览器确认无报错
3. PR 写明：「改了什么 / 属于哪一层 / 如何验证」
4. 评审通过后合并

## 7. 代码风格

- 原生 ES Module，`import` / `export` 显式声明。
- 不引入未声明全局；引擎模块通过 `const THREE = window.THREE` 取全局。
- 中文注释、见名知意；函数保持单一职责。
- 不要触碰 `legacy/` 下的 v1 单文件，那是历史对照。
