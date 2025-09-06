"""
Agent scores & rewards
"""
from alembic import op
import sqlalchemy as sa

revision = '0004_scores_rewards'
down_revision = '0003_enable_pgvector'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('agent_scores',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('agent_id', sa.String(length=100), nullable=False),
        sa.Column('skill', sa.String(length=100), nullable=False),
        sa.Column('score', sa.Float(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now())
    )
    op.create_table('agent_rewards',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('agent_id', sa.String(length=100), nullable=False),
        sa.Column('points', sa.Integer(), nullable=False),
        sa.Column('reason', sa.String(length=255), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now())
    )

def downgrade():
    op.drop_table('agent_rewards')
    op.drop_table('agent_scores')
