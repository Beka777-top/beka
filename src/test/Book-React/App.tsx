import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./Login";
import BookGallery from "./BookGallery";
import BookDetail from "./BookDetail";
import ProtectedRoute from "./ProtectedRoute";
import "./app.css";

function Header() {
  return (
    <header className="header">
      <h2>📚 Кітапхана Сөресі</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/book-gallery">Book Gallery</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Кітапхана Сөресі. Барлық құқықтар қорғалған.</p>
    </footer>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-gallery"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <BookGallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <BookDetail />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
