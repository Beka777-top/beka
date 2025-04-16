import React, { useState } from "react";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [savedName, setSavedName] = useState(localStorage.getItem("savedName") || "");

  const saveName = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem("savedName", name);
      setSavedName(name);
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Есім сақтау</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Есіміңізді енгізіңіз"
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={saveName}
        disabled={isSaving || !name}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isSaving ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          cursor: isSaving ? "not-allowed" : "pointer",
        }}
      >
        {isSaving ? "Сақталуда..." : "Сақтау"}
      </button>
      {savedName && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Соңғы сақталған есім: <strong>{savedName}</strong>
        </p>
      )}
    </div>
  );
};

export default App;