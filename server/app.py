from flask import Flask
from flask_cors import CORS
from api.functionalities import upload, transcribe, summarize, action_items, sentiment
from config.database import init_db

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes
    
    # Load configuration
    app.config.from_pyfile('config/settings.py')
    
    # Initialize database
    init_db(app)
    
    # Register blueprints
    app.register_blueprint(upload.bp, url_prefix='/api')
    app.register_blueprint(transcribe.bp, url_prefix='/api')
    app.register_blueprint(summarize.bp, url_prefix='/api')
    app.register_blueprint(action_items.bp, url_prefix='/api')
    app.register_blueprint(sentiment.bp, url_prefix='/api')
    
    @app.route('/')
    def index():
        return "AI Meeting Companion API is running!"
    
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
