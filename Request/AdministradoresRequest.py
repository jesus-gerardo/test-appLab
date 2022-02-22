from marshmallow import Schema, fields

class AdministradoresRequest(Schema):
    nombre=fields.String(required=True)
    apellidos=fields.String(required=True)
    correo=fields.Email(required=True)
    area_id=fields.Integer(required=True)
    estatus=fields.Integer(required=True)