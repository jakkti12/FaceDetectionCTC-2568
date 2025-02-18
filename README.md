# ระบบ FaceDetection

เครื่องมือในการพัฒนา

- Visual Studio Code
- MAMP (สำหรับ Mac) | Wamp ( สำหรับ Windows)

System Requirements

- Apache 2.4+
- PHP 5.6/7.2
- MySQL 5.5+
- python 3.8+

Clone repo จาก github โดยเอาไฟล์ไปไว้ที่ WORKSPACE PATH

- https://github.com/jakkti12/FaceDetectionCTC-2568/

1.วิธีการตั้งค่าให้้รันได้บนเครื่อง localhost

  1.1.สร้างฐานข้อมูลใน localhost

- สร้างฐานข้อมูลผ่าน phpmyadmin โดยดูชื่อ database, username, password ได้จากไฟล์ api/config.js

  1.2.สร้างฐานข้อมูล

- import ฐานข้อมูลโดยใช้ไฟล์ sql/facescansystem_2567.sql ผ่าน phpmyadmin

  1.3.ติดตั้ง node.js และ nuxt.js
  
- สร้างโฟลเดอร์ Api_Nodejs และทำการติดตั้ง node.js ด้วยคำส่ง npm init -y และนำข้อมูลใน GitHub เข้าไป
- สร้างโฟลเดอร์ App_Nuxtjs และทำการติดตั้ง nuxt.js ด้วยคำส่ง npx nuxi@latest init App_Nuxtjs และนำข้อมูลใน GitHub เข้าไป

  1.5.สร้างฐานข้อมูล

- เข้าไปยัง Api_Nodejs/ พิมพ์ npm start เพื่อรัน node.js
- เข้าไปยัง Api_Nodejs/python พิมพ์ python server.py เพื่อรัน python
- เข้าไปยัง App_Nuxtjs/ พิมพ์ npm run dev เพื่อรัน node.js

  1.6.รันทดสอบระบบ

- เปิด Web Browser และรัน url (http://localhost:3000)
- login โดยใช้ demo user / password ดังนี้
- admin / itc123456
- studetn1 / itc123456
- teacher1 / itc123456
