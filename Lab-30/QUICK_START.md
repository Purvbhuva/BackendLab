# Lab 30: Quick Start Card (Print-Friendly)

## 🚀 Lab 30 in 60 Seconds

**What:** Build a complete app with user registration, task management, and automated testing  
**Tech:** Next.js, Prisma ORM, React, Vitest, Jest, Playwright  
**Time:** 2-3 hours  
**Level:** Beginner to Intermediate  

---

## 📋 5-Step Setup

```bash
1. cd Lab-30/myapp
2. npm install
3. cp .env.example .env && npm run prisma:migrate
4. npm run dev
5. Open http://localhost:3000
```

---

## 📍 What to Visit

| Page | URL | Feature |
|------|-----|---------|
| 🏠 Home | http://localhost:3000 | Navigation hub |
| 👤 Register | /register | Create user account |
| 🔐 Password | /change-password | Update password |
| 📝 Tasks | /tasks | View all tasks |
| ➕ Add Task | /tasks/add | Create new task |

---

## 🎯 3 Main Parts

### Part A: User Management ✅
```
Registration Form → API → Prisma → Database
        ↓
    Success!
```

### Part B: Task Management ✅
```
Add/Edit Forms → API → Prisma → Database with User Link
        ↓
    Success!
```

### Part C: Testing ✅
```
Unit Tests (Vitest) → Test functions work
Unit Tests (Jest) → Test data processing
E2E Tests (Playwright) → Test complete workflows
```

---

## 🧪 3 Ways to Test

```bash
npm run test            # Vitest - Fast unit tests
npm run test:jest       # Jest - Detailed tests
npm run test:e2e        # Playwright - Full workflow tests
```

---

## 💾 Database Models

### Users
```
id (auto) | email | password | fullName | tasks (linked)
```

### Tasks
```
id (auto) | taskId | title | description | isCompleted | userId
```

---

## 📚 Database Operations (CRUD)

| Operation | Prisma Code | Example |
|-----------|-------------|---------|
| **C**reate | `.create()` | Add user or task |
| **R**ead | `.findMany()` / `.findUnique()` | Get user or tasks |
| **U**pdate | `.update()` | Change password or edit task |
| **D**elete | `.delete()` | Remove task |

---

## 💻 Key Files to Know

```
src/
├── components/
│   ├── RegistrationForm.tsx    ← User signup form
│   ├── ChangePasswordForm.tsx  ← Password update form
│   ├── AddTaskForm.tsx         ← Task creation form
│   └── TaskList.tsx            ← Task display & edit
│
├── app/api/
│   ├── auth/register/route.ts           ← Register API
│   ├── auth/change-password/route.ts    ← Password API
│   ├── tasks/add/route.ts               ← Add task API
│   ├── tasks/edit/[id]/route.ts         ← Edit API
│   └── tasks/list/route.ts              ← List API
│
└── lib/db.ts                   ← Database helpers

tests/
├── unit/
│   ├── validation.vitest.ts    ← Vitest examples
│   └── dataProcessing.test.ts  ← Jest examples
└── e2e/
    ├── basic-navigation.spec.ts← E2E navigation
    └── form-submission.spec.ts ← E2E forms
```

---

## 🛠️ Must-Know Commands

```bash
npm run dev                  # Start app (port 3000)
npm run prisma:migrate       # Create database
npm run prisma:studio        # View database (GUI)
npm run test                 # Run tests
npm run build                # Build for production
```

---

## 📊 User Flow Example

### Registration Workflow
```
1. User clicks "Register" → /register page
2. Fills form (name, email, password)
3. Clicks "Register" button
4. Frontend validates
5. Sends to /api/auth/register
6. API validates again
7. Prisma.user.create()
8. Saves to database
9. Returns success message
10. Database now has new user ✓
```

### Task Workflow
```
1. User views /tasks page
2. Clicks "Add New Task"
3. Fills form (ID, title, description, user ID)
4. Clicks "Add Task"
5. Sends to /api/tasks/add
6. API validates user exists
7. Prisma.task.create()
8. Saves to database with user link
9. Task appears in list ✓
```

---

## ✅ Testing Examples

### Vitest (Unit Test)
```typescript
test('should validate email', () => {
  expect(isValidEmail('user@example.com')).toBe(true);
  expect(isValidEmail('invalid')).toBe(false);
});
```

