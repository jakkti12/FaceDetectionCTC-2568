<template>
  <div class="container">
    <v-card flat class="elevation-3 animated-card">
      <v-card-title class="d-flex align-center pe-2 title-bar">
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
        <v-data-table
            v-model:search="search"
            :headers="headers"
            :items="students"
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
        </v-card>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import { getCheckLineById, updatedCheckLine } from '~/utils/users';
  
  export default {
    props: {
      student_id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        search: '',
        students: [],
        headers: [
          { title: '#', key: 'check_line_id' },
          { title: 'สัปดาห์', key: 'week' },
          { title: 'วันที่', key: 'day_id' },
          { title: 'สถานะ', key: 'student_status' },
        ],
      };
    },
  
    methods: {
      async toggleStatus(item) {
        const newStatus = item.student_status === 1 ? 0 : 1;
        const response = await updatedCheckLine(item.week, item.day_id, item.student_id, newStatus);

        if (response.ok === 1) {
          item.student_status = newStatus;
          this.$emit('update'); // ส่ง event กลับไปยัง parent component
        } else {
          console.error('Failed to update status');
        }
      },
    },
  
    async mounted() {
      const result = await getCheckLineById(this.student_id);
      if (result.ok === 1) {
        this.students = result.check_lines_by_id.map((item, index) => ({
          ...item,
          check_line_id: index + 1,
        }));
      }

      console.log(this.students)
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