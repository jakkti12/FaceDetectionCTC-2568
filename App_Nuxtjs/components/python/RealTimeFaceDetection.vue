<template>
  <div class="container">
    <v-card flat="" class="ma-5 text-center">
      <!-- แสดง % ในการเช็คชื่อ -->
      <v-progress-linear
        v-model="progress"
        :height="40"
        :size="350"
        :rotate="10"
        color="#9292D1"
        striped
        class="me-2 text-h6"
      >
        <span class="text-h6">{{ Math.round(progress) }}%</span>
      </v-progress-linear>
    </v-card>
    <v-row>
      <v-col>
        <v-card class="ma-5">
          <v-divider vertical>
            <!-- Remaining Tasks -->
            <v-card width="300px" class="animated-card">
              <v-card-title class="d-flex align-center">
                <v-icon icon="mdi-clock-outline" color="warning" class="mr-2"></v-icon>
                <span class="text-h6">: {{ remainingTasks }}</span>
              </v-card-title>
              <v-progress-linear
                :value="(remainingTasks / 90) * 100"
                height="10"
                color="warning"
                class="mt-2"
              ></v-progress-linear>
            </v-card>

            <v-divider></v-divider>

            <!-- Completed Tasks -->
            <v-card width="300px" class="mt-5 animated-card">
              <v-card-title class="d-flex align-center">
                <v-icon icon="mdi-check-circle-outline" color="success" class="mr-2"></v-icon>
                <span class="text-h6">: {{ completedTasks }}</span>
              </v-card-title>
              <v-progress-linear
                :value="(completedTasks / 90) * 100"
                height="10"
                color="success"
                class="mt-2"
              ></v-progress-linear>
            </v-card>
          </v-divider>

          <v-divider></v-divider>
          <div class="d-flex justify-center">
            <v-card>
              <v-card-title class="d-flex align-center pe-2 title-bar">
                <v-icon icon="mdi-calendar-week" color="primary"></v-icon>
                <span class="ml-2 text-h6">เช็คชื่อเข้าแถว</span>

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
              <v-data-table
                v-model:search="search"
                :headers="headersCheckin"
                :filter-keys="['id', 'week']"
                :items="itemsCheckin"
              >
                <template v-slot:item.view="{ item }">
                  <td class="hover-effect" >
                    <!-- ปุ่มเปิด Dialog -->
                    <v-btn @click="openDialog(item.id)">
                      <v-icon size="24px" color="primary">
                        {{ item.status === 'pending'? 'mdi-pencil' : ' mdi-eye' }}
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

                          <DayComponent
                            :week_id="item.id"
                          />

                        </v-card-text>
                        <template v-slot:actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            @click="closeDialog(item.id)" 
                            color="red">
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
        </v-card>
      </v-col>

      <!-- แสดงตารางรายละเอียดการเช็คชื่อ -->
      <v-col>
        <v-card class="ma-5">
          <template v-slot:text class="text-h6">
            <v-row>
              <v-col class="text-h6">
                <v-icon icon="mdi-video-input-component"></v-icon>
                รายละเอียดการเช็คชื่อ
              </v-col>
              <v-col>
                <v-text-field
                  v-model="search"
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
          </template>

          <v-data-table-virtual
            :headers="headers"
            :items="columns"
            height="450"
            item-value="name"
            :search="search"
          ></v-data-table-virtual>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { percentageIineup, getUser, getWeeks } from '~/utils/users';
import { useRouter, useRoute } from 'vue-router';

import DayComponent from './check/DayComponent.vue';

