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
  <v-stepper
    alt-labels
    hide-actions
    :items="['Step 1', 'Step 2']"
    step-color="secondary"
    color="primary"
    v-model="step"
  >
    <template v-slot:item.1>
      <v-card title="Step One: Upload Image" flat>
        <v-card-text>
          <v-file-input
            v-model="image"
            label="Upload Student Image"
            accept="image/*"
            @change="handleImageUpload"
            :rules="[v => !!v || 'Image is required']"
            required
          ></v-file-input>

          <v-img v-if="imagePreview" :src="imagePreview" max-height="300" contain></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="processImage" :disabled="!image">Next</v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <template v-slot:item.2>
      <v-card title="Step Two: Confirm and Submit" flat>
        <v-card-text>
          <p><strong>Teacher ID:</strong> {{ teacher_id }}</p>
          <p><strong>Student ID:</strong> {{ this.student_id.map(student => student.student_id) }}</p>
          <p><strong>Room ID:</strong> {{ this.room_id.map(student => student.room_id) }}</p>
          <p><strong>Image Preview:</strong></p>
          <v-img v-if="imagePreview" :src="imagePreview" max-height="300" contain></v-img>
        </v-card-text>

        <v-divider></v-divider>
        <v-data-table
          v-model:search="search"
          :headers="headers"
          :items="check_students"
          class="elevation-1"
        >
          <template v-slot:item.week="{ item }">
            {{ week_id }}
          </template>
          <template v-slot:item.day="{ item }">
            {{ day_id }}
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="item.status === 1 ? 'green' : 'red'"
              dark
              small
              class="status-chip"
              :class="item.status === 1 ? 'animate-green' : 'animate-red'"
              @click="toggleStatus(item)"
            >
              {{ item.status === 1 ? 'มา' : 'ขาด' }}
            </v-chip>
          </template>
        </v-data-table>

        <v-card-actions>
          <v-btn color="secondary" @click="step = 1">Back</v-btn>
          <v-btn color="primary" @click="submitData">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-stepper>
</template>

<script>
import axios from 'axios';
import { getUserTeacher } from '~/utils/users';

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
    teacher_id: {
      type: String,
      required: true,
    },
    student_id: {
      type: Array,
      required: true,
    },
    room_id: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      error: null,
      success: null,
      step: 1,
      image: null,
      imagePreview: null,
      check_students: [],
      unique_filename: '',
      search: '',
      status: 0,
      headers: [
        { title: '#', key: 'student_id' },
        { title: 'ชื่อนักเรียน', key: 'student_username' },
        { title: 'สัปดาห์', key: 'week' },
        { title: 'วันที่', key: 'day' },
        { title: 'สถานะ', key: 'status' },
      ],
    };
  },
  methods: {
    // สลับสถานะของนักเรียน
    toggleStatus(item) {
      item.status = item.status === 1 ? 0 : 1;
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },

    async processImage() {
      const formData = new FormData();
      const student_ids = this.student_id.map(student => student.student_id);
      const room_ids = this.room_id.map(student => student.room_id);

      formData.append('week_id', this.week_id);
      formData.append('day_id', this.day_id);
      formData.append('image', this.image);
      formData.append('teacher_id', this.teacher_id);
      formData.append('student_ids', JSON.stringify(student_ids));
      formData.append('room_id', JSON.stringify(room_ids));

      try {
          const response = await axios.post("http://localhost:8000/teacher-process-image", formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          if (response.data.status === 'success') {
              this.check_students = this.check_students.map(student => {
                  const statusInfo = response.data.student_statuses.find(s => s.student_id === student.student_id);
                  if (statusInfo) {
                      student.status = statusInfo.status;
                      this.unique_filename = statusInfo.picture
                  }
                  return student;
              });
              // แสดงภาพที่แก้ไขแล้ว
              this.imagePreview = `data:image/jpeg;base64,${response.data.processed_image}`;
              this.step = 2; // Move to the next step after processing
          } else {
              this.error = ('Error processing data: ' + response.data.message);
          }
      } catch (error) {
          this.error = 'An error occurred while processing data.';
      }
    },

    async submitData() {
      try {
        const student_statuses = this.check_students.map(student => ({
          student_id: student.student_id,
          room_id: student.room_id,
          status: student.status,
        }));

        const response = await axios.post("http://localhost:8000/teacher-process-frame", {
          week_id: this.week_id,
          day_id: this.day_id,
          teacher_id: this.teacher_id,
          student_statuses: student_statuses,
          picture: this.unique_filename
        });

        if (response.data.status === 'success') {
          this.success = 'Data saved successfully!';
        } else {
          this.error = 'Error saving data: ' + response.data.message;
        }
      } catch (error) {
        console.error('Error:', error);
        this.error = 'An error occurred while saving data.';
      }
    },
  },

  async mounted() {
    try {
      const result = await getUserTeacher();
      if (result.ok === 1) {
        this.check_students = result.students;
      } else {
        console.error('Failed to fetch check lines:', result.message);
      }
    } catch (error) {
      console.error('Error fetching check lines:', error);
    }
  },
};
</script>

<style scoped>
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