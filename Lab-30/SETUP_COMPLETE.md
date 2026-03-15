# Lab 30 - Setup Completion Checklist

Use this checklist to verify everything is set up correctly before presenting to students.

## ✅ Installation & Setup

- [ ] Node.js v18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Lab-30 folder exists at `d:\TA\TA-Backend\Backend\Backend_TA\Lab-30`
- [ ] myapp folder created inside Lab-30
- [ ] All project files are in place

## ✅ Dependencies

- [ ] Run `npm install` completed successfully
- [ ] No error messages during installation
- [ ] node_modules folder created (may be large, be patient)
- [ ] package-lock.json generated

## ✅ Database Configuration

- [ ] `.env` file created (copied from `.env.example`)
- [ ] DATABASE_URL set correctly (should have `file:./dev.db` for SQLite)
- [ ] Prisma migration completed: `npm run prisma:migrate`
- [ ] `prisma/dev.db` file created
- [ ] Database schema tables created successfully

## ✅ Application Setup

- [ ] Run `npm run dev` without errors
- [ ] Server starts on http://localhost:3000
- [ ] Browser can load home page
- [ ] All navigation links work

## ✅ Features Tested

### Part A: User Management
- [ ] Registration page loads: http://localhost:3000/register
- [ ] Registration form has all fields (Full Name, Email, Password, Confirm Password)
- [ ] Can submit registration form
- [ ] Success message appears
- [ ] User data saved in database (check Prisma Studio)

- [ ] Change password page loads: http://localhost:3000/change-password
- [ ] Change password form has all fields
- [ ] Can submit change password form
- [ ] Error/success messages work correctly

### Part B: Task Management
- [ ] Tasks page loads: http://localhost:3000/tasks
- [ ] Add Task button visible
- [ ] Add Task page loads: http://localhost:3000/tasks/add
- [ ] Add Task form has all fields (Task ID, Title, Description, User ID)
- [ ] Can submit task form
- [ ] Task appears in task list
- [ ] Can click Edit on task
- [ ] Can edit task fields
- [ ] Can save edited task

## ✅ Testing Setup

### Vitest (Part A)
- [ ] Run `npm run test` completes without errors
- [ ] Tests show in console output
- [ ] All validation tests pass

### Jest (Part A)
- [ ] Run `npm run test:jest` completes without errors
- [ ] All data processing tests pass
- [ ] Test report shows all tests passed

### Playwright (Parts A & B)
- [ ] Run `npm run test:e2e` starts successfully
- [ ] Tests run in browser (visible if not headless mode)
- [ ] All navigation tests pass
- [ ] All form submission tests pass
- [ ] Report generated successfully
- [ ] Can view report with `npx playwright show-report`

## ✅ Database Operations

### Prisma Studio
- [ ] Run `npm run prisma:studio`
- [ ] Opens at http://localhost:5555
- [ ] Can see User model and data
- [ ] Can see Task model and data
- [ ] Created users appear in studio
- [ ] Created tasks appear in studio

### API Endpoints Testing (Optional)
- [ ] Registration API: `POST http://localhost:3000/api/auth/register`
- [ ] Change Password API: `POST http://localhost:3000/api/auth/change-password`
- [ ] Add Task API: `POST http://localhost:3000/api/tasks/add`
- [ ] List Tasks API: `GET http://localhost:3000/api/tasks/list`
- [ ] Edit Task API: `PUT http://localhost:3000/api/tasks/edit/:id`

## ✅ File Structure Verification

