from flask import Flask, Response, jsonify, request
from flask_migrate import Migrate

from Routers.router import user_bp
from Models.User import db

app = Flask(__name__)
app.config.from_object('config')

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(user_bp, url_prefix='/users')

@app.route("/")
def index():
    return jsonify({'message': "access denied"})

if __name__ == '__main__':
    app.debug = True
    app.run()