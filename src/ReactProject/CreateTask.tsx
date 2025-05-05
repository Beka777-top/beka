import React from "react";

export default function CreateTask() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Создать задачу</h2>
      <form className="space-y-4">
        <input className="w-full border p-2 rounded" type="text" placeholder="Название" />
        <textarea className="w-full border p-2 rounded" placeholder="Описание" rows="4"></textarea>
        <select className="w-full border p-2 rounded">
          <option>Выберите категорию</option>
          <option>Дизайн</option>
          <option>Разработка</option>
          <option>Письмо</option>
          <option>Маркетинг</option>
          <option>Управление проектами</option>
        </select>
        <input className="w-full border p-2 rounded" type="text" placeholder="Цена" />
        <input className="w-full border p-2 rounded" type="date" />
        <button className="w-full bg-green-900 text-white py-2 rounded">Опубликовать задачу</button>
      </form>
    </div>
  );
}