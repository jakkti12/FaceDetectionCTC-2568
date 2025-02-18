<template>
  <div class="container">
      <v-card flat class="elevation-3 animated-card">
        <v-card-title class="d-flex align-center pe-2 title-bar">
          <v-icon icon="mdi-calendar-week" color="primary"></v-icon>
          <span class="ml-2 text-h6">ผลลัพธ์การเข้าแถว</span>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="ค้นหา"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          hide-details
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-divider></v-divider>

      <!-- แสดงข้อมูลในรูปแบบ Card -->
      <v-row class="pa-4">
        <v-col v-for="item in paginatedItems" :key="item.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="hover-effect">
            <v-card-title class="gradient-title">สัปดาห์ที่ {{ item.week }}</v-card-title>
            <v-card-text>
              <div><strong>เริ่ม:</strong> {{ formatDate(item.start) }}</div>
              <div><strong>สิ้นสุด:</strong> {{ formatDate(item.end) }}</div>
              <div><strong>ห้อง:</strong> {{ item.room }}</div>
              <div><strong>สถานะ:</strong> {{ item.status }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="openDialog(item.id)" class="btn-open" icon>
                <v-icon size="24px" color="primary">
                  {{ item.status === 'pending' ? 'mdi-pencil' : 'mdi-eye' }}
                </v-icon>
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-pagination
        v-model="page"
        :length="totalPages"
        :total-visible="5"
        class="mt-4"
      ></v-pagination>

      <!-- Dialog สำหรับแสดงรายละเอียด -->
      <v-dialog
        v-for="item in items"
        :key="item.id"
        v-model="dialog[item.id]"
        max-width="800"
        persistent
      >
        <v-card prepend-icon="mdi-eye" title="จัดการการเข้าแถว">
          <v-card-text>
            <DayComponent :week_id="item.id" @submit="handleSubmit" />
          </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn @click="closeDialog(item.id)" color="red">
              <h5>ปิด</h5>
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import { getWeeks, getUserTeacher } from '~/utils/users';

import DayComponent from './view/DayComponent.vue';

export default {
  components: {
    DayComponent,
  },
  setup() {
    const state = reactive({
      search: '',
      items: [],
      totalStudents: [],
      headers: [
        { title: '#', key: 'id' },
        { title: 'สัปดาห์', key: 'week' },
        { title: 'เริ่ม', key: 'start' },
        { title: 'สิ้นสุด', key: 'end' },
        { title: 'ห้อง', key: 'room' },
        { title: 'สถานะ', key: 'status' },
        { title: 'รายละเอียด', key: 'view' },
      ],
      dialog: {},
      teacher: '',
      studentCount: 0,
      dayCount: 7,
      page: 1, // หน้าปัจจุบัน
      itemsPerPage: 8, // จำนวนรายการต่อหน้า
      weekcount: 0,
    });

    const filteredItems = computed(() => {
      if (!state.search) return state.items;
      return state.items.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(state.search.toLowerCase())
        )
      );
    });

    const totalStudents = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.totalStudents.slice(start, end);
    });

    // คำนวณรายการที่แสดงในหน้าปัจจุบัน โดยใช้ filteredItems
    const paginatedItems = computed(() => {
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return filteredItems.value.slice(start, end);
    });

    // คำนวณจำนวนหน้าทั้งหมด
    const totalPages = computed(() => {
      return Math.ceil(filteredItems.value.length / state.itemsPerPage);
    });

    const openDialog = (id) => {
      state.dialog[id] = true;
    };

    const closeDialog = (id) => {
      state.dialog[id] = false;
    };

    const formatDate = (date) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleString('th-TH', options);
    };

    const handleSubmit = (data) => {
      console.log('Submitted Data:', data);
    };

    const fetchWeeks = async () => {
      try {
        const result = await getWeeks();
        const resultStudent = await getUserTeacher();
        
        const user = await getUser();

        if (result.ok === 1 && Array.isArray(result.weeks)) {
          state.items = result.weeks.map((week) => ({
            id: week.id,
            week: week.week,
            start: week.start,
            end: week.end,
            room: week.room,
            status: week.status,
          }));
          state.weekcount = result.weeks.length;

        } else {
          console.error('Invalid data structure from API:', result);
        }

        if (resultStudent.ok === 1) {
          state.studentCount = resultStudent.students.length;
        } else {
          console.error('Invalid data structure from API:', resultStudent);
        }

        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error('Invalid data structure from API:', user);
        }

        for (const item of state.items) {
          for (let day = 1; day <=7; day++) {
            const totalStudents = await getCheckLine(item.id, 1);
            if (totalStudents.ok === 1) {
              state.totalStudents = totalStudents.check_lines.length; // อัปเดต totalStudents สำหรับแต่ละแถว
            }
          }
        }

      } catch (error) {
        console.error('Error fetching weeks:', error);
      }
    };

    fetchWeeks();

    return {
      ...toRefs(state),
      totalStudents,
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
      paginatedItems,
      totalPages,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.title-bar {
  background: linear-gradient(135deg, #4a90e2, #6f7bd9);
  color: white;
  padding: 16px;
  border-radius: 8px 8px 0 0;
}

.search-field {
  max-width: 250px;
}

.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.gradient-title {
  background: linear-gradient(135deg, #6f7bd9, #8ea2f1);
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.animated-card {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.action-btn {
  flex: 1 1 auto;
  min-width: 120px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.action-btn:hover {
  background-color: #1976d2;
  transform: scale(1.05);
}
.search-field {
  flex: 1 1 200px;
  min-width: 150px;
}


@media (max-width: 600px) {
  .title-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-field {
    width: 90%;
    max-height: 50px;
  }

  .action-btn {
    width: 90%;
    margin-bottom: 10px;
  }
}
</style>