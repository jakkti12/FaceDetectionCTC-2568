<template>
  <v-stepper alt-labels editable :items="['Step 1', 'Step 2']" v-model="step">
    <!-- Step 1: Upload Image -->
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
          <v-btn color="primary" @click="step = 2" :disabled="!image">Next</v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <!-- Step 2: Confirm and Submit -->
    <template v-slot:item.2>
      <v-card title="Step Two: Confirm and Submit" flat>
        <v-card-text>
          <p><strong>Teacher ID:</strong> {{ teacher }}</p>
          <p><strong>Student ID:</strong> {{ student }}</p>
          <p><strong>Room ID:</strong> {{ room }}</p>
          <p><strong>Image Preview:</strong></p>
          <v-img v-if="imagePreview" :src="imagePreview" max-height="300" contain></v-img>
        </v-card-text>
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

export default {
  data() {
    return {
      step: 1, // Current step
      image: null, // Uploaded image file
      imagePreview: null, // Base64 image preview
      teacher: 2, // Dummy teacher ID
      student: 4, // Dummy student ID
      id: 2, // Dummy ID
      room: 1, // Dummy room ID
    };
  },
  methods: {
    // Handle image upload and generate preview
    handleImageUpload(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result; // Set image preview
        };
        reader.readAsDataURL(file); // Convert file to base64
      } else {
        this.imagePreview = null;
      }
    },

    // Submit data to API
    async submitData() {
      try {
        const formData = new FormData();
        formData.append('image', this.image); // Append the image file
        formData.append('teacher_id', this.teacher);
        formData.append('student_ids', JSON.stringify([this.student])); // Array of student IDs
        formData.append('room_id', this.room);

        // Call your API endpoint
        const response = await axios.post("http://localhost:8000/teacher-process-frame",
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set content type
            },
          }
        );

        // Handle response
        if (response.status === 'success') {
          alert('Data submitted successfully!');
          console.log('Recognized Students:', response.recognized_students);
          console.log('Absent Students:', response.absent_students);
        } else {
          alert('Error submitting data: ' + response.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting data.');
        console.log(this.image);
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>