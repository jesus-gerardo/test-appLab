from flask import Blueprint
from Controllers.AuthController import login, logout, user

auth = Blueprint('auth', __name__)
auth.route('login', methods=['POST'])(login)
auth.route('logout', methods=['GET'])(logout)
auth.route('user', methods=['GET'])(user)