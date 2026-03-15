"use client";

import { useEffect, useState } from "react";

interface Task {
  id: number;
  taskId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: number;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks/list");
      const data = await response.json();
      if (response.ok) {
        setTasks(data.tasks || []);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setEditData({
      title: task.title,
      description: task.description,
      isCompleted: task.isCompleted,
    });
  };

  const handleSave = async (taskId: number) => {
    try {
      const response = await fetch(`/api/tasks/edit/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Task updated successfully!",
        });
        setEditingId(null);
        fetchTasks();
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to update task!",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred: " + (error instanceof Error ? error.message : "Unknown error"),
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  if (loading) {
    return <div><p>Loading tasks...</p></div>;
  }

  return (
    <div>
      <h2>Task List - Edit Tasks (B2)</h2>
      <p>Update task information in database using Prisma ORM</p>

      {message && (
        <div className={`alert ${message.type}`}>
          {message.text}
        </div>
      )}

      {tasks.length === 0 ? (
        <p className="alert info">No tasks found. <a href="/tasks/add">Add a new task</a></p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{editingId === task.id ? task.taskId : task.taskId}</td>
                <td>
                  {editingId === task.id ? (
                    <input
                      type="text"
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                      style={{ width: "100%" }}
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td>
                  {editingId === task.id ? (
                    <textarea
                      value={editData.description}
                      onChange={(e) =>
                        setEditData({ ...editData, description: e.target.value })
                      }
                      style={{ width: "100%" }}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>
                  {editingId === task.id ? (
                    <label>
                      <input
                        type="checkbox"
                        checked={editData.isCompleted}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            isCompleted: e.target.checked,
                          })
                        }
                      />
                      Completed
                    </label>
                  ) : (
                    <span>{task.isCompleted ? "✓ Completed" : "○ Pending"}</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    {editingId === task.id ? (
                      <>
                        <button
                          className="btn-sm"
                          onClick={() => handleSave(task.id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn-sm btn-delete"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn-sm btn-edit"
                        onClick={() => handleEdit(task)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
