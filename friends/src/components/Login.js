import React, { useState, useContext } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
    <div style={{ width: '30%', margin: '0 auto' }}>
      <Form error onSubmit={e => formHandler(e)}>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            name="Username"
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </Form.Field>
        {error && <Message error content="Incorrect username/password" />}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Home;
