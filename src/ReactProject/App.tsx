import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BrowseTasks from "./BrowseTasks";
import CreateTask from "./CreateTask";
import SignUp from "./Signup";
import Profile from "./Profile";

export default function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [userName, setUserName] = useState("");

  const handleTakeTask = (task) => {
    setMyTasks((prev) => [...prev, task]);
  };

  return (
    <Router>
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">QuickWork</Link>
        <nav className="space-x-4">
          <Link to="/">Просмотр задач</Link>
          <Link to="/create-task">Создать задачу</Link>
          <Link to="/signup">Регистрация</Link>
          <Link to="/profile">Профиль</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={<BrowseTasks onTakeTask={handleTakeTask} takenTasks={myTasks} />}
          />
          <Route path="/create-task" element={<CreateTask />} />
          <Route
            path="/signup"
            element={<SignUp onRegister={(name) => setUserName(name)} />}
          />
          <Route path="/profile" element={<Profile name={userName} tasks={myTasks} />} />
        </Routes>
      </main>
    </Router>
  );
}