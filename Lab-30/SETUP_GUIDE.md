# Lab 30 - Setup and Learning Guide

## What is Lab 30?

Lab 30 is a comprehensive demonstration project that teaches:

1. **Database Operations with Prisma ORM** - Creating, reading, updating database records
2. **Complete User Registration System** - User signup and password management
3. **Task Management System** - CRUD operations on tasks
4. **Automated Testing** - Unit tests, component tests, and end-to-end tests

## Simplified Explanation for Students

### 🎯 Main Goal
Learn how to build a full-stack web application with database operations and automated testing.

### 📦 What's Included

#### 1. **Part A: Frontend Forms & User Management**
   - **Registration Form** - Users can sign up
   - **Change Password Form** - Users can update their password
   - These use **Prisma ORM** to save/update data in database

#### 2. **Part B: Task Management**
   - **Add Task Form** - Create new tasks
   - **Task List** - View and edit existing tasks
   - Tasks are linked to users

#### 3. **Testing Suite**
   - **Vitest** - Quick unit tests (Part A)
   - **Jest** - More detailed unit tests (Part A)
   - **Playwright** - Complete workflow testing (Parts A & B)

---

## 🚀 Quick Setup (Simple Steps)

### Step 1: Navigate to Project Folder
```bash
cd Lab-30/myapp
```

### Step 2: Install Everything
```bash
npm install
```

### Step 3: Setup Database
```bash
cp .env.example .env
npm run prisma:migrate
```

### Step 4: Start the App
```bash
npm run dev
```

### Step 5: Open Browser
```
http://localhost:3000
```

---

## 🎓 Understanding the Concepts

### What is Prisma ORM?

**ORM = Object-Relational Mapping**

Think of Prisma as a tool that lets you:
- Write database code in JavaScript/TypeScript (instead of SQL)
- Define database structure clearly
- Safely interact with database

**Example:**
```typescript
// Instead of SQL: INSERT INTO users ...
// You write:
const user = await prisma.user.create({
  data: {
    fullName: "John Doe",
    email: "john@example.com",
    password: "secure123"
  }
});
```

### Database Schema (Simple Explanation)

```
┌─────────────────┐          ┌──────────────────┐
│     Users       │          │      Tasks       │
├─────────────────┤          ├──────────────────┤
│ id (unique)     │◄────────┤ id (unique)      │
│ fullName        │     1:N  │ taskId           │
│ email           │          │ title            │
│ password        │          │ description      │
│ createdAt       │          │ isCompleted      │
│ updatedAt       │          │ userId (links to │
└─────────────────┘          │         Users)   │
                             └──────────────────┘
```

Each User can have many Tasks, but each Task belongs to one User.

---

## 📋 Features Breakdown

### Part A: User Management (Easier)

#### ✅ Registration (`/register`)
- User fills: Full Name, Email, Password
- Data is sent to API endpoint
- Prisma saves to database
- Success message appears

**Code Flow:**
```
Form Input → API Route → Prisma Create → Database
```

#### ✅ Change Password (`/change-password`)
- User enters: Email, Current Password, New Password
- API verifies current password
- Prisma updates password
- User gets confirmation

**Code Flow:**
```
Form Input → API Route → Find User → Verify Password → Update → Success
```

#### ✅ Unit Tests (Part A)
- **Vitest**: Tests validation functions (emails, passwords)
- **Jest**: Tests data processing logic

### Part B: Task Management (More Complex)

#### ✅ Add Task (`/tasks/add`)
- Form fields: Task ID, Title, Description, User ID
- Prisma creates task in database
- Task linked to user

#### ✅ Edit Task (`/tasks`)
- View all tasks in table
- Click "Edit" to modify
- Update title, description, or mark complete
- Prisma saves changes

#### ✅ E2E Tests (Part B)
- **Playwright**: Automatically fills forms and tests
- Takes screenshots
- Generates test reports

---

## 🔍 How Testing Works

### Level 1: Unit Tests (Fast & Simple)

**Vitest Example:**
```typescript
test('should validate email', () => {
  expect(isValidEmail('user@example.com')).toBe(true);
  expect(isValidEmail('invalid')).toBe(false);
});
```

**What it tests:** Individual functions work correctly

### Level 2: Unit Tests (More Detailed)

**Jest Example:**
```typescript
test('should process user data correctly', () => {
  const user = processUserData('John', 'john@test.com', 'pass123');
  expect(user.email).toBe('john@test.com');
});
```

