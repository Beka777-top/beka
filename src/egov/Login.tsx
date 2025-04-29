import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iin, setIin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("IIN:", iin);
    console.log("Password:", password);
    alert("Кіру сәтті!");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Кіру беті</h2>

        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>ЖНС</label>
          <input
            type="text"
            value={iin}
            onChange={(e) => setIin(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Құпиясөз</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Кіру</button>
      </form>
    </div>
  );
};

export default Login;