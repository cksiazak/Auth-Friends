import React, { useState } from 'react';
import './App.css';

import AuthedContext from './context/authContext';
import Nav from './components/Nav';
import Routes from './components/Routes';

function App() {
  const [authed, setAuthed] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const logOutHandler = () => {
    setLoggedOut(true);
    setTimeout(() => {
      setLoggedOut(false);
    }, 5000);
  };

  return (
    <AuthedContext.Provider value={{ authed, setAuthed, logOutHandler }}>
      <div className="App">
        <Nav />
        <Routes />
        {loggedOut && <p>Thanks for visiting!</p>}
      </div>
    </AuthedContext.Provider>
  );
}

export default App;
