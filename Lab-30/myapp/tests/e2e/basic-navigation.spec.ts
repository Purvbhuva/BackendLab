/**
 * E2E Tests with Playwright - Basic Form Testing
 * Test A: Basic navigation and form existence
 */

import { test, expect } from '@playwright/test';

test.describe('Home Page and Navigation (A)', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Lab 30/);
    await expect(page.locator('h1')).toContainText('Lab 30 - Prisma ORM with Automated Testing');
  });

  test('should display navigation links', async ({ page }) => {
    await page.goto('/');
    const homeLinkComponent = page.locator('a', { hasText: 'Home' });
    const registerLink = page.locator('a', { hasText: 'Register' });
    const tasksLink = page.locator('a', { hasText: 'Tasks' });
    
    await expect(homeLinkComponent).toBeVisible();
    await expect(registerLink).toBeVisible();
    await expect(tasksLink).toBeVisible();
  });
});

test.describe('Registration Page (A)', () => {
  test('should navigate to registration page', async ({ page }) => {
    await page.goto('/register');
    await expect(page.locator('h2')).toContainText('User Registration');
  });

  test('should display registration form fields', async ({ page }) => {
    await page.goto('/register');
    
    await expect(page.locator('label:has-text("Full Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Email")')).toBeVisible();
    await expect(page.locator('label:has-text("Password")')).toBeVisible();
    await expect(page.locator('label:has-text("Confirm Password")')).toBeVisible();
  });

  test('should have submit button', async ({ page }) => {
    await page.goto('/register');
    const submitButton = page.locator('button:has-text("Register")');
    await expect(submitButton).toBeVisible();
  });
});

test.describe('Change Password Page (A)', () => {
  test('should navigate to change password page', async ({ page }) => {
    await page.goto('/change-password');
    await expect(page.locator('h2')).toContainText('Change Password');
  });

  test('should display change password form fields', async ({ page }) => {
    await page.goto('/change-password');
    
    await expect(page.locator('label:has-text("Email")')).toBeVisible();
    await expect(page.locator('label:has-text("Current Password")')).toBeVisible();
    await expect(page.locator('label:has-text("New Password")')).toBeVisible();
  });
});

test.describe('Tasks Page (A)', () => {
  test('should navigate to tasks page', async ({ page }) => {
    await page.goto('/tasks');
    await expect(page.locator('h2')).toContainText('Task List');
  });

  test('should display add task button', async ({ page }) => {
    await page.goto('/tasks');
    const addButton = page.locator('a button:has-text("Add New Task")');
    await expect(addButton).toBeVisible();
  });

  test('should navigate to add task page', async ({ page }) => {
    await page.goto('/tasks');
    await page.click('a button:has-text("Add New Task")');
    await expect(page).toHaveURL(/\/tasks\/add/);
    await expect(page.locator('h2')).toContainText('Add New Task');
  });
});

test.describe('Add Task Page (B)', () => {
  test('should display task form fields', async ({ page }) => {
    await page.goto('/tasks/add');
    
    await expect(page.locator('label:has-text("Task ID")')).toBeVisible();
    await expect(page.locator('label:has-text("Task Title")')).toBeVisible();
    await expect(page.locator('label:has-text("Task Description")')).toBeVisible();
    await expect(page.locator('label:has-text("User ID")')).toBeVisible();
  });
});
