import React from 'react';

import { Container, InfoContent, DetailsContent } from './styles';

const Person: React.FC = () => {
  return (
    <Container>
      <img
        src="https://i.pinimg.com/564x/1f/76/ef/1f76efd15f0986f50ee7334c1ae3049a.jpg"
        alt="Name"
      />
      <InfoContent>
        <h2>Robinho</h2>
        <p>Oii, como você tá?</p>
      </InfoContent>
      <DetailsContent>
        <p>15:00</p>
        <p className="count">1</p>
      </DetailsContent>
    </Container>
  );
};

export default Person;
