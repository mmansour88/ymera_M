# Neon + Upstash setup

1. Create a Neon project and database `ymera`.
2. Open SQL editor and run:
   ```sql
   CREATE EXTENSION IF NOT EXISTS cube;
   CREATE EXTENSION IF NOT EXISTS vector;
   ```
   Or upload and run `scripts/neon_init.sql` from the repo.

3. Copy the connection string and paste it into `.env.neon-upstash.example` as `DATABASE_URL`:
   `postgresql+psycopg2://USER:PASS@ep-XXXX-YYYYY.eu-central-1.aws.neon.tech/ymera`

4. Create an Upstash Redis database and copy the `rediss://...` URL into `REDIS_URL`.

5. Duplicate the template:
   ```bash
   cp .env.neon-upstash.example .env
   ```

6. Start locally (optional):
   ```bash
   docker compose up --build
   docker compose exec api alembic upgrade head
   ```
