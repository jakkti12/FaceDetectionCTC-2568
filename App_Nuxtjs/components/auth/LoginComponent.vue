<template>
  <!-- navbar ที่อยู่ในหน้า login -->
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
  <div class="container">
    <div class="row text-center mt-5">
      <div class="col">
        <div class="p-2">
          <img style="width: 350px; border-radius: 100%;" src="~/assets/images/NewLogo.png" alt="Logo" />
        </div>
        <h2>ลงชื่อเข้าใช้</h2>
        <p>
          หรือ
          <a href="/auth/register" class="">สมัครสมาชิก</a>
        </p>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div v-if="error" class="error">{{ error }}</div>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="inputEmail" class="form-label">ชื่อผู้ใช้</label>
                <input v-model="username" type="text" class="form-control" id="inputEmail" aria-describedby="emailHelp" required/>
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">รหัสผ่าน</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword" required/>
              </div>
              <div class="d-flex w-100 justify-content-between mb-3">
                <div class="form-check">
                  <input type="checkbox" name="remember" value="1" class="form-check-input" id="checkRememberMe" />
                  <label class="form-check-label" for="checkRememberMe">จดจําฉัน</label>
                </div>
                <div>
                  <a href="#" class="link-primary">ลืมรหัสผ่าน</a>
                </div>
              </div>
              <v-btn type="submit"  class="w-100" color="primary">
                เข้าสู่ระบบ
              </v-btn>
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

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { getUser } from '~/utils/users';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
      success: null,
      user: {
        id: '',
      },
    };
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    async checkUser() {
      const result = await getUser();
      if (result.is_logged_in) {
        this.$router.push('/');
      }
    },
    async login() {
      this.error = null;
      this.success = null;

      try {
        const response = await axios.post('http://localhost:7000/auth/login', {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.success = response.data.message;
        setTimeout(() => this.$router.push('/'), 2000); // เปลี่ยนเส้นทางหลังจากแสดงข้อความสำเร็จ
      } catch (err) {
        this.error = err.response?.data?.message || 'An error occurred';
      }
    },
  },
};
</script>

<style scoped>
/* Alert */
.alert-global {
    position: absolute !important;
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

.error {
  color: red;
}
</style>
