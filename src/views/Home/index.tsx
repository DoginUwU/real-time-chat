import React from 'react';
import Chat from '../../components/Chat';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Chat />
    </Container>
  );
};

export default Home;
