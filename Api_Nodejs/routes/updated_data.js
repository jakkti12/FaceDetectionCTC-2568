const express = require("express");
const crypto = require('crypto');
const router = express.Router();
const authenticateToken = require('../middleware/access-token');

router.post('/update-student_status', async (req, res) => {
  try {
    const { week_id, day_id, student_id, student_status } = req.body.params;

    await req.db('check_line')
      .where({ week: week_id, day_id, student_id })
      .update({ 
        student_status
      });

    res.status(200).json({ ok: 1, message: 'อัปเดตข้อมูลสำเร็จ' });
  } catch (error) {
    res.status(500).json({ ok: 0, error: error.message });
  }
});




module.exports = router;