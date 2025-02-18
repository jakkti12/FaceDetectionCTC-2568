<template>
  <div>
    <!-- แสดงรูปภาพ -->
    <v-img
      :src="`http://localhost:7000/uploads/check_in_teacher/${picture}`"
      height="200px"
      class="mb-4"
    ></v-img>

    <!-- ตารางข้อมูล -->
    <v-data-table
      v-model:search="search"
      :headers="headers"
      :items="check_line"
      class="elevation-1"
    >
      <!-- แก้ไขการแสดงผลคอลัมน์ "สถานะ" -->
      <template v-slot:item.student_status="{ item }">
        <v-chip
          :color="item.student_status === 1 ? 'green' : 'red'"
          dark
          small
          class="status-chip"
          :class="item.student_status === 1 ? 'animate-green' : 'animate-red'"
          @click="toggleStatus(item)"
        >
          {{ item.student_status === 1 ? 'มา' : 'ขาด' }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
import { getCheckLine, updatedCheckLine } from '~/utils/users';

export default {
  props: {
    week_id: {
      type: String,
      required: true,
    },
    day_id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      check_line: [],
      picture: {},
      search: '',
      headers: [
        { title: '#', key: 'student_id' },
        { title: 'ชื่อ', key: 'student_username' },
        { title: 'อีเมล', key: 'student_email' },
        { title: 'สถานะ', key: 'student_status' },
      ],
    };
  },

  methods: {
    async toggleStatus(item) {
      const newStatus = item.student_status === 1 ? 0 : 1;
      const response = await updatedCheckLine(this.week_id, this.day_id, item.student_id, newStatus);

      if (response.ok === 1) {
        item.student_status = newStatus;
        this.$emit('update'); // ส่ง event กลับไปยัง parent component
      } else {
        console.error('Failed to update status');
      }
    },
  },

  async mounted() {
    const check_line = await getCheckLine(this.week_id, this.day_id);
    if (check_line.ok === 1) {
      this.check_line = check_line.check_lines_user;
      this.picture = check_line.check_lines_user[0].picture;
      console.log(this.picture);
    }
  },
};
</script>

<style scoped>
.status-chip {
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer; /* เพิ่ม cursor pointer เพื่อให้รู้ว่าสามารถคลิกได้ */
}

.animate-green {
  animation: pulse-green 1.5s infinite;
}

.animate-red {
  animation: pulse-red 1.5s infinite;
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

@keyframes pulse-red {
  0% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
}
</style>