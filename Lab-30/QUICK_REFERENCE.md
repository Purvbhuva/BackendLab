# Lab 30: Quick Reference Guide

## Commands Cheat Sheet

### 🚀 Development
```bash
npm run dev              # Start development server (http://localhost:3000)
npm run build            # Build for production
npm start                # Run production build
```

### 🗄️ Database
```bash
npm run prisma:migrate   # Create/update database
npm run prisma:studio    # Open database GUI (http://localhost:5555)
npm run prisma:generate  # Generate Prisma client
```

### 🧪 Testing
```bash
npm run test             # Run Vitest (Unit tests)
npm run test:jest        # Run Jest (Unit tests)
npm run test:e2e         # Run Playwright (E2E tests)
```

---

## 📍 File Navigation

### Pages to Visit
- **Home**: http://localhost:3000
- **Register**: http://localhost:3000/register
- **Change Password**: http://localhost:3000/change-password
- **Add Task**: http://localhost:3000/tasks/add
- **Task List**: http://localhost:3000/tasks

### Key Files to Look At

#### Part A: User Management
- `/src/components/RegistrationForm.tsx` - Registration form
- `/src/components/ChangePasswordForm.tsx` - Change password form
- `/src/app/api/auth/register/route.ts` - Register API
- `/src/app/api/auth/change-password/route.ts` - Change password API

#### Part B: Task Management
- `/src/components/AddTaskForm.tsx` - Add task form
- `/src/components/TaskList.tsx` - Task display & edit
- `/src/app/api/tasks/add/route.ts` - Add task API
- `/src/app/api/tasks/edit/[id]/route.ts` - Edit task API
- `/src/app/api/tasks/list/route.ts` - List tasks API

#### Testing
- `/tests/unit/validation.vitest.ts` - Vitest examples
- `/tests/unit/dataProcessing.test.ts` - Jest examples
- `/tests/e2e/basic-navigation.spec.ts` - E2E navigation
- `/tests/e2e/form-submission.spec.ts` - E2E forms

#### Database
- `/prisma/schema.prisma` - Database model definition
- `/src/lib/db.ts` - Database utility functions

---

## 🎯 What Each Part Does

### Part A: User Management (Easier)

#### Registration Form
1. User enters: Full Name, Email, Password
2. Frontend validates inputs
3. Sends to `/api/auth/register`
4. API receives data
5. Prisma creates user in database
6. Returns success/error message

#### Change Password Form
1. User enters: Email, Current Password, New Password
2. Frontend validates passwords match
3. Sends to `/api/auth/change-password`
4. API finds user and verifies current password
5. Prisma updates password in database
6. Returns success/error message

#### Tests (Part A)
- **Vitest**: Tests validation functions
- **Jest**: Tests data processing
- **Playwright**: Tests forms and navigation

### Part B: Task Management (More Complex)

#### Add Task Form
1. User enters: Task ID, Title, Description, User ID
2. Sends to `/api/tasks/add`
3. API validates user exists
4. Prisma creates task linked to user
5. Success message appears

#### Task List & Edit
1. Tasks loaded from `/api/tasks/list`
2. Display in table with user information
3. Click "Edit" to modify task
4. Send updates to `/api/tasks/edit/:id`
5. Prisma updates task in database
6. Table refreshes with new data

#### Tests (Part B)
- **Playwright**: Tests form submission
- Takes screenshots for reporting
- Generates test reports

---

## 📊 Database Operations

### Prisma Basic Operations

#### CREATE (Insert)
```typescript
const user = await prisma.user.create({
  data: { fullName: "John", email: "john@test.com", password: "pass" }
});
```

#### READ (Select)
```typescript
const user = await prisma.user.findUnique({
  where: { email: "john@test.com" }
});
```

#### UPDATE (Update)
```typescript
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { password: "newpass" }
});
```

#### DELETE (Delete)
```typescript
await prisma.task.delete({
  where: { id: 1 }
});
```

#### READ WITH RELATIONS
```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { tasks: true }
});
```

---

## 🧪 Test Examples

### Vitest (Simple & Fast)
```bash
npm run test
```
**Tests:** Email validation, password validation, task validation

### Jest (Detailed)
```bash
npm run test:jest
```
**Tests:** Data processing, error handling, edge cases

### Playwright (Full Workflow)
```bash
npm run test:e2e
```
**Tests:** Complete user journeys, form submission, page navigation

### View Test Results
```bash
npx playwright show-report   # For Playwright
```

---

## 🔧 Common Tasks

### Add New User Field
1. Update `/prisma/schema.prisma`
   ```prisma
   model User {
     // existing fields
     phone String?  // Add this
   }
   ```
2. Run: `npm run prisma:migrate`
3. Update form component
4. Update API route

### Add New Task Field
1. Update `/prisma/schema.prisma`
2. Run: `npm run prisma:migrate`
3. Update form component
4. Update API route

### Test New Feature
1. Write test in `/tests/unit/` or `/tests/e2e/`
2. Run: `npm run test` or `npm run test:e2e`
3. Fix code if test fails
4. Deploy when all tests pass

---

## ⚠️ Important Notes

1. **Password Hashing**: Currently passwords are stored plaintext (for learning only)
2. **Validation**: Add more validation as per production requirements
3. **Error Handling**: Improve error messages for user experience
4. **Security**: This is NOT production-ready; add authentication, authorization, encryption

---

## 🐛 Troubleshooting

### Database Error
```bash
rm prisma/dev.db
npm run prisma:migrate
```

### Prisma Client Error
```bash
npm run prisma:generate
npm install -g @prisma/cli
```

### Tests Failing
```bash
npm install
npm run test -- --reporter=verbose
```

### Port 3000 In Use
```bash
# Use different port
npm run dev -- -p 3001
```

---

## 📚 File Locations

```
Lab-30/
├── myapp/
│   ├── src/
│   │   ├── app/api/             # API endpoints
│   │   ├── components/          # React components
│   │   └── lib/                 # Utilities
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   ├── tests/
│   │   ├── unit/                # Unit tests
│   │   └── e2e/                 # E2E tests
│   ├── README.md                # Full documentation
│   └── package.json             # Dependencies
└── SETUP_GUIDE.md               # Learning guide
```

---

## ✅ Checklist Before Presenting to Students

- [ ] Run `npm install`
- [ ] Run `npm run prisma:migrate`
- [ ] Test with `npm run dev`
- [ ] Try registering a user
- [ ] Try adding a task
- [ ] Run `npm run test` to show unit tests
- [ ] Run `npm run test:e2e` to show E2E tests
- [ ] Open Prisma Studio: `npm run prisma:studio`

---

Happy Teaching! 🚀
