from flask import Blueprint, render_template
spa_controller = Blueprint('SpaController' , __name__, url_prefix='/')

@spa_controller.route('/', defaults={'path': ''})
@spa_controller.route('/<path:path>')
def spa(path):
    print("entre a la ruta")
    return render_template('index.html')