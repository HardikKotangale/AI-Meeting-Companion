def allowed_file(filename):
    """Check if file has an allowed extension"""
    ALLOWED_EXTENSIONS = {'mp3', 'wav', 'mp4'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
