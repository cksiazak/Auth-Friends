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
        <h1 style={{ margin: '10px 0' }}>My Friends List</h1>
        <Nav />
        <hr />
        {loggedOut && <h2 style={{ color: 'blue' }}>Thanks for visiting!</h2>}

        <Routes />
      </div>
    </AuthedContext.Provider>
  );
}

export default App;
