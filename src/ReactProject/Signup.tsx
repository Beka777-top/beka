import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ onRegister }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name);
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input className="w-full border p-2 rounded" type="email" placeholder="Электронная почта" required />
        <input className="w-full border p-2 rounded" type="password" placeholder="Пароль" required />
        <div className="flex space-x-4">
          <label><input type="radio" name="role" required /> Я клиент</label>
          <label><input type="radio" name="role" required /> Я фрилансер</label>
        </div>
        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded">Создать аккаунт</button>
        <p className="text-sm text-center">Уже есть аккаунт? <a href="#" className="text-red-600">Войти</a></p>
      </form>
    </div>
  );
}