// 场景注册表 · 所有分包场景通过 push 注册，引擎统一消费。
// 采用「注册表」而非静态 import 数组，是为了：
//   ① 每个分包文件只依赖 registry，彼此零依赖、零冲突（多人/创始神各写各的文件）；
//   ② 兼容 tools/build.mjs 的静态内联打包（push 在同一作用域顺序执行即可，符号不跨文件）。
export const SCENE_REGISTRY = [];
