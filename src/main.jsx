import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </React.StrictMode>
);