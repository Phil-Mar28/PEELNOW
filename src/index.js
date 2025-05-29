import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

ReactDOM.render(
  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();