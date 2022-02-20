from flask import jsonify, Request, request
from Models.Administradores import Administrador

from flask_sqlalchemy import SQLAlchemy
from utils.db import db

def index():
    # areas=Areas.Areas.query.get(1)
    # print(areas.administradores)
    return jsonify( [admin.serialize for admin in Administrador.query.all()] )

def store():
    try:
        # file = request.file('image')
        # file.save()
        admin = Administrador(
            nombre = request.form['nombre'],
            apellidos = request.form['apellidos'],
            correo = request.form['correo'],
            area_id = request.form['area_id'],
            estatus = request.form['estatus']
        )
        db.session.add(admin)
        db.session.commit()
        return jsonify({'status': True})
    except:
        db.session.rollback()
        return jsonify({'status': False})

def update(id):
    admin = Administrador.query.filter_by(id=id).one()
    return jsonify(id)

def remove(id):
    try:
        admin = Administrador.query.filter_by(id=id).first()
        db.session.delete(admin)
        db.session.commit()
        return jsonify({'status': True})
    except:
        db.session.rollback()
        return jsonify({'status': False})