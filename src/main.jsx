import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from this module
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render your application
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
