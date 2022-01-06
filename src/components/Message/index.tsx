import React from 'react';

import { Container, Content } from './styles';

interface Props {
  isMyMessage?: boolean;
}

const Message: React.FC<Props> = ({ isMyMessage }) => {
  return (
    <Container isMyMessage={isMyMessage}>
      <img
        src="https://i.pinimg.com/564x/1f/76/ef/1f76efd15f0986f50ee7334c1ae3049a.jpg"
        alt="Message"
      />
      <Content isMyMessage={isMyMessage}>
        <p>Oiii, como você tá?</p>
      </Content>
    </Container>
  );
};

export default Message;
