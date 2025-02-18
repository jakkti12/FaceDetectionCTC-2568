from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import face_recognition
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import pytz
import time
from datetime import datetime, time , timedelta
import mysql.connector
import hashlib
import wave
import sounddevice as sd
import os
import json
import uuid
from werkzeug.utils import secure_filename

last_detection_time = None

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configuration
THAILAND_TZ = pytz.timezone('Asia/Bangkok')
UPLOAD_FOLDER = '../uploads/check_in_teacher'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        port=3306,
        user="root",
        password="root",
        database="facescansystem_2567",
        autocommit=True
    )

# Utility functions
def play_sound(filename):
    """Play a sound file."""
    if os.path.exists(filename):
        try:
            with wave.open(filename, 'rb') as wf:
                data = wf.readframes(wf.getnframes())
                sound = np.frombuffer(data, dtype=np.int16)
                sd.play(sound, samplerate=wf.getframerate())
                sd.wait()
        except Exception as e:
            print(f"Error playing sound: {e}")

def is_within_check_in_time():
    """Check if the current time is within the allowed check-in time."""
    now = datetime.now(THAILAND_TZ).time()
    morning_start_time = time(0, 0)
    morning_end_time = time(23, 0)
    evening_start_time = time(16, 0)
    evening_end_time = time(18, 0)
    return (morning_start_time <= now <= morning_end_time) or (evening_start_time <= now <= evening_end_time)

def load_faces():
    """Load face data from the database."""
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, staff_id, username, face_data FROM users WHERE face_data IS NOT NULL")
    faces = []
    for row in cursor.fetchall():
        if row['face_data']:
            encoding = np.frombuffer(row['face_data'], dtype=np.float64)
            faces.append({"id": row['id'], "staff_id": row['staff_id'], "name": row['username'], "encoding": encoding})
    cursor.close()
    conn.close()
    return faces

# Function to get the latest face data
def get_faces():
    return load_faces()

# Load faces from the database (initial load)
faces = get_faces()

# Routes
@app.route('/detect_face', methods=['POST'])
def detect_face():
    """Detect faces in an image."""
    try:
        data = request.json
        image_data = data['image']

        # Convert Base64 to image
        image_bytes = base64.b64decode(image_data)
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Detect faces
        face_locations = face_recognition.face_locations(rgb_frame)
        if not face_locations:
            return jsonify({"status": "error", "message": "No face detected"}), 400

        bounding_boxes = [{"x": left, "y": top, "width": right - left, "height": bottom - top}
                          for top, right, bottom, left in face_locations]

        return jsonify({"status": "success", "boundingBoxes": bounding_boxes})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/register', methods=['POST'])
