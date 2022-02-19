from flask import Flask, Response, jsonify, request
from flask_migrate import Migrate

from Routers.users import user_bp
from Routers.areas import areas_bp
from Models.User import db as user
from Models.Administradores import db as administrador
from Models.Areas import db as areas

app = Flask(__name__)
app.config.from_object('config')

user.init_app(app)
Migrate(app, user)

areas.init_app(app)
Migrate(app, areas)

administrador.init_app(app)
Migrate(app, administrador)

app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(areas_bp, url_prefix='/areas')

@app.route("/")
def index():
    return jsonify({'message': "access denied"})

if __name__ == '__main__':
    app.debug = True
    app.run()