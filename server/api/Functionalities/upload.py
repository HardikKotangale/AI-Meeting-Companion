import os
import subprocess
from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename
from ..models.meeting import Meeting
from ..config.database import db


## Save as a blueprint
bp = Blueprint('upload', __name__)


## Checks if the uploaded file is right or not.
def allowed_file(filename):
    """Check if file has an allowed extension"""
    ALLOWED_EXTENSIONS = {'mp3', 'wav', 'mp4'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

## use Ffmpeg to convert vedio to audio
def convert_video_to_audio(video_path, audio_path):
    """Convert video file to audio using FFmpeg"""
    try:
        command = f"ffmpeg -i {video_path} -q:a 0 -map a {audio_path} -y"
        process = subprocess.run(
            command,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        if process.returncode == 0:
            return True, audio_path
        else:
            return False, f"FFmpeg error: {process.stderr}"
    except Exception as e:
        return False, str(e)


##
@bp.route('/upload', methods=['POST'])
def upload_file():
    # Check if file part exists in request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    # Check if filename is empty
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Check if file type is allowed
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        
        # Create upload folder if it doesn't exist
        upload_folder = current_app.config['UPLOAD_FOLDER']
        os.makedirs(upload_folder, exist_ok=True)
        
        # Save file
        file_path = os.path.join(upload_folder, filename)
        file.save(file_path)
        
        # Process based on file type
        if filename.endswith('.mp4'):
            # Convert video to audio
            audio_filename = f"{filename.rsplit('.', 1)[0]}.wav"
            audio_path = os.path.join(upload_folder, audio_filename)
            success, result = convert_video_to_audio(file_path, audio_path)
            
            if not success:
                return jsonify({'error': f'Failed to convert video to audio: {result}'}), 500
            
            # Use audio path for further processing
            processed_file_path = audio_path
        else:
            # Already an audio file
            processed_file_path = file_path
        
        # Create meeting record
        meeting = Meeting(
            title=filename.rsplit('.', 1)[0],
            file_path=processed_file_path
        )
        
        db.session.add(meeting)
        db.session.commit()
        
        return jsonify({
            'message': 'File uploaded successfully',
            'meeting_id': meeting.id,
            'file_path': processed_file_path
        }), 201
    
    return jsonify({'error': 'File type not allowed'}), 400
