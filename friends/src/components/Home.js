import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import authedContext from '../context/authContext';

const Home = props => {
  const { setAuthed } = useContext(authedContext);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);

  const formHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setAuthed(true);
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
      password: ''
    });
    setError(true);
    setTimeout(() => {
      setForm({
        ...form,
        username: '',
        password: ''
      });
      setError(false);
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
      {error && <p>Incorrect username and/or password</p>}
    </form>
  );
};

export default Home;
