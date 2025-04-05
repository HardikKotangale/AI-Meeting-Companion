import os
from flask import Blueprint, request, jsonify, current_app
from google.cloud import speech
from ..models.meeting import Meeting
from ..models.transcript import Transcript
from ..config.database import db

bp = Blueprint('transcribe', __name__)

def transcribe_audio_with_google(audio_path):
    """Transcribe audio file using Google Cloud Speech-to-Text API"""
    try:
        # Initialize the client
        client = speech.SpeechClient()
        
        # Read the audio file
        with open(audio_path, "rb") as audio_file:
            content = audio_file.read()
        
        # Configure the request
        audio = speech.RecognitionAudio(content=content)
        
        # Determine audio format from file extension
        if audio_path.endswith('.wav'):
            encoding = speech.RecognitionConfig.AudioEncoding.LINEAR16
        elif audio_path.endswith('.mp3'):
            encoding = speech.RecognitionConfig.AudioEncoding.MP3
        else:
            encoding = speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED
        
        config = speech.RecognitionConfig(
            encoding=encoding,
            sample_rate_hertz=16000,  # You may need to adjust this
            language_code="en-US",
            enable_automatic_punctuation=True,
            model="default"  # Use "video" for audio from video files
        )
        
        # Send the request
        response = client.recognize(config=config, audio=audio)
        
        # Process the response
        transcript = ""
        for result in response.results:
            transcript += result.alternatives[0].transcript + " "
        
        return True, transcript.strip()
    
    except Exception as e:
        return False, f"Error transcribing audio: {str(e)}"

@bp.route('/transcribe/<int:meeting_id>', methods=['POST'])
def transcribe_meeting(meeting_id):
    # Get meeting
    meeting = Meeting.query.get_or_404(meeting_id)
    
    # Check if transcript already exists
    existing_transcript = Transcript.query.filter_by(meeting_id=meeting_id).first()
    if existing_transcript:
        return jsonify({
            'message': 'Transcript already exists',
            'transcript': existing_transcript.content
        }), 200
    
    # Transcribe the audio
    success, result = transcribe_audio_with_google(meeting.file_path)
    
    if not success:
        return jsonify({'error': result}), 500
    
    # Save transcript to database
    transcript = Transcript(
        meeting_id=meeting_id,
        content=result
    )
    
    db.session.add(transcript)
    db.session.commit()
    
    return jsonify({
        'message': 'Transcription completed successfully',
        'transcript': result
    }), 201

@bp.route('/transcribe/<int:meeting_id>', methods=['GET'])
def get_transcript(meeting_id):
    # Get transcript
    transcript = Transcript.query.filter_by(meeting_id=meeting_id).first()
    
    if not transcript:
        return jsonify({'error': 'Transcript not found'}), 404
    
    return jsonify({
        'meeting_id': meeting_id,
        'transcript': transcript.content
    }), 200
