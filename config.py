import os
from datetime import timedelta

SECRET_KEY=b'\xb6\x97x\xabp\x166\xf7\x10\xfcuZ\x01\xce\xd5\xafS\x8cR\x16\x8f\xfb\\{\x08\xf6\xc8\x06\xa1w\xe4s'
basedir=os.path.abspath(os.path.dirname(__file__))
DEBUG=True
UPLOAD_FOLDER="store"
SQLALCHEMY_DATABASE_URI="postgresql+psycopg2://tdnjidoawsltvj:81c7b2f8f99326f9c86b1aecf109e5d633da024888ce5d10747a18c117b811e9@ec2-34-230-198-12.compute-1.amazonaws.com:5432/d91l89jrknt0u5"
SQLALCHEMY_TRACK_MODIFICATIONS=True
JWT_SECRET_KEY= b'\xb6\x97x\xabp\x166\xf7\x10\xfcuZ\x01\xce\xd5\xafS\x8cR\x16\x8f\xfb\\{\x08\xf6\xc8\x06\xa1w\xe4s'
JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=365)
JWT_ERROR_MESSAGE_KEY = 'msg'
JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']