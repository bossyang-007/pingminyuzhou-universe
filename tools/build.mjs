// 可选 · 单文件打包器（实验性）
// 把原生 ES 模块内联成一個独立 HTML（含 three.min.js），方便分发。
// 用法：node tools/build.mjs  →  生成 dist/pingmin-yuzhou.html（双击即玩）
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..'); // 本文件在 tools/ 下，仓库根即上级目录

// 依赖顺序：被依赖者在前
const ORDER = [
  'src/config.js',
  'src/content/scenes.js',
  'src/content/identities.js',
  'src/content/actions.js',
  'src/content/ads.js',
  'src/content/index.js',
  'src/systems/store.js',
  'src/systems/save.js',
  'src/systems/lifeEngine.js',
  'src/systems/eventSystem.js',
  'src/engine/world.js',
  'src/engine/sceneManager.js',
  'src/engine/avatar.js',
  'src/engine/input.js',
  'src/engine/holo.js',
  'src/engine/camera.js',
  'src/ui/ui.js',
  'src/main.js',
];

function strip(code) {
  return code
    .replace(/\n\s*import\s+\{[^}]*\}\s*from\s*['"][^'"]+['"];?/g, '')
    .replace(/\n\s*import\s+[^\n]*?from\s*['"][^'"]+['"];?/g, '')
    .replace(/export\s*\{[^}]*\}\s*from\s*['"][^'"]+['"];?/g, '')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s+/g, '')
    .replace(/const THREE = window\.THREE;\s*/g, ''); // 全局 THREE 由头部统一定义
}

async function main() {
  let bundle = 'const THREE = window.THREE;\n\n';
  for (const rel of ORDER) {
    const raw = await readFile(join(ROOT, rel), 'utf8');
    bundle += '/* === ' + rel + ' === */\n' + strip(raw) + '\n\n';
  }

  // 语法校验（仅解析，不执行）
  try { new vm.Script(bundle); } catch (e) { console.error('  ✗ 打包语法错误:', e.message); process.exit(1); }

  const three = await readFile(join(ROOT, 'three.min.js'), 'utf8');
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>平民宇宙 · 人生模拟（单文件版）</title>
<style>html,body{margin:0;height:100%;overflow:hidden;background:#0e1620;}</style>
</head>
<body>
<script>${three}</script>
<script>${bundle}</script>
</body>
</html>`;

  await mkdir(join(ROOT, 'dist'), { recursive: true });
  const out = join(ROOT, 'dist', 'pingmin-yuzhou.html');
  await writeFile(out, html, 'utf8');
  console.log('  ✓ 已生成单文件:', out);
}

main().catch((e) => { console.error('  ✗ 打包失败:', e.message); process.exit(1); });
