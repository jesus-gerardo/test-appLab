from flask import jsonify, request
from Models.User import User
from utils.db import db
from flask_bcrypt import check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

def login():
    try:
        user = User.query.filter_by(email=request.form['email']).first()
        if user:
            password=request.form['password']
            if check_password_hash(user.serialize['password'], password):
                return jsonify({
                    'token': create_access_token(identity=user),
                    'response':True
                })
            else:
                return jsonify({'response':False})
        else:
            return jsonify({'response':False})
    except Exception as error:
        return jsonify({'response':False, 'error': str(error)})

def logout():
    try:
        return jsonify({'response':True})
    except:
        return jsonify({'response':False})

@jwt_required()
def user():
    try:
        return jsonify(get_jwt_identity())
    except:
        return jsonify({'response':False})