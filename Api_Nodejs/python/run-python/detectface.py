import cv2
import face_recognition
import mysql.connector
import numpy as np
import torch
from datetime import datetime, time, timedelta
import pytz
import sys
import sounddevice as sd
import wave

# Set up Thailand timezone
THAILAND_TZ = pytz.timezone('Asia/Bangkok')

def play_sound(filename):
    try:
        with wave.open(filename, 'rb') as wf:
            data = wf.readframes(wf.getnframes())
            sound = np.frombuffer(data, dtype=np.int16)
            sd.play(sound, samplerate=wf.getframerate())
            sd.wait()
    except FileNotFoundError:
        print(f"File {filename} not found")

def display_message(frame, message, sound_file=None, duration=5):
    end_time = datetime.now(THAILAND_TZ) + timedelta(seconds=duration)
    if sound_file:
        play_sound(sound_file)
    while datetime.now(THAILAND_TZ) < end_time:
        cv2.putText(frame, message, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
        cv2.imshow('Video', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

token = 1

# Check face database connection
conn = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="root",
    password="root",
    database="facescansystem_2567"
)

cursor = conn.cursor(dictionary=True)

# Verify the token and retrieve the corresponding user
cursor.execute('''
SELECT id staff_id, username name, face_data 
FROM users
WHERE id = %s
''', (token,))
user = cursor.fetchone()

if user is None:
    print("Invalid token")
    sys.exit(1)  # Exit the script if the token is invalid

# Load all faces from the 'users' table
cursor.execute('''
SELECT id staff_id, username name, face_data 
FROM users
''')
faces = cursor.fetchall()

# Convert all faces into a single tensor and keep on CPU
all_faces = torch.stack([torch.tensor(np.frombuffer(face["face_data"], dtype=np.float64)) for face in faces])
print("Load all faces done")

video_capture = cv2.VideoCapture(0)
print("Camera ready")

def get_last_check_in_time(staff_id):
    cursor.execute('''
    SELECT MAX(time) AS last_check_in
    FROM check_in
    WHERE staff_id = %s
    ''', (staff_id,))
    result = cursor.fetchone()
    last_check_in = result['last_check_in']
    if last_check_in:
        last_check_in = last_check_in.astimezone(THAILAND_TZ)
    return last_check_in

def is_within_check_in_time():
    now = datetime.now(THAILAND_TZ).time()
    # First check-in window: 8:00 AM to 10:00 AM
    morning_start_time = time(8, 0)
    morning_end_time = time(10, 0)
    # Second check-in window: 5:00 PM to 6:00 PM
    evening_start_time = time(17, 0)
    evening_end_time = time(18, 0)
    
    return (morning_start_time <= now <= morning_end_time) or (evening_start_time <= now <= evening_end_time)

# Track which sounds have been played
played_sounds = {}

while True:
    ok, frame = video_capture.read()
    original_frame = frame.copy()  # Capture the original frame without any drawings
    small_frame = cv2.resize(frame, (0, 0), fx=1 / 4, fy=1 / 4)
    rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

    face_locations = face_recognition.face_locations(rgb_small_frame)  # CPU operation
    face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)  # CPU operation

    for face_encoding, face_location in zip(face_encodings, face_locations):
        # Convert face encoding to torch tensor and keep on CPU
        face_encoding = torch.tensor(face_encoding)

        # Calculate the distance between the face encoding and all loaded faces
        face_distances = torch.norm(all_faces - face_encoding, dim=1)

        min_index = torch.argmin(face_distances).item()
        staff_id = faces[min_index]["staff_id"]
        name = faces[min_index]["name"]

        # Verify that the recognized staff_id matches the user associated with the provided token
        if staff_id == user['staff_id']:
            # Draw a red rectangle around the face
            top, right, bottom, left = face_location
            cv2.rectangle(frame, (left * 4, top * 4), (right * 4, bottom * 4), (0, 0, 255), 2)
            cv2.putText(frame, name, (left * 4, top * 4 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)

            # Check the last check-in time
            last_check_in_time = get_last_check_in_time(staff_id)
            now = datetime.now(THAILAND_TZ)

            message = ''
            sound_file = None

            if is_within_check_in_time():
                if last_check_in_time is None or last_check_in_time.date() != now.date():
                    # Insert check-in data into the database
                    cursor.execute('''
                    INSERT INTO check_in (staff_id, time) VALUES (%s, %s)
                    ''', (staff_id, now))
                    conn.commit()

                    # Crop and save the face image
                    cropped_face = original_frame[top * 4:bottom * 4, left * 4:right * 4]
                    cv2.imwrite(f'nodejs/api/app2/images/{staff_id}_{now.strftime("%Y%m%d_%H%M%S")}.jpg', cropped_face)

                    # Display success message and play sound
                    message = 'Check-in success'
                    sound_file = 'python/register.wav'
                else:
                    # Display message if check-in was already done today and play sound
                    message = 'Already registered today please check-out in Q'
                    sound_file = 'already_registered.wav'
            else:
                # Display message if outside check-in window and play sound
                message = 'Check-in time is over'
                sound_file = 'check_in_time_over.wav'

            if staff_id not in played_sounds:
                played_sounds[staff_id] = set()
            if message not in played_sounds[staff_id]:
                display_message(frame, message, sound_file=sound_file, duration=5)
                played_sounds[staff_id].add(message)

    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video_capture.release()
cv2.destroyAllWindows()
conn.close()
