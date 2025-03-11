import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText, dueDate) => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false, dueDate };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (query) => {
    setFilter(query);
  };

  return (
    <div className="container">
      <h1>📝 Менің Тапсырмаларым</h1>
      <TaskInput addTask={addTask} />
      <TaskFilter filter={filter} setFilter={handleFilterChange} />
      <TaskList tasks={tasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p>Барлық тапсырмалар саны: {tasks.length}</p>
    </div>
  );
}

export default App;