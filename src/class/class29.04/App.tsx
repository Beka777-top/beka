import React from "react";

const App = () => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-2xl font-bold text-black">kolesa.kz</a>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Избранное <span className="text-blue-600">(1)</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Сообщения</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Пополнить счёт <span className="text-gray-500">(0 ед.)</span>
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
                Кабинет{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
              </svg>
              Подать объявление
            </a>
          </div>
        </div>
        <nav className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex gap-6 overflow-x-auto">
            {[
              { text: "Машины", icon: "tfi-cars-fill", active: true },
              { text: "Авто от Kolesa.kz", icon: "tfi-cars-verified" },
              { text: "Новые авто", icon: "tfi-cars-wash" },
              { text: "Запчасти", icon: "tfi-parts" },
              { text: "Ремонт и услуги", icon: "tfi-services" },
              { text: "Коммерческие", icon: "tfi-truck" },
              { text: "Почитать", icon: "tfi-reading" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-1 px-3 py-1 rounded ${
                  item.active
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-4">

        <nav>
          <ul className="flex space-x-4 mb-4">
            <li className="text-blue-500 font-bold">Машины</li>
            <li className="text-gray-500">Авто-от kolesa.kz</li>
            <li className="text-gray-500">Новые авто</li>
            <li className="text-gray-500">Запчасти</li>
            <li className="text-gray-500">Ремонт и услуги</li>
            <li className="text-gray-500">Коммерческие</li>
            <li className="text-gray-500">Почитать</li>
          </ul>
        </nav>
        <nav>
          <ul className="mb-4">
            <li className="text-gray-500">Главная</li>
            <li className="text-gray-500">Легковые</li>
            <li className="text-gray-500">Седаны</li>
            <li className="text-gray-500">Седаны купить в кредит</li>
            <li className="text-gray-500">Toyota</li>
            <li className="text-gray-500">Toyota Camry</li>
          </ul>
        </nav>

        <h2 className="font-mono text-xl mb-4">Lexus GS350 2025</h2>
        <div className="flex space-x-4">
          <img
            src="https://avatars.mds.yandex.net/get-autoru-vos/5146421/d640b77ebc57f44022772f4cee1de23c/1200x900"
            alt="Lexus gs350"
            className="w-1/2"
          />
          <div className="w-1/2">
            <h3 className="text-lg font-bold mb-2">Описание</h3>
            <p className="mb-1">Технические характеристики</p>
            <p className="mb-1">Год: 2025</p>
            <p className="mb-1">Пробег: 100 км</p>
            <p className="mb-1">Цена: 100,000,000 ₸</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;