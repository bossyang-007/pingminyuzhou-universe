// 场景聚合脚本 · 依据 src/content/scenes/*.js 自动生成 index.js
// 设计初衷：每位成员（含创始神）只往 scenes/ 目录加自己的 <id>.js 文件，
// 从不手改聚合器，从而彻底消灭「多人同时改同一文件」的冲突。
//
// 直接运行：node tools/sync-scenes.mjs
import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIR = join(ROOT, 'src', 'content', 'scenes');
const INDEX = join(DIR, 'index.js');
const EXCLUDE = new Set(['registry.js', 'index.js']);

export async function syncScenes() {
  const all = (await readdir(DIR))
    .filter((f) => f.endsWith('.js') && !EXCLUDE.has(f))
    .sort();
  const imports = all.map((f) => `import './${f}';`).join('\n');
  const banner =
    '// 本文件由 tools/sync-scenes.mjs 自动生成，请勿手改。\n' +
    '// 运行 `npm run sync` 可依据 src/content/scenes/*.js 重新生成。\n' +
    '// 每个场景分包通过 SCENE_REGISTRY.push(...) 注册，这里统一导出。\n';
  const body =
    `${imports}\n` +
    "import { SCENE_REGISTRY } from './registry.js';\n\n" +
    'export const scenes = SCENE_REGISTRY;\n';
  await writeFile(INDEX, banner + body, 'utf8');
  return all.length;
}

// 直接运行时执行
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  syncScenes()
    .then((n) => console.log(`  ✓ 已聚合 ${n} 个场景分包 → src/content/scenes/index.js`))
    .catch((e) => { console.error('  ✗ sync 失败:', e.message); process.exit(1); });
}
