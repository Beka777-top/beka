import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome User!</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/book-gallery">Book Gallery</Link>
      </nav>
    </div>
  );
}