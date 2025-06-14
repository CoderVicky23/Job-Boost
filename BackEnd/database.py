from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from typing import Generator


DATABASE_URL = "mysql+pymysql://developer:password@localhost/fastapi_db"

engine = create_engine(DATABASE_URL, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db() -> Generator:
    """
    Dependency that provides a SQLAlchemy session for each request.
    It handles opening and closing the session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()