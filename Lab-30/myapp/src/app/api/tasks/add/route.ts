import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { taskId, title, description, userId } = body;

    // Validate input
    if (!taskId || !title || !description || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Check if task ID already exists
    const existingTask = await prisma.task.findUnique({
      where: { taskId },
    });

    if (existingTask) {
      return NextResponse.json(
        { error: "Task with this ID already exists" },
        { status: 400 }
      );
    }

    // Create new task
    const task = await prisma.task.create({
      data: {
        taskId,
        title,
        description,
        userId,
      },
    });

    return NextResponse.json(
      {
        message: "Task created successfully",
        task,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add task error:", error);
    return NextResponse.json(
      { error: "An error occurred while adding task" },
      { status: 500 }
    );
  }
}
