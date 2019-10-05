import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Home = props => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    error: false
  });

  const formHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', form)
      .then(res => {
        localStorage.setItem('token', res.data);
        props.history.push('/friends');
      })
      .catch(() => {
        errorHandler();
      });
  };

  const errorHandler = () => {
    setForm({
      ...form,
      username: '',
      password: '',
      error: true
    });
    setTimeout(() => {
      setForm({
        ...form,
        username: '',
        password: '',
        error: false
      });
    }, 3000);
  };

  return (
    <form onSubmit={e => formHandler(e)}>
      <input
        type="text"
        placeholder="Username"
        name="Username"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        name="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <input type="submit" />
      {form.error && <p>Incorrect username and/or password</p>}
    </form>
  );
};

export default Home;
