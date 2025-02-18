<template>
    <v-alert
      v-if="error || success"
      :type="error ? 'error' : 'success'"
      closable
      :title="error ? 'Login Failed' : 'Login Successful'"
      text
      variant="elevated"
      class="alert-global"
    >
      {{ error || success }}
  </v-alert>
    <v-app class="container">
        <div class="profile-section background-body">
            <div class="text-center">
                <v-avatar size="120" class="mb-4 white avatar">
                <!-- แสดงรูปภาพจาก backend -->
                <v-img :src="profileImages" alt="Profile Picture" cover></v-img>

                  <!-- เพิ่ม input type file แบบซ่อน -->
                  <input type="file" ref="fileInput" accept="image/*" @change="onFileSelected" style="display: none" />

                  <!-- ปุ่มแก้ไขที่จะเรียก input file -->
                  <v-btn icon="mdi-pencil" size="small" class="avatar-edit-btn" color="white" variant="flat" @click="$refs.fileInput.click()"></v-btn>
              </v-avatar>
              <div style="color: #ffffff;">Hello, {{ Username }}</div>
              <div class="mb-5" style="color: #ffffff;">{{ Email }}</div>
              <v-btn class="mb-5" color="#C5D6BA" @click="saveImage">
                บันทึกรูปภาพ
              </v-btn>

              <!-- <v-btn class="mb-5" color="#C5D6BA" @click="updatedFace">
                เปลี่ยนโครงหน้า
              </v-btn> -->
          </div>
      </div>

      <v-main>
          <!-- <v-container>
          <div class="text-subtitle-1 mb-2">ตั้งค่าข้อมูลส่วนตัว</div>
              <v-card flat class="mb-4">
                  <v-list>
                    <v-list-item>
                        <v-btn @click="openDialog(item.id)" >
                        <template v-slot:prepend>
                        <v-icon>mdi-key</v-icon>
                        </template>
                        <v-list-item-title>Change Password</v-list-item-title>
                        <template v-slot:append>
                        <v-icon>mdi-chevron-right</v-icon>
                        </template>
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

                    </v-list-item>
                  </v-list>
              </v-card>
          </v-container> -->
      </v-main>
  </v-app>
</template>

<script setup>
import { useRouter , useRoute  } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const Username = ref('');
const Email = ref('');

const error = ref(null);
const success = ref(null);

const profileImages = ref('');
const fileInput = ref(null);
const selectedFile = ref(null); // เก็บไฟล์ที่เลือก

const onFileSelected = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file; 
    profileImages.value = URL.createObjectURL(file); // แสดงตัวอย่างรูปที่เลือก
  }
};

// const openDialog = (id) => {
//     state.dialog[id] = true;
// };

const saveImage = async () => {
  try {
    if (!selectedFile.value) {
      error.value = 'กรุณาเลือกไฟล์ก่อนอัปโหลด';
      return;
    }

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append("picture", selectedFile.value);

    const response = await axios.post(
      'http://localhost:7000/upload/upload-single', 
      formData, 
      {
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data.ok === 1) {
      success.value = 'เปลี่ยนโปรไฟล์สำเร็จ';

      // อัปเดต URL รูปโปรไฟล์จากเซิร์ฟเวอร์
      profileImages.value = `http://localhost:7000/uploads/profiles/${response.data.file}`;

      // ล้างข้อมูลที่เลือกก่อนหน้า
      URL.revokeObjectURL(profileImages.value);
      selectedFile.value = null; 

      // ซ่อนข้อความแจ้งเตือนหลัง 3 วินาที
      setTimeout(() => {
        success.value = null;
        error.value = null;
      }, 3000);
    } else {
      error.value = 'เกิดข้อผิดพลาดในการเปลี่ยนแปลงโปรไฟล์';
    }
  } catch (e) {
    error.value = 'เกิดข้อผิดพลาด: ' + e.message;
  }
};

const fetchUsersData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:7000/user/get-user',{
        headers: {
            'authorization': `Bearer ${token}`
        }   
      });
      const data = response.data;

      console.log(data.user.profile);

      if (data.ok === 1) {
          profileImages.value = `http://localhost:7000/uploads/profiles/${data.user.profile}`;  // ใช้ชื่อไฟล์จากฐานข้อมูล
          Username.value = data.user.username;  // กำหนดชื่อ
          Email.value = data.user.email;  // กำหนดอีเมล
      } else {
          console.log('Error fetching student data:', data.error);
      }
  } catch (error) {
      console.error('Error fetching student data:', error);
  }
}

// เรียกใช้ฟังก์ชันเมื่อ component ถูก mount
onMounted(() => {
  fetchUsersData();
});
</script>

<style scoped>
.background-body {
  background: url('~/assets/images/background_1.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 100px 10px;
  max-height: 100%;
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  width: 100%;
  z-index: 0;
}

.profile-section {
  width: 100%;
  padding-top: 2rem;
  background-color: #f8f9fa;
  border-radius: 0rem 0rem 2rem 2rem;
}

.avatar {
  background-color: black;
  border: 2px solid black;
}

.avatar-edit-btn {
  position: absolute;
  margin-top: 90%;
}

.container {
  margin-top: 10px;
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