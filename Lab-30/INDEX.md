# Lab 30: Complete Project Index

## 📂 Project Overview

Lab 30 is a comprehensive, student-friendly Next.js application demonstrating:
- **Prisma ORM** for database operations
- **User registration and authentication**
- **Task management system**
- **Automated testing** with Vitest, Jest, and Playwright

---

## 📚 Documentation Files

### 1. **README.md** (Main Documentation)
   - Complete technical overview
   - All features listed and explained
   - API endpoint documentation
   - Database schema reference
   - Testing examples
   - Resources and troubleshooting

### 2. **SETUP_GUIDE.md** (For Students)
   - Beginner-friendly explanation
   - Simple 5-step setup
   - Visualizations of concepts
   - Common explanations
   - Learning path
   - Troubleshooting tips

### 3. **QUICK_REFERENCE.md** (Cheat Sheet)
   - Command reference
   - File navigation guide
   - Common tasks
   - Database operations
   - Test examples
   - Quick setup checklist

### 4. **SETUP_COMPLETE.md** (Verification Checklist)
   - 85+ items to verify
   - Installation checklist
   - Feature testing checklist
   - Database operation verification
   - File structure verification
   - Presentation readiness check

### 5. **DEMO_GUIDE.md** (Instructor's Guide)
   - Pre-presentation setup (15 min)
   - Complete presentation flow (60-90 min)
   - Step-by-step demo for each feature
   - Code walkthroughs
   - Interactive activities
   - Discussion questions
   - Troubleshooting during demo
   - Pro tips for presentation

### 6. **INDEX.md** (This File)
   - Project structure overview
   - Quick navigation
   - What's included
   - File purposes

---

## 🎯 Features Included

### Part A: User Management (Easier - For Learning Basics)

#### A1: User Registration
- **Location**: `/src/app/register`
- **Form Component**: `/src/components/RegistrationForm.tsx`
- **API Route**: `/src/app/api/auth/register/route.ts`
- **Features**:
  - Full Name, Email, Password input
  - Client-side validation
  - Prisma CREATE operation
  - Success/error messages
- **Demonstrates**: Insert operations with validation

#### A2: Change Password
- **Location**: `/src/app/change-password`
- **Form Component**: `/src/components/ChangePasswordForm.tsx`
- **API Route**: `/src/app/api/auth/change-password/route.ts`
- **Features**:
  - Current password verification
  - New password update
  - Prisma UPDATE operation
  - Error handling
- **Demonstrates**: Update operations with verification

#### A3: Unit Testing with Vitest
- **Location**: `/tests/unit/validation.vitest.ts`
- **Configuration**: `/vitest.config.ts`
- **Run Command**: `npm run test`
- **Tests**:
  - Email format validation
  - Password strength validation
  - Registration form validation
  - Password change logic
- **Demonstrates**: Fast, modern unit testing

#### A4: Unit Testing with Jest
- **Location**: `/tests/unit/dataProcessing.test.ts`
- **Configuration**: `/jest.config.js`
- **Run Command**: `npm run test:jest`
- **Tests**:
  - User data processing
  - Email validation edge cases
  - Password change scenarios
  - Error handling
- **Demonstrates**: Industry-standard testing framework

#### A5: E2E Testing with Playwright (Navigation)
- **Location**: `/tests/e2e/basic-navigation.spec.ts`
- **Configuration**: `/playwright.config.ts`
- **Run Command**: `npm run test:e2e`
- **Tests**:
  - Page navigation
  - Form field visibility
  - Button presence
  - Page title verification
- **Demonstrates**: Complete workflow automation

### Part B: Task Management (More Complex - For Advanced Learning)

#### B1: Add Task
- **Location**: `/src/app/tasks/add`
- **Form Component**: `/src/components/AddTaskForm.tsx`
- **API Route**: `/src/app/api/tasks/add/route.ts`
- **Fields**:
  - TaskID (unique)
  - TaskTitle
  - TaskDescription
  - IsCompleted (default: false)
  - UserID (foreign key)
- **Features**:
  - Validates user exists
  - Creates task linked to user
  - Prisma CREATE with relationships
- **Demonstrates**: Creating records with relationships

#### B2: Edit Task
- **Location**: `/src/app/tasks`
- **Component**: `/src/components/TaskList.tsx`
- **API Route**: `/src/app/api/tasks/edit/[id]/route.ts`
- **Features**:
  - Display all tasks in table
  - Edit mode for each task
  - Update title, description, completion status
  - Prisma UPDATE operation
  - Real-time table refresh
- **Demonstrates**: Update operations with UI feedback

#### B3: Task Listing
- **API Route**: `/src/app/api/tasks/list/route.ts`
- **Features**:
  - Fetch all tasks with user info
  - Prisma READ with relationships
  - Include user details with each task
- **Demonstrates**: Reading related data

