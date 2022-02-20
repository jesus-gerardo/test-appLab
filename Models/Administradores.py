from dataclasses import dataclass

from sqlalchemy import true
from utils.db import db
from sqlalchemy.orm import relationship
from Models.Areas import Areas

@dataclass
class Administrador(db.Model):
    __tablename__ = "administradores"

    id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    image=db.Column(db.String)
    nombre=db.Column(db.String)
    apellidos=db.Column(db.String)
    correo=db.Column(db.String, unique=True)
    area_id=db.Column(db.Integer, db.ForeignKey('areas.id'))
    estatus=db.Column(db.Integer)
    area=relationship(Areas, backref='administradores', uselist=False)

    @property
    def serialize(self):
        return {
            'id' : self.id,
            'image' : self.image,
            'nombre' : self.nombre,
            'apellidos' : self.apellidos,
            'correo' : self.correo,
            'area_id' : self.area_id,
            'estatus' : self.estatus,
            'area': self.area.serialize
        }

