"""
Enable pgvector and add vector column
"""
from alembic import op
import sqlalchemy as sa

revision = '0003_enable_pgvector'
down_revision = '0002_memory_table'
branch_labels = None
depends_on = None

def upgrade():
    op.execute("CREATE EXTENSION IF NOT EXISTS cube")
    op.execute("CREATE EXTENSION IF NOT EXISTS vector")
    op.add_column('memory_items', sa.Column('vector', sa.dialects.postgresql.VECTOR(1536), nullable=True))
    op.add_column('memory_items', sa.Column('vector_json', sa.JSON(), nullable=True))
    op.create_index('idx_memory_vector','memory_items',['vector'], unique=False, postgresql_using='hnsw')

def downgrade():
    op.drop_index('idx_memory_vector', table_name='memory_items')
    op.drop_column('memory_items', 'vector')
    op.drop_column('memory_items', 'vector_json')
