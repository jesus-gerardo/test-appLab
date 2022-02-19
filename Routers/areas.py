from flask import Blueprint
from Controllers.AreasController import index

areas_bp = Blueprint('area_bp', __name__)
areas_bp.route('/', methods=['GET']) (index)
# user_bp.route('/create', methods=['POST'])(store)
# user_bp.route('/<int:user_id>', methods=['GET'])(show)

