import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Provider imports
import { TodoProvider } from './context/todo/TodoContext';
import { AuthProvider } from './context/auth/AuthContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <AuthProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </AuthProvider>
);
