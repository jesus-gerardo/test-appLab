from dataclasses import dataclass
from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

@dataclass
class Administrador(db.Model):
    __tablename__ = "administradores"

    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String)
    apellidos=db.Column(db.String)
    correo=db.Column(db.String, unique=True)
    area_id=db.Column(db.Integer, db.ForeignKey('areas.id'))
    area=db.relationship('Areas', backref='Administrador')
    estatus=db.Column(db.String)

    @property
    def serialize(self):
        return {
            'id' : self.id,
            'nombre' : self.nombre,
            'apellidos' : self.apellidos,
            'correo' : self.correo,
            'area_id' : self.area,
            'estatus' : self.estatus
        }