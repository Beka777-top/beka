import React, { useState } from "react";
import "./style.css"

export default function Register({ onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email, password };
        localStorage.setItem("user", JSON.stringify(userData));
        onRegister(userData);
    };

    return (
        <div className="register">
            <h2>Тіркелу</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Аты" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Тіркелу</button>
            </form>
        </div>
    );
}