from flask import Flask, Response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from Routers.areas import areas_bp
from Routers.administrador import administrador_bp
from Routers.auth import auth
from utils.db import db
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from Routers.main import spa_controller

app = Flask(__name__)
app.config.from_object('config')
app.url_map.strict_slashes = False
CORS(app)
jwt = JWTManager(app)
SQLAlchemy(app)

app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(areas_bp, url_prefix='/areas')
app.register_blueprint(administrador_bp, url_prefix='/administrador')
app.register_blueprint(spa_controller)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')