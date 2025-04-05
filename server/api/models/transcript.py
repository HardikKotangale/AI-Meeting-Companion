from ..config.database import db
from datetime import datetime

class Transcript(db.Model):
    __tablename__ = 'transcripts'
    
    id = db.Column(db.Integer, primary_key=True)
    meeting_id = db.Column(db.Integer, db.ForeignKey('meetings.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationship with Meeting
    meeting = db.relationship('Meeting', backref=db.backref('transcript', uselist=False))
    
    def __repr__(self):
        return f'<Transcript for Meeting {self.meeting_id}>'

