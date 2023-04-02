import React, { useEffect } from 'react';
import { reactState } from 'react-hands';
import useLocalStorage from '../hooks/useLocalStorage_Lite';

const SampleLogin = () => {
  // Make an API call to sign the user in and say its newUser
  // basically on login check if they exist in db and return stuff and save
  const signedInUser = { id: 123, name: 'John Doe', password: '123' };
  // Initialize the user state using the "user" key in localStorage
  const {
    storedValue: user,
    setLocalState,
    removeLocalState,
    getLocalState,
  } = useLocalStorage('user', null);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  const handleSignup = () => {
    // Make an API call to sign up the user and say its newUser
    // basically create their profile in db and return stuff and save to local
    const newUser = { id: 345, name: 'Kizz Code', password: 'foobar' };
    setLocalState('user', newUser);
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  };

  const handleLogin = () => {
    setLocalState('user', signedInUser);
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  };

  const handleLogout = () => {
    removeLocalState('user');
    dispatch({ type: 'unSetUser' });
  };

  // get localStorage value on page load
  useEffect(() => {
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  }, []);

  return (
    <div>
      <h1>Hey user is {state.user ? state.user.name : 'No User!'}</h1>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleSignup}>signup</button>
    </div>
  );
};

export default SampleLogin;
