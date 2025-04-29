import React from "react";

const DiscountCard = ({ image, title, oldPrice, newPrice, discount, tag }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
    <div className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full self-start mb-2">
      -{discount}%
    </div>
    <img src={image} alt={title} className="h-28 object-contain mb-2" />
    <div className="text-blue-500 text-xs font-semibold mb-1">{tag}</div>
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-gray-400 line-through text-sm">{oldPrice} ₸</div>
    <div className="bg-yellow-400 px-3 py-1 rounded-lg font-bold text-black text-lg">
      {newPrice} ₸
    </div>
  </div>
);

const DiscountGrid = () => {
  const products = [
    {
      image: "https://i.imgur.com/1.png",
      title: "Макароны «СУЛТАН»",
      oldPrice: 454,
      newPrice: 339,
      discount: 25,
      tag: "Макарон",
    },
    {
      image: "https://i.imgur.com/2.png",
      title: "Чай «ПИАЛА» GOLD 25 шт",
      oldPrice: 479,
      newPrice: 309,
      discount: 35,
      tag: "Шай",
    },
    {
      image: "https://i.imgur.com/3.png",
      title: "Килька «Балтийская»",
      oldPrice: 1055,
      newPrice: 499,
      discount: 53,
      tag: "Майшабақ",
    },
    {
      image: "https://i.imgur.com/4.png",
      title: "Соус HEINZ в ассортименте",
      oldPrice: 889,
      newPrice: 529,
      discount: 40,
      tag: "Тұздық",
    },
    {
      image: "https://i.imgur.com/5.png",
      title: "Печенье ROSHEN в ассортименте",
      oldPrice: 489,
      newPrice: 299,
      discount: 39,
      tag: "Пісірілген",
    },
    {
      image: "https://i.imgur.com/6.png",
      title: "Пюре ФРУТОНЯНЯ яблоко-груша",
      oldPrice: 420,
      newPrice: 239,
      discount: 43,
      tag: "Ебө",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Magnum</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <DiscountCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default DiscountGrid;
