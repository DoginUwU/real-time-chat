import React from 'react';
import { FaGoogle } from 'react-icons/fa';

import { Container, Card } from './styles';

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Card>
        <h1>Iniciar sessão</h1>
        <p>Faça login com sua conta google para começar</p>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <FaGoogle /> Login com Google
          </button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
