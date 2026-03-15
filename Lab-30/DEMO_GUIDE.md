# Lab 30: Demonstration Guide for Instructors

This guide helps instructors present Lab 30 to students in the most effective way.

## 🎯 Pre-Presentation Setup (15 minutes before class)

### 1. Start Development Server
```bash
cd Lab-30/myapp
npm run dev
```
Wait for message: "ready started server on 0.0.0.0:3000, url: http://localhost:3000"

### 2. Have Multiple Browsers Ready
- Chrome for main demo
- Have Firefox or Edge ready as backup
- Open http://localhost:3000 in browser

### 3. Open Prisma Studio in Separate Window
```bash
npm run prisma:studio
```
*(Will open at http://localhost:5555)*

### 4. Prepare Terminal Windows
- Terminal 1: Running `npm run dev`
- Terminal 2: Ready for running tests
- Terminal 3: Ready for database commands

### 5. Disable Notifications
- Silence phone
- Disable pop-ups and notifications
- Close unnecessary tabs in browser

---

## 📚 Presentation Structure (60-90 minutes)

### Part 1: Introduction (10 minutes)

#### Slide: What is Lab 30?
"Today we'll learn about building web applications with database operations and testing."

**Key Points:**
- Database: Where we store user information
- Prisma ORM: Tool to interact with database
- Forms: UI for users to input data
- Testing: Making sure everything works

#### Show the Database Diagram
```
Users Table                Tasks Table
│                         │
├─ id (1, 2, 3...)       ├─ id (1, 2, 3...)
├─ fullName              ├─ taskId
├─ email                 ├─ title
├─ password              ├─ description
└─ tasks (linked) ◼──────├─ isCompleted
                        └─ userId (links back to Users)
```

**Explain:**
- Users are stored in Users table
- Tasks are stored in Tasks table
- Each task is linked to exactly one user
- One user can have many tasks

---

### Part 2: Demo - User Registration (15 minutes)

#### Step 1: Show Home Page
1. Point to http://localhost:3000
2. Show navigation menu
3. Highlight "Register" link
4. Say: "Let's create a new user account"

#### Step 2: Navigate to Registration Page
1. Click "Register" link
2. Show form fields:
   - Full Name
   - Email
   - Password
   - Confirm Password
3. Say: "This form collects information to create a user account"

#### Step 3: Fill and Submit Form
1. Fill in:
   - Full Name: `Demo User 1`
   - Email: `demo1@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
2. Click "Register" button
3. Wait for success message
4. Say: "Great! User created, but where is the data stored?"

#### Step 4: Show Data in Prisma Studio
1. Switch to Prisma Studio tab (http://localhost:5555)
2. Click on "User" model
3. Show the newly created user in table
4. Point to:
   - ID generated automatically
   - Email stored correctly
   - Full name stored
   - Password stored (even though it's plain text in this demo)
5. Say: "This is our database! Prisma saved the data here automatically"

#### Step 5: Explain the Code Flow
Show diagram on screen or draw:

```
┌─────────────────────┐
│  Registration Form  │  <- User fills this
│  (React Component)  │
└──────────┬──────────┘
           │
           ├─ Validates email & password
           ├─ Checks passwords match
           │
           ▼
┌──────────────────────┐
│  /api/auth/register  │  <- Receives data
│  (API Route)         │
└──────────┬───────────┘
           │
           ├─ Checks if email exists
           ├─ Validates input
           │
           ▼
┌──────────────────────┐
│  Prisma ORM          │  <- Saves to database
│  prisma.user.create  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  SQLite Database     │  <- Data stored
│  (dev.db file)       │
└──────────────────────┘
```

---

### Part 3: Demo - Change Password (10 minutes)

#### Step 1: Navigate to Change Password
1. Go to http://localhost:3000/change-password
2. Show form fields:
   - Email
   - Current Password
   - New Password
   - Confirm New Password

#### Step 2: Fill Form
1. Email: `demo1@example.com` (the user we just created)
2. Current Password: `password123` (the password we used)
3. New Password: `newpass456`
4. Confirm New Password: `newpass456`
5. Click "Change Password"

#### Step 3: Show Success
1. Success message appears
2. Switch to Prisma Studio
3. Refresh the User table (F5 or reload)
4. Show that password has changed in database
5. Say: "The password in the database is now 'newpass456'. This is an UPDATE operation!"

#### Step 4: Explain
"What we did:
1. Sent current password for verification
2. API checked if current password is correct
3. If correct, updated to new password in database
4. Returned success message"

---

### Part 4: Demo - Task Management (20 minutes)

#### Step 1: Show Task List Page
1. Navigate to http://localhost:3000/tasks
2. Explain:
   - This shows all tasks in the table
   - Currently empty because we haven't added any
   - Each task has an Edit button
   - "Add New Task" button to create tasks

#### Step 2: Add First Task
1. Click "Add New Task" button
2. Show form fields:
   - Task ID
   - Task Title
   - Task Description
   - User ID
3. Fill in:
   - Task ID: `TASK-001`
   - Title: `Complete Project`
   - Description: `Finish all project requirements and submit`
   - User ID: `1` (the user we created)
4. Click "Add Task"
5. Show success message

#### Step 3: View Task in Database
1. Go to Prisma Studio
2. Click on "Task" model
3. Show the new task entry
4. Highlight the relationship:
   - Task is linked to User ID 1
   - This is how we know which user owns the task

#### Step 4: Add Second Task
1. Go back to http://localhost:3000/tasks/add
2. Add another task:
   - Task ID: `TASK-002`
   - Title: `Write Documentation`
   - Description: `Document all API endpoints and features`
   - User ID: `1`
3. Click "Add Task"

#### Step 5: View Task List
1. Go back to http://localhost:3000/tasks
2. Show table with both tasks
3. Each task shows:
   - Task ID
   - Title
   - Description
   - Status (Pending or Completed)
   - Edit button
4. Say: "Now we have two tasks for our user"

#### Step 6: Edit a Task
1. Click Edit button on first task
2. Form fields become editable
3. Change:
   - Title: Change to `Complete Project (Updated)`
   - Mark as Completed: Check the checkbox
4. Click "Save"
5. Show success message
6. Task row updates in table
7. Go to Prisma Studio
8. Refresh Task model
9. Show the updated data

#### Step 7: Explain Task Relationships
```
User (ID: 1)
  │
  ├─ Task (ID: 1) - "Complete Project"
  │
  └─ Task (ID: 2) - "Write Documentation"

Both tasks have userId = 1
So they belong to this user
```

---

### Part 5: Testing Demo (20 minutes)

#### Part 5A: Unit Testing with Vitest

##### Concept First
Say: "Unit tests verify that individual functions work correctly"

Show example:
```typescript
✓ Email validation
  ✓ Valid email "user@example.com" returns true
  ✓ Invalid email "no-at-sign" returns false

✓ Password validation
  ✓ Valid password "password123" returns true
  ✓ Weak password "pass" returns false
```

##### Run Tests
```bash
npm run test
```

1. Terminal shows:
   ```
   tests/unit/validation.vitest.ts
   ✓ Registration Form Validation
     ✓ should validate correct email format
     ✓ should reject invalid email format
     ✓ should validate password with minimum 6 characters
   ```

2. Point to each passing test
3. Explain:
   - Green check = test passed
   - Each test verifies one thing
   - All tests run automatically

#### Part 5B: Unit Testing with Jest

##### Concept
Say: "Jest tests are more detailed and test data processing"

##### Run Tests
```bash
npm run test:jest
```

1. Show test results
2. Point out:
   - User data processing tests
   - Email validation tests
   - Password change logic tests
3. Say: "Jest is the industry standard for testing"

#### Part 5C: E2E Testing with Playwright

##### Concept
Say: "E2E tests simulate real user interactions - clicking buttons, filling forms, etc."

##### Run Tests
```bash
npm run test:e2e
```

1. Tests run in Chromium browser automatically
2. Point out:
   - Form getting filled automatically
   - Buttons being clicked automatically
   - Success messages being verified
3. Say: "Playwright automates everything a user would do"

##### View Results
```bash
npx playwright show-report
```

1. HTML report opens
2. Show:
   - Test results (passed/failed)
   - Each test case
   - Screenshots
   - Video recordings (if enabled)

3. Say: "Test reports help us see exactly what was tested"

---

### Part 6: Code Walkthrough (10 minutes)

#### Show Registration Code
1. Open `/src/components/RegistrationForm.tsx`
2. Point out:
   - State management with `useState`
   - Form fields
   - Form submission handler
   - API call to `/api/auth/register`

3. Say: "The form sends data to the API route"

#### Show API Route
1. Open `/src/app/api/auth/register/route.ts`
2. Point out:
   - POST function
   - Receives request body
   - Validates input
   - Uses Prisma to create user
   - Returns response

3. Emphasize:
   ```typescript
   const user = await prisma.user.create({
     data: {
       fullName,
       email,
       password,
     }
   })
   ```
   "This one line saves data to database using Prisma!"

#### Show Database Schema
1. Open `/prisma/schema.prisma`
2. Show User model:
   ```prisma
   model User {
     id        Int     @id @default(autoincrement())
     email     String  @unique
     password  String
     fullName  String
     createdAt DateTime @default(now())
     tasks     Task[]
   }
   ```
3. Explain:
   - Each field's type
   - @id means primary key
   - @unique means no duplicates
   - Task[] means one user can have many tasks

---

### Part 7: Key Concepts Recap (5 minutes)

#### CRUD Operations
1. **Create (INSERT)** - Add new data
   - Example: Register new user
   - Code: `prisma.user.create()`

2. **Read (SELECT)** - Get existing data
   - Example: View tasks
   - Code: `prisma.task.findMany()`

3. **Update (UPDATE)** - Change existing data
   - Example: Change password or edit task
   - Code: `prisma.user.update()`

4. **Delete (DELETE)** - Remove data
   - Example: Delete task
   - Code: `prisma.task.delete()`

#### Database Relationships
- One user can have many tasks
- Each task belongs to one user
- This is called 1:N (one-to-many) relationship

#### Testing Pyramid
```
         E2E Tests (Few, Slow, Complete)
      Unit Tests (Many, Fast, Specific)
   Integration Tests (Middle Ground)
```

---

## 💻 Troubleshooting During Demo

### Issue: Form doesn't submit
**Solution:** Check browser console (F12) for errors. Likely validation issue.

### Issue: Prisma Studio won't open
**Solution:** Run `npm run prisma:migrate` first, then `npm run prisma:studio`

### Issue: Tests won't run
**Solution:** Run `npm install` first, then `npm run test`

### Issue: Port 3000 already in use
**Solution:** Run `npm run dev -- -p 3001` to use port 3001

### Issue: Success message doesn't appear
**Solution:** Wait 2 seconds, it may be a delayed API response

### Issue: Refresh shows old data
**Solution:** Comment clearing browser cache - Press Ctrl+Shift+Delete

---

## 🎓 Interactive Activities for Students

### Activity 1: Add Custom User (10 min)
1. Have student fill registration form
2. Let them pick username and email
3. Show their data appearing in Prisma Studio
4. Conclude: "Now you understand CREATE operation"

### Activity 2: Change Password (10 min)
1. Have student change the password they just created
2. Verify in Prisma Studio
3. Conclude: "Now you understand UPDATE operation"

### Activity 3: Create and Edit Task (15 min)
1. Have student add a task
2. Have them edit it
3. Show changes in Prisma Studio
4. Conclude: "Now you understand relationships"

### Activity 4: Run Tests (10 min)
1. Have students run `npm run test`
2. Explain what each test does
3. Ask: "How would you add a new test?"
4. Conclude: "Testing ensures code quality"

---

## 📊 Discussion Questions

### During Demo
1. "Why do we validate passwords before storing?"
2. "How is a task linked to a user?"
3. "What would happen if we deleted a user?"
4. "Why do we use Prisma instead of SQL?"
5. "What happens if email already exists?"

### After Demo
1. "What other features would you add?"
2. "How would you prevent password leaks?"
3. "Why is testing important?"
4. "How does Prisma make database coding easier?"
5. "What's a real-world application using these concepts?"

---

## 📝 Slide Recommendations

### Slide 1: Title
**Lab 30: Prisma ORM with Automated Testing**

### Slide 2: Learning Objectives
- Understand databases and schema
- Learn Prisma ORM
- Build registration system
- Create task management
- Write unit tests
- Write E2E tests

### Slide 3: Database Schema (Diagram)
Show User and Task tables with relationship

### Slide 4: CRUD Operations
- CREATE: Insert new data
- READ: Retrieve data
- UPDATE: Modify data
- DELETE: Remove data

### Slide 5: Project Structure
Show folder layout

### Slide 6: Testing Pyramid
Show unit tests, integration tests, E2E tests

### Slide 7: Key Takeaways
- Databases store data
- Prisma makes database coding easy
- Testing ensures reliability
- Full-stack development connects everything

---

## 🎯 Expected Timeline

- Introduction & Concepts: 10 min
- Registration Demo: 15 min
- Password Change Demo: 10 min
- Task Management Demo: 20 min
- Testing Demo: 20 min
- Code Walkthrough: 10 min
- Q&A & Discussion: 10 min

**Total: 95 minutes**

---

## ✅ Presenter's Checklist

Before starting:
- [ ] Server running (`npm run dev`)
- [ ] Prisma Studio running
- [ ] Browser opened to http://localhost:3000
- [ ] Terminals ready for running tests
- [ ] Network connection stable
- [ ] Microphone tested
- [ ] Screen sharing/projector working
- [ ] Backup branch exists in case of issues
- [ ] Slides prepared
- [ ] Time: 5 minutes early start

---

## 🚀 Pro Tips for Great Presentation

1. **Live Coding is Power**
   - Type in registration details during demo
   - Let students watch real-time changes
   - Makes it more memorable

2. **Pause After Key Points**
   - Let concepts sink in
   - Ask "Does this make sense?"
   - Wait for questions

3. **Show Errors Too**
   - Sometimes intentionally break things
   - Show error messages
   - Explain how to fix them
   - Students learn better from mistakes

4. **Engage Students**
   - Ask questions
   - Have them suggest task names
   - Let them run tests
   - Make it interactive

5. **Connect to Real World**
   - "Like Facebook allows registration..."
   - "Amazon has tasks/orders like our tasks..."
   - "Netflix tests every feature..."
   - Makes it relatable

6. **Celebrate Successes**
   - Point out when tests pass
   - Celebrate creating first user
   - Say "Perfect! That's exactly what should happen"
   - Positive reinforcement works

---

## 📞 Emergency Support Commands

If something breaks:

```bash
# Reset database
rm prisma/dev.db
npm run prisma:migrate

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Clear everything and restart
npm run dev
```

---

**Good luck with your presentation! You've got this! 🚀**

For more help, see:
- [README.md](./README.md) - Technical details
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Student-friendly explanation
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Command cheat sheet
