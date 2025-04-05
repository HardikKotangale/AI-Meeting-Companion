from api.config.database import db
from datetime import datetime

class ActionItem(db.Model):
    __tablename__ = 'action_items'
    
    id = db.Column(db.Integer, primary_key=True)
    meeting_id = db.Column(db.Integer, db.ForeignKey('meetings.id'), nullable=False)
    description = db.Column(db.Text, nullable=False)
    assignee = db.Column(db.String(100))
    deadline = db.Column(db.DateTime)
    status = db.Column(db.String(20), default='pending')  # pending, completed, etc.
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationship with Meeting
    meeting = db.relationship('Meeting', backref=db.backref('action_items', lazy=True))
    
    def to_dict(self):
        return {
            'id': self.id,
            'meeting_id': self.meeting_id,
            'description': self.description,
            'assignee': self.assignee,
            'deadline': self.deadline.isoformat() if self.deadline else None,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    def __repr__(self):
        return f'<ActionItem {self.description[:20]}...>'
