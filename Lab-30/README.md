# Lab 30: Prisma ORM with Automated Testing - Complete Documentation

This is a comprehensive student-friendly demo project showcasing Prisma ORM integration with a Next.js application and automated testing using multiple frameworks.

## 📋 Project Contents

### **Part A: Core Features (User Management)**

1. **User Registration (A1)** ✅
   - Simple registration form
   - Inserts user data into SQLite database using Prisma
   - Validates email and password
   - Shows success/error messages

2. **Change Password (A2)** ✅
   - Update existing user password
   - Verifies current password before allowing update
   - Demonstrates Prisma UPDATE operation

3. **Unit Tests - Vitest (A3)** ✅
   - Email validation tests
   - Password validation tests
   - Form validation tests
   - Run with: `npm run test`

4. **Unit Tests - Jest (A4)** ✅
   - Data processing tests
   - Error handling tests
   - Edge case coverage
   - Run with: `npm run test:jest`

5. **E2E Tests - Playwright (A5)** ✅
   - Navigation tests
   - Form visibility tests
   - Page loading tests
   - Run with: `npm run test:e2e`

### **Part B: Advanced Features (Task Management)**

1. **Add Task (B1)** ✅
   - Create tasks with fields: TaskID, TaskTitle, TaskDescription, IsCompleted, UserID
   - Links tasks to users via foreign key
   - Validates task data

2. **Edit Task (B2)** ✅
   - View all tasks in table format
   - Edit task details (title, description, completion status)
   - Real-time updates in table
   - Demonstrates Prisma UPDATE operation

3. **E2E Form Testing - Playwright (B3)** ✅
   - Automated form filling for registration
   - Automated form filling for task creation
   - Screenshot capture for reporting
   - Success message verification
   - Error handling validation

## 🗂️ Project Structure

```
Lab-30/
├── myapp/                          # Main Next.js Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/                # API Routes
│   │   │   │   ├── auth/           # Authentication endpoints
│   │   │   │   │   ├── register/route.ts      # A1: User registration API
│   │   │   │   │   └── change-password/route.ts  # A2: Password change API
│   │   │   │   └── tasks/          # Task management endpoints
│   │   │   │       ├── add/route.ts           # B1: Add task API
│   │   │   │       ├── edit/[id]/route.ts     # B2: Edit task API
│   │   │   │       └── list/route.ts          # B: List tasks API
│   │   │   ├── register/page.tsx   # A1: Registration page
│   │   │   ├── change-password/page.tsx  # A2: Change password page
│   │   │   ├── tasks/page.tsx           # B2: Task management page
│   │   │   ├── tasks/add/page.tsx       # B1: Add task page
│   │   │   ├── layout.tsx          # Root layout with navigation
│   │   │   ├── page.tsx            # Home page
│   │   │   └── globals.css         # Global styles
│   │   ├── components/
│   │   │   ├── RegistrationForm.tsx    # A1: Registration form component
│   │   │   ├── ChangePasswordForm.tsx  # A2: Password change component
│   │   │   ├── AddTaskForm.tsx         # B1: Add task component
│   │   │   └── TaskList.tsx            # B2: Task list & edit component
│   │   └── lib/
│   │       └── db.ts               # Database utility functions
│   ├── prisma/
│   │   └── schema.prisma           # Database schema (User & Task models)
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── validation.vitest.ts         # A3: Vitest unit tests
│   │   │   └── dataProcessing.test.ts       # A4: Jest unit tests
│   │   └── e2e/
│   │       ├── basic-navigation.spec.ts     # A5: E2E navigation tests
│   │       └── form-submission.spec.ts      # B3: E2E form tests
│   ├── vitest.config.ts            # A3: Vitest configuration
│   ├── jest.config.js              # A4: Jest configuration
│   ├── playwright.config.ts        # A5/B3: Playwright configuration
│   ├── package.json                # All dependencies
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.ts              # Next.js configuration
│   ├── .env.example                # Environment template
│   ├── .gitignore                  # Git ignore rules
│   ├── eslint.config.mjs           # ESLint configuration
│   └── README.md                   # Detailed project README
├── SETUP_GUIDE.md                  # Beginner-friendly setup guide
├── QUICK_REFERENCE.md              # Command cheat sheet
└── README.md                       # This file

```

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ 
- npm

### Installation

1. **Navigate to project**
   ```bash
   cd Lab-30/myapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup database**
   ```bash
   cp .env.example .env
   npm run prisma:migrate
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📚 Database Schema

### User Model (Part A)
```prisma
model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  password  String
  fullName  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  tasks     Task[]         # Relationship to tasks
}
```

### Task Model (Part B)
```prisma
model Task {
  id          Int     @id @default(autoincrement())
  taskId      String  @unique
  title       String
  description String
  isCompleted Boolean @default(false)
  userId      Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  user        User    @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

## 💻 API Endpoints Reference

### Part A: User Management

#### Registration Endpoint
- **Path**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "securepass123"
  }
  ```
