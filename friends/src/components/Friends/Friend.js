import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Friend = ({ info: { name, age, email } }) => {
  return (
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{age}</span>
          </Card.Meta>
          <Card.Description>{email}</Card.Description>
        </Card.Content>
      </Card>
  );
};

export default Friend;
