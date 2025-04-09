import './style.css';

const translations = {
  kk: {
    header: 'Бұл Test компоненті',
    main: 'Бұл Main компоненті 🧠',
    message: 'Миссия түн ортасында басталады.',
    footer: 'Құпия тіл таңдау қолданбасы © 2025',
  },
  ru: {
    header: 'Это компонент Test',
    main: 'Это компонент Main 🧠',
    message: 'Миссия начинается в полночь.',
    footer: 'Секретное приложение выбора языка © 2025',
  },
  en: {
    header: 'This is Test component',
    main: 'This is Main component 🧠',
    message: 'Mission starts at midnight.',
    footer: 'Secret language selection app © 2025',
  },
};

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kk');
  const changeLanguage = (lang) => setLanguage(lang);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="language-select">
      <option value="kk">Қазақша</option>
      <option value="ru">Русский</option>
      <option value="en">Ағылшынша</option>
    </select>
  );
};

const Main = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="main-box">
      <h3>{t.main}</h3>
      <p className="main-message">{t.message}</p>
      <LanguageSelector />
    </div>
  );
};

const Test = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="test-box">
      <h2>{t.header}</h2>
      <Main />
    </div>
  );
};

const App = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="app-container">
      <h1 className="title">HomeWork useContext</h1>
      <Test />
      <p className="footer">{t.footer}</p>
    </div>
  );
};

const RootApp = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default RootApp;
