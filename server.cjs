const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const page = fs.readFileSync(path.join(__dirname, 'public/index.html'));
http.createServer((req, res) => {
  if (req.url !== '/') { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(Number(process.env.PORT || 8080), '0.0.0.0');
