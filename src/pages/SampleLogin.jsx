import React from 'react';
import { reactState } from 'react-hands';

const SampleLogin = () => {
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  const handleLogin = () => {
    // Perform login action, passing in necessary payload
    dispatch({ type: 'login', payload: { name: 'John Doe' } });
  };

  const handleLogout = () => {
    // Perform logout action
    dispatch({ type: 'logout' });
  };

  // check state changes in console!
  console.log(state);

  return (
    <div>
      <h1>Hey user is {state.user ? state.user.name : 'No User!'}</h1>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default SampleLogin;
