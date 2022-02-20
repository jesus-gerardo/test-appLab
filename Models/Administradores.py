from dataclasses import dataclass

from sqlalchemy import true
from utils.db import db
from sqlalchemy.orm import relationship
from Models.Areas import Areas

@dataclass
class Administrador(db.Model):
    __tablename__ = "administradores"

    id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre=db.Column(db.String)
    apellidos=db.Column(db.String)
    correo=db.Column(db.String, unique=True)
    area_id=db.Column(db.Integer, db.ForeignKey('areas.id'))
    estatus=db.Column(db.String)
    area=relationship(Areas, backref='administradores', uselist=False)
    # area=relationship('Models.Areas.Areas', backref='administradores', uselist=False)

    @property
    def serialize(self):
        # print(self.area)
        return {
            'id' : self.id,
            'nombre' : self.nombre,
            'apellidos' : self.apellidos,
            'correo' : self.correo,
            # 'area_id' : self.area_id,
            'estatus' : self.estatus,
            'area': self.area.serialize
        }

