import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../dist/web");
const prefix = "/demos/vinty-pos";
const port = Number(process.env.PORT || 4173);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid PORT.");
await stat(resolve(root, "index.html")).catch(() => { throw new Error("Run npm run build:web before npm run preview."); });
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon" };
const server = createServer(async (request, response) => {
  try {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" }).end(); return;
    }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (pathname === "/" || pathname === prefix || pathname === prefix + "/") {
      response.writeHead(302, { Location: prefix + "/index.html" }).end(); return;
    }
    if (!pathname.startsWith(prefix + "/")) { response.writeHead(404).end("Not found"); return; }
    const file = resolve(root, "." + pathname.slice(prefix.length));
    if (!file.startsWith(root + sep)) { response.writeHead(404).end("Not found"); return; }
    const content = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    response.writeHead(error instanceof URIError ? 400 : 404).end("Not found");
  }
});
server.listen(port, "127.0.0.1", () => console.log("Vinty POS: http://127.0.0.1:" + port + prefix + "/index.html"));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.close(() => process.exit(0)));
