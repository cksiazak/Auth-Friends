import React, { useState } from 'react';
import './App.css';

import AuthedContext from './context/authContext';
import Nav from './components/Nav';
import Routes from './components/Routes';

function App() {
  const [authed, setAuthed] = useState(false);
  return (
    <AuthedContext.Provider value={{ authed, setAuthed }}>
      <div className="App">
        <Nav />

        <Routes />
      </div>
    </AuthedContext.Provider>
  );
}

export default App;
