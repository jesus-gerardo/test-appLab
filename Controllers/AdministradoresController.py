from fileinput import filename
import uuid
from flask import jsonify, request, url_for, send_from_directory
from Models.Administradores import Administrador
from utils.db import db
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
import json
import os

@jwt_required()
def index():
    page = request.args.get('page', default=1, type=int)
    limit = request.args.get('limit', default=5, type=int)
    query = json.loads(request.args.get('query'))

    rows = Administrador.query
    if query.get('name', None) is not None:
        print("entro a este if")
        rows = rows.filter( Administrador.nombre.ilike(query.get('name')) )
        
    if query.get('area', None) is not None:
        rows = rows.filter(Administrador.area_id == query.get('area'))

    if query.get('estatus', None) is not None:
        rows = rows.filter(Administrador.estatus == query.get('estatus'))

    return jsonify(
        count=rows.count(),
        data=[admin.serialize for admin in rows.paginate(page, limit).items]
    )

def get_image(file):
    return send_from_directory('store', file)

@jwt_required()
def store():
    try:
        print(request.form.get('id', None))
        admin = Administrador.query.get(request.form['id'])
        if admin is None:
            admin = Administrador(
                nombre = request.form['nombre'],
                apellidos = request.form['apellidos'],
                correo = request.form['correo'],
                area_id = request.form['area_id'],
                estatus = request.form['estatus']
            )
            db.session.add(admin)
        else:
            admin.nombre = request.form['nombre']
            admin.apellidos = request.form['apellidos']
            admin.correo = request.form['correo']
            admin.area_id = request.form['area_id']
            admin.estatus = request.form['estatus']

        if 'upload' in request.files:
            file = request.files['upload']
            extension = secure_filename(file.filename).split('.')[-1]
            filename = secure_filename(f"{str(uuid.uuid1())}.{extension}" )
            file.save(os.path.join(os.path.abspath( os.path.dirname('') ), 'store', filename)) # Then save the file
            admin.image = filename

        db.session.commit()
        return jsonify(response=True)
    except:
        db.session.rollback()
        return jsonify(response=False)

@jwt_required()
def remove(id):
    try:
        admin = Administrador.query.get(id)
        db.session.delete(admin)
        db.session.commit()
        return jsonify(response=True)
    except:
        db.session.rollback()
        return jsonify(response=False)