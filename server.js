const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const UPLOAD_DIR = path.join(ROOT, 'uploads');

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// MIME类型
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// 简单的session存储（本地使用足够）
const sessions = new Set();
// 默认密码：admin321
function initAuth() {
  const authPath = path.join(DATA_DIR, 'auth.json');
  if (!fs.existsSync(authPath)) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync('admin321', salt, 10000, 64, 'sha512').toString('hex');
    fs.writeFileSync(authPath, JSON.stringify({ salt, hash }));
  }
}
initAuth();

// 密码验证
function verifyPassword(password) {
  const authPath = path.join(DATA_DIR, 'auth.json');
  const auth = JSON.parse(fs.readFileSync(authPath, 'utf8'));
  const hash = crypto.pbkdf2Sync(password, auth.salt, 10000, 64, 'sha512').toString('hex');
  return hash === auth.hash;
}

// 生成token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// 读取JSON文件
function readJson(filePath, defaultValue = {}) {
  try {
    if (!fs.existsSync(filePath)) return defaultValue;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return defaultValue;
  }
}

// 写入JSON文件
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// 解析POST请求体
function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks);
      // 判断是否是multipart/form-data（文件上传）
      const contentType = req.headers['content-type'] || '';
      if (contentType.includes('multipart/form-data')) {
        resolve(parseMultipart(body, contentType));
      } else {
        try {
          resolve(JSON.parse(body.toString() || '{}'));
        } catch (e) {
          resolve({});
        }
      }
    });
    req.on('error', reject);
  });
}

// 简单的multipart解析（处理单文件上传）
function parseMultipart(body, contentType) {
  const boundary = '--' + contentType.split('boundary=')[1];
  const parts = body.split(boundary).slice(1, -1);
  const result = { files: {} };
  
  for (const part of parts) {
    if (part.length < 10) continue;
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) continue;
    const headers = part.slice(0, headerEnd).toString();
    const content = part.slice(headerEnd + 4, part.length - 2);
    
    const nameMatch = headers.match(/name="([^"]+)"/);
    if (!nameMatch) continue;
    const name = nameMatch[1];
    
    const filenameMatch = headers.match(/filename="([^"]+)"/);
    if (filenameMatch) {
      // 文件字段
      const filename = filenameMatch[1];
      const ext = path.extname(filename);
      const safeName = Date.now() + '_' + crypto.randomBytes(4).toString('hex') + ext;
      result.files[name] = {
        filename: safeName,
        originalName: filename,
        content: content
      };
    } else {
      // 普通字段
      result[name] = content.toString().trim();
    }
  }
  return result;
}

// 发送JSON响应
function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// 验证登录中间件
function requireAuth(req) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  return token && sessions.has(token);
}

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = urlObj.pathname;

  // API路由
  if (pathname.startsWith('/api/')) {
    // 登录接口
    if (pathname === '/api/login' && req.method === 'POST') {
      const body = await parseBody(req);
      const { password } = body;
      if (verifyPassword(password)) {
        const token = generateToken();
        sessions.add(token);
        sendJson(res, 200, { success: true, token });
      } else {
        sendJson(res, 401, { success: false, message: '密码错误' });
      }
      return;
    }

    // 以下接口需要登录
    if (!requireAuth(req)) {
      sendJson(res, 401, { success: false, message: '未登录' });
      return;
    }

    // 修改密码
    if (pathname === '/api/change-password' && req.method === 'POST') {
      const body = await parseBody(req);
      const { oldPassword, newPassword } = body;
      if (!verifyPassword(oldPassword)) {
        sendJson(res, 400, { success: false, message: '原密码错误' });
        return;
      }
      if (!newPassword || newPassword.length < 6) {
        sendJson(res, 400, { success: false, message: '新密码长度不能少于6位' });
        return;
      }
      const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto.pbkdf2Sync(newPassword, salt, 10000, 64, 'sha512').toString('hex');
      writeJson(path.join(DATA_DIR, 'auth.json'), { salt, hash });
      sessions.clear(); // 修改密码后清空所有session
      sendJson(res, 200, { success: true, message: '密码修改成功' });
      return;
    }

    // 提交配置表单（前台也可以调用，不需要登录？不对，用户提交配置是前台用户提交，所以这个接口不需要登录）
    // 哦，刚才的requireAuth放错了，提交配置应该不需要登录，调整下
  }

  // 提交配置（公开接口）
  if (pathname === '/api/submit-config' && req.method === 'POST') {
    const body = await parseBody(req);
    const submissions = readJson(path.join(DATA_DIR, 'submissions.json'), []);
    submissions.unshift({
      id: Date.now(),
      submitTime: new Date().toISOString(),
      data: body
    });
    writeJson(path.join(DATA_DIR, 'submissions.json'), submissions);
    sendJson(res, 200, { success: true, message: '提交成功' });
    return;
  }

  // 获取提交记录（需要登录）
  if (pathname === '/api/submissions' && req.method === 'GET') {
    if (!requireAuth(req)) {
      sendJson(res, 401, { success: false, message: '未登录' });
      return;
    }
    const submissions = readJson(path.join(DATA_DIR, 'submissions.json'), []);
    sendJson(res, 200, { success: true, data: submissions });
    return;
  }

  // 删除提交记录
  if (pathname.startsWith('/api/submissions/') && req.method === 'DELETE') {
    if (!requireAuth(req)) {
      sendJson(res, 401, { success: false, message: '未登录' });
      return;
    }
    const id = parseInt(pathname.split('/').pop());
    let submissions = readJson(path.join(DATA_DIR, 'submissions.json'), []);
    submissions = submissions.filter(item => item.id !== id);
    writeJson(path.join(DATA_DIR, 'submissions.json'), submissions);
    sendJson(res, 200, { success: true });
    return;
  }

  // 获取站点内容（公开接口，前台加载用）
  if (pathname === '/api/site-content' && req.method === 'GET') {
    const content = readJson(path.join(DATA_DIR, 'site-content.json'), {});
    sendJson(res, 200, { success: true, data: content });
    return;
  }

  // 保存站点内容（需要登录）
  if (pathname === '/api/save-content' && req.method === 'POST') {
    if (!requireAuth(req)) {
      sendJson(res, 401, { success: false, message: '未登录' });
      return;
    }
    const body = await parseBody(req);
    writeJson(path.join(DATA_DIR, 'site-content.json'), body);
    sendJson(res, 200, { success: true, message: '保存成功' });
    return;
  }

  // 上传图片（需要登录）
  if (pathname === '/api/upload' && req.method === 'POST') {
    if (!requireAuth(req)) {
      sendJson(res, 401, { success: false, message: '未登录' });
      return;
    }
    const body = await parseBody(req);
    if (!body.files || !body.files.image) {
      sendJson(res, 400, { success: false, message: '请选择图片' });
      return;
    }
    const file = body.files.image;
    const filePath = path.join(UPLOAD_DIR, file.filename);
    fs.writeFileSync(filePath, file.content);
    sendJson(res, 200, { success: true, url: 'uploads/' + file.filename });
    return;
  }

  // 静态文件服务
  let filePath;
  if (pathname === '/') {
    filePath = path.join(ROOT, 'index.html');
  } else {
    filePath = path.join(ROOT, pathname);
    // 如果是目录，自动加载index.html
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch (e) {
      // 文件不存在，后续404处理
    }
  }
  // 处理uploads目录
  if (pathname.startsWith('/uploads/')) {
    filePath = path.join(ROOT, pathname);
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`后台地址: http://localhost:${PORT}/admin/`);
  console.log(`默认后台密码: admin123`);
});
