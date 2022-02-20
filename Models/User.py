from dataclasses import dataclass
from utils.db import db

@dataclass
class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    nick = db.Column(db.String)
    email = db.Column(db.String)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'nick': self.nick,
            'email': self.email
        }