import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to Lab 30</h2>
      <p>Learning Prisma ORM with Database Operations and Automated Testing</p>
      
      <div className="demo-section">
        <h3>Available Demos</h3>
        <ul>
          <li>
            <Link href="/register">
              <strong>A1: User Registration Form</strong> - Insert user data using Prisma
            </Link>
          </li>
          <li>
            <Link href="/change-password">
              <strong>A2: Change Password</strong> - Update password in database
            </Link>
          </li>
          <li>
            <Link href="/tasks/add">
              <strong>B1: Add Task</strong> - Insert task data into database
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <strong>B2: Edit Task</strong> - Update task information
            </Link>
          </li>
        </ul>
      </div>

      <div className="demo-section">
        <h3>Testing Examples</h3>
        <ul>
          <li><strong>A: Unit Testing with Vitest</strong> - Run: <code>npm run test</code></li>
          <li><strong>A: Unit Testing with Jest</strong> - Run: <code>npm run test:jest</code></li>
          <li><strong>A: E2E Testing with Playwright</strong> - Run: <code>npm run test:e2e</code></li>
          <li><strong>B: Form E2E Test</strong> - Automated form filling and validation</li>
        </ul>
      </div>
    </div>
  );
}
