from flask import Blueprint
from Controllers.UserController import index

user_bp = Blueprint('user_bp', __name__)
user_bp.route('/', methods=['GET']) (index)
# user_bp.route('/create', methods=['POST'])(store)
# user_bp.route('/<int:user_id>', methods=['GET'])(show)