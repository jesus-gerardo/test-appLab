from dataclasses import dataclass
from utils.db import db

@dataclass
class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    password = db.Column(db.String(150))
    email = db.Column(db.String(40))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'password': self.password,
            'email': self.email
        }

class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)