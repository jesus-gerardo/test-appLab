from flask import Flask, Response, request
import json;

app = Flask(__name__)

@app.route("/")
def index():
    return json.dumps("hello")