**What it tests:** Data processing without database

### Level 3: E2E Tests (Full Workflow)

**Playwright Example:**
```typescript
test('should register user and show success', async ({ page }) => {
  await page.goto('/register');
  await page.fill('input[name="fullName"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="confirmPassword"]', 'password123');
  await page.click('button:has-text("Register")');
  await expect(page.locator('.alert.success')).toBeVisible();
});
```

**What it tests:** Entire user journey from form to success message

---

## 🧪 Running Tests

### Test Vitest (Part A)
```bash
npm run test
```
Runs: Email/Password validation tests

### Test Jest (Part A)
```bash
npm run test:jest
```
Runs: Data processing and logic tests

### Test Playwright (Parts A & B)
```bash
npm run test:e2e
```
Runs: Complete form filling and submission tests

View results:
```bash
npx playwright show-report
```

---

## 📚 Simple Workflow Example

### User Scenario: Sign Up and Create Task

1. **User visits app** → Homepage loads
2. **User clicks "Register"** → Goes to registration form
3. **User fills form** → Name, Email, Password
4. **User clicks "Register" button** → 
   - Form data sent to `/api/auth/register`
   - API uses Prisma to save user
   - Database now has the user
5. **User sees success message** → "Registration successful!"

6. **User goes to "Tasks"** → Clicks "Add New Task"
7. **User fills task form** → Task ID, Title, Description, User ID
8. **User clicks "Add Task"** → 
   - Form data sent to `/api/tasks/add`
   - API uses Prisma to create task
   - Task linked to user ID
9. **Task appears in list** → User can then edit it

---

## 💡 Key Concepts for Students

### CRUD Operations
- **Create**: Add new data (Registration, Add Task)
- **Read**: Get data (List Tasks)
- **Update**: Change data (Change Password, Edit Task)
- **Delete**: Remove data (optional in this project)

### API Routes  
Think of API routes as the "brain" of the application:
- They receive data from forms
- Use Prisma to interact with database
- Send response back to frontend

### Database Relationships
- A User can have many Tasks (1:N relationship)
- Each Task belongs to one User
- When user is deleted, their tasks can be deleted too

### Testing Pyramid
```
         ╱╲         E2E Tests (Few, slow, complete)
        ╱  ╲
       ╱────╲       Unit Tests (Many, fast, specific)
      ╱      ╲
     ╱────────╲     Integration Tests (Middle ground)
```

---

## 🎯 Learning Path

**Week 1:** Understand database schema and Prisma  
**Week 2:** Build registration form and test it  
**Week 3:** Build task management system  
**Week 4:** Write comprehensive tests  

---

## ❓ Common Questions

### Q: Do I need to know SQL?
**A:** No! Prisma lets you use JavaScript/TypeScript instead. But understanding SQL helps.

### Q: Why multiple testing frameworks?
**A:** 
- **Vitest**: Fast, modern, perfect for units tests
- **Jest**: Industry standard, detailed reporting
- **Playwright**: Tests real user interactions

### Q: Is my password safe?
**A:** No, this is for **learning only**. In real apps, use `bcrypt` to hash passwords.

### Q: How do I add more features?
**A:** 
1. Update Prisma schema
2. Run `npm run prisma:migrate`
3. Create new API routes
4. Add UI forms
5. Write tests

---

## 🚀 Next Steps After Learning

1. Add authentication with JWT tokens
2. Hash passwords with bcrypt
3. Add email verification
4. Deploy to the cloud (Vercel, Heroku)
5. Add database validation
6. Create admin dashboard
7. Add file uploads
8. Implement real-time updates

---

## 📞 Troubleshooting

### Database isn't created?
```bash
npm run prisma:migrate
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Tests won't run?
```bash
npm install
npm run test
```

### Playwright tests failing?
```bash
npm run test:e2e -- --debug
```

---

## 🎓 Teaching Tips

- **Show database changes:** Use `npm run prisma:studio` to visualize database
- **Demo scenarios:** Go through user registration step by step
- **Show test reports:** Demonstrate Playwright HTML reports
- **Live coding:** Write a test together with students
- **Ask questions:** "What should happen if email exists?" → Error handling

---

**Remember:** This is a learning project. Focus on understanding the concepts, not memorizing code!

Happy Learning! 🚀
