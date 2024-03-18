from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from models import User

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
