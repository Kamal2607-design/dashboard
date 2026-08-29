const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* Demo credentials — frontend validates format; this endpoint accepts any valid payload */
const DEMO_USER = {
  email: 'leo@sterna.com',
  name: 'Leo',
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address' });
  }

  if (password.length < 8) {
    return res.status(400).json({ success: false, message: 'Password should contain a minimum of 8 characters' });
  }

  return res.json({
    success: true,
    message: 'Login successful',
    user: { email, name: DEMO_USER.name },
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', network: 'Online' });
});

/* Serve built React app in production */
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`SELYEK server running on http://localhost:${PORT}`);
});
