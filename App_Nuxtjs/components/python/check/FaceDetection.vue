<template>
    <v-card-title>ตรวจจับใบหน้า</v-card-title>
    <v-card-text>
      <v-alert v-if="error || success" :type="error ? 'error' : 'success'" closable>
        {{ error || success }}
      </v-alert>
      <div class="video-container">
        <video ref="video" autoplay muted playsinline></video>
        <canvas ref="canvas" style="display: none;"></canvas>
        <div v-for="(box, index) in faceBoxes" :key="index" class="face-box" :style="boxStyle(box)"></div>
      </div>
      <p>{{ status }}</p>
    </v-card-text>
    {{faceBoxes}}
</template>

<script>
import axios from "axios";
import { getUser, getTeacher } from '~/utils/users';

export default {
  props: {
    week_id: { type: String, required: true },
    day_id: { type: String, required: true },
  },
  data: () => ({
    error: null,
    success: null,
    faceBoxes: [],
    status: "กำลังโหลด...",
    stream: null,
    intervalId: null,
    user: {},
    teacher: {},
  }),
  methods: {
    async startVideo() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.intervalId = setInterval(this.captureFrame, 1500);
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
          username: this.user.username,
          teacher_id: this.teacher,
          week_id: this.week_id,
          day_id: this.day_id,
        });

        console.log(response.data);

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

          console.log('faceBox',this.faceBoxes);
        }
        else {
          this.faceBoxes = []; // ล้างกรอบเมื่อไม่พบใบหน้า
        } 
      } catch (err) {
        console.error("Error sending frame to API:", err);
        this.status = "เกิดข้อผิดพลาดในการเชื่อมต่อ API";
      }
    },
    boxStyle(box) {
    const video = this.$refs.video;
    const videoWidth = video.videoWidth;  // ความกว้างจริงของ video
    const videoHeight = video.videoHeight; // ความสูงจริงของ video
    const displayWidth = video.offsetWidth; // ความกว้างที่แสดงผลบนหน้าจอ
    const displayHeight = video.offsetHeight; // ความสูงที่แสดงผลบนหน้าจอ

    // คำนวณสัดส่วน
    const scaleX = displayWidth / videoWidth;
    const scaleY = displayHeight / videoHeight;

    return {
        position: 'absolute',
        border: '2px solid red',
        top: `${box.y * scaleY}px`,
        left: `${box.x * scaleX}px`,
        width: `${box.width * scaleX}px`,
        height: `${box.height * scaleY}px`,
        pointerEvents: 'none',
    };
}
  },
   async mounted() {

    const resultuser = await getUser();
    if (resultuser.ok === 1) {
      this.user = resultuser.user;
      this.is_logged_in = true;
    } else {
      this.is_logged_in = false;
      this.$router.push('/');
      localStorage.setItem("lastComponentindex", "HomeComponent");
    }

    const resultteacher = await getTeacher();
    console.log(resultteacher);
    if (resultteacher.ok === 1) {
      this.teacher = resultteacher.teacher[0].id;
    }

    this.startVideo();
    
  },
  beforeUnmount() {
    this.stopVideo();
  }
};
</script>

<style scoped>
.video-container {
    position: relative;
    display: flex;
    justify-content: center;
}

video {
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

canvas {
    display: none; /* ซ่อน canvas */
}
.face-box {
  z-index: 1000;
  position: absolute;
  margin-top: -300px;
  margin-left: -160px;
  max-width: 25%;
  max-height: 45%;
  border: 2px solid red;
}
</style>
