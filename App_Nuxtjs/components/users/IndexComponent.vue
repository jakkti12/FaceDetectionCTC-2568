<template>
  <div class="container">
      <div class="background-body">
        <div class="container">
          <div class="row">
            <div class="col-md-5 text-center">
            </div>
            <div class="col-md-7">
              <div class="header-homepage">
                <div class="font-p-home">
                  <div class="box-shadow">
                    <p class="font-head">
                      ระบบเช็คชื่อสแกนหน้า <br> ประจําวัน
                    </p>
                    <hr width="50%">
                    <p class="font-body">
                      ให้บริการเช็คชื่อสแกนหน้าประจําวัน <br> ที่ใช้งานได้ทุกที่ ทุกเวลา
                    </p>
                  </div>
                  <!-- <button class="btn btn-primary button-checkin" @click="">
                    <i class="fas fa-check-circle me-2"></i>เช็คชื่อ
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <!-- ส่วนเนื้อหา -->
      <div class="body-homepage container">
        <v-card class="blog-container">
            <v-card-title>
            <div class="row text-center">
                <!-- Blog 1: Node.js -->
                <div class="col-md-3 blog-item">
                <h5><i class="fab fa-node-js me-2"></i>Node.js</h5>
                <p class="blog-content">
                    Node.js เป็นแพลตฟอร์มที่ใช้สำหรับพัฒนาเซิร์ฟเวอร์และแอปพลิเคชันเว็บ โดยใช้ JavaScript 
                    มีประสิทธิภาพสูงและรองรับการทำงานแบบ Asynchronous เหมาะสำหรับระบบที่ต้องการประมวลผลแบบเรียลไทม์ เช่น Chat Applications และ API Services
                </p>
                </div>

                <!-- Blog 2: Nuxt.js -->
                <div class="col-md-3 blog-item">
                <h5><i class="fab fa-vuejs me-2"></i>Nuxt.js</h5>
                <p class="blog-content">
                    Nuxt.js เป็นเฟรมเวิร์คที่ช่วยในการพัฒนาเว็บแอปพลิเคชันแบบ Vue.js โดยมีจุดเด่นคือการรองรับ Server-Side Rendering (SSR), SEO-friendly และโครงสร้างที่จัดการง่าย 
                    เหมาะสำหรับเว็บที่ต้องการโหลดเร็วและรองรับ SEO เช่น เว็บไซต์ E-commerce หรือ Blog
                </p>
                </div>

                <!-- Blog 3: Python -->
                <div class="col-md-3 blog-item">
                <h5><i class="fab fa-python me-2"></i>Python</h5>
                <p class="blog-content">
                    Python เป็นภาษาการเขียนโปรแกรมที่เรียบง่าย อ่านง่าย และทรงพลัง เหมาะสำหรับงานหลากหลาย เช่น Data Science, Machine Learning, Web Development และ Automation 
                    มี Frameworks เช่น Django และ Flask ที่ช่วยในการพัฒนาเว็บแอปพลิเคชันได้รวดเร็ว
                </p>
                </div>

                <!-- Blog 4: Face Detection -->
                <div class="col-md-3 blog-item">
                <h5><i class="fas fa-user-check me-2"></i>Face Detection</h5>
                <p class="blog-content">
                    การตรวจจับใบหน้า (Face Detection) เป็นเทคโนโลยีที่ใช้ในระบบ AI สำหรับการระบุและตรวจจับตำแหน่งใบหน้าของบุคคลในภาพหรือวิดีโอ 
                    ไลบรารีที่นิยมใช้ เช่น OpenCV, Mediapipe และ Dlib โดยสามารถนำไปใช้งานในระบบความปลอดภัย การตรวจจับอารมณ์ หรือแอปพลิเคชันกล้อง
                </p>
                </div>
            </div>
            </v-card-title>
        </v-card>
    </div>
  </div>
</template>
    
<script>
</script>

    <!-- นำเข้าไฟล์ CSS จาก assets/style/homepage.css -->
<style scoped src="@/assets/style/index/index.css">
</style>
    