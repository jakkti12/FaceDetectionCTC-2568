const express = require("express");
const session = require('express-session');
const cors = require('cors');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const SECRET_KEY = '123456';
const axios = require('axios');
const exec = require('child_process').exec;

router.use(cors());
router.use(express.json());

router.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// Login user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      // ค้นหาผู้ใช้ในฐานข้อมูล
      const row = await req.db('users')
        .where({ username })
        .first();
      if (row) {
        // สร้าง MD5 hash ของรหัสผ่านที่ป้อนเข้ามา
        const HashedPassword = crypto.createHash('md5').update(password).digest('hex');
        // เปรียบเทียบรหัสผ่านที่ป้อนเข้ามากับรหัสผ่านในฐานข้อมูล
        if (HashedPassword === row.password) {
          const token = jwt.sign({ id: row.id}, SECRET_KEY, { expiresIn: '1h' });
  
          res.status(200).json({ 
            message: 'เข้าสู่ระบบสําเร็จ',
            token: token,
          });
        } else {
          res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
        }
      } else {
        res.status(401).json({ message: 'ชื่อผู้ใช้ไม่ถูกต้อง' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Register user
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
      return res.status(400).send({ ok: 0, error: 'username and staffId are required' });
  }

  // Pass username and staffId as command-line arguments to the Python script
  const command = `python3 python/register.py ${username} ${email} ${password}`;

  exec(command, (error, stdout, stderr) => {
      if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send({ ok: 0, error: 'Error running Python script' });
      }
      res.send({ ok: 1, output: stdout });
  });
});

// Logout user
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send({ ok: 0, error: 'Logout failed' });
      }
        return res.status(200).send({ ok: 1, message: 'Logout successful' });
    });
});

module.exports = router;