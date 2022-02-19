from flask import jsonify, request, Response, abort
from flask_sqlalchemy import SQLAlchemy
from Models.User import User

db = SQLAlchemy()

def index():
    return jsonify( [user.serialize for user in User.query.all()] )