import React from 'react';
import './Home.css';

const UserCard = ({name, age, city }) => {
  return (
    <div className="user-card">
      <h2>Аты: {name}</h2>
      <p>Жасы: {age}</p>
      <p>Қаласы: {city}</p>
    </div>
  );
};


const App = () => {
  const users = [
    { name: 'Бекарыс', age: 25, city: 'Алматы' },
    { name: 'Айжан', age: 30, city: 'Астана' }
  ];

  return (
    <div className="app">
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} city={user.city} />
      ))}
    </div>
  );
};

export default App;
