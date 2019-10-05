import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Button, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AddFriendForm = ({ setFriends }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [error, setError] = useState(false);

  const formHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', form)
      .then(res => {
        setFriends(res.data);
      })
      .catch(() => {
        errorHandler();
      });
  };

  const errorHandler = () => {
    setForm({
      ...form,
      name: '',
      age: '',
      email: ''
    });
    setError(true);
    setTimeout(() => {
      setForm({
        ...form,
        name: '',
        age: '',
        email: ''
      });
      setError(false);
    }, 3000);
  };

  return (
    <div style={{ width: '30%', margin: '15px auto' }}>
      <h3>Add a new friend to this list</h3>
      <Form error onSubmit={e => formHandler(e)}>
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={form.age}
            onChange={e => setForm({ ...form, age: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </Form.Field>
        {error && (
          <Message error content="Please fill in all the fields correctly" />
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddFriendForm;
