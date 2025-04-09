import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const Main = () => {
  const { language, translations, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h1>{translations.greeting}</h1>
      <label>{translations.selectLanguage}: </label>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="kk">Қазақша</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Main;
