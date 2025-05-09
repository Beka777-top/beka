import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BrowseTasks from "./BrowseTasks";
import CreateTask from "./CreateTask";
import SignUp from "./Signup";
import Profile from "./Profile";
import LandingPage from "./LandingPage";
import GeminiSearch from "./Help";
import "./Style.css";

export default function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [userName, setUserName] = useState("");

  const handleTakeTask = (task) => {
    setMyTasks((prev) => [...prev, task]);
  };

  const handleLogout = () => {
    setUserName(""); // Шығу кезінде пайдаланушы атын тазалау
  };

  return (
    <Router>
      <header className="header">
        <Link to="/" className="text">QuickWork</Link>
        <nav className="head-nav">
          <Link to="/tasks">Просмотр задач</Link>
          <Link to="/create-task">Создать задачу</Link>
          {!userName ? (
            <Link to="/signup">Регистрация</Link>
          ) : (
            <button onClick={handleLogout} className="btn-logout">Шығу</button>
          )}
          <Link to="/profile">Профиль</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/tasks"
            element={<BrowseTasks onTakeTask={handleTakeTask} takenTasks={myTasks} />}
          />
          <Route path="/create-task" element={<CreateTask />} />
          <Route
            path="/signup"
            element={<SignUp onRegister={(name) => setUserName(name)} />}
          />
          <Route path="/profile" element={<Profile name={userName} tasks={myTasks} />} />
          <Route path="/help" element={<GeminiSearch />} />
        </Routes>
      </main>

      <footer className="footer bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-300">
            © 2025 QuickWork. Барлық құқықтар қорғалған.
          </h2>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              Бізбен байланысыңыз: <a href="tel:700-900-90-90" className="text-blue-400 hover:underline">700-900-90-90</a>
            </p>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:Quick_Work@gmail.com" className="text-blue-400 hover:underline">Quick_Work@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}