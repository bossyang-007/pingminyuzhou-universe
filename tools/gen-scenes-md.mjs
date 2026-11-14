// 场景共创荣誉墙生成器
// 扫描 src/content/scenes/index.js，列出所有已合并场景与作者，写出 SCENES.md。
// 用法：node tools/gen-scenes-md.mjs  （或 npm run scenes；build 时也会自动调用）
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INDEX = join(ROOT, 'src', 'content', 'scenes', 'index.js');
const OUT = join(ROOT, 'SCENES.md');

const mod = await import('file://' + INDEX);
const scenes = mod.scenes || [];

const rows = scenes.map((s) => {
  const meta = s.meta || {};
  const author = meta.author || '—';
  const style = meta.style || '—';
  const props = (s.props || []).length;
  const spots = (s.spots || []).length;
  return `| ${s.name} | ${author} | ${style} | ${props} | ${spots} |`;
}).join('\n');

const md = `# 平民宇宙 · 场景共创荣誉墙

> 本文件由 \`npm run scenes\` 自动生成，列出所有已合并进正式版的场景与作者。
> 每一位成员的自由创作都在这里留名——这就是「平民共创」的勋章墙。

| 场景 | 作者 | 风格 | 道具数 | 互动点 |
|------|------|------|--------|--------|
${rows}

---

想让自己的场景出现在这里？阅读 [docs/场景协作规范.md](./docs/场景协作规范.md)：写一个 \`src/content/scenes/<你的id>.js\`，提 PR 合并进 \`main\`，本墙会自动更新。
`;

await writeFile(OUT, md, 'utf8');
console.log(`  ✓ 已生成 SCENES.md（${scenes.length} 个场景）`);
