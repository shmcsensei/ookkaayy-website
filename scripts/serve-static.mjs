import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';

const root = join(import.meta.dirname, '..', 'out');
const port = Number(process.env.PORT ?? 3000);
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  const relativePath = pathname.replace(/^\/+/, '');
  if (relativePath.split('/').includes('..')) {
    response.statusCode = 400;
    response.end('Invalid path');
    return;
  }
  let file = join(root, relativePath);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    await stat(file);
  } catch {
    file = join(root, '404.html');
    response.statusCode = 404;
  }
  response.setHeader('Content-Type', contentTypes[extname(file)] ?? 'application/octet-stream');
  createReadStream(file).pipe(response);
}).listen(port, () => console.log(`Static site available at http://localhost:${port}`));
