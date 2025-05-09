import React from "react";
import "./Style.css";


export default function CreateTask() {
  return (
<div className="glass">
  <h2>Создать задачу</h2>
  <form className="form">
    <input type="text" placeholder="Название" />
    <textarea placeholder="Описание" rows="4"></textarea>
    <select>
      <option>Выберите категорию</option>
      <option>Дизайн</option>
      <option>Разработка</option>
      <option>Письмо</option>
      <option>Маркетинг</option>
      <option>Управление проектами</option>
    </select>
    <input type="text" placeholder="Цена" />
    <input type="date" />
    <button className="btn">Опубликовать задачу</button>
  </form>
</div>

  );
}