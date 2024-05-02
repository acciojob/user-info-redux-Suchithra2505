
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail } from './actions';

const App = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={handleNameChange} />
      <br />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={email} onChange={handleEmailChange} />
      <br />
      <h2>Current values in store:</h2>
      <p>Name - {name}</p>
      <p>Email - {email}</p>
    </div>
  );
};

export default App
