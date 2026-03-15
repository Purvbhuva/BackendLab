# Lab 30: Prisma ORM with Automated Testing

A comprehensive demo application showcasing database operations with Prisma ORM and automated testing using multiple testing frameworks.

## 📚 Project Overview

This laboratory project demonstrates:

### **Part A: Core Functionality**
1. **User Registration** - Insert user data into database using Prisma ORM
2. **Change Password** - Update password in database
3. **Unit Testing with Vitest** - Basic unit tests
4. **Unit Testing with Jest** - Data processing tests
5. **E2E Testing with Playwright** - Navigation and form tests

### **Part B: Advanced Features**
1. **Add Task** - Insert task data with fields: TaskID, TaskTitle, TaskDescription, IsCompleted, UserID
2. **Edit Task** - Update task information in database
3. **E2E Form Testing** - Automated form filling and test report generation

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Navigate to project directory**
```bash
cd Lab-30/myapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Prisma**
```bash
# Copy environment file
cp .env.example .env

# Run migrations
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

## 📁 Project Structure

```
myapp/
├── src/
│   ├── app/
│   │   ├── api/              # API Routes (Prisma operations)
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── tasks/        # Task management endpoints
│   │   ├── register/         # Registration page
│   │   ├── change-password/  # Change password page
│   │   ├── tasks/            # Task management pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── RegistrationForm.tsx    # A1: Registration
│   │   ├── ChangePasswordForm.tsx  # A2: Change password
│   │   ├── AddTaskForm.tsx         # B1: Add task
│   │   └── TaskList.tsx            # B2: Edit task
│   └── lib/                  # Utility functions
├── prisma/
│   └── schema.prisma         # Database schema
├── tests/
│   ├── unit/
│   │   ├── validation.vitest.ts         # A: Vitest examples
│   │   └── dataProcessing.test.ts       # A: Jest examples
│   └── e2e/
│       ├── basic-navigation.spec.ts     # A: E2E basics
│       └── form-submission.spec.ts      # B: Form testing
├── vitest.config.ts          # Vitest configuration
├── jest.config.js            # Jest configuration
├── playwright.config.ts      # Playwright configuration
└── package.json              # Dependencies
```

## 🗄️ Database Schema

### User Model
```prisma
model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  password  String
  fullName  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  tasks     Task[]
}
```

### Task Model
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
  user        User    @relation(fields: [userId], references: [id])
}
```

## 💻 Features & Endpoints

### Authentication Endpoints (Part A)

#### Registration - `POST /api/auth/register`
```json
Request:
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepass123"
}

Response (201):
{
  "message": "User registered successfully",
  "user": { "id": 1, "email": "john@example.com", "fullName": "John Doe" }
}
```

#### Change Password - `POST /api/auth/change-password`
```json
Request:
{
  "email": "john@example.com",
  "currentPassword": "securepass123",
  "newPassword": "newpass456"
}

Response (200):
{
  "message": "Password changed successfully",
  "user": { "id": 1, "email": "john@example.com" }
}
```

### Task Endpoints (Part B)

#### Add Task - `POST /api/tasks/add`
```json
Request:
{
  "taskId": "TASK-001",
  "title": "Complete Project",
  "description": "Finish the project documentation",
  "userId": 1
}

Response (201):
{
  "message": "Task created successfully",
  "task": { "id": 1, "taskId": "TASK-001", ... }
}
```

#### Edit Task - `PUT /api/tasks/edit/:id`
```json
Request:
{
  "title": "Updated Title",
  "description": "Updated description",
  "isCompleted": true
}

