from dataclasses import dataclass
from utils.db import db

@dataclass
class Areas(db.Model):
    __tablename__ = 'areas'

    id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre=db.Column(db.String)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre
        }