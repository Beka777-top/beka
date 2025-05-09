import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ onRegister }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name); // Пайдаланушы атын тіркеу
    navigate("/profile"); // Профиль бетіне бағыттау
  };

  return (
    <div className="glass">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Атыңызды енгізіңіз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Электрондық пошта"
          required
        />
        <input
          type="password"
          placeholder="Құпия сөз"
          required
        />
        <button type="submit" className="btn">Тіркелу</button>
      </form>
    </div>
  );
}