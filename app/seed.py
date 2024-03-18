from models import db, User
from app import create_app

app = create_app()

users = [{
    "id": "1",
    "email": "ctrelevan0@google.com.hk",
    "password": "$2a$04$zNlIuT4hhYc1EK9DLhHvnu3nlf.rek6gJg3n4zd6P7blLsRl3Wsye"
}, {
    "id": "2",
    "email": "mghost1@trellian.com",
    "password": "$2a$04$YP0UauVJ7NlwxeqlQJZ2tOVxS6ExATPwkPoXS6JUE6JXocESA/xJC"
}, {
    "id": "3",
    "email": "dchalk2@cyberchimps.com",
    "password": "$2a$04$aYl56qSM4V4w97wFK.2CoeA5RdD1Q6STBdWnmcLsEgefw0Zg.7CQy"
}, {
    "id": "4",
    "email": "husmar3@nyu.edu",
    "password": "$2a$04$W7jrS.PWy1DiQ3eFx7mtReYRllM4HzYLopKspMTErYZKBOH98sPui"
}, {
    "id": "5",
    "email": "cbelsey4@tinypic.com",
    "password": "$2a$04$22ZIR1TNo47S9G3l38gyHOdcOp7M9lUuho2aiXGMtygB25xd6Pboy"
}, {
    "id": "6",
    "email": "nrowlands5@uol.com.br",
    "password": "$2a$04$UoyjV68KexDqXWkjQ5BkpOTC/t3F1PtYgflCCh9SlXtmSwlBdnwfq"
}, {
    "id": "7",
    "email": "lthelwll6@webeden.co.uk",
    "password": "$2a$04$uxcET4Ia.YIHATFM7vQZNOhQ8gzjPJGMjNDdlit8GsuxOyGCidPRy"""
}, {
    "id": "8",
    "email": "lgieves7@altervista.org",
    "password": "$2a$04$IvoYqJioWFJqpeRk4ZPGpufIWYx4eVg11xlwUE9RB8TBHiuQJ6c1i"
}, {
    "id": "9",
    "email": "hhoggetts8@java.com",
    "password": "$2a$04$C46Uuz8q86GGoAQR0IM3puHwBHn5OTBf8Swzp04U9O6hA0mQoLucS"
}, {
    "id": "10",
    "email": "dschutte9@msn.com",
    "password": "$2a$04$ysNTtPqSBBNrQs4cRmOY0.KU.v./KMYFQz7QQawsIPtjFdUQLpf5C"
}]


def seed_database():
    with app.app_context():
        User.query.delete()

        for user_data in users:

            user = User(**user_data)
            db.session.add(user)
        db.session.commit()
        print("Users added!!!")


if __name__ == "__main__":
    seed_database()
