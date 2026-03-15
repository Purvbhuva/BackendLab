"use client";

import { useState } from "react";

export default function AddTaskForm() {
  const [formData, setFormData] = useState({
    taskId: "",
    title: "",
    description: "",
    userId: "",
  });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/tasks/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskId: formData.taskId,
          title: formData.title,
          description: formData.description,
          userId: parseInt(formData.userId),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Task added successfully!",
        });
        setFormData({
          taskId: "",
          title: "",
          description: "",
          userId: "",
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to add task!",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred: " + (error instanceof Error ? error.message : "Unknown error"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Task (B1)</h2>
      <p>Insert task data into database using Prisma ORM</p>

      {message && (
        <div className={`alert ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskId">Task ID</label>
          <input
            type="text"
            id="taskId"
            name="taskId"
            value={formData.taskId}
            onChange={handleChange}
            required
            placeholder="e.g., TASK-001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter task description"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
            placeholder="Enter user ID"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
}
