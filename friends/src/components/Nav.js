import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h1>My Friends List</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/friends">Friends</Link>
      </div>
    </div>
  );
};

export default Nav;
