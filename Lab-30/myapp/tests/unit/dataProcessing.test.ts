/**
 * Unit Tests with Jest
 * Test data processing and edge cases
 */

describe('User Registration Data Processing (A)', () => {
  // Mock user registration data processor
  const processUserData = (fullName: string, email: string, password: string) => {
    return {
      fullName: fullName.trim(),
      email: email.toLowerCase(),
      password: password,
      createdAt: new Date().toISOString(),
    };
  };

  test('should process user registration data correctly', () => {
    const result = processUserData('  John Doe  ', 'JOHN@EXAMPLE.COM', 'password123');
    expect(result.fullName).toBe('John Doe');
    expect(result.email).toBe('john@example.com');
  });

  test('should handle empty full name', () => {
    const result = processUserData('', 'test@example.com', 'password123');
    expect(result.fullName).toBe('');
  });
});

describe('Task Data Processing (B)', () => {
  const processTaskData = (
    taskId: string,
    title: string,
    description: string,
    userId: number
  ) => {
    return {
      taskId: taskId.toUpperCase(),
      title: title.trim(),
      description: description.trim(),
      isCompleted: false,
      userId: userId,
      createdAt: new Date().toISOString(),
    };
  };

  test('should process task data with uppercase ID', () => {
    const result = processTaskData('task-001', 'My Task', 'Task Description', 1);
    expect(result.taskId).toBe('TASK-001');
    expect(result.isCompleted).toBe(false);
  });

  test('should process task without completing it by default', () => {
    const result = processTaskData('TASK-002', 'Another Task', 'Description', 1);
    expect(result.isCompleted).toBe(false);
  });
});

describe('Password Change Logic (A)', () => {
  const updatePassword = (oldPassword: string, newPassword: string, storedPassword: string) => {
    if (oldPassword !== storedPassword) {
      throw new Error('Current password is incorrect');
    }
    if (newPassword === oldPassword) {
      throw new Error('New password cannot be the same as current password');
    }
    return { success: true, message: 'Password updated' };
  };

  test('should update password when current password is correct', () => {
    const result = updatePassword('oldpass123', 'newpass123', 'oldpass123');
    expect(result.success).toBe(true);
  });

  test('should throw error when current password is incorrect', () => {
    expect(() => {
      updatePassword('wrongpass', 'newpass123', 'oldpass123');
    }).toThrow('Current password is incorrect');
  });

  test('should throw error when new password equals old password', () => {
    expect(() => {
      updatePassword('oldpass123', 'oldpass123', 'oldpass123');
    }).toThrow('New password cannot be the same as current password');
  });
});

describe('Data Validation Helpers (A)', () => {
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  test('should validate various email formats', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('user.name@example.co.uk')).toBe(true);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
  });
});
