<template>
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col">
        <div class="p-2">
          <img style="width: 350px; border-radius: 100%;" src="/assets/images/NewLogo.png" alt="Logo" />
        </div>
        <h2>สมัครสมาชิก</h2>
        <p>
          หรือ
          <a href="/auth/login" class="">ลงชื่อเข้าใช้</a>
        </p>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div v-if="error" class="error">{{ error }}</div>
            <form @submit.prevent="openDialog">
              <div class="mb-3">
                <label for="inputUsername" class="form-label">ชื่อผู้ใช้</label>
                <input v-model="username" type="text" class="form-control" id="inputUsername" required />
              </div>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">อีเมล</label>
                <input v-model="email" type="email" class="form-control" id="inputEmail" required />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">รหัสผ่าน</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword" required />
              </div>
              <div class="mb-3">
                <label for="inputConfirmPassword" class="form-label">ยืนยันรหัสผ่าน</label>
                <input v-model="confirmPassword" type="password" class="form-control" id="inputConfirmPassword" required />
              </div>
              <v-dialog
                v-model="dialog"
                max-width="80%"
                persistent
              >
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn v-bind="activatorProps" class="w-100" color="primary">
                    สมัครสมาชิก
                  </v-btn>
                </template>

                <v-card prepend-icon="mdi-camera" title="ตรวจสอบใบหน้า">
                  <div class="">
                    <!-- <h1>ตรวจสอบใบหน้าแบบ Real-Time</h1> -->
                    <video ref="video" autoplay muted playsinline></video>
                    <canvas ref="canvas" style="display: none;"></canvas>
                    <!-- กรอบที่จะแสดงผล -->
                    <div 
                        v-for="(box, index) in faceBoxes"
                        class="face-box"
                        :key="index"
                        :style="{
                          position: 'absolute',
                          border: '2px solid red',
                          top: `${box.y}px`,
                          left: `${box.x}px`,
                          width: `${box.width}px`,
                          height: `${box.height}px`,
                          pointerEvents: 'none',
                        }"
                      ></div>
                    <p>{{ status }}</p>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" @click="registerUser">
                      ลงทะเบียน
                    </v-btn>
                    <v-btn color="red" @click="closeDialog">
                      ปิด
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </form>
            <hr />
            <div class="text-center">
              <a href="/" class="link-secondary">กลับสู่หน้าหลัก</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import { useRouter , useRoute  } from 'vue-router';


const router = useRouter()
const route = useRoute()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref(null)
const dialog = ref(false)
const status = ref('กำลังโหลด...')
const video = ref(null)
const stream = ref(null)
const intervalId = ref(null)
const faceBoxes = ref([])
const imageBase64 = ref('')

const openDialog = (e) => {
  e.preventDefault()
  if (password.value !== confirmPassword.value) {
    error.value = 'รหัสผ่านไม่ตรงกัน'
    return
  }
  dialog.value = true
}

// เริ่มใช้งานกล้อง
const startVideo = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = mediaStream
    stream.value = mediaStream
    status.value = "กำลังตรวจจับใบหน้า..."
    intervalId.value = setInterval(detectFace, 2000)
  } catch (err) {
    console.error("ไม่สามารถเข้าถึงกล้องได้:", err)
    status.value = "ไม่สามารถเข้าถึงกล้องได้"
  }
}

// ปิดกล้อง
const closeDialog = () => {
  dialog.value = false
  if (stream.value) {
    stream.value.getTracks().forEach(track => track.stop())
    stream.value = null
  }
  status.value = "กล้องถูกปิด"
  faceBoxes.value = []
}

// ตรวจจับใบหน้า
const detectFace = async () => {
  if (!video.value) return;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext("2d");
  const videoElement = video.value;

  // กำหนดขนาดของ Canvas ตามวิดีโอ
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  // แปลงภาพเป็น Base64
  imageBase64.value = canvas.toDataURL("image/jpeg").split(',')[1];

  try {
    const response = await axios.post("http://localhost:8000/detect_face", { image: imageBase64.value });

    if (response.data.status === "success") {
      const boundingBoxes = response.data.boundingBoxes;

      // ขนาดวิดีโอที่แสดงผลบนหน้าเว็บจริง
      const videoDisplayWidth = videoElement.clientWidth;
      const videoDisplayHeight = videoElement.clientHeight;

      // คำนวณอัตราส่วนเพื่อแปลงพิกเซลของเซิร์ฟเวอร์ให้ตรงกับวิดีโอบนหน้าเว็บ
      const scaleX = videoDisplayWidth / canvas.width;
      const scaleY = videoDisplayHeight / canvas.height;

      // ปรับขนาดกรอบใบหน้าตามขนาดวิดีโอที่แสดงผล
      faceBoxes.value = boundingBoxes.map(box => ({
        x: box.x * scaleX,
        y: box.y * scaleY,
        width: box.width * scaleX,
        height: box.height * scaleY
      }));

      status.value = "ตรวจพบใบหน้า กรุณากดลงทะเบียน";
    } else {
      faceBoxes.value = [];
      status.value = "ไม่พบใบหน้า";
    }
  } catch (err) {
    console.error("Error detecting face:", err.response?.data || err);
    faceBoxes.value = [];
    status.value = "เกิดข้อผิดพลาด";
  }
};

// กดยืนยันการลงทะเบียน
const registerUser = async () => {
  try {
    const response = await axios.post("http://localhost:8000/register", {
      username: username.value,
      email: email.value,
      password: password.value,
      image: imageBase64.value,
    })

    if (response.data.status === "success") {
      alert("สมัครสมาชิกสำเร็จ")
      closeDialog()
      router.push("/auth/login")
    } else {
      alert(response.data.message)
    }
  } catch (err) {
    alert("เกิดข้อผิดพลาดในการสมัคร")
  }
}

watch(dialog, (newValue) => {
  if (newValue) startVideo()
  else closeDialog()
})
</script>

<style scoped>
.error {
  color: red;
}

.btn-block {
  background-color: #007bff;
}

.video-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

video {
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 20px;
}

.face-box {
  position: absolute;
  border: 2px solid red;
  pointer-events: none;
  margin-top: 5%;
}
</style>
