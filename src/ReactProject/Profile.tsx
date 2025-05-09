import React from "react";
import "./Style.css";


export default function Profile({ name, tasks }) {
  return (
<div className="glass">
  <div className="flex items-center justify-between mb-4">
    <h2>Мой профиль {name && `– ${name}`}</h2>
    <button className="btn">Редактировать профиль</button>
  </div>
  <h3>Мои задачи</h3>
  {tasks.length === 0 && <p>Вы пока не взяли задачи</p>}
  <div className="space-y-2">
    {tasks.map((task, idx) => (
      <div key={idx} className="glass">
        <div className="font-medium">{task.title}</div>
        <div className="text-sm">{task.price} – {task.posted}</div>
      </div>
    ))}
  </div>
</div>

  );
}