- **Response (201)**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": 1,
      "email": "john@example.com",
      "fullName": "John Doe"
    }
  }
  ```

#### Change Password Endpoint (A2)
- **Path**: `/api/auth/change-password`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "currentPassword": "securepass123",
    "newPassword": "newpass456"
  }
  ```
- **Response (200)**:
  ```json
  {
    "message": "Password changed successfully",
    "user": {
      "id": 1,
      "email": "john@example.com"
    }
  }
  ```

### Part B: Task Management

#### Add Task Endpoint (B1)
- **Path**: `/api/tasks/add`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "taskId": "TASK-001",
    "title": "Complete Project",
    "description": "Finish all project requirements",
    "userId": 1
  }
  ```
- **Response (201)**:
  ```json
  {
    "message": "Task created successfully",
    "task": {
      "id": 1,
      "taskId": "TASK-001",
      "title": "Complete Project",
      "description": "Finish all project requirements",
      "isCompleted": false,
      "userId": 1
    }
  }
  ```

#### Edit Task Endpoint (B2)
- **Path**: `/api/tasks/edit/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description",
    "isCompleted": true
  }
  ```
- **Response (200)**:
  ```json
  {
    "message": "Task updated successfully",
    "task": {
      "id": 1,
      "title": "Updated Title",
      "description": "Updated description",
      "isCompleted": true
    }
  }
  ```

#### List Tasks Endpoint
- **Path**: `/api/tasks/list`
- **Method**: `GET`
- **Response (200)**:
  ```json
  {
    "message": "Tasks fetched successfully",
    "tasks": [
      {
        "id": 1,
        "taskId": "TASK-001",
        "title": "Complete Project",
        "isCompleted": false,
        "user": {
          "id": 1,
          "fullName": "John Doe",
          "email": "john@example.com"
        }
      }
    ]
  }
  ```

## 🧪 Testing Guide

### Unit Testing with Vitest (Part A)

**Run tests:**
```bash
npm run test
```

**What's tested:**
- Email format validation
- Password strength validation
- Registration form validation
- Task validation
- Password change logic

**Example test:**
```typescript
describe('Registration Form Validation', () => {
  it('should validate correct email format', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should validate password with minimum 6 characters', () => {
    expect(validatePassword('password123')).toBe(true);
  });
});
```

### Unit Testing with Jest (Part A)

**Run tests:**
```bash
npm run test:jest
```

**What's tested:**
- User data processing
- Email validation
- Task data processing
- Password change logic
- Edge cases

**Example test:**
```typescript
test('should process user registration data correctly', () => {
  const result = processUserData('  John Doe  ', 'JOHN@EXAMPLE.COM', 'password123');
  expect(result.fullName).toBe('John Doe');
  expect(result.email).toBe('john@example.com');
});
```

### E2E Testing with Playwright (Parts A & B)

**Run tests:**
```bash
npm run test:e2e
```

**Part A Tests:**
- Home page loading
- Navigation links functionality
- Form field visibility
- Submit button presence

**Part B Tests:**
- Complete registration form submission
- Password change form submission
- Task addition form submission
- Task list display
- Screenshot capture for reporting
- Error message handling

**View report:**
```bash
npx playwright show-report
```

## 📊 Features Summary

| Feature | Type | Status | Technology |
|---------|------|--------|-----------|
| User Registration | A1 | ✅ | Next.js + Prisma + React |
| Change Password | A2 | ✅ | Next.js + Prisma + React |
| Vitest Unit Tests | A3 | ✅ | Vitest |
| Jest Unit Tests | A4 | ✅ | Jest |
| E2E Navigation Tests | A5 | ✅ | Playwright |
| Add Task | B1 | ✅ | Next.js + Prisma + React |
| Edit Task | B2 | ✅ | Next.js + Prisma + React |
| E2E Form Testing | B3 | ✅ | Playwright |

## 🎯 Learning Objectives

After completing this lab, students will understand:

✅ **Database Design** - Creating schemas with relationships  
✅ **Prisma ORM** - All CRUD operations (Create, Read, Update, Delete)  
✅ **Next.js API Routes** - Building RESTful endpoints  
✅ **Form Handling** - Client-side validation and server-side processing  
✅ **Unit Testing** - Writing and running unit tests with Vitest and Jest  
✅ **E2E Testing** - Automating user journeys with Playwright  
✅ **Test Reporting** - Generating and analyzing test reports  
✅ **Full-Stack Development** - Integrating frontend, backend, and database  

## 📝 Step-by-Step User Workflow

### Workflow 1: Registration (Part A)
1. User visits home page
2. Clicks "Register" link
3. Fills registration form (Name, Email, Password)
4. Clicks "Register" button
5. Frontend validates passwords match
6. API receives form data
7. Prisma checks if email exists
8. Prisma creates user in database
9. User sees success message
10. Database now contains new user

### Workflow 2: Change Password (Part A)
1. User clicks "Change Password" link
2. Fills in Email, Current Password, New Password
3. Clicks "Change Password" button
4. API finds user by email
5. API verifies current password matches
6. Prisma updates password in database
7. User sees success message

### Workflow 3: Create Task (Part B)
1. User clicks "Tasks" in navigation
2. Sees task list page
3. Clicks "Add New Task" button
4. Fills task form (Task ID, Title, Description, User ID)
5. Clicks "Add Task" button
6. API validates user exists
7. Prisma creates task linked to user
8. User sees success message
9. New task appears in list

### Workflow 4: Edit Task (Part B)
1. User views task list page
2. Clicks "Edit" button on any task
3. Form fields become editable
4. Updates title, description, or completion status
5. Clicks "Save" button
6. API sends update to Prisma
7. Prisma updates task in database
8. Table refreshes with new data
9. User sees success message

## 🛠️ Useful Commands

```bash
# Development
npm run dev                  # Start dev server on port 3000
npm run build               # Build for production
npm start                   # Run production build

