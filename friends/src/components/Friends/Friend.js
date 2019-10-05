import React from 'react';

const Friend = ({ info: { name, age, email } }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
