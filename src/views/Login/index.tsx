import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Card } from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    await signIn();
    navigate('/');
  };

  return (
    <Container>
      <Card>
        <h1>Iniciar sessão</h1>
        <p>Faça login com sua conta google para começar</p>
        <button type="submit" onClick={handleSignIn}>
          <FaGoogle /> Login com Google
        </button>
      </Card>
    </Container>
  );
};

export default Login;
