from flask import jsonify, request, Response, abort
from Models.User import User

def index():
    return jsonify( [user.serialize for user in User.query.all()] )