import React from "react";

const App = () => {
    return (
        <div>
            <h1>Kolesa.kz</h1>

            <div>
                <nav>
                    <ul className="flex space-x-4">
                        <li className="text-blue-500 font-bold">Машины</li>
                        <li className="text-gray-500">Авто-от kolesa.kz</li>
                        <li className="text-gray-500">Новые авто</li>
                        <li className="text-gray-500">Запчасти</li>
                        <li className="text-gray-500">Ремонт и услуги</li>
                        <li className="text-gray-500">Коммерческие</li>
                        <li className="text-gray-500">Почитаать</li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li className="text-gray-500">Главная</li>
                        <li className="text-gray-500">Легковые</li>
                        <li className="text-gray-500">Седаны</li>
                        <li className="text-gray-500">Седаны купить в кредит</li>
                        <li className="text-gray-500">Toyota</li>
                        <li className="text-gray-500">Toyota Camry</li>
                    </ul>
                </nav>

                <h2 className="font-mono">Lexus GS350 2025</h2>
                <div className="flex space-x-4">
                    <img
                        src="https://avatars.mds.yandex.net/get-autoru-vos/5146421/d640b77ebc57f44022772f4cee1de23c/1200x900"
                        alt="Lexus gs350"
                        className="w-1/2"
                    />
                    <div className="w-1/2">
                        <h3>Описание</h3>
                        <p>Технические характеристики</p>
                        <p>Год: 2025</p>
                        <p>Пробег: 100 км</p>
                        <p>Цена: 100,000,000 ₸</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;