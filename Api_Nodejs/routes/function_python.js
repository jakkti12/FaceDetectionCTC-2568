const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const SECRET_KEY = '123456';
const axios = require('axios');

const multer = require('multer');
const upload = multer({ dest: '../uploads/profiles' });  // ตั้งค่าพื้นที่เก็บไฟล์ภาพที่ได้รับ

// router.post('/run-checkin', (req, res) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//         return res.status(400).json({ ok: 0, error: 'Token is required' });
//     }

//     jwt.verify(token, SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Invalid token' });
//         }

//         const userId = decoded.id; // Extract userId from token
//         console.log(`User ID from token: ${userId}`);

//         // Run Python script
//         const command = `python3 python/run-python/detectface.py ${userId}`;
//         exec(command, (error, stdout, stderr) => {
//             if (error) {
//                 console.error(`exec error: ${error.message}`);
//                 return res.status(500).send({ ok: 0, error: 'Error running Python script' });
//             }

//             if (stderr) {
//                 console.error(`stderr: ${stderr}`);
//                 return res.status(500).send({ ok: 0, error: 'Python script error', details: stderr });
//             }

//             res.send({ ok: 1, output: stdout });
//         });
//     });
// });

// // Route for processing photo via Python script
// router.post('/function_python/process-photo', (req, res) => {
//     const { image, token } = req.body;

//     if (!image || !token) {
//         return res.status(400).json({ message: 'Image and token are required' });
//     }

//     // สร้างไฟล์ชั่วคราวเพื่อบันทึกข้อมูล
//     const imagePath = path.join(__dirname, 'temp_image.jpg');
//     const tokenPath = path.join(__dirname, 'temp_token.txt');

//     // เขียนไฟล์ภาพชั่วคราว
//     fs.writeFileSync(imagePath, image, 'base64');

//     // เขียนไฟล์ token ชั่วคราว
//     fs.writeFileSync(tokenPath, token);

//     // เรียกใช้ Python script โดยส่ง path ของไฟล์
//     const command = `python3 python/run-python/test_face.py ${imagePath} ${tokenPath}`;
//     exec(command, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error.message}`);
//             return res.status(500).json({ message: 'Error running Python script' });
//         }

//         if (stderr) {
//             console.error(`stderr: ${stderr}`);
//             return res.status(500).json({ message: 'Python script error', details: stderr });
//         }

//         try {
//             const result = JSON.parse(stdout); // Assuming Python returns JSON
//             res.json(result);
//         } catch (err) {
//             console.error('Error parsing Python response:', err);
//             res.status(500).json({ message: 'Invalid Python response' });
//         } finally {
//             // ลบไฟล์ชั่วคราวหลังจากใช้เสร็จ
//             fs.unlinkSync(imagePath);
//             fs.unlinkSync(tokenPath);
//         }
//     });
// });

// Route สำหรับรับเฟรมจากกล้อง
// router.post('/function_python/process-frame', upload.single('frame'), (req, res) => {
//     const { file } = req;
  
//     if (!file) {
//       return res.status(400).json({ ok: 0, message: 'No frame uploaded' });
//     }
  
//     const framePath = file.path;
    
//     const command = `python3 python/run-python/real_time_face_check.py ${framePath}`;
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error.message}`);
//         return res.status(500).json({ ok: 0, message: 'Error running Python script' });
//       }
  
//       if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return res.status(500).json({ ok: 0, message: 'Python script error', details: stderr });
//       }
  
//       try {
//         const result = JSON.parse(stdout); // Assuming Python returns JSON
//         fs.unlinkSync(framePath); // ลบไฟล์ภาพหลังประมวลผลเสร็จ
//         res.json(result);
//       } catch (err) {
//         console.error('Error parsing Python response:', err);
//         res.status(500).json({ ok: 0, message: 'Invalid Python response' });
//       }
//     });
//   });

// router.post("/function_python/process-frame", upload.single("frame"), async (req, res) => {
//     try {
//       // ส่งภาพไปยัง Python API
//       const formData = new FormData();
//       formData.append("file", fs.createReadStream(req.file.path));
  
//       const response = await axios.post("http://localhost:8000/process-frame", formData, {
//         headers: formData.getHeaders(),
//       });
  
//       // ส่งผลลัพธ์กลับไปยัง Nuxt.js
//       res.json(response.data);
//     } catch (error) {
//       console.error("Error connecting to Python API:", error.message);
//       res.status(500).json({ status: "error", message: "เกิดข้อผิดพลาดในการเชื่อมต่อ API" });
//     } finally {
//       // ลบไฟล์อัปโหลดชั่วคราว
//       if (req.file) {
//         fs.unlinkSync(req.file.path);
//       }
//     }
//   });

router.post("/process-frame", async (req, res) => {
    const { frame } = req.body;
    try {
        const pythonResponse = await axios.post("http://localhost:8000/process-frame", { frame });
        res.json(pythonResponse.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to process frame with Python API" });
    }
});


module.exports = router;
