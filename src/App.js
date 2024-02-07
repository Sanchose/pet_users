import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err);
      alert('Error whe we become a user')
    })
  }, [])
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;