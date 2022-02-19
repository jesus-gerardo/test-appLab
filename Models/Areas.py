from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db=SQLAlchemy()

@dataclass
class Areas(db.Model):
    __tablename__ = 'areas'

    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre
        }
    