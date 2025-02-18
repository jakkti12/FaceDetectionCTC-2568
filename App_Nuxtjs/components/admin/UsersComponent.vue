<template>
  <div class="container mt-2">
    <!-- Toolbar -->
    <v-card flat class="elevation-3 animated-card">
      <v-card-title class="d-flex align-center pe-2 title-bar" v-if="isAdmin">
        <v-icon icon="mdi-account-edit" color="ffffff"></v-icon>
        <span class="ml-2 text-h6">จัดการผู้ใช้งาน</span>

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

        <v-btn
          color="primary"
          class="ml-2 action-btn"
          @click="newItem"
          v-if="isAdmin"
        >เพิ่มผู้ใช้งาน</v-btn>
        <v-btn
          color="primary"
          class="ml-2 action-btn"
          @click="openExcelFileDialog"
        >
          นำเข้าข้อมูลจาก Excel
        </v-btn>

        <v-file-input
          ref="excelFileInput"
          v-model="excelFile"
          accept=".xlsx,.xls"
          label="เลือกไฟล์ Excel"
          style="display: none"
          @change="handleFileUpload"
        ></v-file-input>
      </v-card-title>


      

      <v-divider></v-divider>

    <!-- แสดง Alert ถ้าไม่ใช่ Admin -->
    <v-alert
      v-if="showAlert"
      type="error"
      style="z-index:1000"
      closable
      title="ข้อผิดพลาด"
      text
      variant="outlined"
      @click:close="closeAlert"
    >
      {{ alertMessage }}
    </v-alert>

    <v-alert
      v-if="showSuccess"
      type="success"
      style="z-index:1000"
      closable
      title="สำเร็จ"
      text
      variant="outlined"
      @click:close="closeAlert"
    >
      {{ successMessage }}
    </v-alert>

    <!-- Card Grid -->
    <v-row class="mt-5" v-if="isAdmin">
      <v-col
        v-for="(item, index) in paginatedDesserts"
        :key="item.id"
        cols="12"
        sm="6"
        md="3"
      >
        <v-container class="md-2">
          <v-card class="hover-effect mx-auto" outlined>
            <v-img
              :src="`http://localhost:7000/uploads/profiles/${item.profile}`"
              height="200px"
            ></v-img>
            <v-card-title>{{ item.username }}</v-card-title>
            <v-card-subtitle>User ID: {{ item.id }}</v-card-subtitle>
            <v-card-text>User Type: {{ item.user_type }}</v-card-text>
            <v-card-text>Room: {{ item.group_name }}</v-card-text>
            <v-card-actions>

              <!-- ปุ่มเข้าสู้ระบบของผู้ใช้ -->
              <v-btn
                color="green"
                text
                @click="bypassItem(item.id)"
              >
                เข้าสู่ระบบ
              </v-btn>

              <!-- ปุ่มแก้ไข -->
              <v-btn
                color="primary"
                text
                @click="editItem(item)"
              >
                แก้ไข
              </v-btn>

              <!-- ปุ่มลบ -->
              <v-btn
                color="error"
                text
                @click="deleteItem(item)"
              >
                ลบ
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-container>
      </v-col>
    </v-row>

    <!-- Pagination -->
    <v-pagination
      v-if="isAdmin"
      v-model="page"
      :length="totalPages"
      :total-visible="7"
      class="hover-effect mt-4"
    ></v-pagination>

    <!-- Dialogs -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.id"
                  label="UserID"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.username"
                  label="Username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.NewPassword"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editedItem.user_type"
                  :items="userTypes"
                  label="User Type"
                  required
                ></v-select>
              </v-col>
              
              <v-col cols="12">
                <v-select
                  v-model="editedItem.group_name"
                  :items="roomTypes"
                  label="ห้อง"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  v-model="singleFile"
                  label="อัปโหลดรูป"
                  accept="image/*"
                  @change="previewSingleFile"
                ></v-file-input>
              </v-col>

              <!-- เปลี่ยนแปลงใบหน้าโดยการอัพรูปภาพ-->
              <!-- <v-col cols="12">
                <v-btn @click="updateFaceData(editedItem.id)">อัปเดตข้อมูลใบหน้า</v-btn>
              </v-col> -->

            </v-row>
            <v-img
              v-if="singleFilePreview"
              :src="singleFilePreview"
              max-width="100"
              max-height="100"
              class="my-4"
            ></v-img>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="close">ยกเลิก</v-btn>
          <v-btn text color="primary" @click="save">บันทึก</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">ยืนยันการลบ?</v-card-title>
        <v-card-actions>
          <v-btn text @click="closeDelete">ยกเลิก</v-btn>
          <v-btn text color="error" @click="deleteItemConfirm">ตกลง</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { getUser } from '~/utils/users';
import * as XLSX from 'xlsx';

