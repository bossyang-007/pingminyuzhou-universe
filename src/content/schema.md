# 内容配置规范 · SCHEMA

所有内容都是**纯数据**（JS 对象），引擎据此生成 3D 与玩法。改内容不动引擎。

## 场景 Scene

```js
{
  id: 'home',                 // 唯一标识（字符串）
  name: '温馨小家',            // 显示名
  sky: '#c9b79a',             // 天空/背景色（十六进制）
  ground: '#b98c5a',          // 地面色
  fog: 0.01,                  // 雾浓度（0 = 无，越大越朦胧）
  spawn: [0, 0, 4],           // 玩家出生点 [x, y, z]
  props: [ /* 见下 */ ],      // 静态道具
  spots: [ /* 见下 */ ],        // 可互动发光点
  groundTex: 'assets/scenes/<id>/floor.png', // 可选：地面贴图，缺失时降级为纯色 ground
  meta: {                      // 可选：作者/风格/素材溯源
    author: '昵称', style: '赛博/古风/治愈…',
    art: 'assets/scenes/<id>/concept.png', note: '灵感来源'
  }
}
```

### 道具 Prop（`props[]`）

| 字段 | 必填 | 说明 |
|------|------|------|
| `type` | ✅ | `box` / `cyl` / `cone` / `sphere` |
| `pos` | ✅ | `[x, y, z]` 中心坐标 |
| `size` | ✅ | `box`→`[宽,高,深]`；`cyl`/`cone`→`[半径,高]`；`sphere`→`[半径]` |
| `color` | ✅ | 十六进制颜色 |
| `emissive` | ❌ | 自发光色（做灯/霓虹），如 `'#ffb347'` |
| `rotY` | ❌ | 绕 Y 轴旋转（弧度） |
| `texture` | ❌ | 道具表面贴图路径，如 `'assets/scenes/<id>/sofa.png'`；缺失时降级为纯色 `color` |

### 互动点 Spot（`spots[]`）

```js
{
  id: 'kitchen',              // 唯一标识
  label: '厨房',              // 走近显示的提示名
  pos: [3.6, 0, -3.4],        // 位置
  radius: 2.4,                // 进入此半径内提示「互动」
  intro: '锅铲碰撞，香味钻进鼻子。', // 靠近时的描述
  event: {                    // 点击互动弹出的事件（见下）
    title, desc, choices[]
  }
}
```

### 事件 Event（`event`）

```js
{
  title: '在厨房折腾一顿饭',
  desc: '你决定给自己做点好吃的。',
  choices: [
    {
      label: '认真做饭',
      hint: '快乐+4 健康+3',         // 仅展示用
      effect: { happy: 4, health: 3 } // 实际结算；支持 health/happy/energy/knowledge/social/reputation/money
    }
  ]
}
```

- `effect` 数值：正加负减，超出 `0~100` 的属性会被钳制；`money` 可负。
- 互动事件为即时探索，**不推进年份**（与年度行动相互独立）。

## 身份 Identity（`identities[]`）

```js
{
  id: 'worker', name: '打工人', ico: '💼',
  desc: '朝九晚五，工资稳定但自由有限。',
  money: 3000,                          // 初始金钱
  attrs: { health, happy, energy, knowledge, social, reputation } // 初始属性（0~100）
}
```

## 年度行动 Action（`actions[]`）

```js
{ id, name, ico, desc, effect: { ... } }
```

每年从 `actions` 中挑选执行，`effect` 直接结算到状态并推进一年。

## 广告 Ad（`ads[]`）

```js
{ id, tag, ico, title, sub, url }
```

`url` 留空表示仅展示；填入则点击跳转（控制台广告位使用）。

---

## 校验

- 新增内容后运行 `node tools/creator-god/generate.mjs --check` 可做基础 schema 校验（字段完整性）。
- 生成工具产出的场景默认符合本规范。
