import React from "react";

export default function Profile({ name, tasks }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Мой профиль {name && `– ${name}`}</h2>
        <button className="bg-gray-300 px-4 py-1 rounded">Редактировать профиль</button>
      </div>
      <h3 className="font-semibold text-lg mb-2">Мои задачи</h3>
      {tasks.length === 0 && <p>Вы пока не взяли задачи</p>}
      <div className="space-y-2">
        {tasks.map((task, idx) => (
          <div key={idx} className="border p-3 rounded shadow-sm">
            <div className="font-medium">{task.title}</div>
            <div className="text-sm">{task.price} – {task.posted}</div>
          </div>
        ))}
      </div>
    </div>
  );
}