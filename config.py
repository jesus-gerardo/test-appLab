import os
from datetime import timedelta

SECRET_KEY=b'\xb6\x97x\xabp\x166\xf7\x10\xfcuZ\x01\xce\xd5\xafS\x8cR\x16\x8f\xfb\\{\x08\xf6\xc8\x06\xa1w\xe4s'
basedir=os.path.abspath(os.path.dirname(__file__))
DEBUG=True
UPLOAD_FOLDER="store"
SQLALCHEMY_DATABASE_URI="mysql://root:@localhost/test"
SQLALCHEMY_TRACK_MODIFICATIONS=True
JWT_SECRET_KEY= b'\xb6\x97x\xabp\x166\xf7\x10\xfcuZ\x01\xce\xd5\xafS\x8cR\x16\x8f\xfb\\{\x08\xf6\xc8\x06\xa1w\xe4s'
JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=365)
JWT_ERROR_MESSAGE_KEY = 'msg'
JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']