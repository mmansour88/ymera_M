"""
Revision ID: 0001_fullstack_baseline
Revises:
Create Date: 2025-09-06
"""
from alembic import op
import sqlalchemy as sa

revision = '0001_fullstack_baseline'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('orgs',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('name', sa.String(length=200), nullable=False, unique=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )
    op.create_table('teams',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('org_id', sa.Integer(), sa.ForeignKey('orgs.id', ondelete='CASCADE'), nullable=False),
        sa.Column('name', sa.String(length=200), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )
    op.create_table('users',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('email', sa.String(length=320), nullable=False, unique=True),
        sa.Column('display_name', sa.String(length=200)),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )
    op.create_table('team_members',
        sa.Column('team_id', sa.Integer(), sa.ForeignKey('teams.id', ondelete='CASCADE'), primary_key=True),
        sa.Column('user_id', sa.Integer(), sa.ForeignKey('users.id', ondelete='CASCADE'), primary_key=True),
        sa.Column('role', sa.String(length=50), nullable=False, server_default='member'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )
    op.create_table('usage_counters',
        sa.Column('org_id', sa.Integer(), sa.ForeignKey('orgs.id', ondelete='CASCADE'), primary_key=True),
        sa.Column('day', sa.String(length=10), primary_key=True),
        sa.Column('tokens_in', sa.Integer(), nullable=False, server_default='0'),
        sa.Column('tokens_out', sa.Integer(), nullable=False, server_default='0'),
        sa.Column('usd', sa.Numeric(12,6), nullable=False, server_default='0')
    )
    op.create_table('budget_policies',
        sa.Column('org_id', sa.Integer(), sa.ForeignKey('orgs.id', ondelete='CASCADE'), primary_key=True),
        sa.Column('max_usd_day', sa.Numeric(12,2), nullable=False, server_default='50.00'),
        sa.Column('max_usd_month', sa.Numeric(12,2), nullable=False, server_default='500.00')
    )
    op.create_table('reports',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('org_id', sa.Integer(), sa.ForeignKey('orgs.id', ondelete='CASCADE'), nullable=False),
        sa.Column('team_id', sa.Integer(), sa.ForeignKey('teams.id', ondelete='SET NULL'), nullable=True),
        sa.Column('task_id', sa.String(length=64), nullable=True),
        sa.Column('level', sa.String(length=10), nullable=False, server_default='green'),
        sa.Column('summary', sa.Text(), nullable=True),
        sa.Column('details', sa.JSON(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )
    op.create_table('webhook_subscribers',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('org_id', sa.Integer(), sa.ForeignKey('orgs.id', ondelete='CASCADE'), nullable=False),
        sa.Column('topic', sa.String(length=100), nullable=False),
        sa.Column('url', sa.Text(), nullable=False),
        sa.Column('secret', sa.String(length=128), nullable=True),
        sa.Column('active', sa.Boolean(), nullable=False, server_default=sa.text('true')),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'))
    )

def downgrade():
    op.drop_table('webhook_subscribers')
    op.drop_table('reports')
    op.drop_table('budget_policies')
    op.drop_table('usage_counters')
    op.drop_table('team_members')
    op.drop_table('users')
    op.drop_table('teams')
    op.drop_table('orgs')
