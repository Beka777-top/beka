import React from "react";
import AboutUs from "./AboutUs";
import "./Style.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">QuickWork</h1>
        <p className="landing-subtitle">Фриланс пен жобаларды біріктіреміз</p>
      </div>
      <AboutUs />
    </div>
  );
}