# Database Management
npm run prisma:migrate      # Run pending migrations
npm run prisma:studio       # Open Prisma Studio (GUI)
npm run prisma:generate     # Generate Prisma client

# Testing
npm run test                # Run Vitest (unit tests)
npm run test:jest           # Run Jest (unit tests)
npm run test:e2e            # Run Playwright (E2E tests)

# Linting
npm run lint                # Run ESLint
```

## 🔐 Security Notes

⚠️ **Important:** This is a learning project and is NOT production-ready.

**For Production Use:**
1. Hash passwords with `bcrypt` instead of storing plaintext
2. Add JWT authentication
3. Validate all inputs on server-side
4. Use environment variables for secrets
5. Add HTTPS/SSL
6. Add rate limiting
7. Implement CORS properly
8. Add request logging and monitoring
9. Use stronger password policies
10. Implement session management

## 📖 Code Examples for Students

### Example 1: Create User (Prisma)
```typescript
const user = await prisma.user.create({
  data: {
    fullName: "Jane Doe",
    email: "jane@example.com",
    password: "securepass123"
  }
});
console.log("User created:", user);
```

### Example 2: Find User
```typescript
const user = await prisma.user.findUnique({
  where: { email: "jane@example.com" }
});
if (user) {
  console.log("Found user:", user.fullName);
}
```

### Example 3: Update User
```typescript
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { password: "newpass456" }
});
console.log("Updated user:", updated);
```

### Example 4: Get User with Tasks
```typescript
const userWithTasks = await prisma.user.findUnique({
  where: { id: 1 },
  include: { tasks: true }
});
console.log("User tasks:", userWithTasks.tasks);
```

## 🤔 Common Questions & Answers

**Q: Why do we need Prisma?**  
A: It makes database operations easier, safer, and more readable than raw SQL.

**Q: What's the difference between the three test frameworks?**  
A: Vitest is fast and modern, Jest is industry standard, Playwright tests real user interactions.

**Q: Do I need to know SQL?**  
A: Not for this project, but understanding SQL helps understand what Prisma does.

**Q: Can I use PostgreSQL instead of SQLite?**  
A: Yes! Update DATABASE_URL in .env file and install pg driver.

**Q: How do I add more fields to User model?**  
A: 1. Edit schema.prisma, 2. Run `npm run prisma:migrate`, 3. Update forms and API routes.

## 🔗 Resources for Students

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📞 Troubleshooting

### Issue: Database connection error
```bash
# Solution:
rm prisma/dev.db
npm run prisma:migrate
```

### Issue: Prisma client not found
```bash
# Solution:
npm run prisma:generate
npm install
```

### Issue: Port 3000 already in use
```bash
# Solution:
npm run dev -- -p 3001
```

### Issue: Tests won't run
```bash
# Solution:
npm install
npm run test -- --reporter=verbose
```

## ✅ Pre-Presentation Checklist

- [ ] Run `npm install`
- [ ] Run `npm run prisma:migrate`
- [ ] Start server: `npm run dev`
- [ ] Test registration at `/register`
- [ ] Test task creation at `/tasks/add`
- [ ] Run unit tests: `npm run test`
- [ ] Run E2E tests: `npm run test:e2e`
- [ ] Open Prisma Studio: `npm run prisma:studio`
- [ ] Verify all pages load correctly
- [ ] Check error messages display
- [ ] Take screenshots for slides

## 📚 Related Documentation

- Read [SETUP_GUIDE.md](./SETUP_GUIDE.md) for beginner-friendly explanation
- Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for commands cheat sheet
- Read [README.md](./myapp/README.md) for detailed technical documentation

---

**Created for:** Lab 30 - Prisma ORM with Automated Testing  
**Difficulty Level:** Beginner to Intermediate  
**Time to Complete:** 2-3 hours (including testing)  
**Prerequisites:** Basic JavaScript, React, and Node.js knowledge  

**Happy Learning! 🚀**
