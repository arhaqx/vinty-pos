import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const result = spawnSync(process.execPath, [
  resolve(root, "node_modules/expo/bin/cli"), "export", "--platform", "web",
  "--output-dir", resolve(root, "dist/web"), "--max-workers", "2",
], {
  cwd: root,
  env: { ...process.env, EXPO_NO_TELEMETRY: "1", EXPO_OFFLINE: "1", CI: "1" },
  stdio: "inherit",
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const htmlPath = resolve(root, "dist/web/index.html");
writeFileSync(htmlPath, readFileSync(htmlPath, "utf8").replace('<html lang="en">', '<html lang="id">'));
let sourceCommit = null;
let workingTreeDirty = null;
try {
  sourceCommit = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  workingTreeDirty = execFileSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" }).trim().length > 0;
} catch { /* Source archives can be built without Git metadata. */ }
const { version } = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
writeFileSync(resolve(root, "dist/web/build-info.json"), JSON.stringify({
  sourceRepository: "https://github.com/arhaqx/veloce-landing-page",
  sourceCommit, workingTreeDirty, version, builtAt: new Date().toISOString(),
}, null, 2) + "\n");
console.log("Vinty POS web build: dist/web");
