import React from 'react';
import { useState } from 'react';

export default function Create() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  async function summitHandler() {
    // try {
    const body = { userName, password };
    console.log('fetching', userName, password);
    const response = await fetch('http://localhost:3000/api/create', {
      method: POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    // } catch (error) {
    //   console.error({ message: 'User not created' });
    // }
  }

  return (
    <div className="create">
      <h1>YummyJuice</h1>
      <form>
        <label>Username: </label>
        <input type="text" onChange={userNameHandler}></input>
        <label>Password: </label>
        <input type="text" onChange={passwordHandler}></input>
        <button onClick={summitHandler}>Create Account</button>
      </form>
    </div>
  );
}
