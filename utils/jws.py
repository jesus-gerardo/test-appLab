from jwt import encode, decode, exceptions
from datetime import datetime, timedelta
from flask import jsonify, current_app

def expire_token(days: int):
    now = datetime.now()
    new_date = now+timedelta(days)
    return new_date

def write_token(data: dict):
    token = encode(payload={**data, 'exp': expire_token(2)}, key=current_app.config['SECRET_KEY'], algorithm="HS256")
    return token.encode('UTF-8')

def valid_token(token, output=False):
    try:
        if output:
            return decode(token, key=current_app.config['SECRET_KEY'], algorithms=['HS256'])
        decode(token, key=current_app.config['SECRET_KEY'], algorithms=['HS256'])
    except exceptions.DecodeError:
        return jsonify({'message': "Invalid toke"})
    except exceptions.ExpiredSignatureError:
        return jsonify({'message': "Invalid toke"})
