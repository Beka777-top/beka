import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: "Алихан", age: 25, email: "alihan@example.com" },
    { id: 2, name: "Айжан", age: 30, email: "aizhan@example.com" },
    { id: 3, name: "Бекзат", age: 22, email: "bekzat@example.com" },
  ]);

  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
};

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="user-list">
      <h2>Қолданушылар тізімі</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserDetails = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <p>Қолданушы табылмады</p>;
  }

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>Жасы: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate(-1)}>Артқа</button>
    </div>
  );
};

const Sapp = () => {
  return (
    <Router>
      <UserProvider>
        <div className="app">
          <h1>Қолданушылар қолданбасы</h1>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
};

export default Sapp;