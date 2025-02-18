<template>
    <v-card>
      <v-layout>
        <!-- Navigation Drawer -->
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail && !isMobile"
          permanent
          @click="rail = false"
          :width="260"
        >
          <v-list-item class="profile-container" >
            <v-list-item
                title="Face 
                Detection"
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
              value="หน้าหลัก"
              title=""
              @click="changeComponent('HomeComponent')"
              class="custom-title-head"
            >
            <a v-if="!rail">
              หน้าหลัก
            </a>
          </v-list-item>
          <v-divider v-if="!rail">จัดการการเข้าแถว</v-divider>
          <v-divider v-else></v-divider>
            <v-list-item
              prepend-icon="mdi-image-check"
              value="จัดการการเข้าแถว"
              title=""
              @click="changeComponent('ImageCheckComponent')"
              class="custom-title-body"
            >
              <p v-if="!rail">จัดการการเข้าแถว</p>
            </v-list-item>
            
            <v-list-item
              prepend-icon="mdi-database-eye"
              value="ผลการเข้าแถว"
              title=""
              @click="changeComponent('ImageViewComponent')"
              class="custom-title-body"
            >
              <p v-if="!rail">ผลการเข้าแถว</p>
            </v-list-item>

            

            <v-divider v-if="!rail">นักเรียนในการดูแล</v-divider>
            <v-divider v-else></v-divider>

            <v-list-item
              prepend-icon="mdi-database-eye"
              value="สรุปผลนักเรียน"
              title=""
              @click="changeComponent('StudentComponent')"
              class="custom-title-body"
            >
              <p v-if="!rail">สรุปผลนักเรียน</p>
            </v-list-item>

            <!-- <v-list-item
              prepend-icon="mdi-import"
              value="จัดการการเช็คชื่อ"
              title=""
              @click="changeComponent('InputDataComponent')"
              class="custom-title-body"
            >
              <p v-if="!rail">กำหนดเช็คชื่อ</p>
            </v-list-item> -->
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
import HomeComponent from "~/components/teacher/HomeComponent.vue";
import ImageCheckComponent from "~/components/teacher/ImageCheckComponent.vue";
import ImageViewComponent from "~/components/teacher/ImageViewComponent.vue";
import StudentComponent from "~/components/teacher/StudentComponent.vue";

import InputDataComponent from "~/components/teacher/InputDataComponent.vue";
import axios from "axios";

import { useRouter , useRoute  } from 'vue-router';

import { getUser } from '~/utils/users';

export default {
  name: "NavigationDrawer",
  components: {
    HeaderComponent,
    HomeComponent,
    ImageCheckComponent,
    ImageViewComponent,
    StudentComponent,
    InputDataComponent,
  },
  
  data() {
    return {
      user: {
        id: "",
        username: "",
        email: "",
        role: "",
        profile: "",
        user_type: "",
      },
      drawer: true,
      rail: true,
      dynamicComponent: "HomeComponent", // คอมโพเนนต์เริ่มต้น
      username: "",
      isMobile: false,
      router: useRouter(),
      route: useRoute(),
    };
  },
  methods: {
    changeComponent(componentName) {
      this.dynamicComponent = componentName;
      localStorage.setItem("lastComponentteacher", componentName); // บันทึกหน้าล่าสุด
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
  computed: {
    avatarSize() {
      if (this.rail && !this.isMobile) {
        this.avatarSize = 48;
      } else {
        this.avatarSize = 36;
      }
    },
  },
  async mounted() {
  const result = await getUser();
  if (result.ok === 1) {
    if (result.user.user_type == "teacher") {
      this.user = result.user;
    } else {
      this.$router.push('/');
    }
  } else {
    this.$router.push('/');
  }

    this.fetchUsersData();
    this.updateIsMobile();

    // โหลดหน้าล่าสุดจาก LocalStorage
    const lastComponent = localStorage.getItem("lastComponentteacher");
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
.custom-title-head {
  font-size: clamp(16px, 2vw, 24px); /* ปรับขนาดตามหน้าจอ */
  font-weight: bold;
  color: #01579b;
  padding: 0px 0px 0px 0px;
  user-select: none;
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

/* จัดตำแหน่ง avatar และชื่อ */
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
</style>
