import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const games = [
  { id: 1, name: "Cyberpunk 2077", price: 60 },
  { id: 2, name: "The Witcher 3", price: 40 },
  { id: 3, name: "Red Dead Redemption 2", price: 70 },
];

const GameList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="game-list">
      <h2>Ойындар</h2>
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <h3>{game.name}</h3>
          <p>Бағасы: ${game.price}</p>
          <button onClick={() => addToCart(game)}>Себетке қосу</button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Себет</h2>
      {cart.length === 0 ? (
        <p>Себет бос</p>
      ) : (
        cart.map((game) => (
          <div key={game.id} className="cart-item">
            <h3>{game.name}</h3>
            <p>Бағасы: ${game.price}</p>
            <button onClick={() => removeFromCart(game.id)}>Жою</button>
          </div>
        ))
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Ойын дүкені</h1>
        <GameList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;