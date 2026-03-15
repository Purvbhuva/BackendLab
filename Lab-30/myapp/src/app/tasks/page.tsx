import TaskList from "@/components/TaskList";
import Link from "next/link";

export default function TasksPage() {
  return (
    <div>
      <TaskList />
      <br />
      <Link href="/tasks/add" style={{ display: "inline-block", marginTop: "20px" }}>
        <button>Add New Task</button>
      </Link>
    </div>
  );
}
