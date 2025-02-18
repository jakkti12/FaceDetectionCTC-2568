<template>
  <v-card>
    <v-layout>
      <!-- Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail && !isMobile"
        permanent
        @click="rail = false"
        class="navigation-drawer"
        :width="200"
      >
        <v-list-item class="profile-container" >

          <v-list-item
              title="Face Detection"
              v-if="!rail || isMobile" class="profile-name"
            ></v-list-item>
          <v-list-item-title v-if="!rail || isMobile">
            <v-btn
              class="toggle-rail-btn"
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
            @click="changeComponent('HomeComponent')"
            class="custom-title-body"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="FaceDetection"
            value="facedetection"
            @click="changeComponent('RealTimeFaceDetection')"
            class="custom-title-body"
            v-if="is_logged_in == true"
          ></v-list-item>
          <v-divider></v-divider>
          <v-list-item
            prepend-icon="mdi-cog"
            title="Profile"
            value="profile"
            @click="changeComponent('ProfileComponent')"
            class="custom-title-body"
            v-if="is_logged_in == true"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <!-- Header -->
      <!-- Main Content -->
      <v-main>
        <HeaderComponent />
        <component :is="dynamicComponent" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import HeaderComponent from "~/components/header/HeaderComponent.vue";
import HomeComponent from "~/components/users/IndexComponent.vue";
import RealTimeFaceDetection from "~/components/python/RealTimeFaceDetection.vue";
import ProfileComponent from "~/components/settings/ProfileComponent.vue";

import axios from "axios";
import { getUser } from '~/utils/users';

export default {
  components: {
    HeaderComponent,
    HomeComponent,
    RealTimeFaceDetection,
    ProfileComponent,
  },
  
  data() {
    return {
      drawer: true,
      rail: true,
      dynamicComponent: "HomeComponent", // คอมโพเนนต์เริ่มต้น
      username: "",
      isMobile: false,
      is_logged_in: false,
    };
  },
  methods: {
    changeComponent(componentName) {
      this.dynamicComponent = componentName;
      localStorage.setItem("lastComponentindex", componentName); // บันทึกหน้าล่าสุด
    },
    fetchUsersData() {
      const token = localStorage.getItem("token");
      if (!token) return;

      axios
        .get("http://localhost:7000/user/get-user", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const data = response.data;
          if (data.ok === 1) {
            this.profileImages = `http://localhost:7000/uploads/profiles/${data.user.profile}`;
            this.username = data.user.username;
          } else {
            console.error("Error fetching user data:", data.error);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 0;
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

    this.fetchUsersData();
    this.updateIsMobile();

    // โหลดหน้าล่าสุดจาก LocalStorage
    const lastComponent = localStorage.getItem("lastComponentindex");
    if (lastComponent) {
      this.dynamicComponent = lastComponent;
    }

    window.addEventListener("resize", this.updateIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateIsMobile);
  },
};
</script>

<style scoped>
/* จัดตำแหน่ง avatar และชื่อ */
.navigation-drawer {
  display: flex;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
}

.profile-avatar {
  margin-bottom: 8px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background-color: white;
  transition: width 0.3s ease, height 0.3s ease;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* จัดปุ่ม toggle rail ให้อยู่มุมขวาบน */
.toggle-rail-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1050;
}

.custom-title-body {
  font-size: clamp(16px, 2vw, 20px); /* ปรับขนาดตามหน้าจอ */
  color: #01579b;
  flex-direction: column;
  align-items: center;
  text-align: start;
  padding: 0px 0px 0px 0px;
  user-select: none;
}
</style>