def register():
    """Register a new user with face data."""
    try:
        data = request.json
        username = data['username']
        email = data['email']
        password = data['password']
        user_type = 'student'
        staff_id = 32
        major_id = 1
        minor_id = 1
        image_data = data['image']

        # Convert Base64 to image
        image_bytes = base64.b64decode(image_data)
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Detect and encode face
        face_locations = face_recognition.face_locations(rgb_frame)
        if not face_locations:
            play_sound('sounds/error.wav')  # Play error sound
            return jsonify({"status": "error", "message": "No face detected"}), 400

        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        if not face_encodings:
            play_sound('sounds/error.wav')  # Play error sound
            return jsonify({"status": "error", "message": "Could not encode face"}), 400

        # Hash password
        hashed_password = hashlib.md5(password.encode()).hexdigest()
        face_data = face_encodings[0].tobytes()

        # Save to database
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO users (username, email, password, staff_id, user_type, face_data, major_id, minor_id)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        ''', (username, email, hashed_password, staff_id, user_type, face_data, major_id, minor_id))
        conn.commit()
        cursor.close()
        conn.close()

        play_sound('./sounds/register.wav')  # Play success sound
        return jsonify({"status": "success", "message": "User registered"})

    except Exception as e:
        play_sound('s./ounds/error.wav')  # Play error sound
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/process-frame', methods=['POST'])
def process_frame():
    """Process a frame for face recognition and check-in."""
    global last_detection_time

    try:
        data = request.json
        week_id = data.get('week_id')
        day_id = data.get('day_id')
        teacher_id = data.get('teacher_id')
        frame_data = data.get('frame')
        user_id = data.get('user_id')
        username = data.get('username')

        if not user_id:
            return jsonify({"status": "error", "message": "User ID is required"}), 400

        # Find user face data
        faces = load_faces()
        user_faces = [face for face in faces if face['id'] == int(user_id)]
        if not user_faces:
            return jsonify({"status": "error", "message": "No matching user found"}), 404

        known_encoding = user_faces[0]['encoding']

        # Convert Base64 to image
        image_data = base64.b64decode(frame_data.split(',')[1])
        pil_image = Image.open(BytesIO(image_data))
        frame = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

        # Resize and detect faces
        small_frame = cv2.resize(frame, (0, 0), fx=1/2, fy=1/2)
        rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        # Match faces
        for face_location, face_encoding in zip(face_locations, face_encodings):
            distance = np.linalg.norm(known_encoding - face_encoding)
            if distance < 0.6:
                name = user_faces[0]['name']
                top, right, bottom, left = face_location
                bounding_box = {
                    "x": left * 4,  # คูณ 4 เพราะเราย่อขนาดเฟรมลง 1/2
                    "y": top * 4,
                    "width": (right - left) * 4,
                    "height": (bottom - top) * 4,
                }

                # Check if user has already checked in today
                conn = get_db_connection()
                cursor = conn.cursor(dictionary=True)
                cursor.execute('''SELECT MAX(time) AS last_check_in FROM check_line WHERE student_id = %s''', (user_id,))
                result = cursor.fetchone()
                last_check_in = result['last_check_in'] if result else None
                now = datetime.now(THAILAND_TZ)

                if is_within_check_in_time():
                    if last_check_in is None or last_check_in.date() != now.date():
                        cursor.execute('''INSERT INTO check_line (week, day_id, teacher_id, student_id, time, last_check_in, Checker) 
                                       VALUES (%s, %s, %s, %s, %s, %s, %s)''',
                                      (week_id, day_id, teacher_id, user_id, now, now.date(), username))
                        conn.commit()

                        # ตรวจสอบเวลาล่าสุดที่ตรวจพบใบหน้า
                        global last_detection_time
                        if last_detection_time is None or (now - last_detection_time) > timedelta(seconds=10):
                            play_sound('./sounds/check_success.wav')
                            last_detection_time = now

                        return jsonify({'status': 'success', 'name': name, 'boundingBox': bounding_box})
                    else:
                        # ตรวจสอบเวลาล่าสุดที่ตรวจพบใบหน้า
                        if last_detection_time is None or (now - last_detection_time) > timedelta(seconds=10):
                            play_sound('./sounds/al_raedy.wav')
                            last_detection_time = now

                        return jsonify({'status': 'already', 'name': name, 'boundingBox': bounding_box, 'message': 'เช็คชื่อวันนี้แล้ว'})
                else:
                    # ตรวจสอบเวลาล่าสุดที่ตรวจพบใบหน้า
                    if last_detection_time is None or (now - last_detection_time) > timedelta(seconds=10):
                        play_sound('./sounds/checkin_time_over.wav')
                        last_detection_time = now

                    return jsonify({'status': 'checkin_time_over', 'name': name, 'boundingBox': bounding_box, 'message': 'หมดเวลาเช็คชื่อแล้ว'})

        return jsonify({'status': 'no_match', 'message': 'No matching face found'})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
    
    
# @app.route('/process-frame', methods=['POST'])
# def process_frame():
#     """Process a frame for face recognition and check-in."""
#     try:
#         data = request.json
#         week_id = data.get('week_id')
#         day_id = data.get('day_id')
#         teacher_id = data.get('teacher_id')
#         frame_data = data.get('frame')
#         user_id = data.get('user_id')
#         username = data.get('username')

#         if not user_id:
#             return jsonify({"status": "error", "message": "User ID is required"}), 400

#         # Find user face data
#         faces = load_faces()
#         user_faces = [face for face in faces if face['id'] == int(user_id)]
#         if not user_faces:
#             return jsonify({"status": "error", "message": "No matching user found"}), 404

#         known_encoding = user_faces[0]['encoding']

#         # Convert Base64 to image
#         image_data = base64.b64decode(frame_data.split(',')[1])
#         pil_image = Image.open(BytesIO(image_data))
#         frame = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)

#         # Resize and detect faces
#         small_frame = cv2.resize(frame, (0, 0), fx=1/2, fy=1/2)
#         rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
#         face_locations = face_recognition.face_locations(rgb_small_frame)
#         face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

#         # Match faces
#         for face_location, face_encoding in zip(face_locations, face_encodings):
#             distance = np.linalg.norm(known_encoding - face_encoding)
#             if distance < 0.6:
#                 name = user_faces[0]['name']
#                 top, right, bottom, left = face_location
#                 bounding_box = {
#                     "x": left * 4,  # คูณ 4 เพราะเราย่อขนาดเฟรมลง 1/2
#                     "y": top * 4,
#                     "width": (right - left) * 4,
#                     "height": (bottom - top) * 4,
#                 }

#                 # Check if user has already checked in today
#                 conn = get_db_connection()
#                 cursor = conn.cursor(dictionary=True)
#                 cursor.execute('''SELECT MAX(time) AS last_check_in FROM check_line WHERE student_id = %s''', (user_id,))
#                 result = cursor.fetchone()
#                 last_check_in = result['last_check_in'] if result else None
#                 now = datetime.now(THAILAND_TZ)

#                 if is_within_check_in_time():
#                     if last_check_in is None or last_check_in.date() != now.date():
#                         cursor.execute('''INSERT INTO check_line (week, day_id, teacher_id, student_id, time, last_check_in, Checker) 
#                                        VALUES (%s, %s, %s, %s, %s, %s, %s)''',
#                                       (week_id, day_id, teacher_id, user_id, now, now.date(), username))
#                         conn.commit()
#                         play_sound('./sounds/check_success.wav')
#                         return jsonify({'status': 'success', 'name': name, 'boundingBox': bounding_box})
#                     else:
#                         play_sound('./sounds/al_raedy.wav')
#                         return jsonify({'status': 'already', 'name': name, 'boundingBox': bounding_box, 'message': 'เช็คชื่อวันนี้แล้ว'})
#                 else:
#                     play_sound('./sounds/checkin_time_over.wav')
#                     return jsonify({'status': 'checkin_time_over', 'name': name, 'boundingBox': bounding_box, 'message': 'หมดเวลาเช็คชื่อแล้ว'})

