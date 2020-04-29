import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import authedContext from '../context/authContext';

const Nav = () => {
  const { authed, setAuthed, logOutHandler } = useContext(authedContext);

  const logoutBtn = () => {
    localStorage.removeItem('token');
    setAuthed(false);
    logOutHandler();
  };

  return (
    <div style={{ marginTop: '15px' }}>
      {authed && <Button onClick={logoutBtn}>Logout</Button>}
    </div>
  );
};

export default Nav;
