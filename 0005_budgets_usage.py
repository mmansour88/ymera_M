"""
Budgets & usage_counters
"""
from alembic import op
import sqlalchemy as sa

revision = '0005_budgets_usage'
down_revision = '0004_scores_rewards'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('budgets',
        sa.Column('org_id', sa.Integer(), primary_key=True),
        sa.Column('monthly_usd_limit', sa.Float(), nullable=False, server_default='0')
    )
    op.create_table('usage_counters',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('org_id', sa.Integer(), nullable=False, index=True),
        sa.Column('month', sa.String(length=7), nullable=False, index=True),
        sa.Column('usd', sa.Float(), nullable=False, server_default='0'),
        sa.Column('tokens_in', sa.Integer(), nullable=False, server_default='0'),
        sa.Column('tokens_out', sa.Integer(), nullable=False, server_default='0'),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now())
    )
    op.create_index('idx_usage_org_month','usage_counters',['org_id','month'])

def downgrade():
    op.drop_index('idx_usage_org_month', table_name='usage_counters')
    op.drop_table('usage_counters')
    op.drop_table('budgets')
