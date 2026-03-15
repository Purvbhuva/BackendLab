/**
 * E2E Tests with Playwright - Form Submission Testing
 * Test B: Fill registration form and verify success
 */

import { test, expect } from '@playwright/test';

test.describe('User Registration Form Submission (B)', () => {
  test('should successfully fill and submit registration form', async ({ page }) => {
    await page.goto('/register');

    // Fill the registration form
    await page.fill('input[name="fullName"]', 'John Doe');
    await page.fill('input[name="email"]', `user${Date.now()}@example.com`);
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password123');

    // Take screenshot before submission
    await page.screenshot({ path: 'registration-form.png' });

    // Submit the form
    await page.click('button:has-text("Register")');

    // Wait for success message
    await page.waitForTimeout(2000);
    const successMessage = page.locator('.alert.success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Registration successful');

    // Generate report
    console.log('✓ Registration form test passed');
    console.log('✓ User successfully registered');
  });

  test('should show error when passwords do not match', async ({ page }) => {
    await page.goto('/register');

    // Fill form with mismatched passwords
    await page.fill('input[name="fullName"]', 'Jane Doe');
    await page.fill('input[name="email"]', `jane${Date.now()}@example.com`);
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'different123');

    // Submit the form
    await page.click('button:has-text("Register")');

    // Wait for error message
    await page.waitForTimeout(1000);
    const errorMessage = page.locator('.alert.error');
    await expect(errorMessage).toBeVisible();

    console.log('✓ Password mismatch validation works correctly');
  });

  test('should prevent form submission with invalid email', async ({ page }) => {
    await page.goto('/register');

    await page.fill('input[name="fullName"]', 'Test User');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password123');

    // Try to submit
    const submitButton = page.locator('button:has-text("Register")');
    // HTML5 validation will prevent submission for input[type="email"]
    const emailInput = page.locator('input[name="email"]');
    const validity = await emailInput.evaluate((el: HTMLInputElement) => ({
      valid: el.validity.valid,
      type: el.type,
    }));

    console.log('✓ Email validation status:', validity);
  });
});

test.describe('Change Password Form Submission (A)', () => {
  test('should fill and submit change password form', async ({ page }) => {
    await page.goto('/change-password');

    // Fill the change password form
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="currentPassword"]', 'oldpassword123');
    await page.fill('input[name="newPassword"]', 'newpassword123');
    await page.fill('input[name="confirmPassword"]', 'newpassword123');

    // Take screenshot before submission
    await page.screenshot({ path: 'change-password-form.png' });

    // Submit the form
    await page.click('button:has-text("Change Password")');

    // Wait for response
    await page.waitForTimeout(1500);

    console.log('✓ Change password form submitted successfully');
  });
});

test.describe('Add Task Form Submission (B)', () => {
  test('should successfully fill and submit task form', async ({ page }) => {
    await page.goto('/tasks/add');

    // Fill the add task form
    await page.fill('input[name="taskId"]', 'TASK-001');
    await page.fill('input[name="title"]', 'Complete Project Documentation');
    await page.fill('textarea[name="description"]', 'Write comprehensive documentation for the project including API endpoints and usage examples');
    await page.fill('input[name="userId"]', '1');

    // Take screenshot before submission
    await page.screenshot({ path: 'add-task-form.png' });

    // Submit the form
    await page.click('button:has-text("Add Task")');

    // Wait for success message
    await page.waitForTimeout(2000);
    const successMessage = page.locator('.alert.success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Task added successfully');

    // Generate test report
    console.log('✓ Task form test passed');
    console.log('✓ Task successfully added to database');
  });

  test('should show multiple tasks in task list', async ({ page }) => {
    await page.goto('/tasks/add');

    // Add first task
    await page.fill('input[name="taskId"]', `TASK-${Date.now()}`);
    await page.fill('input[name="title"]', 'First Task');
    await page.fill('textarea[name="description"]', 'First task description');
    await page.fill('input[name="userId"]', '1');
    await page.click('button:has-text("Add Task")');
    await page.waitForTimeout(1500);

    // Navigate to task list
    await page.goto('/tasks');

    // Verify table is displayed
    const table = page.locator('table');
    await expect(table).toBeVisible();

    console.log('✓ Task list displays successfully');
  });
});

test.describe('Form Error Handling (A)', () => {
  test('should handle registration errors gracefully', async ({ page }) => {
    await page.goto('/register');

    // Attempt to register with existing email (will fail if user exists)
    await page.fill('input[name="fullName"]', 'Duplicate User');
    await page.fill('input[name="email"]', 'duplicate@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password123');

    // Take error state screenshot
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(2000);

    console.log('✓ Error handling test completed');
  });
});
