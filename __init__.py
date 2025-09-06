
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Text, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.sql import func
from ..db import Base

class Org(Base):
    __tablename__ = "orgs"
    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False, unique=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Team(Base):
    __tablename__ = "teams"
    id = Column(Integer, primary_key=True)
    org_id = Column(Integer, ForeignKey("orgs.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(200), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String(320), nullable=False, unique=True)
    display_name = Column(String(200), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class TeamMember(Base):
    __tablename__ = "team_members"
    team_id = Column(Integer, ForeignKey("teams.id", ondelete="CASCADE"), primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    role = Column(String(50), nullable=False, default="member")  # member|lead|admin
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class UsageCounter(Base):
    __tablename__ = "usage_counters"
    org_id = Column(Integer, ForeignKey("orgs.id", ondelete="CASCADE"), primary_key=True)
    day = Column(String(10), primary_key=True)  # YYYY-MM-DD
    tokens_in = Column(Integer, nullable=False, default=0)
    tokens_out = Column(Integer, nullable=False, default=0)
    usd = Column(Numeric(12,6), nullable=False, default=0)

class BudgetPolicy(Base):
    __tablename__ = "budget_policies"
    org_id = Column(Integer, ForeignKey("orgs.id", ondelete="CASCADE"), primary_key=True)
    max_usd_day = Column(Numeric(12,2), nullable=False, default=50.00)
    max_usd_month = Column(Numeric(12,2), nullable=False, default=500.00)

class Report(Base):
    __tablename__ = "reports"
    id = Column(Integer, primary_key=True)
    org_id = Column(Integer, ForeignKey("orgs.id", ondelete="CASCADE"), nullable=False)
    team_id = Column(Integer, ForeignKey("teams.id", ondelete="SET NULL"), nullable=True)
    task_id = Column(String(64), nullable=True)
    level = Column(String(10), nullable=False, default="green")  # green|orange|red
    summary = Column(Text, nullable=True)
    details = Column(JSONB, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class WebhookSubscriber(Base):
    __tablename__ = "webhook_subscribers"
    id = Column(Integer, primary_key=True)
    org_id = Column(Integer, ForeignKey("orgs.id", ondelete="CASCADE"), nullable=False)
    topic = Column(String(100), nullable=False)
    url = Column(Text, nullable=False)
    secret = Column(String(128), nullable=True)
    active = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
