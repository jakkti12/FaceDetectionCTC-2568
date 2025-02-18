<template>
  <div class="container mt-4" >
    <v-row justify="space-between" align="center">
      <a href="/">
        <img src="~/assets/images/NewLogo.png" alt="logo" style="width: 120px;" />
      </a>
      <div>
        <!-- แสดงปุ่ม "เข้าสู่ระบบ" หากไม่มี token -->
        <v-btn
          v-if="!is_logged_in"
          href="/auth/login"
          class="text-primary"
          outlined
        >
          ลงชื่อเข้าสู่ระบบ
        </v-btn>

        <!-- แสดงเมนูผู้ใช้หากมี token -->
        <v-menu
          v-else
          min-width="200px"
          rounded
          class="menu-bar"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              v-bind="props"
            >
              <v-avatar
                color="white"
                size="large"
              >
                <v-img :src="user.profile" alt="Profile Picture" cover></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-card class="down-menu">
            <v-card-text>
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <v-img :src="user.profile" alt="Profile Picture" cover></v-img>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn variant="text" rounded @click="router.push(user.user_type)">
                  <v-icon start icon="mdi-account"></v-icon>
                  {{ user.user_type }}
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                  variant="text"
                  rounded
                  @click="logout"
                >
                <v-icon start icon="mdi-logout"></v-icon>
                  Logout
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </div>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter , useRoute  } from 'vue-router';
import { getUser } from '~/utils/users';

export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        profile: "",
        user_type: "",
      },
      is_logged_in: false,
      router: useRouter(),
      route: useRoute(),
    };
  },
  methods: {
    async logout() {
      try {
        const response = await axios.post('http://localhost:7000/auth/logout',
          {},
        )
        if (response.status == 200) {
          localStorage.removeItem('token')
          this.router.push('/auth/login')
        }else{
          console.error('Error during logout:', response)
        }
        } catch (error) {
          console.error('Error during logout:', error)
        }
    },
  },
  async mounted() {
    const result = await getUser();
    if (result.is_logged_in == true) {
      this.user = result.user;
      this.is_logged_in = true;
    }
    else {
      this.is_logged_in = false;
    }
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 14px 16px;
  width: 95%;
  border-radius: 20px;
}
</style>
