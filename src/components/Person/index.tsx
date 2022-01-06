import React from 'react';
import { SingleUser } from '../../@types/user';

import { Container, InfoContent, DetailsContent } from './styles';

interface Props {
  user: SingleUser;
}

const Person: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <img src={`${user.photoURL}`} alt={`${user.name}`} />
      <InfoContent>
        <h2>{user.name}</h2>
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
