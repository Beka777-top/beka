import React, { useState } from "react";
import "./Style.css";


const initialTasks = [
  { title: "Принять брифинг", price: "$60", posted: "25 мин назад" },
  { title: "Адресовать быстро написанные задачи", price: "$80", posted: "18 мин назад" },
  { title: "Заняться проектом", price: "$40", posted: "18 мин назад" },
  { title: "Эффективный дизайн-проект", price: "$150", posted: "1 час назад" },
  { title: "Цифровой проект", price: "$50", posted: "5 часов назад" },
];

const otherTasks = [
  { title: "Создать логотип", price: "$90", posted: "10 мин назад" },
  { title: "Настроить рекламу", price: "$70", posted: "20 мин назад" },
  { title: "Перевести статью", price: "$30", posted: "30 мин назад" },
  { title: "Редизайн сайта", price: "$120", posted: "1 час назад" },
  { title: "Анализ конкурентов", price: "$100", posted: "2 часа назад" },
];

const otherTasks2 = [
  { title: "Создать презентацию", price: "$80", posted: "15 мин назад" },
  { title: "Написать статью", price: "$60", posted: "25 мин назад" },
  { title: "Разработать мобильное приложение", price: "$200", posted: "3 часа назад" },
  { title: "Настроить AI", price: "$150", posted: "4 часа назад" },
  { title: "Создать маркетинговую стратегию", price: "$120", posted: "5 часов назад" },
];

export default function BrowseTasks({ onTakeTask, takenTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskSetIndex, setTaskSetIndex] = useState(0);

  const taskSets = [initialTasks, otherTasks, otherTasks2];

  const handleChangeTasks = () => {
    const nextIndex = (taskSetIndex + 1) % taskSets.length;
    setTasks(taskSets[nextIndex]);
    setTaskSetIndex(nextIndex);
  };

  const handleTakeTask = (index) => {
    const task = tasks[index];
    if (onTakeTask) {
      onTakeTask(task);
    }
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
<div className="glass">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Просмотр задач</h2>
    <button onClick={handleChangeTasks} className="btn">
      Обновить задачи
    </button>
  </div>
  {tasks.length === 0 ? (
    <p>Нет доступных задач</p>
  ) : (
    <div className="space-y-3">
      {tasks.map((task, idx) => (
        <div key={idx} className="glass flex justify-between items-center">
          <div>
            <h3>{task.title}</h3>
            <p>{task.price} – {task.posted}</p>
          </div>
          <button onClick={() => handleTakeTask(idx)} className="btn">
            Взять
          </button>
        </div>
      ))}
    </div>
  )}
</div>

  );
}