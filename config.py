import os

SECRET_KEY=os.urandom(32)
basedir=os.path.abspath(os.path.dirname(__file__))
DEBUG=True
SQLALCHEMY_DATABASE_URI="mysql://root:@localhost/test"
SQLALCHEMY_TRACK_MODIFICATIONS=True