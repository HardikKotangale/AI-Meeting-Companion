import requests
from flask import Blueprint, request, jsonify, current_app
from ..models.meeting import Meeting
from ..models.transcript import Transcript

bp = Blueprint('summarize', __name__)

def summarize_text(text):
    """Summarize text using an LLM API (Perplexity API)"""
    try:
        api_key = current_app.config.get('PERPLEXITY_API_KEY')
        
        if not api_key:
            return False, "Perplexity API key not configured"
        
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        
        data = {
            "model": "sonar-pro",
            "messages": [
                {
                    "role": "system",
                    "content": "You are an AI assistant that summarizes meeting transcripts. Create a concise summary that captures the key points, decisions, and action items from the meeting."
                },
                {
                    "role": "user",
                    "content": f"Please summarize the following meeting transcript:\n\n{text}"
                }
            ]
        }
        
        response = requests.post(
            "https://api.perplexity.ai/chat/completions",
            headers=headers,
            json=data
        )
        
        if response.status_code == 200:
            result = response.json()
            summary = result['choices'][0]['message']['content']
            return True, summary
        else:
            return False, f"API error: {response.status_code} - {response.text}"
            
    except Exception as e:
        return False, f"Error summarizing text: {str(e)}"

@bp.route('/summarize/<int:meeting_id>', methods=['GET'])
def summarize_meeting(meeting_id):
    # Get meeting and transcript
    meeting = Meeting.query.get_or_404(meeting_id)
    transcript = Transcript.query.filter_by(meeting_id=meeting_id).first()
    
    if not transcript:
        return jsonify({'error': 'Transcript not found. Please transcribe the meeting first.'}), 404
    
    # Summarize the transcript
    success, result = summarize_text(transcript.content)
    
    if not success:
        return jsonify({'error': result}), 500
    
    return jsonify({
        'meeting_id': meeting_id,
        'summary': result
    }), 200