#         return jsonify({'status': 'no_match', 'message': 'No matching face found'})

#     except Exception as e:
#         return jsonify({'status': 'error', 'message': str(e)}), 500
    
@app.route('/teacher-process-image', methods=['POST'])
def teacher_process_image():
    print("Processing frame...")
    try:
        if 'image' not in request.files:
            return jsonify({"status": "error", "message": "No image file provided"}), 400

        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({"status": "error", "message": "No selected image file"}), 400
        
        filename = secure_filename(image_file.filename)
        unique_filename = str(uuid.uuid4()) + "_" + filename
        file_path = os.path.join(UPLOAD_FOLDER, unique_filename)
        
        image_file.save(file_path)
        
        with open(file_path, 'rb') as f:
            image_bytes = f.read()
            
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        week_id = request.form.get('week_id')
        day_id = request.form.get('day_id')
        teacher_id = request.form.get('teacher_id')
        student_ids = request.form.get('student_ids')
        room_ids = request.form.get('room_id')
        
        if not teacher_id or not student_ids or not room_ids:
            return jsonify({"status": "error", "message": "Missing required data"}), 400

        student_ids = json.loads(student_ids)
        room_ids = json.loads(room_ids)

        if len(student_ids) != len(room_ids):
            return jsonify({"status": "error", "message": "Student IDs and Room IDs must have the same length"}), 400

        student_room_pairs = list(zip(student_ids, room_ids))

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        
        # ตรวจสอบว่ามีข้อมูลในตาราง check_line หรือไม่
        query = """
        SELECT student_id, room_id FROM check_line 
        WHERE week = %s AND day_id = %s AND teacher_id = %s AND student_id IN (%s)
        """ % (week_id, day_id, teacher_id, ','.join(['%s'] * len(student_ids)))
        cursor.execute(query, student_ids)
        existing_records = cursor.fetchall()
        
        existing_students = {(rec['student_id'], rec['room_id']) for rec in existing_records}

        # สร้างรายการ student_statuses โดยตรวจสอบว่ามีข้อมูลในตาราง check_line หรือไม่
        student_statuses = []
        for student_id, room_id in student_room_pairs:
            if (student_id, room_id) in existing_students:
                student_statuses.append({
                    "student_id": student_id,
                    "room_id": room_id,
                    "status": 1,
                    "picture": unique_filename
                })
            else:
                student_statuses.append({
                    "student_id": student_id,
                    "room_id": room_id,
                    "status": 0,
                    "picture": unique_filename
                })

        # ถ้ามีนักเรียนที่ยังไม่มีข้อมูลในตาราง check_line ให้ทำการตรวจสอบใบหน้า
        students_to_check = [student_id for student_id, room_id in student_room_pairs if (student_id, room_id) not in existing_students]
        if students_to_check:
            cursor.execute("SELECT id, username, face_data FROM users WHERE id IN (%s)" % ','.join(['%s'] * len(students_to_check)), students_to_check)
            student_faces = cursor.fetchall()

            recognized_students = []
            face_locations = face_recognition.face_locations(rgb_frame)
            face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

            for face_encoding, (top, right, bottom, left) in zip(face_encodings, face_locations):
                for student in student_faces:
                    if student['face_data']:
                        known_encoding = np.frombuffer(student['face_data'], dtype=np.float64)
                        distance = np.linalg.norm(known_encoding - face_encoding)
                        if distance < 0.5:
                            recognized_students.append(student['id'])
                            cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                            text = f"{student['username']} (ID: {student['id']})"
                            cv2.putText(frame, text, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 255, 0), 2)

            # อัปเดต status สำหรับนักเรียนที่ตรวจพบใบหน้า
            for i, (student_id, room_id) in enumerate(student_room_pairs):
                if (student_id, room_id) not in existing_students and student_id in recognized_students:
                    student_statuses[i]["status"] = 1

        # บันทึกภาพที่แก้ไขแล้ว
        processed_image_path = os.path.join(UPLOAD_FOLDER, "processed_" + unique_filename)
        cv2.imwrite(processed_image_path, frame)

        # แปลงภาพที่แก้ไขแล้วเป็น base64
        with open(processed_image_path, "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')

        cursor.close()
        conn.close()

        return jsonify({
            "status": "success",
            "message": "Faces processed",
            "student_statuses": student_statuses,
            "processed_image": encoded_image  # ส่งภาพที่แก้ไขแล้วกลับไปยัง frontend
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/teacher-process-frame', methods=['POST'])
def teacher_process_frame():
    print("Processing frame...")
    try:
        data = request.json
        week_id = data.get('week_id')
        day_id = data.get('day_id')
        teacher_id = data.get('teacher_id')
        student_statuses = data.get('student_statuses')
        picture = data.get('picture')

        if not week_id or not day_id or not teacher_id or not student_statuses or not picture:
            return jsonify({"status": "error", "message": "Missing required data"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()
        

        for status in student_statuses:
            student_id = status.get('student_id')
            room_id = status.get('room_id')
            student_status = status.get('status')

            cursor.execute('''
                INSERT INTO check_line (week, day_id, teacher_id, student_id, room_id, student_status, status, picture)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            ''', (week_id, day_id, teacher_id, student_id, room_id, student_status, 1, picture))

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({
            "status": "success",
            "message": "Data saved successfully"
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    
@app.route('/update_face_data', methods=['POST'])
def update_face_data():
    """Update face data for a user."""
    try:
        data = request.form
        user_id = data.get('user_id')
        image_data = data.get('image')

        if not user_id or not image_data:
            return jsonify({"status": "error", "message": "User ID and image data are required"}), 400

        # Convert Base64 to image
        image_bytes = base64.b64decode(image_data)
        np_array = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Detect and encode face
        face_locations = face_recognition.face_locations(rgb_frame)
        if not face_locations:
            return jsonify({"status": "error", "message": "No face detected"}), 400

        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        if not face_encodings:
            return jsonify({"status": "error", "message": "Could not encode face"}), 400

        # Convert face encoding to bytes
        face_data = face_encodings[0].tobytes()

        # Update face data in the database
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('''
            UPDATE users SET face_data = %s WHERE id = %s
        ''', (face_data, user_id))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"status": "success", "message": "Face data updated successfully"})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    
# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)