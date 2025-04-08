import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuthenticated}){
    const [email, setEmail] = useState("");
    const [password,setPassword]= useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.match(/[@]/)) {
            setError("Email дұрыс емес!");
            return;
        }
        if (password.length < 8) {
            setError("Password кемінде 8 символдан тұруы керек!");
            return;
        }
        setIsAuthenticated(true);
        navigate("/home");
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}