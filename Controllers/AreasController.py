from flask import jsonify, request

from Models.Areas import Areas

def index():
    return jsonify( [areas.serialize for areas in Areas.query.all()] )