import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Friend from './Friend';
import Loading from '../Loading';
import AddFriendForm from './AddFriendForm';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div style={{ width: '75%', margin: '20px auto' }}>
      <Card.Group centered style={{ marginBottom: '15px' }}>
        {friends.map(friend => (
          <Friend key={friend.id} info={friend} />
        ))}
      </Card.Group>
      <hr />
      <AddFriendForm setFriends={setFriends} />
    </div>
  );
};

export default Friends;
