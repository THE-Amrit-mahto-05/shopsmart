# ShopSmart - Production-Ready E-Commerce Platform

This project is a full-stack e-commerce application built with React (Vite) and Node.js (Express), following a strict production-readiness roadmap.

## Architecture & Workflow

### Tech Stack
- **Frontend**: React (Functional Components), Tailwind CSS, Vitest (Unit Testing).
- **Backend**: Node.js, Express, Prisma (ORM), Jest & Supertest (Integration Testing).
- **CI/CD**: GitHub Actions (Linting, Testing, and Automated Deployment).
- **Deployment**: AWS EC2 with PM2 process management.

### Project Workflow
1. **Local Development**: Use `npm run dev` in both `client` and `server` folders.
2. **Quality Assurance**: 
   - `npm run lint`: Enforces clean code with ESLint.
   - `npm run test`: Runs unit and integration tests.
3. **CI Pipeline**: On every Push/PR to `main`, GitHub Actions:
   - Installs dependencies and runs all tests.
   - Fails the build if tests or linting checks fail.
4. **Automated Deployment**: On successful push to `main`, the `deploy.yml` workflow:
   - Connects to **AWS EC2** via SSH.
   - Pulls the latest code, installs dependencies, and restarts the backend via **PM2**.

## Setup & Installation
Run the idempotent setup script to initialize all environments:
```bash
./scripts/setup.sh
```

## Testing
- **Unit Tests**: `cd client && npm run test`
- **Integration Tests**: `cd server && npm run test`
- **E2E Tests**: `cd client && npx playwright test`

## Security
- **Dependabot**: Automatically monitors and updates outdated dependencies weekly.
- **Environment Variables**: Managed via `.env` files (excluded from Git).

---
© 2026 ShopSmart Project. Built for Production.