### Jest (Unit Test)
```typescript
test('should process user correctly', () => {
  const user = processUserData('John', 'john@test.com', 'pass');
  expect(user.email).toBe('john@test.com');
});
```

### Playwright (E2E Test)
```typescript
test('should register user', async ({ page }) => {
  await page.goto('/register');
  await page.fill('input[name="fullName"]', 'John');
  await page.fillInput('[name="email"]', 'john@test.com');
  await page.click('button:has-text("Register")');
  await expect(page.locator('.alert.success')).toBeVisible();
});
```

---

## 🎓 Key Concepts

**Prisma ORM**
- Makes database coding easier
- Write JavaScript instead of SQL
- Automatic type safety
- Built-in validation

**Database Relationships**
- One User → Many Tasks
- Each Task belongs to exactly one User
- Called 1:N (one-to-many)

**Testing Pyramid**
```
    E2E (Few, Slow, Complete)
  Unit Tests (Many, Fast, Specific)
Integration Tests (Middle)
```

---

## ⚠️ Important Notes

❌ **NOT for Production**
- Passwords stored as plain text
- No authentication tokens
- No HTTPS
- No rate limiting

✅ **For Learning**
- Understand database concepts
- Learn Prisma ORM
- Practice testing
- Build full-stack apps

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Database error | `npm run prisma:migrate` |
| Dependencies error | `npm install` |
| Port 3000 in use | `npm run dev -- -p 3001` |
| Tests fail | `npm install && npm run test` |
| Prisma error | `npm run prisma:generate` |

---

## 📚 Documentation Files

- **README.md** → Complete technical docs
- **SETUP_GUIDE.md** → Learn-friendly explanation
- **QUICK_REFERENCE.md** → Commands & shortcuts
- **DEMO_GUIDE.md** → How to present
- **INDEX.md** → Navigation guide

---

## 💡 Pro Tips

✨ **Use Prisma Studio**
```bash
npm run prisma:studio
```
Visual database viewer - see data in real-time!

✨ **Watch Mode for Tests**
```bash
npm run test -- --watch
```
Tests run automatically when files change

✨ **Read Error Messages**
Check browser console (F12) for helpful error details

✨ **Use TypeScript**
Code editor auto-completes Prisma queries!

---

## 🎯 Learning Checklist

- [ ] Complete registration tutorial
- [ ] Understand database schema
- [ ] Create tasks in database
- [ ] Edit tasks successfully
- [ ] Run and understand Vitest
- [ ] Run and understand Jest
- [ ] Run and understand Playwright
- [ ] Write own test case
- [ ] Deploy (optional)

---

## 📞 Quick Help

### Database issues?
See: SETUP_COMPLETE.md → Troubleshooting

### Need to learn?
See: SETUP_GUIDE.md → Learning Path

### Need help presenting?
See: DEMO_GUIDE.md → Presentation Flow

### Need reference?
See: QUICK_REFERENCE.md → Commands

---

## 🚀 Next Steps

**After Lab 30:**
- Add password hashing (bcrypt)
- Add JWT authentication
- Add more validation
- Deploy to Vercel
- Build your own project

---

## ✨ That's It!

**Ready? Let's Go! 🎉**

```bash
cd Lab-30/myapp && npm install && npm run dev
```

---

**Happy Learning! 🚀**

---

### Print Version Template

```
╔════════════════════════════════════════╗
║         LAB 30: QUICK START             ║
╚════════════════════════════════════════╝

Setup:
1. cd Lab-30/myapp
2. npm install
3. npm run prisma:migrate
4. npm run dev
5. Visit http://localhost:3000

Commands:
- npm run dev         (Start app)
- npm run test        (Run tests)
- npm run test:e2e    (E2E tests)

Pages:
- /               (Home)
- /register       (Sign up)
- /change-password(Update password)
- /tasks          (View tasks)
- /tasks/add      (Create task)

Database Models:
- User (id, email, password, fullName)
- Task (id, taskId, title, description, isCompleted, userId)

Learning:
- Part A: User registration & password
- Part B: Task management
- Part C: Testing (Vitest, Jest, Playwright)
```

---

**Version:** 1.0  
**Last Updated:** March 2026  
**License:** Educational Use
