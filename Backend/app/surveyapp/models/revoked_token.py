from . import db


class RevokedToken(db.Model):
    __tablename__ = 'revoked_token'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    jti = db.Column(db.String(255, convert_unicode=True), nullable=False)
    expired_at = db.Column(db.TIMESTAMP, nullable=False)

    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)

    @classmethod
    def is_jti_blacklisted(cls, jti):
        query = cls.query.filter_by(jti=jti).first()
        return bool(query)
