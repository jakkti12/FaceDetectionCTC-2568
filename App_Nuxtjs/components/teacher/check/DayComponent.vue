<template>
    <div class="container">
        <v-card flat>
            <v-card-title class="d-flex align-center pe-2">
                <v-icon icon="mdi-calendar-week"></v-icon>
                สัปดาห์ที่ {{ week_id }}

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
                ></v-text-field>
            </v-card-title>

            <v-data-table
            v-model:search="search"
            :headers="headers"
            :items="items"
            >
            <template v-slot:item.view="{ item }" >
                <td class="button-open">
                <!-- ปุ่มเปิด Dialog -->
                <v-btn @click="openDialog(item.id)" :disabled="item.status === 'closed'">
                  <v-icon size="24px" color="primary">
                    {{ item.status === 'pending' ? 'mdi-pencil' : 'mdi-eye' }}
                  </v-icon>
                </v-btn>

                  <v-dialog
                    v-model="dialog[item.id]"
                    max-width="800"
                    persistent
                  >
                    <v-card
                      prepend-icon="mdi-eye"
                      title="จัดการการเข้าแถว"
                    >
                      <v-card-text>
                        <!-- ใช้ StepperComponent แทน -->
                        <StepperComponent
                          :week_id="week_id"
                          :day_id="item.id"
                          :teacher_id="teacher"
                          :student_id="student"
                          :room_id="student"
                          @submit="handleSubmit"
                        />
                      </v-card-text>
                      <template v-slot:actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="closeDialog(item.id)" color="red">
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
import { getUser, getUserTeacher, getDayByweekId, getCheckLineWeekDay } from '~/utils/users'; // เพิ่ม checkLineById ใน import

import StepperComponent from './StepperComponent.vue';

export default {
  components: {
    StepperComponent,
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
        { title: 'วัน', align: 'end', key: 'day' },
        { title: 'รายละเอียด', align: 'end', key: 'view'},
      ],
      dialog: {}, // ใช้ object แทน ref
      teacher: '',
      student: {},
      studentCount: '',
      Checkin: false,
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

    const fetchDays = async () => {
      try {
        const result = await getDayByweekId(props.week_id);
        const user = await getUser();

        const resultStudent = await getUserTeacher();
        
        if (result.ok === 1 && Array.isArray(result.days)) {
          state.items = result.days.map((day, index) => ({
            id: index + 1,
            day_id: day.id,
            day: day.day,
            start: day.start,
            end: day.end,
            status: day.status,
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

      } catch (error) {
        console.error('Error fetching weeks:', error);
      }
    };

    const checkLineStatus = async (week_id, day_id) => {
      try {
        const result = await getCheckLineWeekDay(week_id, day_id);
        console.log('item',result);
        if (result.ok === 1 && result.check_lines_by_id.length > 0) {
          // ปิดตารางที่ตรงกับ week_id และ day_id
          state.items = state.items.map(item => {
            if (item.id === day_id && props.week_id === week_id) {
              return { ...item, status: 'closed' };
            }
            return item;
          });
        }
      } catch (error) {
        console.error('Error checking line status:', error);
      }
    };

    // เรียก fetchDays และ checkLineStatus เมื่อ component ถูกโหลด
    fetchDays();

    // ใช้ watch เพื่อตรวจสอบการเปลี่ยนแปลงของ week_id และเรียก checkLineStatus
    watch(() => props.week_id, (newWeekId) => {
      state.items.forEach(item => {
        checkLineStatus(newWeekId, item.id);
      });
    });

    return {
      ...toRefs(state),
      openDialog,
      closeDialog,
      formatDate,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.custom-data-table th,
.custom-data-table td {
  padding: 10px;
}

.custom-data-table {
  font-size: 14px;
  line-height: 1.2;
}

/* ปรับแต่งคอลัมน์สุดท้ายให้อยู่ขวาสุด */
.button-open {
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
</style>