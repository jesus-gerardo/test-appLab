from flask import jsonify, request
from Models.Areas import Areas
from flask_jwt_extended import jwt_required

# @jwt_required()
def index():
    return jsonify([areas.serialize for areas in Areas.query.all()])