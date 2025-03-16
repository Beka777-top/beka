import React from "react";

const TaskList = ({ tasks, filter, toggleTask, deleteTask }) => {
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text} (Due: {task.dueDate})
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
