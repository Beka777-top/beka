import React from "react";
import "./style.css"

export default function Home({ user, onLogout, onTest }) {
    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <button onClick={onLogout}>Шығу</button>
            <button onClick={onTest}>Артка</button>
        </div>
    );
}