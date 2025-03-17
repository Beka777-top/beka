import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Log";
import Home from "./Home";
import "./style.css";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!email.trim() || !password.trim()) return;
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
    }
  };

  const handleRegister = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleGuestLogin = () => {
    setUser({ name: "Guest", email: "guest" });
  };

  const handleTest = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div>
        <Register onRegister={handleRegister} />
        <Login onLogin={handleLogin} />
        <button onClick={handleGuestLogin}>Қонақ ретінде кіру</button>
      </div>
    );
  }

  return (
    <Home user={user} onLogout={handleLogout} onTest={handleTest} />
  );
}