import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
    <div>
      <div>
        {friends.map(friend => (
          <Friend key={friend.id} info={friend} />
        ))}
      </div>
      <AddFriendForm setFriends={setFriends} />
    </div>
  );
};

export default Friends;