export default {
  components: {
    DayComponent
  },
  data: () => ({
    itemsCheckin: [],
    headersCheckin: [
      { title: '#', align: 'center', key: 'id' },
      { title: 'สัปดาห์', align: 'end', key: 'week' },
      { title: 'รายละเอียด', align: 'end', key: 'view' },
    ],
    dialog: {},
    teacher: '',
    error: null,
    success: null,
    count: '',
    tasks: [],
    newTask: null,
    search: '',
    headers: [
      { title: '#', align: 'center', key: 'id' },
      { title: 'เวลา', align: 'end', key: 'time' },
      { title: 'ผู้เช็คชื่อ', align: 'end', key: 'checker' },
    ],
    columns: [],
    user: {},
    faceBoxes: [],
    status: "กำลังโหลด...",
    message: "",
    stream: null,
    is_logged_in: false,
    router: useRouter(),
    route: useRoute(),
    intervalId: null,
    pollingId: null,
  }),

  computed: {
    progress() {
      return (this.count / 90) * 100;
    },
    remainingTasks() {
      return 90 - this.count;
    },
    completedTasks() {
      return this.count;
    },
  },

  methods: {
    openDialog(id) {
      this.dialog[id] = true;
    },
    closeDialog(id) {
      this.dialog[id] = false;
    },
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleString('th-TH', options);
    },
    async startVideo() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.intervalId = setInterval(this.captureFrame, 3000);
        this.status = "กำลังตรวจสอบ...";
      } catch (err) {
        console.error("ไม่สามารถเข้าถึงกล้องได้:", err);
        this.status = "ไม่สามารถเข้าถึงกล้องได้";
      }
    },
    
    stopVideo() {
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop());
        this.stream = null;
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.status = "กล้องถูกปิด";
    },

    async captureFrame() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = canvas.toDataURL("image/jpeg");

      try {
        const response = await axios.post("http://localhost:8000/process-frame", {
          frame,
          user_id: this.user.id,
          username: this.user.username
        });

        if (response.data.status === "success") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox];
          this.success = 'เช็คชื่อสำเร็จ';
        } else if (response.data.status === "checkin_time_over") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox]; // อัปเดตตำแหน่งกรอบ
          this.success = 'หมดเวลาเช็คชื่อแล้ว';
        } else if (response.data.status === "already") {
          this.status = `ตรวจพบ: ${response.data.name}`;
          this.message = response.data.message;
          this.faceBoxes = [response.data.boundingBox]; // อัปเดตตำแหน่งกรอบ
        }
        else {
          this.faceBoxes = []; // ล้างกรอบเมื่อไม่พบใบหน้า
        } 
      } catch (err) {
        console.error("Error sending frame to API:", err);
        this.status = "เกิดข้อผิดพลาดในการเชื่อมต่อ API";
      }
    },

    async fetchData() {
      const result = await percentageIineup();
      if (result.ok === 1) {
        this.count = result.count;
        this.columns = result.columns.map((item, index) => ({
          ...item,
          id: index + 1,
        }));
      }

      const resultWeeks = await getWeeks();
        if (resultWeeks.ok === 1 && Array.isArray(resultWeeks.weeks)) {
          this.itemsCheckin = resultWeeks.weeks.map(week => ({
            id: week.id,
            week: week.week,
            start: week.start,
            end: week.end,
            room: week.room,
            status: week.status,
          }));
          console.log(this.itemsCheckin);
        } else {
          console.error('Invalid data structure from API:', resultWeeks);
        }

        
    },


    startPolling() {
      this.pollingId = setInterval(this.fetchData, 5000);
    },

    stopPolling() {
      if (this.pollingId) {
        clearInterval(this.pollingId);
        this.pollingId = null;
      }
    }
  },

  watch: {
    dialog(newVal) {
      if (newVal) {
        this.startVideo();
      } else {
        this.stopVideo();
      }
    },
  },

  beforeUnmount() {
    this.stopVideo();
    this.stopPolling();
  },

  async mounted() {
    await this.fetchData();
    this.startPolling();
    
    const resultuser = await getUser();
    if (resultuser.ok === 1) {
      this.user = resultuser.user;
      this.is_logged_in = true;
    } else {
      this.is_logged_in = false;
      this.$router.push('/');
      localStorage.setItem("lastComponentindex", "HomeComponent");
    }
  }
}
</script>

<style scoped>
.face-detection {
  padding: 0px 10px;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: clamp(15px, 3vw, 20px);

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #45a049;
    transform: translateY(3px);
  }

  &:hover {
    background-color: #45a049;
  }
}

.video-container {
  display: flex;
  padding: 20px;
}

.face-box {
  margin-left: -16%;
  margin-top: -10%;
  max-width: 200px !important;
  max-height: 200px !important;
}

video {
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

p {
  font-size: 1.2em;
  margin-top: 1em;
  text-align: center;
}

.v-progress-circular {
  position: relative;
}

.text-h6 {
  margin: 0;
  font-size: 1.5em;
  font-weight: 500;
  content: center;
  text-align: center;
  color: black;
  border-radius: 100px;
}

.animated-card {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-effect {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
}

/* Alert */
.alert-global {
    position: fixed !important;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 90%;
    max-width: 500px;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.alert-global[v-type="error"] {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
.alert-global[v-type="success"] {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}
</style>