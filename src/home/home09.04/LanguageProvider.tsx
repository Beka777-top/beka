import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  kk: {
    greeting: "Сәлем әлем!",
    selectLanguage: "Тілді таңдаңыз",
  },
  ru: {
    greeting: "Привет мир!",
    selectLanguage: "Выберите язык",
  },
  en: {
    greeting: "Hello world!",
    selectLanguage: "Select a language",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kk");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    translations: translations[language],
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
