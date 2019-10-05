import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import authedContext from '../context/authContext';

const Nav = () => {
  const { authed, setAuthed } = useContext(authedContext);

  const logoutBtn = () => {
    localStorage.removeItem('token');
    setAuthed(false);
  };

  return (
    <div>
      <h1>My Friends List</h1>
      <div>
        {authed === false ? (
          <Link to="/">Login</Link>
        ) : (
          <button onClick={logoutBtn}>Logout</button>
        )}

        <Link to="/friends">Friends</Link>
      </div>
    </div>
  );
};

export default Nav;
