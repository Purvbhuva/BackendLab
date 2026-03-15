/**
 * Database utility functions using Prisma
 * Simplified examples for students
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Create a new user in the database
 * Part A: Insert Operation
 */
export async function createUser(
  fullName: string,
  email: string,
  password: string
) {
  try {
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password,
      },
    });
    return { success: true, user, message: "User created successfully" };
  } catch (error) {
    return { success: false, error: "Failed to create user" };
  }
}

/**
 * Get user by email
 * Part A: Read Operation
 */
export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return { success: true, user };
  } catch (error) {
    return { success: false, error: "User not found" };
  }
}

/**
 * Update user password
 * Part A: Update Operation
 */
export async function updateUserPassword(email: string, newPassword: string) {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { password: newPassword },
    });
    return { success: true, user, message: "Password updated successfully" };
  } catch (error) {
    return { success: false, error: "Failed to update password" };
  }
}

/**
 * Create a new task
 * Part B: Insert Operation
 */
export async function createTask(
  taskId: string,
  title: string,
  description: string,
  userId: number
) {
  try {
    const task = await prisma.task.create({
      data: {
        taskId,
        title,
        description,
        userId,
      },
    });
    return { success: true, task, message: "Task created successfully" };
  } catch (error) {
    return { success: false, error: "Failed to create task" };
  }
}

/**
 * Get all tasks with user information
 * Part B: Read Operation
 */
export async function getAllTasks() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });
    return { success: true, tasks };
  } catch (error) {
    return { success: false, error: "Failed to fetch tasks" };
  }
}

/**
 * Get tasks by user ID
 * Part B: Read Operation
 */
export async function getTasksByUserId(userId: number) {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
    });
    return { success: true, tasks };
  } catch (error) {
    return { success: false, error: "Failed to fetch user tasks" };
  }
}

/**
 * Update task
 * Part B: Update Operation
 */
export async function updateTask(
  taskId: number,
  data: {
    title?: string;
    description?: string;
    isCompleted?: boolean;
  }
) {
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data,
    });
    return { success: true, task, message: "Task updated successfully" };
  } catch (error) {
    return { success: false, error: "Failed to update task" };
  }
}

/**
 * Delete task
 * Part B: Delete Operation
 */
export async function deleteTask(taskId: number) {
  try {
    const task = await prisma.task.delete({
      where: { id: taskId },
    });
    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    return { success: false, error: "Failed to delete task" };
  }
}

/**
 * Get user with all their tasks
 * Part B: Read with Relations
 */
export async function getUserWithTasks(userId: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        tasks: true,
      },
    });
    return { success: true, user };
  } catch (error) {
    return { success: false, error: "Failed to fetch user with tasks" };
  }
}

/**
 * Clean up - close Prisma connection
 */
export async function closeDatabase() {
  await prisma.$disconnect();
}
