import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { reactState } from 'react-hands';

// define intial states for auth state and user
const initialState = { isLoggedIn: false, user: null };

// action reducers to change the state
const actions = {
  setUser: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    user: payload,
  }),
  unSetUser: (state) => ({ ...state, isLoggedIn: false, user: null }),
};

const { StoreProvider } = reactState(initialState, actions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <StoreProvider>
        <App />
      </StoreProvider>
    </React.Fragment>
  </React.StrictMode>
);