Files to verify exist:
```
Lab-30/
├── README.md                              ✓ Main documentation
├── SETUP_GUIDE.md                         ✓ Learning guide
├── QUICK_REFERENCE.md                     ✓ Command reference
├── SETUP_COMPLETE.md                      ✓ This checklist
└── myapp/
    ├── package.json                       ✓ Dependencies
    ├── tsconfig.json                      ✓ TypeScript config
    ├── vitest.config.ts                   ✓ Vitest config
    ├── jest.config.js                     ✓ Jest config
    ├── playwright.config.ts               ✓ Playwright config
    ├── next.config.ts                     ✓ Next.js config
    ├── .env                               ✓ Environment file
    ├── .env.example                       ✓ Environment template
    ├── .gitignore                         ✓ Git ignore
    ├── eslint.config.mjs                  ✓ ESLint config
    ├── prisma/
    │   ├── schema.prisma                  ✓ Database schema
    │   └── dev.db                         ✓ Database file
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   │   ├── auth/
    │   │   │   │   ├── register/route.ts  ✓ A1: Register API
    │   │   │   │   └── change-password/route.ts  ✓ A2: Password API
    │   │   │   └── tasks/
    │   │   │       ├── add/route.ts       ✓ B1: Add task API
    │   │   │       ├── edit/[id]/route.ts ✓ B2: Edit task API
    │   │   │       └── list/route.ts      ✓ List tasks API
    │   │   ├── register/page.tsx          ✓ A1: Register page
    │   │   ├── change-password/page.tsx   ✓ A2: Password page
    │   │   ├── tasks/page.tsx             ✓ B2: Tasks page
    │   │   ├── tasks/add/page.tsx         ✓ B1: Add task page
    │   │   ├── layout.tsx                 ✓ Layout
    │   │   ├── page.tsx                   ✓ Home page
    │   │   └── globals.css                ✓ Styles
    │   ├── components/
    │   │   ├── RegistrationForm.tsx       ✓ A1: Component
    │   │   ├── ChangePasswordForm.tsx     ✓ A2: Component
    │   │   ├── AddTaskForm.tsx            ✓ B1: Component
    │   │   └── TaskList.tsx               ✓ B2: Component
    │   └── lib/
    │       └── db.ts                      ✓ Database utilities
    └── tests/
        ├── unit/
        │   ├── validation.vitest.ts       ✓ A3: Vitest tests
        │   └── dataProcessing.test.ts     ✓ A4: Jest tests
        └── e2e/
            ├── basic-navigation.spec.ts   ✓ A5: E2E tests
            └── form-submission.spec.ts    ✓ B3: Form E2E tests
```

## ✅ Browser Testing

### Pages to Visit
- [ ] `http://localhost:3000` - Home page
- [ ] `http://localhost:3000/register` - Registration
- [ ] `http://localhost:3000/change-password` - Change password
- [ ] `http://localhost:3000/tasks` - Task list
- [ ] `http://localhost:3000/tasks/add` - Add task

### Browser Console
- [ ] No JavaScript errors in console (F12)
- [ ] Network tab shows successful requests
- [ ] All forms submit without errors

## ✅ Code Quality

- [ ] ESLint configuration works: `npm run lint`
- [ ] TypeScript compiles without errors
- [ ] No build errors: `npm run build`

## ✅ Documentation

- [ ] README.md explains all features
- [ ] SETUP_GUIDE.md is clear for beginners
- [ ] QUICK_REFERENCE.md has all commands
- [ ] Code comments explain key sections
- [ ] API documentation is complete

## ✅ Ready for Presentation

### Demo Script Prepared
- [ ] Demo user registration flow
- [ ] Demo change password flow
- [ ] Demo add task flow
- [ ] Demo edit task flow
- [ ] Demo Prisma Studio
- [ ] Demo unit tests
- [ ] Demo E2E tests

### Presentation Materials
- [ ] Screenshots of UI prepared
- [ ] Database schema diagram ready
- [ ] API endpoints list ready
- [ ] Test results documented
- [ ] Feature checklist created

### Optional: Recording Setup
- [ ] Screen recording tool ready (OBS, Camtasia)
- [ ] Microphone working
- [ ] Resolution set for screen size
- [ ] Test recording completed

## 🔧 Quick Fixes If Issues Occur

### Database Error
```bash
rm prisma/dev.db
npm run prisma:migrate
```

### Dependency Issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Prisma Generation Error
```bash
npm run prisma:generate
npm install @prisma/client
```

### Test Fails
```bash
npm install
npm run test -- --reporter=verbose
```

## 📊 Summary

Total items to verify: **85+**
Status: `[ ]` Not started | `[✓]` Completed

## 🎯 Final Verification

**Before showing to students, verify:**
1. All [ ] checkboxes above are checked
2. Application runs without errors
3. Database operations work correctly
4. Tests pass successfully
5. Documentation is clear
6. No broken links in docs
7. All features demonstrable

## 📝 Notes for Presentation

- Start with explaining database schema
- Show Prisma Studio visualization
- Demo registration flow step-by-step
- Explain Prisma ORM benefits
- Run unit tests and show results
- Run E2E tests and show automation
- Discuss testing best practices
- Show error handling

## ✅ Final Checklist

- [ ] Everything above is verified ✓
- [ ] Ready to present to students ✓
- [ ] Backup of project created ✓
- [ ] All documentation reviewed ✓

---

**Setup Status:** ⏳ In Progress... → ✅ Complete!

**Date Completed:** _________________

**Verified By:** _____________________

**Notes:** ____________________________

---

Good luck with your Lab 30 presentation! 🚀
