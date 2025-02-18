const express = require("express");
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

router.use(bodyParser.json());
router.use(cors());
router.use(express.json());

const SECRET_KEY = '123456';

// ดึงข้อมูลจากตาราง users
router.get('/list-users', async (req, res) => {
    try {
      let result = await req.db.select('*')
      .where('activated', 1)
        .from('users');
      res.send({ 
        ok: 1,
        users: result
      });
    } catch (error) {
      res.status(500).send({ ok: 0, error: error.message });
    }
});

router.get('/list-users-all', async (req, res) => {
  try {
    let result = await req.db('users')
      .select('users.*', 'groups.group_name')
      .join('groups', 'users.group_id', '=', 'groups.id')
      .where('users.activated', 1);
    res.send({ 
      ok: 1,
      users: result
    });
  } catch (error) {
    res.status(500).send({ ok: 0, error: error.message });
  }
});

router.get('/list-checkins', async (req, res) => {
  try {
    let result = await req.db.select('*').from('check_in');
    res.send({ 
      ok: 1, 
      check_in: result 
    });
  } catch (error) {
    res.status(500).send({ ok: 0, error: error.message });
  }
});

router.post('/delete-user-by-id', async (req, res) => {
  const { id } = req.body; // รับ id จาก body
  console.log(id);

  try {
    await req.db.transaction(async (trx) => {
      // ทำการเปลี่ยนค่า status ในฐานข้อมูลให้เป็น 0
      await trx('users')
        .where({ id })
        .update({ activated: 0 });
    });

    res.status(200).json({ ok: 1, message: 'ลบผู้ใช้สำเร็จ' });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
});

router.post('/bypass-user', async (req, res) => {
  const { id } = req.body;  // ดึงค่า id จาก body
  console.log(id);

  try {
    // ค้นหาผู้ใช้ในฐานข้อมูล
    const row = await req.db('users')
      .where({ id })
      .first();
    if (row) {
      // ทำการบันทึก token เข้า LocalStorage
      const token = jwt.sign({ id: row.id}, SECRET_KEY, { expiresIn: '1h' });

      res.status(200).json({ 
        message: 'เข้าสู่ระบบสําเร็จ',
        token: token,
      });
    } else {
      res.status(401).json({ message: 'ชื่อผู้ใช้ไม่ถูกต้อง' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

router.post('/create-user', async (req, res) => {
  const { username, password, user_type, group_id, profile,  } = req.body;

  const HashedPassword = crypto.createHash('md5').update(password).digest('hex');

  try {
    const [newUserId] = await req.db('users').insert({
      username,
      password:HashedPassword,
      profile,
      group_id,
      user_type,
    });

    const newUser = await req.db('users').where({ id: newUserId }).first();
    res.status(200).json({ ok: 1, user: newUser });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
});

router.post('/update-user', async (req, res) => {
  const { id, username, NewPassword, profile, user_type, group_id } = req.body;
  console.log(NewPassword);

  try {
    await req.db('users')
      .where({ id })
      .update({ 
        username, 
        profile, 
        user_type, 
        group_id });

    res.status(200).json({ ok: 1, message: 'อัปเดตข้อมูลสำเร็จ' });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
});

router.post('/change-password', async (req, res) => {
  const { id, NewPassword } = req.body;
  const HashedPassword = crypto.createHash('md5').update(NewPassword).digest('hex');

  try {
    await req.db('users')
      .where({ id })
      .update({ password: HashedPassword });

    res.status(200).json({ ok: 1, message: 'อัปเดตข้อมูลสำเร็จ' });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
})

router.post('/upload-excel', async (req, res) => {
  const users = req.body.users;

  try {
    // ใช้ Knex ในการบันทึกข้อมูลผู้ใช้
    for (const user of users) {
      await req.db('users').insert(user);  // เพิ่มข้อมูลลงในตาราง 'users'
    }

    res.status(200).json({ message: "Data uploaded successfully" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error uploading data", error: error.message });
  }
});

module.exports = router;