# YMERA Fullstack v2

See /phases for roadmap and /backend, /frontend for code.

## New in v2
- **Real model providers**: OpenAI, Anthropic, Groq, Deepseek, Gemini adapters behind `/v1/agents/run` (env-key driven).
- **Memory & search**: `/v1/memory/upsert` and `/v1/memory/search` with OpenAI embeddings (or deterministic local fallback).
- **Rooms signaling**: `/v1/rooms/*` using Redis for simple peer discovery.
- **Frontend pages**: Memory, Rooms, and 3D/XR.


## v3 Highlights
- Expanded backend services (audit, scoring, rewards, telemetry).
- Added routers (auth/webhooks/reports/storage/evals/routing) if missing.
- 60+ pytest files to bootstrap CI.
- 20+ extra frontend pages, components, contexts, i18n, and assets.
- K8s manifests and SRE runbooks.
- Per-phase subfolders with configs & notes.


## v4 — End‑to‑End upgrades
- **pgvector** enabled Postgres with vector index, JSON mirror fallback.
- **Admin Console API**: policy CRUD + risk evaluation (green/orange/red).
- **Teacher–Learner & Rewards**: scoring, top teachers, distillation award.
- **Docker Compose** uses `ankane/pgvector` image.
- Frontend pages: **AdminConsole**, enhanced **TeacherLearner**.


## v5 — Governance, Budgets, SDKs, Helm, TURN
- **Auto-shutdown on RED** with team suspension (admin evaluate accepts `team_id`).
- **Budget caps** (budgets & usage_counters) + enforcement in `agents.run`.
- **SDKs** (TS/Python) and Helm chart.
- **TURN checker** page and coturn container for free self-hosted relay.
- **Deployment guide** with free-first posture (Neon, Upstash, Fly, Vercel).

## v6 — Neon + Redis ready
- `.env.neon-upstash.example` for free managed Neon + Upstash.
- `.env.local.example` for local Docker dev.
- `docker-compose.override.yml` adds local Postgres (pgvector) + Redis.
- `scripts/neon_init.sql` to enable pgvector on Neon quickly.
- API startup **auto-enables pgvector**, **runs Alembic**, and **pings Redis**.
- Detailed Neon how-to in `deploy/neon/README.md`.
