/**
 * Unit Tests with Vitest
 * Test basic application logic and utilities
 */

import { describe, it, expect } from 'vitest';

// Utility function for email validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function for password validation
function validatePassword(password: string): boolean {
  return password.length >= 6;
}

// Utility function for task validation
function validateTask(taskId: string, title: string, description: string): boolean {
  return taskId.trim() !== '' && title.trim() !== '' && description.trim() !== '';
}

describe('Registration Form Validation (A)', () => {
  it('should validate correct email format', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('should reject invalid email format', () => {
    expect(validateEmail('invalid-email')).toBe(false);
  });

  it('should validate password with minimum 6 characters', () => {
    expect(validatePassword('password123')).toBe(true);
  });

  it('should reject password with less than 6 characters', () => {
    expect(validatePassword('pass')).toBe(false);
  });

  it('should validate full registration data', () => {
    const isValidEmail = validateEmail('john@example.com');
    const isValidPassword = validatePassword('securepass123');
    expect(isValidEmail && isValidPassword).toBe(true);
  });
});

describe('Task Operations (B)', () => {
  it('should validate task with all required fields', () => {
    const result = validateTask('TASK-001', 'Complete Project', 'Finish the project by Friday');
    expect(result).toBe(true);
  });

  it('should reject task with empty fields', () => {
    const result = validateTask('', '', '');
    expect(result).toBe(false);
  });

  it('should validate task with only whitespace', () => {
    const result = validateTask('   ', '   ', '   ');
    expect(result).toBe(false);
  });
});

describe('Password Change (A)', () => {
  it('should validate new password meets minimum requirement', () => {
    const newPassword = 'newpass123';
    expect(validatePassword(newPassword)).toBe(true);
  });

  it('should reject weak password for change', () => {
    const newPassword = 'short';
    expect(validatePassword(newPassword)).toBe(false);
  });
});
