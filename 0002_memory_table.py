"""
Add memory table
"""
from alembic import op
import sqlalchemy as sa

revision = '0002_memory_table'
down_revision = '0001_fullstack_baseline'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('memory_items',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('org_id', sa.Integer(), nullable=False),
        sa.Column('namespace', sa.String(length=100), nullable=False),
        sa.Column('key', sa.String(length=200), nullable=False),
        sa.Column('text', sa.Text(), nullable=False),
        sa.Column('vector', sa.JSON(), nullable=False)
    )
    op.create_index('idx_memory_ns_key','memory_items',['org_id','namespace','key'], unique=True)

def downgrade():
    op.drop_index('idx_memory_ns_key', table_name='memory_items')
    op.drop_table('memory_items')
