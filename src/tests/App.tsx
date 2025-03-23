import React from "react";
import BookingForm from "./BookingForm";
import "./App.css"; // Import the CSS file

const App = () => {
  const handleBookingSubmit = (data) => {
    console.log("Booking Data:", data);
  };

  const menuItems = [
    { name: "Caesar Salad", price: "$12" },
    { name: "Margherita Pizza", price: "$15" },
    { name: "Spaghetti Carbonara", price: "$18" },
    { name: "Tiramisu", price: "$8" },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Little Lemon</h1>
      </header>
      <main className="app-main">
        <section className="menu-section">
          <h2>Menu</h2>
          <div className="menu-cards">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-card">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="booking-section">
          <BookingForm onSubmit={handleBookingSubmit} />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
