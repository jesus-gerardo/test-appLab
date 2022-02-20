from flask import Blueprint
from Controllers.AdministradoresController import index, get_image, store, remove

administrador_bp = Blueprint('administrador_bp', __name__)
administrador_bp.route('/', methods=['GET'])(index)
administrador_bp.route('/<file>', methods=['GET'])(get_image)
administrador_bp.route('/store', methods=['POST']) (store)
administrador_bp.route('/<int:id>/delete', methods=['DELETE']) (remove)