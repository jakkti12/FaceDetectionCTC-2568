<template>
  <div class="container">
    <v-card flat class="elevation-3">
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-calendar-week" color="primary"></v-icon>
        <span class="ml-2 text-h6">สัปดาห์ที่ {{ week_id }}</span>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="ค้นหา"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        v-model:search="search"
        :headers="headers"
        :items="items"
        class="custom-data-table"
      >
        <template v-slot:item.progress="{ item }">
          <v-progress-linear
            :model-value="calculateProgress(item.totalStudents)"
            height="30"
            color="#9292D1"
            rounded
            striped
          >
            <span class="text-h6">{{ calculateProgress(item.totalStudents) }}%</span>
          </v-progress-linear>
        </template>

        <template v-slot:item.view="{ item }">
          <td class="button-open">
            <v-btn @click="openDialog(item.id)" class="btn-open" icon>
              <v-icon size="24px" color="primary">
                {{ item.status === 'pending' ? 'mdi-pencil' : 'mdi-eye' }}
              </v-icon>
            </v-btn>

            <v-dialog
              v-model="dialog[item.id]"
              max-width="800"
              persistent
              transition="dialog-bottom-transition"
            >
              <v-card
                prepend-icon="mdi-eye"
                title="เช็คข้อมูล"
                class="dialog-card"
              >
                <v-card-text>
                  <CheckIineComponent 
                    :week_id="week_id"
                    :day_id="item.id"
                    @submit="handleSubmit"
                    @update="handleUpdate"
                  />
                </v-card-text>
                <template v-slot:actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="closeDialog(item.id)" color="red" class="btn-close">
                    <h5>ปิด</h5>
                  </v-btn>
                </template>
              </v-card>
            </v-dialog>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';
import { getUser, getUserTeacher, getDayByweekId, getCheckLine } from '~/utils/users';
import CheckIineComponent from './CheckIineComponent.vue';

export default {
  components: {
    CheckIineComponent,
  },
  props: {
    week_id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      search: '',
      items: [],
      headers: [
        { title: '#', key: 'id' },
        { title: 'เปอร์เซ็น', align: 'end', key: 'progress' },
        { title: 'วัน', align: 'end', key: 'day' },
        { title: 'รายละเอียด', align: 'end', key: 'view'},
      ],
      dialog: {},
      teacher: '',
      student: {},
      studentCount: 0,
      progress: '',
      itemsPerPage: 8,
    });

    const openDialog = (id) => {
      state.dialog[id] = true;
    };

    const closeDialog = (id) => {
      state.dialog[id] = false;
      fetchDays(); // อัปเดตข้อมูลเมื่อปิด dialog
    };

    const formatDate = (date) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleString('th-TH', options);
    };

    const handleSubmit = (data) => {
      console.log('Submitted Data:', data);
    };

    const handleUpdate = () => {
      fetchDays(); // อัปเดตข้อมูลเมื่อได้รับ event update
    };

    const calculateProgress = (totalStudents) => {
      if (state.studentCount === 0) return 0;
      return Math.round((totalStudents / state.studentCount) * 100);
    };

    const fetchDays = async () => {
      try {
        const result = await getDayByweekId(props.week_id);
        const user = await getUser();
        const resultStudent = await getUserTeacher();
        
        if (result.ok === 1 && Array.isArray(result.days)) {
          state.items = result.days.map(day => ({
            id: day.id,
            day: day.day,
            start: day.start,
            end: day.end,
            status: day.status,
            totalStudents: 0,
          }));
        } else {
          console.error('Invalid data structure from API:', result);
        }

        if (user.ok === 1) {
          state.teacher = user.user.id;
        } else {
          console.error('Invalid data structure from API:', user);
        }

        if (resultStudent.ok === 1) {
          state.student = resultStudent.students;
          state.studentCount = resultStudent.students.length;
        } else {
          console.error('Invalid data structure from API:', resultStudent);
        }

        for (const item of state.items) {
          const totalStudents = await getCheckLine(props.week_id, item.id);
          if (totalStudents.ok === 1) {
            item.totalStudents = totalStudents.check_lines.length;
          }
        }

      } catch (error) {
        console.error('Error fetching weeks:', error);
      }
    };

    // เรียก fetchDays เมื่อ component ถูกโหลด
    fetchDays();

    return {
      ...toRefs(state),
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
      handleUpdate,
      calculateProgress,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.custom-data-table th,
.custom-data-table td {
  padding: 12px;
}

.custom-data-table {
  font-size: 14px;
  line-height: 1.2;
}

.button-open {
  text-align: right;
  display: flex;
  justify-content: flex-end;
}

.search-field {
  max-width: 300px;
}

.btn-open {
  transition: transform 0.2s;
}

.btn-open:hover {
  transform: scale(1.1);
}

.dialog-card {
  border-radius: 12px;
}

.btn-close {
  margin-right: 16px;
}

.v-progress-linear--striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}
</style>