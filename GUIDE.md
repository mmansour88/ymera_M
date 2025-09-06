
# YMERA Deployment (Free-first)
This guide shows a cost-free (or nearly-free) path using managed free tiers.

## 0) What you'll need
- GitHub account
- Fly.io account (free monthly credit for small apps) — for API and optional coturn
- Vercel account (free) — for frontend hosting
- Neon (free Postgres) — vector-friendly (enable extensions)
- Upstash (free Redis)

## 1) Databases
### Neon Postgres
1. Create a Neon project and database `ymera`.
2. In Neon, enable extensions: `vector` and `cube` (via SQL editor):
   ```sql
   CREATE EXTENSION IF NOT EXISTS cube;
   CREATE EXTENSION IF NOT EXISTS vector;
   ```
3. Get a connection string and set `DATABASE_URL` (psycopg2 format).

### Upstash Redis
1. Create a free Redis DB; copy the `REDIS_URL`.

## 2) Configure repository secrets
- In GitHub repo Settings → Secrets:
  - `DATABASE_URL` = from Neon
  - `REDIS_URL` = from Upstash
  - Optional: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `GROQ_API_KEY`, `DEEPSEEK_API_KEY`
  - `TURN_URL`, `TURN_USERNAME`, `TURN_PASSWORD` if you have TURN

## 3) Deploy API to Fly.io (free allowance)
1. Install flyctl and login:
   ```bash
   fly launch --name ymera-api --now --copy-config
   ```
2. Set env vars:
   ```bash
   fly secrets set DATABASE_URL="..." REDIS_URL="..." OPENAI_API_KEY="..."
   ```
3. Run DB migrations:
   ```bash
   fly ssh console -C "cd /app && alembic upgrade head"
   ```

## 4) Deploy Frontend to Vercel (free)
1. `vercel` → import repo → set `VITE_API_URL` to your Fly URL.
2. Build command: `npm run build` (or `pnpm build`).
3. Deploy.

## 5) Optional: Run your own TURN (coturn) on Fly
```bash
cd deploy/coturn
fly launch --name ymera-turn --now
fly secrets set TURN_USERNAME=user TURN_PASSWORD=pass
# Update TURNCheck page with turn:URL and credentials
```

## 6) Helm chart (Kubernetes)
If you have a cluster (kind/k3s) and want to deploy there:
```bash
helm install ymera charts/ymera
```

## 7) Budgets & Safety
- Set org budget:
  ```sql
  INSERT INTO budgets(org_id, monthly_usd_limit) VALUES (1, 5.00)
  ```
- Auto-shutdown on red:
  - Use **/extra/AdminConsole** to set policy and **Evaluate** with `team_id` to suspend.
  - Suspended teams will receive HTTP 423 when calling `/v1/agents/run`.

## 8) SDKs
- TS:
  ```ts
  import { YmeraClient } from './sdks/typescript'
  const c = new YmeraClient('https://<api>', 'JWT')
  await c.agentsRun({ task_type:'general', messages:[{role:'user', content:'Hi'}] })
  ```
- Python:
  ```py
  from sdks.python.client import YmeraClient
  c = YmeraClient('https://<api>', token='JWT')
  print(c.agents_run({"task_type":"general","messages":[{"role":"user","content":"Hi"}]}))
  ```
