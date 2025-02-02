import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS for styles if needed
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
