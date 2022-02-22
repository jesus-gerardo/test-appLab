from marshmallow import Schema, fields

class RequestLogin(Schema):
    email= fields.Email(required=True)
    password= fields.String(required=True)