import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ronaldo", age: 40 },
    { id: 2, name: "Messi", age: 37 },
    { id: 3, name: "Mbappé", age: 27 },
    { id: 4, name: "Abuka", age: 14 },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = () => {
    if (name.trim() && age.trim()) {

      const nameExists = users.some((user) => user.name.toLowerCase() === name.toLowerCase());
      if (nameExists) {
        setError("");
        return;
      }

      setUsers((prevUsers) => [
        ...prevUsers,
        { id: prevUsers.length + 1, name, age: parseInt(age) },
      ]);
      setName("");
      setAge("");
      setError(""); 
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>id:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Country:</strong> {user.age}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;