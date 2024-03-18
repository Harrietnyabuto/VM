from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(50))
    email = db.Column(db.String)


class Profile(db.Model):
    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    profile_photo = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


class Notification(db.Model):
    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key=True)


class Schedules(db.Model):
    __tablename__ = 'schedules'

    id = db.Column(db.Integer, primary_key=True)


class Connect(db.Model):
    __tablename__ = 'connect'

    id = db.Column(db.Integer, primary_key=True)


class Opportunity(db.Model):
    __tablename__ = 'opportunities'

    id = db.Column(db.Integer, primary_key=True)


class TokenBlocklist(db.Model):
    __tablename__ = 'tokenblocklist'

    id = db.Column(db.Integer, primary_key=True)
