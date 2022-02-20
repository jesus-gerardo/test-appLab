from itertools import count
from flask import jsonify, request
from sqlalchemy import null
from Models.Administradores import Administrador
from utils.db import db
from flask_jwt_extended import jwt_required
import json

# @jwt_required()
def index():
    # areas=Areas.Areas.query.get(1)
    # print(areas.administradores)
    page = request.args.get('page', default=1, type=int)
    limit = request.args.get('limit', default=5, type=int)
    query = json.loads(request.args.get('query'))
    print(query)
    
    rows = Administrador.query
    # if query['name'] is not None or query['name'] is not '' :
    #     rows.filter( Administrador.nombre.like(query['name']) )

    # if query['area'] is not None:
    #     rows.filter_by()

    if query['estatus'] is not None:
        rows.filter(Administrador.estatus.is_(query['estatus']))

    return jsonify(
        count=rows.count(),
        data=[admin.serialize for admin in rows.paginate(page, limit).items]
    )

# @jwt_required()
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
        return jsonify(response=True)
    except:
        db.session.rollback()
        return jsonify(response=False)

# @jwt_required()
def update(id):
    admin = Administrador.query.get(id)
    return jsonify(admin.serialize)

# @jwt_required()
def remove(id):
    try:
        admin = Administrador.query.get(id)
        db.session.delete(admin)
        db.session.commit()
        return jsonify(response=True)
    except:
        db.session.rollback()
        return jsonify(response=False)