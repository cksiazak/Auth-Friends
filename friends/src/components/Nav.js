import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import authedContext from '../context/authContext';

const Nav = () => {
  const { authed, setAuthed, logOutHandler } = useContext(authedContext);

  const logoutBtn = () => {
    localStorage.removeItem('token');
    setAuthed(false);
    logOutHandler();
  };

  return (
    <div>
      <h1>My Friends List</h1>
      <div>{authed && <button onClick={logoutBtn}>Logout</button>}</div>
    </div>
  );
};

export default Nav;
