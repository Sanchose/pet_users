import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      }).catch(err => {
        console.warn(err);
        alert('Error whe we become a user')
      }).finally(() => setLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    }
    else{
      setInvites(prev => [...prev, id]);
    }
}

return (
  <div className="App">
    <Users
      searchValue={searchValue}
      items={users}
      isLoading={isLoading}
      onChangeSearchValue={onChangeSearchValue}
      invites={invites}
      onClickInvite={onClickInvite}
    />
    {/* <Success /> */}
  </div>
);
}

export default App;