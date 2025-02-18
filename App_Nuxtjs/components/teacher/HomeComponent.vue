<template>
    <div class="container mt-5">
      <v-col>
        <v-card class="p-4">
          <h1>
            ยินดีต้อนรับ
            <a class="text-primary">{{ user.username }}, {{ user.user_type }}</a>
          </h1>
          <p class="text-muted">
            อีเมล: {{ user.email }}
          </p>
          <div v-if="user.profile" class="profile-section">
            <img :src="user.profile" alt="User Profile" class="profile-img rounded-circle" />
          </div>
        </v-card>
      </v-col>
      <v-col class="mt-4">
        <v-card>

        </v-card>
      </v-col>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { getUser} from '~/utils/users';
  
  export default {
    data() {
      return {
        user: {
          username: "",
          email: "",
          profile: "",
          user_type: "",
        },
      };
    },
    methods: {
    },
    async mounted() {
      try {
        const result = await getUser();
        if (result.is_logged_in) {
          this.user = result.user;
        } else {
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin: auto;
  }
  .profile-section {
    margin-top: 20px;
    text-align: center;
  }
  .profile-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 2px solid #fff;
  }
  .text-muted {
    font-size: 0.9rem;
    color: #6c757d;
  }
  </style>
  