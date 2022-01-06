import React from 'react';

import { Container, Profile } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img
          src="https://i.pinimg.com/564x/1f/76/ef/1f76efd15f0986f50ee7334c1ae3049a.jpg"
          alt="Name"
        />
        <h2>Robinho</h2>
      </Profile>
    </Container>
  );
};

export default Chat;