Response (200):
{
  "message": "Task updated successfully",
  "task": { "id": 1, "title": "Updated Title", ... }
}
```

#### List Tasks - `GET /api/tasks/list`
```json
Response (200):
{
  "message": "Tasks fetched successfully",
  "tasks": [...]
}
```

## 🧪 Testing

### Unit Tests with Vitest (Part A)

```bash
npm run test
```

**Test Coverage:**
- Email validation
- Password validation
- Registration form validation
- Task validation
- Password change logic

### Unit Tests with Jest (Part A)

```bash
npm run test:jest
```

**Test Coverage:**
- User data processing
- Email validation
- Task data processing
- Password change logic
- Data validation helpers

### E2E Tests with Playwright (Parts A & B)

```bash
npm run test:e2e
```

**Part A Tests:**
- Home page loading
- Navigation between pages
- Form field visibility
- Submit button presence

**Part B Tests:**
- Registration form submission with success message
- Change password form submission
- Task form submission with success message
- Multiple task handling
- Error handling
- Screenshot captures for reporting

### View Test Reports

```bash
# View Playwright HTML report
npx playwright show-report
```

## 📋 Example Workflow

### 1. Register a User (Part A)
- Go to `/register`
- Fill in: Full Name, Email, Password
- Click "Register"
- See success message
- New user is stored in database

### 2. Add a Task (Part B)
- Go to `/tasks/add`
- Fill in: Task ID, Title, Description, User ID
- Click "Add Task"
- See success message
- Task appears in task list

### 3. Edit a Task (Part B)
- Go to `/tasks`
- Click "Edit" on any task
- Modify title, description, or completion status
- Click "Save"
- Changes are persisted to database

### 4. Change Password (Part A)
- Go to `/change-password`
- Enter email, current password, new password
- Click "Change Password"
- See success or error message

## 🔬 Prisma ORM Operations

### Create (INSERT)
```typescript
const user = await prisma.user.create({
  data: {
    fullName: "John Doe",
    email: "john@example.com",
    password: "hash",
  },
});
```

### Read (SELECT)
```typescript
const user = await prisma.user.findUnique({
  where: { email: "john@example.com" },
});
```

### Update (UPDATE)
```typescript
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { password: "newhash" },
});
```

### Delete (DELETE)
```typescript
await prisma.task.delete({
  where: { id: 1 },
});
```

## 📝 Testing Examples

### Vitest Example
```typescript
describe('Registration Form Validation', () => {
  it('should validate correct email format', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });
});
```

### Jest Example
```typescript
test('should process user registration data correctly', () => {
  const result = processUserData('John', 'john@example.com', 'pass123');
  expect(result.email).toBe('john@example.com');
});
```

### Playwright Example
```typescript
test('should fill and submit registration form', async ({ page }) => {
  await page.fill('input[name="fullName"]', 'John Doe');
  await page.click('button:has-text("Register")');
  await expect(page.locator('.alert.success')).toBeVisible();
});
```

## 🛠️ Useful Commands

```bash
# Development
npm run dev              # Start development server

# Database
npm run prisma:migrate  # Run migrations
npm run prisma:studio   # Open Prisma Studio

# Testing
npm run test            # Run Vitest
npm run test:jest       # Run Jest
npm run test:e2e        # Run Playwright E2E tests

# Build & Production
npm run build           # Build for production
npm start               # Start production server
```

## 🎓 Learning Objectives

Students will learn:

✅ **Database Design** - Model relationships and constraints  
✅ **Prisma ORM** - Database operations (CRUD)  
✅ **API Design** - RESTful endpoints  
✅ **Form Handling** - Client-side validation and submission  
✅ **Unit Testing** - Vitest and Jest fundamentals  
✅ **E2E Testing** - Playwright for full workflow testing  
✅ **Test Automation** - Automated form testing and reporting  
✅ **Next.js** - Full-stack application development  

## 📊 Key Features Summary

| Feature | Status | Technology |
|---------|--------|-----------|
| A1: User Registration | ✓ | Prisma + React Form |
| A2: Change Password | ✓ | Prisma + API Route |
| A3: Unit Tests (Vitest) | ✓ | Vitest Framework |
| A4: Unit Tests (Jest) | ✓ | Jest Framework |
| A5: E2E Tests (Playwright) | ✓ | Playwright Framework |
| B1: Add Task | ✓ | Prisma + Form |
| B2: Edit Task | ✓ | Prisma + Dynamic UI |
| B3: E2E Form Testing | ✓ | Playwright + Reports |

## 🤝 Contributing

Feel free to extend this project with:
- Authentication with JWT tokens
- Password hashing with bcrypt
- Input sanitization
- More validation rules
- Additional test cases
- Database seeding

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)

## ⚠️ Important Notes

- **Demo Only**: Passwords are stored plaintext for demonstration. Use bcrypt in production.
- **SQLite**: Default database is SQLite. For production, use PostgreSQL or MySQL.
- **Local Only**: Not suitable for production without security improvements.

## 📞 Support

For questions or issues, refer to the official documentation of each framework used.

---

Made with ❤️ for learning Prisma ORM and Testing in Next.js
