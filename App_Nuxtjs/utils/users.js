import axios from 'axios';

export async function getUser() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return { is_logged_in: false }; // ไม่มี token
    }

    const response = await axios.get("http://localhost:7000/get_data/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const user = {
      id: response.data.users.id,
      username: response.data.users.username,
      email: response.data.users.email,
      profile: `http://localhost:7000/uploads/profiles/${response.data.users.profile}`,
      user_type: response.data.users.user_type,
    };

    return { ok: 1, user, is_logged_in: true }; // ส่งข้อมูล user กลับ
  } catch (error) {
    // ลบ token เมื่อ token หมดอายุหรือไม่ถูกต้อง
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      localStorage.removeItem("token");
    }
  }
  return { ok: 0, is_logged_in: false }; // เกิดข้อผิดพลาด
}

export async function getTeacher() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/get-teacher", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return { ok: 1, teacher: response.data.teacher, is_logged_in: true }; // ส่งข้อมูล user กลับ
  } catch (error) {
  }
}

export async function getUserTeacher() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return { is_logged_in: false }; // ไม่มี token
    }

    const response = await axios.get("http://localhost:7000/get_data/get-user-by-teacher", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const students = response.data.students;

    const studentCounts = response.data.studentCounts;

    return { ok: 1, students , studentCounts}; // ส่งข้อมูล user กลับ
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  return { ok: 0, is_logged_in: false }; // เกิดข้อผิดพลาด
}

export async function getWeeks() {
  try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:7000/get_data/weeks", {
          headers: {
              authorization: `Bearer ${token}`,
          },
      });

      // ถ้าข้อมูล weeks เป็นอาเรย์
      if (Array.isArray(response.data.weeks)) {
          return { ok: 1, weeks: response.data.weeks };
      }

      // ถ้าข้อมูล weeks เป็นอ็อบเจกต์เดียว
      return { ok: 1, weeks: [response.data.weeks], weekColumns: response.data.weekColumns };

  } catch (error) {
      console.error("Error fetching weeks:", error);
      return { ok: 0, weeks: [] };
  }
}

export async function getCheckLine(week_id, day_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        week_id,
        day_id,
      },
    });

    if (Array.isArray(response.data.check_lines) ) {
      return { ok: 1, check_lines: response.data.check_lines , check_lines_user: response.data.check_lines_user};
    }

    return { ok: 1, check_lines: [response.data.check_lines], check_lines_user: [response.data.check_lines_user] };

  } catch (error) {
    return { ok: 0, check_lines: [] };
  }
}

export async function getCheckLineWeekDay(week_id, day_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines-by-week-day", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        week_id,
        day_id,
      },
    });

    console.log(response.data.check_lines_by_id);

    return { ok: 1, check_lines_by_id: response.data.check_lines_by_id };

  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}

export async function getCheckLineById(student_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines-by-id", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        student_id,
      },
    });

      const check_lines_by_id = response.data.check_lines_by_id;
    return { ok: 1, check_lines_by_id};

  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}

export async function getCheckLineByIds(student_id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/check-lines-by-ids", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        student_id,
      },
    });

      const check_lines_by_ids = response.data.check_lines_by_ids;
    return { ok: 1, check_lines_by_ids};

  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}

export async function updatedCheckLine(week_id, day_id, student_id, student_status) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:7000/updated_data/update-student_status", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        week_id,
        day_id,
        student_id,
        student_status
      },
    });

    return { ok: 1, massage: 'อัพเดตข้อมูลสําเร็จ' };

  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, check_lines: [] };
  }
}




export async function getDayByweekId(week_id) {
  try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:7000/get_data/days", {
          params: {
              week_id
          },
          headers: {
              authorization: `Bearer ${token}`,
          },
          
      });

      // ถ้าข้อมูล days เป็นอาเรย์
      if (Array.isArray(response.data.days)) {
          return { ok: 1, days: response.data.days };
      }

      // ถ้าข้อมูล days เป็นอ็อบเจกต์เดียว
      return { ok: 1, days: [response.data.days], dayColumns: response.data.dayColumns };

  } catch (error) {
      console.error("Error fetching weeks:", error);
      return { ok: 0, days: [] };
  }
}

export async function percentageIineup() {
  try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:7000/get_data/percentage-lineup", {
          headers: {
              authorization: `Bearer ${token}`,
          },
      });

      const count = response.data.count;
      const columns = response.data.columns;

      return { ok: 1, count, columns};

  } catch (error) {
      return { ok: 0, count: [], columns: [] };
  }
}

export async function percentageIineupTeacher() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:7000/get_data/percentage-lineup-teacher", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const studentCounts = response.data.studentCounts;

    return { ok: 1, studentCounts };

  } catch (error) {
    console.error("Error fetching weeks:", error);
    return { ok: 0, studentCounts: [] };
  }
}