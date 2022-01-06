import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  return user.uid ? children : <Navigate to="/authenticate" />;
};

export default PrivateRoute;
