import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import PrivateRoute from './PrivateRoute';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/authenticate" element={<Login />} />
    </Routes>
  );
};

export default Router;
