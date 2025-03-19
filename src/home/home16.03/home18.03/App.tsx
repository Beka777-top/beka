import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>My Profile</Link> {" | "}
      <Link to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>My Projects</Link> {" | "}
      <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Me</Link>
    </nav>
  );
}

function MyProfile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: Bekarys</p>
      <p>Email: 20bekarys04@gmail.com</p>
      <p>Academy: Amjilt cyber school</p>
      <button onClick={() => navigate("/projects")}>Go to My Projects</button>
    </div>
  );
}

function MyProjects() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project 1</h2>
          <p>Description of Project 1</p>
        </li>
        <li>
          <h2>Project 2</h2>
          <p>Description of Project 2</p>
        </li>
        <li>
          <h2>Project 3</h2>
          <p>Description of Project 3</p>
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>Go to About Me</button>
    </div>
  );
}

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <p>This is a brief description about me.</p>
      <button onClick={() => navigate("/profile")}>Go to My Profile</button>
    </div>
  );
}

export default App;