#### B4: E2E Testing with Playwright (Forms)
- **Location**: `/tests/e2e/form-submission.spec.ts`
- **Run Command**: `npm run test:e2e`
- **Tests**:
  - Fill registration form
  - Submit and verify success
  - Fill task form
  - Submit and verify success
  - Error handling
  - Screenshot capture
  - Test reporting
- **Demonstrates**: Complete form workflows with automation

---

## 🗂️ Source Code Structure

```
Lab-30/
│
├── README.md                    ← Start here for technical details
├── SETUP_GUIDE.md               ← Start here for learning
├── QUICK_REFERENCE.md           ← Command cheat sheet
├── SETUP_COMPLETE.md            ← Verification checklist
├── DEMO_GUIDE.md                ← Instructor's presentation guide
├── INDEX.md                     ← This file
│
└── myapp/                       ← Main application
    │
    ├── package.json             ← Dependencies
    ├── tsconfig.json            ← TypeScript config
    ├── next.config.ts           ← Next.js config
    ├── vitest.config.ts         ← Vitest config (A3)
    ├── jest.config.js           ← Jest config (A4)
    ├── playwright.config.ts     ← Playwright config (A5/B3)
    ├── eslint.config.mjs        ← ESLint config
    ├── .env.example             ← Environment template
    ├── .gitignore               ← Git ignore
    │
    ├── prisma/
    │   ├── schema.prisma        ← Database models
    │   └── dev.db               ← SQLite database file
    │
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   │   ├── auth/
    │   │   │   │   ├── register/route.ts           ← A1 API
    │   │   │   │   └── change-password/route.ts   ← A2 API
    │   │   │   └── tasks/
    │   │   │       ├── add/route.ts               ← B1 API
    │   │   │       ├── edit/[id]/route.ts         ← B2 API
    │   │   │       └── list/route.ts              ← B3 API
    │   │   ├── register/page.tsx                   ← A1 Page
    │   │   ├── change-password/page.tsx            ← A2 Page
    │   │   ├── tasks/page.tsx                      ← B2 Page
    │   │   ├── tasks/add/page.tsx                  ← B1 Page
    │   │   ├── layout.tsx                          ← Root layout
    │   │   ├── page.tsx                            ← Home page
    │   │   └── globals.css                         ← Global styles
    │   │
    │   ├── components/
    │   │   ├── RegistrationForm.tsx                ← A1 Component
    │   │   ├── ChangePasswordForm.tsx              ← A2 Component
    │   │   ├── AddTaskForm.tsx                     ← B1 Component
    │   │   └── TaskList.tsx                        ← B2 Component
    │   │
    │   └── lib/
    │       └── db.ts                               ← Database utilities
    │
    └── tests/
        ├── unit/
        │   ├── validation.vitest.ts                ← A3 Tests
        │   └── dataProcessing.test.ts              ← A4 Tests
        └── e2e/
            ├── basic-navigation.spec.ts            ← A5 Tests
            └── form-submission.spec.ts             ← B4 Tests
```

---

## 🚀 Quick Navigation

### For Students Looking to Learn
1. Start with: **SETUP_GUIDE.md** → Simple explanation
2. Follow: **README.md** → More details
3. Practice: **QUICK_REFERENCE.md** → Commands

### For Instructors Preparing to Teach
1. Read: **DEMO_GUIDE.md** → How to present
2. Review: **README.md** → Technical details
3. Verify: **SETUP_COMPLETE.md** → Everything works
4. Check: **QUICK_REFERENCE.md** → Commands ready

### For Developers Implementing Features
1. View: **Project Structure** section above
2. Check: **README.md** API documentation
3. Review: Source code files listed above
4. Run Tests: `npm run test`, `npm run test:jest`, `npm run test:e2e`

---

## 💻 Essential Commands

### Development
```bash
npm install                 # Install dependencies
npm run dev                 # Start dev server
npm run build               # Build for production
npm start                   # Run production server
```

### Database
```bash
npm run prisma:migrate      # Run/create migrations
npm run prisma:studio       # Open GUI database view
npm run prisma:generate     # Generate Prisma client
```

### Testing
```bash
npm run test                # Run Vitest (A3)
npm run test:jest           # Run Jest (A4)
npm run test:e2e            # Run Playwright (A5/B3)
```

---

## 🎓 Learning Path

### Week 1-2: Databases & Prisma
- Understand database schema
- Learn Prisma basics
- Build registration system (A1)
- Challenge: Add A2 password feature

### Week 3: API & Forms
- Review API routes
- Understand form handling
- Build task system (B1, B2)
- Challenge: Add delete task feature

### Week 4: Testing
- Learn unit testing (A3, A4)
- Learn E2E testing (A5, B4)
- Write custom tests
- Challenge: Test your own feature

---

## 📊 Feature Matrix

