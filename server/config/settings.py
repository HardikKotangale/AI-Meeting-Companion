import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Flask settings
DEBUG = os.getenv('DEBUG', 'True') == 'True'
SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')

# Database settings
DATABASE_URI = os.getenv('DATABASE_URI', 'postgresql://postgres:password@localhost/ai_meeting_companion')

# API keys
PERPLEXITY_API_KEY = os.getenv('PERPLEXITY_API_KEY', '')


# Google Cloud Speech-to-Text settings
GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS', '')

# File upload settings
UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER', 'uploads')
MAX_CONTENT_LENGTH = 50 * 1024 * 1024  # 50MB max upload