export default {
  data: () => ({
    excelFile: null,
    userTypes: ["student", "teacher", "admin"],
    roomTypes: ["E1", "E2", "E3", "E4"],
    user_type: "",
    search: "",
    desserts: [],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      id: "",
      student_id: "",
      username: "",
      password: "",
      NewPassword: "",
      picture: "",
      user_type: "", // เพิ่ม property นี้
    },
    defaultItem: {
      id: "",
      student_id: "",
      username: "",
      password: "",
      picture: "",
      user_type: "", // เพิ่ม property นี้
    },
    singleFile: null,
    singleFilePreview: null,
    showSuccess: false,
    showAlert: false,
    successMessage: "",
    alertMessage: "",
    isAdmin: false,
    page: 1,
    itemsPerPage: 8,
    windowWidth: window.innerWidth,
    NewPassword: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มสมาชิกใหม่" : "แก้ไขข้อมูล";
    },
    filteredDesserts() {
      return this.desserts.filter((item) =>
        item.username.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredDesserts.length / this.itemsPerPage);
    },
    paginatedDesserts() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredDesserts.slice(start, end);
    },
  },

  watch: {
    windowWidth(newWidth) {
      this.itemsPerPage = newWidth < 600 ? 2 : 8;
    },
  },

  async created() {
    try {
      const response = await axios.get("http://localhost:7000/admin/list-users-all");
      this.desserts = response.data.users;
    } catch (error) {
      this.showError("เกิดข้อผิดพลาดในการโหลดข้อมูลสมาชิก");
    }
  },

  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.showError("คุณไม่ได้เข้าสู่ระบบ");
      this.$router.push("/auth/login");
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:7000/settings/check-user-type",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      this.user_type = response.data.user_type;
      if (this.user_type === "admin") {
        this.isAdmin = true;
      } else {
        this.showError("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      }
    } catch (error) {
      this.showError("เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์ผู้ใช้");
    }

    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    openExcelFileDialog() {
      // เปิดกล่องเลือกไฟล์
      this.$refs.excelFileInput.click();
    },

    handleFileUpload(event) {
      // อ่านไฟล์ Excel
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });

          // รับข้อมูลจากแผ่นงานแรก
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

          // แปลงข้อมูลจากแผ่นงานเป็น JSON
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          // ส่งข้อมูลไปที่เซิร์ฟเวอร์
          this.uploadExcelData(jsonData);
        };
        reader.readAsBinaryString(file);
      }
    },

    async uploadExcelData(data) {
      try {
        // ส่งข้อมูลไปยังเซิร์ฟเวอร์
        const response = await axios.post("http://localhost:7000/admin/upload-excel", {
          users: data
        });

        this.showSucc("นำเข้าข้อมูลสำเร็จ");
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการนำเข้าข้อมูล");
      }
    },

    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showSucc(message) {
      this.successMessage = message;
      this.showSuccess = true;
    },
    showError(message) {
      this.alertMessage = message;
      this.showAlert = true;
    },
    closeAlert() {
      this.showAlert = false;
      this.showSuccess = false;
    },
    previewSingleFile() {
      if (this.singleFile) {
        this.singleFilePreview = URL.createObjectURL(this.singleFile);
      } else {
        this.singleFilePreview = null;
      }
    },
    async updateFaceData(id) {

      const formData = new FormData();

      const user_id = id;
      const file = this.singleFile;

      formData.append('user_id', user_id);
      formData.append('image', file);

      try {
        if (!file) {
          alert("กรุณาเลือกรูปภาพ");
          return;
        }

        const response = await axios.post("http://localhost:8000/update_face_data", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
          console.log(response.data);
          alert("อัปเดตข้อมูลใบหน้าสำเร็จ");
      } catch (error) {
        console.error("Error updating face data:", error);
        alert("เกิดข้อผิดพลาดในการอัปเดตข้อมูลใบหน้า");
      }
    },
    newItem() {
      this.editedIndex = -1;
      this.editedItem = { ...this.defaultItem };
      this.dialog = true;
    },
    async bypassItem(item) {
      const response = await axios.post('http://localhost:7000/admin/bypass-user', {
          id: item
      });

      if (response.status == 200) {
        localStorage.setItem('token', response.data.token);
        this.$router.push('/auth/login')
      }
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      try {
        await axios.post(
          "http://localhost:7000/admin/delete-user-by-id",
          this.editedItem
        );
        this.desserts.splice(this.editedIndex, 1);
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการลบข้อมูล");
      }
      this.dialogDelete = false;
    },
    close() {
      this.dialog = false;
      this.editedItem = { ...this.defaultItem };
      this.singleFile = null;
      this.singleFilePreview = null;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.editedItem = { ...this.defaultItem };
    },
    
    async save() {

      try {

        if (!this.editedItem.username || !this.editedItem.user_type) {
          this.showError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
          return; // ถ้ายังไม่กรอกข้อมูลครบให้หยุดการทำงาน
        }
        const roomMapping = {
          'E1': 1,
          "E2": 2,
          'E3': 3,
          'E4': 4,
          'E5': 5
        };

        if (this.editedItem.group_id) {
          this.editedItem.group_id = roomMapping[this.editedItem.group_name] || this.editedItem.group_name;
        }

        if (this.singleFile) {
          const formData = new FormData();
          formData.append("picture", this.singleFile);
          formData.append("user_id", this.editedItem.id);

          const uploadResponse = await axios.post(
            "http://localhost:7000/upload/upload-profile-user",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          this.editedItem.profile = uploadResponse.data.file.filename;
        }

        if (this.editedItem.id) {
          await axios.post("http://localhost:7000/admin/update-user", 
          this.editedItem
        );
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          const createResponse = await axios.post("http://localhost:7000/admin/create-user", this.editedItem);
          this.desserts.push(createResponse.data.user);
        }

        if (this.editedItem.NewPassword) {
          await axios.post("http://localhost:7000/admin/change-password", 
          this.editedItem
        );
        }

        this.close();
      } catch (error) {
        this.showError("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    }
  },
};
</script>

<style scoped src="@/assets/style/admin/checkuser.css">
</style>