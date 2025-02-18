const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware/access-token');

router.get("/get-user", authenticateToken, async (req, res) => {
  try {
      const user = await req.db("users")
          .where({ id: req.user.id }) // ใช้ token หรือ student_id ที่ตรงกับ backend
          .first();
      if (user) {
          res.json({ ok: 1, user }); // ส่งข้อมูลกลับ
      } else {
          res.json({ ok: 0, error: "ไม่พบข้อมูลผู้ใช้" });
      }
  } catch (error) {
      res.status(500).json({ ok: 0, error: error.message });
  }
});

module.exports = router;