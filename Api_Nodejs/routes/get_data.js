const express = require("express");
const crypto = require('crypto');
const router = express.Router();
const authenticateToken = require('../middleware/access-token');

router.get('/users', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;
        const users = await req.db('users').where({ id }).first();
        res.send({ ok: 1, users: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});
router.get('/get-user-by-teacher', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;
        const user = await req.db('users').where({ id }).first();

        if (!user || !user.group_id) {
            return res.status(400).send({ ok: 0, message: 'User does not have a group' });
        }

        const group_id = user.group_id;

        const studentCounts = await req.db('users')
            .where({ 'users.user_type': 'student', 'users.group_id' : group_id })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .count('* as count');

        const students = await req.db('users')
            .where({ 'users.user_type': 'student', 'users.group_id' : group_id })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .select(
                'users.id as student_id',
                'users.username as student_username',
                'users.firstname as student_firstname',
                'users.lastname as student_lastname',
                'users.email as student_email',
                'users.user_type as student_type',
                'groups.room_id as room_id',
                'groups.group_name as student_room',
                'users.activated as user_status',
                'users.profile as student_profile'
                
            );

        res.send({ ok: 1, students: students, studentCounts: studentCounts });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ ok: 0, message: 'Server error' });
    }
});

router.get('/weeks', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;

        const weekColumns = await req.db('users')
            .where({ 'users.id': id, 'group_weeks.status': '1' })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id') // เปลี่ยนจาก rooms เป็น room
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id') // เปลี่ยน rooms.week_id
            .count('* as count');
            
        const weeks = await req.db('users')
            .where({ 'users.id': id, 'group_weeks.status': '1'  })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id') // เปลี่ยนจาก rooms เป็น room
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id') // เปลี่ยน rooms.week_id
            .select(
                'group_weeks.id as id',
                'group_weeks.week as week',
                'group_weeks.join_start as start',
                'group_weeks.join_end as end',
                'rooms.room as room',
                'group_weeks.status as status'
            );

        if (!weeks) {
            return res.status(404).send({ ok: 0, message: "Weeks not found" });
        }
        res.send({ ok: 1, weeks: weeks, weekColumns: weekColumns});
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/check-lines', authenticateToken, async (req, res) => {
    try {
      const id = req.user.id;
      const { week_id, day_id } = req.query;

      const check_lines = await req.db('check_line')
        .where({
          'check_line.teacher_id': id,
          'check_line.week': week_id,
          'check_line.day_id': day_id,
          'check_line.student_status': '1',
          'check_line.status': '1',
        });
  
      const check_lines_user = await req.db('check_line')
        .where({
          'check_line.teacher_id': id,
          'check_line.week': week_id,
          'check_line.day_id': day_id,
          'check_line.status': '1',
        })
        .join('users', 'check_line.student_id', '=', 'users.id')
        .select(
            'check_line.id as check_line_id',
            'users.id as student_id',
            'users.username as student_username',
            'users.email as student_email',
            'check_line.teacher_id as teacher_id',
            'check_line.week as week',
            'check_line.student_status as student_status',
            'check_line.picture as picture',
        );
  
      if (!check_lines) {
        return res.status(404).send({ ok: 0, message: "check_lines not found" });
      }
      res.send({ ok: 1, check_lines: check_lines, check_lines_user: check_lines_user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/check-lines-by-id', authenticateToken, async (req, res) => {
    try {
      const { student_id } = req.query;

      const check_lines_by_id = await req.db('check_line')
        .where({
          'check_line.student_id': student_id,
        })
        .select(
            'check_line.id as check_line_id',
            'check_line.student_id as student_id',
            'check_line.teacher_id as teacher_id',
            'check_line.week as week',
            'check_line.day_id as day_id',
            'check_line.student_status as student_status',
            'check_line.picture as picture',
        );
  
      if (!check_lines_by_id) {
        return res.status(404).send({ ok: 0, message: "check_lines not found" });
      }
      res.send({ ok: 1, check_lines_by_id: check_lines_by_id});
    } catch (error) {
      console.error(error);
      res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/check-lines-by-ids', authenticateToken, async (req, res) => {
    try {
        const { student_id } = req.query;

        // แปลง student_id เป็น array หากเป็น string
        const studentIds = Array.isArray(student_id) ? student_id : [student_id];

        // ใช้ whereIn เพื่อดึงข้อมูลของนักเรียนทั้งหมดใน array
        const check_lines_by_ids = await req.db('users')
            .whereIn('users.id', studentIds) // ใช้ whereIn แทน where
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id')
            .join('group_days', 'group_weeks.week', '=', 'group_days.week_id') 
            .select(
                'users.id as student_id',
                'users.username as student_username',
                'group_days.id as day_id',
                'group_days.week_id as week_id',
                'group_days.day as days',
                'group_days.join_start as start',
                'group_days.join_end as end',
                'group_days.status as status'
            );
            

        if (!check_lines_by_ids || check_lines_by_ids.length === 0) {
            return res.status(404).send({ ok: 0, message: "check_lines not found" });
        }

        res.send({ ok: 1, check_lines_by_ids: check_lines_by_ids });
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/check-lines-by-week-day', authenticateToken, async (req, res) => {
    try {
      const { week_id, day_id } = req.query;

      const check_lines_by_id = await req.db('check_line')
        .where({
          'check_line.week': week_id,
          'check_line.day_id': day_id,
        })
        .select(
            'check_line.id as check_line_id',
            'check_line.student_id as student_id',
            'check_line.teacher_id as teacher_id',
            'check_line.week as week',
            'check_line.day_id as day_id',
            'check_line.student_status as student_status',
            'check_line.picture as picture',
        );
  
      if (!check_lines_by_id) {
        return res.status(404).send({ ok: 0, message: "check_lines not found" });
      }
      res.send({ ok: 1, check_lines_by_id: check_lines_by_id});
    } catch (error) {
      console.error(error);
      res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/days', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;
        const { week_id } = req.query;

        const dayColumns = await req.db('users')
            .where({ 'users.id': id, 'group_days.week_id': week_id })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id')
            .join('group_days', 'group_weeks.week', '=', 'group_days.week_id') 
            .count('* as count');
            
        const days = await req.db('users')
            .where({ 'users.id': id, 'group_days.week_id': week_id})
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id')
            .join('group_days', 'group_weeks.week', '=', 'group_days.week_id') 
            .select(
                'group_days.id as id',
                'group_days.week_id as week_id',
                'group_days.day as day',
                'group_days.join_start as start',
                'group_days.join_end as end',
                'group_days.status as status'
            );

        if (!days) {
            return res.status(404).send({ ok: 0, message: "Weeks not found" });
        }
        res.send({ ok: 1, days: days, dayColumns: dayColumns});
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/percentage-lineup', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;

        const totalColumns = await req.db('check_line')
            .where({ student_id: id })
            .count('* as count');

        const columns = await req.db('check_line')
            .where({ student_id: id })
            
        const count = totalColumns[0]?.count || 0; // Get the count value safely

        if (count === 0) {
            return res.status(404).send({ ok: 0, message: "No records found" });
        }

        res.send({ ok: 1, count: count, columns: columns });
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/percentage-lineup-teacher', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;
        const user = await req.db('users').where({ id }).first();

        if (!user || !user.group_id) {
            return res.status(400).send({ ok: 0, message: 'User does not have a group' });
        }

        const group_id = user.group_id;

        // ดึงข้อมูลนักเรียนในกลุ่มเดียวกัน
        const students = await req.db('users')
            .where({ 'users.user_type': 'student', 'users.group_id': group_id })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id')
            .select(
                'users.id as student_id',
                'users.username as student_username',
                'users.firstname as student_firstname',
                'users.lastname as student_lastname',
                'users.email as student_email',
                'users.user_type as student_type',
                'groups.room_id as student_room_id',
                'groups.group_name as student_room',
                'users.activated as user_status'
            );

        // นับจำนวนรายการของแต่ละ student_id ในตาราง check_line
        const studentCounts = await req.db('check_line')
            .where({ 'check_line.teacher_id': id, 'check_line.student_status': 1 })
            .groupBy('check_line.student_id') // จัดกลุ่มตาม student_id
            .select(
                'check_line.student_id',
                req.db.raw('COUNT(*) as count') // นับจำนวนรายการของแต่ละ student_id
            );

        // ส่งผลลัพธ์กลับ
        res.send({ ok: 1, studentCounts: studentCounts });
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/edit-students', authenticateToken, async (req, res) => {
    try {
        const id = req.user.id;

        const weekColumns = await req.db('users')
            .where({ 'users.id': id, 'group_weeks.status': '1' })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id') // เปลี่ยนจาก rooms เป็น room
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id') // เปลี่ยน rooms.week_id
            .count('* as count');
            
        const weeks = await req.db('users')
            .where({ 'users.id': id, 'group_weeks.status': '1'  })
            .join('groups', 'users.group_id', '=', 'groups.id')
            .join('majors', 'users.major_id', '=', 'majors.id')
            .join('minors', 'users.minor_id', '=', 'minors.id')
            .join('college', 'groups.college_id', '=', 'college.id')
            .join('rooms', 'groups.room_id', '=', 'rooms.id') // เปลี่ยนจาก rooms เป็น room
            .join('group_weeks', 'rooms.week_id', '=', 'group_weeks.week_id') // เปลี่ยน rooms.week_id
            .select(
                'group_weeks.id as id',
                'group_weeks.week as week',
                'group_weeks.join_start as start',
                'group_weeks.join_end as end',
                'rooms.room as room',
                'group_weeks.status as status'
            );

        if (!weeks) {
            return res.status(404).send({ ok: 0, message: "Weeks not found" });
        }
        res.send({ ok: 1, weeks: weeks, weekColumns: weekColumns});
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});

router.get('/get-teacher', authenticateToken, async (req, res) => {
    try {

        const id = req.user.id;

        const users = await req.db('users').where({ id }).first();
  
        const teacher = await req.db('users')
            .where({'users.user_type': 'teacher', 'users.group_id': users.group_id })

        if (!teacher) {
            return res.status(404).send({ ok: 0, message: "Weeks not found" });
        }
        res.send({ ok: 1, teacher: teacher});
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: 0, error: "Internal Server Error" });
    }
});



module.exports = router;