from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import face_recognition
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import pytz
from datetime import datetime, time, timedelta
import mysql.connector
import torch
import hashlib
import wave
import sounddevice as sd
import os

app = Flask(__name__)
CORS(app)  # อนุญาตการเชื่อมต่อจาก Cross-Origin

# ตั้งค่า timezone สำหรับประเทศไทย
THAILAND_TZ = pytz.timezone('Asia/Bangkok')

# ฟังก์ชันสําหรับเล่นเสียง
def play_sound(filename):
    if os.path.exists(filename):
        try:
            with wave.open(filename, 'rb') as wf:
                data = wf.readframes(wf.getnframes())
                sound = np.frombuffer(data, dtype=np.int16)
                sd.play(sound, samplerate=wf.getframerate())
                sd.wait()
        except Exception as e:
            print(f"Error playing sound: {e}")

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
    cursor.execute("SELECT id, staff_id, firstname, lastname, face_data FROM users WHERE face_data IS NOT NULL")
    faces = []
    face_encodings = []
    for row in cursor.fetchall():
        if row['face_data']:
            encoding = np.frombuffer(row['face_data'], dtype=np.float64)
            faces.append({
                "id": row['id'],
                "staff_id": row['staff_id'],
                "name": f"{row['firstname']} {row['lastname']}",
                "encoding": encoding
            })
            face_encodings.append(encoding)
    return faces, torch.tensor(face_encodings) if face_encodings else None

faces, all_faces = load_faces()
            
# ตรวจสอบว่าช่วงเวลาปัจจุบันอยู่ในช่วงเช็คอินที่กำหนดหรือไม่
def is_within_check_in_time():
    now = datetime.now(THAILAND_TZ).time()
    morning_start_time = time(8, 0)
    morning_end_time = time(10, 0)
    evening_start_time = time(17, 0)
    evening_end_time = time(18, 0)
    return (morning_start_time <= now <= morning_end_time) or (evening_start_time <= now <= evening_end_time)


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        username = data['username']
        email = data['email']
        password = data['password']
        user_type = 'student'
        staff_id = 32  # ตั้งค่าให้เป็นค่าคงที่ หรือปรับตามต้องการ
        image_data = data['image']

        image_bytes = base64.b64decode(image_data)
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb_frame)
        if not face_locations:
            return jsonify({"status": "error", "message": "No face detected"}), 400

        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        if not face_encodings:
            return jsonify({"status": "error", "message": "Could not encode face"}), 400

        hashed_password = hashlib.md5(password.encode()).hexdigest()
        face_data = face_encodings[0].tobytes()

        cursor.execute('''
        INSERT INTO users (username, email, password, staff_id, user_type, face_data)
        VALUES (%s, %s, %s, %s, %s, %s)
        ''', (username, email, hashed_password, staff_id, user_type, face_data))
        conn.commit()

        global faces, all_faces
        faces, all_faces = load_faces()

        play_sound('./sounds/register.wav')
        return jsonify({"status": "success", "message": "User registered"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

# @app.route('/process-frame', methods=['POST'])
# def process_frame():
#     try:
#         data = request.json
#         frame_data = data.get('frame')
#         user_id = data.get('user_id')
#         username = data.get('username')

#         if not user_id:
#             return jsonify({"status": "error", "message": "User ID is required"}), 400

#         user_faces = [face for face in faces if face['id'] == int(user_id)]
#         if not user_faces:
#             return jsonify({"status": "error", "message": "No matching user found for provided ID"}), 404

#         known_encoding = user_faces[0]['encoding']

#         image_data = base64.b64decode(frame_data.split(',')[1])
#         pil_image = Image.open(BytesIO(image_data))
#         frame = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

#         small_frame = cv2.resize(frame, (0, 0), fx=1/4, fy=1/4)
#         rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

#         face_locations = face_recognition.face_locations(rgb_small_frame)
#         face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

#         for face_location, face_encoding in zip(face_locations, face_encodings):
#             distance = np.linalg.norm(known_encoding - face_encoding)
#             if distance < 0.6:
#                 name = user_faces[0]['name']
#                 top, right, bottom, left = face_location
#                 bounding_box = {
#                     "x": left * 4,
#                     "y": top * 4,
#                     "width": (right - left) * 4,
#                     "height": (bottom - top) * 4,
#                 }
#                 cursor.execute('''SELECT MAX(time) AS last_check_in FROM check_in WHERE user_id = %s''', (user_id,))
#                 result = cursor.fetchone()
#                 last_check_in = result['last_check_in'] if result else None
                
                
#                 now = datetime.now(THAILAND_TZ)
#                 # First check-in window: 8:00 AM to 10:00 AM
#                 morning_start_time = time(8, 0)
#                 morning_end_time = time(10, 0)
#                 # Second check-in window: 5:00 PM to 6:00 PM
#                 evening_start_time = time(17, 0)
#                 evening_end_time = time(18, 0)
                
#                 if last_check_in is None or last_check_in.date() != now.date():
#                     cursor.execute('''INSERT INTO check_in (user_id, time, last_check_in, Checker) VALUES (%s, %s, %s, %s)''', (user_id, now, now.date(), username))
#                     conn.commit()
#                 return jsonify({'status': 'success', 'name': name, 'boundingBox': bounding_box})
#         return jsonify({'status': 'no_match', 'message': 'No matching face found'})
#     except Exception as e:
#         return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/process-frame', methods=['POST'])
def process_frame():
    try:
        data = request.json
        frame_data = data.get('frame')
        user_id = data.get('user_id')
        username = data.get('username')

        if not user_id:
            return jsonify({"status": "error", "message": "User ID is required"}), 400

        user_faces = [face for face in faces if face['id'] == int(user_id)]
        if not user_faces:
            return jsonify({"status": "error", "message": "No matching user found"}), 404

        known_encoding = user_faces[0]['encoding']
        image_data = base64.b64decode(frame_data.split(',')[1])
        pil_image = Image.open(BytesIO(image_data))
        frame = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

        small_frame = cv2.resize(frame, (0, 0), fx=1/4, fy=1/4)
        rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        for face_location, face_encoding in zip(face_locations, face_encodings):
            distance = np.linalg.norm(known_encoding - face_encoding)
            if distance < 0.6:
                name = user_faces[0]['name']
                top, right, bottom, left = face_location
                bounding_box = {
                    "x": left * 4,
                    "y": top * 4,
                    "width": (right - left) * 4,
                    "height": (bottom - top) * 4,
                }
                cursor.execute('''SELECT MAX(time) AS last_check_in FROM check_in WHERE user_id = %s''', (user_id,))
                result = cursor.fetchone()
                last_check_in = result['last_check_in'] if result else None
                now = datetime.now(THAILAND_TZ)

                if is_within_check_in_time():
                    if last_check_in is None or last_check_in.date() != now.date():
                        cursor.execute('''INSERT INTO check_in (user_id, time, last_check_in, Checker) VALUES (%s, %s, %s, %s)''', (user_id, now, now.date(), username))
                        conn.commit()
                        play_sound('./sounds/checkin_success.wav')
                        return jsonify({'status': 'success', 'name': name, 'boundingBox': bounding_box})
                    else:
                        play_sound('./sounds/already_checkedin.wav')
                        return jsonify({'status': 'error', 'message': 'Already checked in today'})
                else:
                    play_sound('./sounds/checkin_time_over.wav')
                    return jsonify({'status': 'error', 'name': name, 'boundingBox': bounding_box, 'message': 'Check-in time is over'})
        return jsonify({'status': 'no_match', 'message': 'No matching face found'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
    


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
