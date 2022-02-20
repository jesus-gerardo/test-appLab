from flask import Flask, Response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from Routers.areas import areas_bp
from Routers.administrador import administrador_bp
from utils.db import db

app = Flask(__name__)
app.config.from_object('config')
SQLAlchemy(app)

# app.register_blueprint(areas_bp, url_prefix='/areas')
app.register_blueprint(administrador_bp, url_prefix='/administrador')

@app.route("/")
def index():
    return jsonify({'message': "access denied"})

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.debug = True
    app.run()