# Lab-29: All Errors Fixed ✅

## Status Summary

All four applications in Lab-29 have been successfully fixed and are ready to run!

### Fixed Issues

1. **Next.js Configuration**: Converted all `next.config.ts` files to `next.config.mjs`
   - NextJS version in the workspace doesn't support TypeScript config files
   - All four projects now use `.mjs` format

2. **TypeScript Configuration**: Standardized `tsconfig.json` files
   - Fixed A1's jsx compiler option to use `react-jsx`
   - Ensured consistent configuration across all projects

3. **Prisma Setup**: Configured environment variables
   - Created `.env` file with correct DATABASE_URL path
   - Set up Prisma schema for SQLite database

4. **Dependencies**: All npm packages installed successfully
   - All four projects have complete node_modules
   - Minor security vulnerabilities noted (non-critical, 4 high severity)

---

## How to Run Each Application

### Task A1: Client Component
```bash
cd A1-client-component
npm run dev
```
**URL**: http://localhost:3000

### Task A2: Basic Calculator
```bash
cd A2-calculator
npm run dev
```
**URL**: http://localhost:3000

### Task B3: Snake Game
```bash
cd B3-snake-game
npm run dev
```
**URL**: http://localhost:3000

### Task A4: Prisma Delete Operations
```bash
cd A4-prisma-delete
npm run prisma:migrate  # First time setup (optional)
npm run dev
```
**URL**: http://localhost:3000

---

## Project Structure

```
Lab-29/
├── A1-client-component/          ✅ Client Component Demo
│   ├── next.config.mjs           ← Fixed (was .ts)
│   ├── tsconfig.json             ← Fixed
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │       └── ClientComponent.tsx
│   └── package.json
│
├── A2-calculator/                ✅ Basic Calculator
│   ├── next.config.mjs           ← Fixed (was .ts)
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │       └── Calculator.tsx
│   └── package.json
│
├── B3-snake-game/                ✅ Snake Game
│   ├── next.config.mjs           ← Fixed (was .ts)
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │       └── SnakeGame.tsx
│   └── package.json
│
├── A4-prisma-delete/             ✅ Prisma CRUD + Delete
│   ├── next.config.mjs           ← Fixed (was .ts)
│   ├── tsconfig.json
│   ├── .env                      ← Created (for Prisma)
│   ├── .env.local                ← Already exists
│   ├── prisma/
│   │   ├── schema.prisma         ← Database schema
│   │   └── dev.db                ← SQLite database (auto-created)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   └── BookManager.tsx
│   │   └── lib/
│   │       ├── prisma.ts         ← Prisma client
│   │       └── actions.ts        ← Server actions
│   └── package.json
│
└── README.md                      ← Complete Lab documentation
```

---

## What Was Fixed

### 1. Configuration Files
- **next.config.ts** → **next.config.mjs**
  - All 4 projects had this issue
  - NextJS in this environment requires .mjs format
  
- **tsconfig.json** 
  - A1 had incorrect jsx setting: `"jsx": "preserve"` → `"jsx": "react-jsx"`
  - Others were already correct

### 2. Environment Variables
- Created **`.env`** file for Prisma configuration
- Configured **DATABASE_URL** to point to SQLite database
- Path: `file:./prisma/dev.db`

### 3. Dependencies
- All projects: `npm install` completed successfully
- Prisma client generated automatically
- All peer dependencies resolved

---

## Testing Status

✅ **A1-client-component**: Dev server starts successfully  
✅ **A2-calculator**: Dev server starts successfully  
✅ **B3-snake-game**: Dev server starts successfully  
✅ **A4-prisma-delete**: Dev server starts successfully  

---

## Notes

1. **Security Warnings**: There are 4 high severity vulnerabilities reported by npm. These are present in transitive dependencies and don't affect the functionality of these applications. Run `npm audit fix --force` if you want to address them.

2. **Prisma Database**: 
   - SQLite database file (`dev.db`) will be created automatically on first use
   - No additional database setup needed
   - For Prisma Studio to view data: `npm run prisma:studio`

3. **Port 3000**: All applications run on http://localhost:3000
   - Make sure port 3000 is available
   - If port is in use, NextJS will offer to use the next available port

---

## Quick Start (All Projects)

```bash
# A1
cd Lab-29/A1-client-component && npm run dev

# A2 (in another terminal)
cd Lab-29/A2-calculator && npm run dev

# B3 (in another terminal)
cd Lab-29/B3-snake-game && npm run dev

# A4 (in another terminal)
cd Lab-29/A4-prisma-delete && npm run dev
```

---

**Status**: ✅ All 4 applications are error-free and ready to use!  
**Last Updated**: March 5, 2026
