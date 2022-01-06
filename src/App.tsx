import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DirectProvider } from './contexts/DirectContext';
import Router from './routes/Router';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DirectProvider>
          <GlobalStyles />
          <Router />
        </DirectProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
