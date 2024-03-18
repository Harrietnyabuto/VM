
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
# from dotenv import load_dotenv
from datetime import timedelta

from models import db

from routes.auth import auth_bp, jwt
from routes.user_bp import user_bp, bcrypt


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///volunteer.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'sjbwudvtc763'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=2)

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma = Marshmallow(app)
    migrate = Migrate(app, db)

    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)

    CORS(app, resources={r"*": {"origins": "*"}})
    return app


app = create_app()