| Feature | Type | Difficulty | Time | Category |
|---------|------|-----------|------|----------|
| A1: Registration | Form + Database | Easy | 30 min | User Mgmt |
| A2: Change Password | Form + Database | Medium | 20 min | User Mgmt |
| A3: Vitest Tests | Unit Tests | Easy | 20 min | Testing |
| A4: Jest Tests | Unit Tests | Medium | 20 min | Testing |
| A5: Playwright Tests | E2E Tests | Medium | 30 min | Testing |
| B1: Add Task | Form + Database | Medium | 25 min | Task Mgmt |
| B2: Edit Task | Form + Database | Medium | 25 min | Task Mgmt |
| B3: Task Tests | E2E Tests | Hard | 30 min | Testing |

---

## ✅ Verification Checklist

Before presenting to students:
- [ ] All files exist (check file structure above)
- [ ] Dependencies installed: `npm install`
- [ ] Database ready: `npm run prisma:migrate`
- [ ] Dev server runs: `npm run dev`
- [ ] Tests pass: `npm run test && npm run test:jest && npm run test:e2e`
- [ ] All documentation readable
- [ ] Demo script practiced
- [ ] Backup created

For detailed checklist, see **SETUP_COMPLETE.md**

---

## 🔗 Quick Links

- **Tech Docs**
  - [Prisma](https://www.prisma.io/docs/)
  - [Next.js](https://nextjs.org/docs)
  - [Vitest](https://vitest.dev/)
  - [Jest](https://jestjs.io/)
  - [Playwright](https://playwright.dev/)

- **Project Files**
  - [Main README](./README.md)
  - [Setup Guide](./SETUP_GUIDE.md)
  - [Quick Reference](./QUICK_REFERENCE.md)
  - [Verification Checklist](./SETUP_COMPLETE.md)
  - [Demo Guide](./DEMO_GUIDE.md)

---

## 🎯 Learning Outcomes

After completing Lab 30, students will:

✅ Design relational database schemas  
✅ Use Prisma ORM for CRUD operations  
✅ Build Next.js API routes  
✅ Create forms with client-side validation  
✅ Write unit tests with Vitest  
✅ Write unit tests with Jest  
✅ Write E2E tests with Playwright  
✅ Understand testing best practices  
✅ Build full-stack applications  
✅ Deploy to production (optional)  

---

## 💡 Key Concepts Summary

| Concept | Explanation | Example |
|---------|-------------|---------|
| **ORM** | Tool to interact with database | Prisma translates JavaScript to SQL |
| **Schema** | Database structure definition | User model with fields (id, email, etc) |
| **Migration** | Database version control | Creating/updating tables |
| **CRUD** | Create, Read, Update, Delete | All database operations |
| **Relationship** | Connection between tables | User has many Tasks |
| **API Route** | Server endpoint | POST /api/auth/register |
| **Unit Test** | Test single function | Test email validation |
| **E2E Test** | Test complete workflow | Test registration form submission |
| **Prisma Client** | TypeScript interface to database | prisma.user.create() |
| **SQL** | Database language | SELECT * FROM users |

---

## 🚀 What's Included

### Code Files
- ✅ 8 page components (register, change-password, tasks, etc.)
- ✅ 4 form components (Registration, Password, Add Task, Task List)
- ✅ 5 API routes (Register, Password, Add Task, Edit Task, List Tasks)
- ✅ Database schema with User and Task models
- ✅ Database utility functions

### Tests
- ✅ 21+ Vitest test cases
- ✅ 10+ Jest test cases
- ✅ 15+ Playwright test cases
- ✅ 3 test configuration files

### Documentation
- ✅ 6 comprehensive markdown files
- ✅ 50+ code examples
- ✅ Step-by-step tutorials
- ✅ Troubleshooting guides
- ✅ Presentation scripts

### Styling
- ✅ Professional CSS styling
- ✅ Responsive design
- ✅ Clear error/success messages
- ✅ Intuitive UI

---

## 🎓 Who This Is For

### Students
- Learning databases
- Learning Prisma ORM
- Learning Node.js/Next.js
- Learning testing (Vitest, Jest, Playwright)
- Building their first full-stack app

### Instructors
- Teaching database concepts
- Teaching ORM concepts
- Teaching testing best practices
- Demonstrating full-stack development
- Evaluating student understanding

### Developers
- Learning modern testing frameworks
- Understanding Prisma ORM
- Reviewing Next.js patterns
- Following best practices
- Building upon this foundation

---

## 📞 Support & Resources

### If Something Breaks
See **SETUP_COMPLETE.md** → "Quick Fixes If Issues Occur"

### To Understand Better
See **SETUP_GUIDE.md** → "Understanding the Concepts"

### To Present to Students
See **DEMO_GUIDE.md** → "Presentation Structure"

### For Commands
See **QUICK_REFERENCE.md** → "Commands Cheat Sheet"

### For Technical Details
See **README.md** → "Features & Endpoints"

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Status:** ✅ Complete and Ready for Use

---

**Happy Learning! 🚀**
