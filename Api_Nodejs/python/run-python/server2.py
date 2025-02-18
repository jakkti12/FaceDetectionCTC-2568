from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import face_recognition
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import pytz
from datetime import datetime
import mysql.connector
import torch
import hashlib
import wave
import sounddevice as sd

app = Flask(__name__)
CORS(app)  # อนุญาตการเชื่อมต่อจาก Cross-Origin

# ตั้งค่า timezone สำหรับประเทศไทย
THAILAND_TZ = pytz.timezone('Asia/Bangkok')

# ตั้งค่าเชื่อมต่อฐานข้อมูล
conn = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="root",
    password="root",
    database="facescansystem_2567"
)

cursor = conn.cursor(dictionary=True)

# โหลดข้อมูลใบหน้าจากฐานข้อมูล
def load_faces():
    cursor.execute('''
    SELECT id AS staff_id, username AS name, face_data 
    FROM users
    ''')
    faces = cursor.fetchall()
    all_faces = torch.stack([torch.tensor(np.frombuffer(face["face_data"], dtype=np.float64)) for face in faces])
    return faces, all_faces

faces, all_faces = load_faces()

# Function to play sound
def play_sound(filename):
    with wave.open(filename, 'rb') as wf:
        data = wf.readframes(wf.getnframes())
        sound = np.frombuffer(data, dtype=np.int16)
        sd.play(sound, samplerate=wf.getframerate())
        sd.wait()

@app.route('/register', methods=['POST'])
def register():
    try:
        # Parse request data
        data = request.json
        username = data['username']
        email = data['email']
        password = data['password']
        user_type = 'student'
        staff_id = 32  # Assuming this is a constant value
        image_data = data['image']  # Base64-encoded image

        # Decode Base64 image
        image_bytes = base64.b64decode(image_data)
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Detect face and encode
        face_locations = face_recognition.face_locations(rgb_frame)
        if not face_locations:
            return jsonify({"status": "error", "message": "No face detected"}), 400
        
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        if not face_encodings:
            return jsonify({"status": "error", "message": "Could not encode face"}), 400
        
        # Hash the password using MD5
        hashed_password = hashlib.md5(password.encode()).hexdigest()
        face_data = face_encodings[0].tobytes()

        # Insert user data into database
        cursor.execute('''
        INSERT INTO users (username, email, password, staff_id, user_type, face_data)
        VALUES (%s, %s, %s, %s, %s, %s)
        ''', (username, email, hashed_password, staff_id, user_type, face_data))
        insert_id = cursor.lastrowid
        conn.commit()

        # Reload faces data
        global faces, all_faces
        faces, all_faces = load_faces()

        # Play sound
        play_sound('./sounds/register.wav')

        return jsonify({"status": "success", "message": "User registered", "record_id": insert_id})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/process-frame', methods=['POST'])
def process_frame():
    try:
        data = request.json
        frame_data = data.get('frame')

        # แปลง Base64 เป็นภาพ
        image_data = base64.b64decode(frame_data.split(',')[1])
        pil_image = Image.open(BytesIO(image_data))
        frame = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

        # ลดขนาดภาพเพื่อประสิทธิภาพ
        small_frame = cv2.resize(frame, (0, 0), fx=1 / 4, fy=1 / 4)
        rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

        # ค้นหาใบหน้าในภาพ
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        for face_encoding in face_encodings:
            face_encoding = torch.tensor(face_encoding)

            # คำนวณระยะห่างระหว่างใบหน้าที่ส่งมาและใบหน้าในฐานข้อมูล
            face_distances = torch.norm(all_faces - face_encoding, dim=1)
            min_index = torch.argmin(face_distances).item()
            staff_id = faces[min_index]["staff_id"]
            name = faces[min_index]["name"]

            # ตรวจสอบข้อมูลการ Check-In ล่าสุด
            cursor.execute('''
            SELECT MAX(time) AS last_check_in
            FROM check_in
            WHERE staff_id = %s
            ''', (staff_id,))
            result = cursor.fetchone()
            last_check_in = result['last_check_in']
            now = datetime.now(THAILAND_TZ)

            if last_check_in is None or last_check_in.date() != now.date():
                # บันทึก Check-In ใหม่
                cursor.execute('''
                INSERT INTO check_in (staff_id, time) VALUES (%s, %s)
                ''', (staff_id, now))
                conn.commit()

                return jsonify({'status': 'success', 'name': name})

        return jsonify({'status': 'no_match', 'message': 'ไม่พบใบหน้าที่ตรงกัน'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)