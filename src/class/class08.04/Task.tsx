import React, { useState } from 'react';
import UserContext from './Context';
import ChildComponent from './ChildComponent';

function App() {
  const [username, setUsername] = useState('Kaisar');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div>
        <h1>Қолданушы аты</h1>
        <ChildComponent />
      </div>
    </UserContext.Provider>
  );
}

export default App;