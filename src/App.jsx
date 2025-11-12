import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchUserDetails } from './api';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(setUsers);  }, []);

  const handleUserClick = async (id) => {
    const userDetails = await fetchUserDetails(id);
    setSelectedUser(userDetails);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Directory</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <UserList users={filteredUsers} onUserClick={handleUserClick} /> <div>
      {selectedUser && <UserDetails user={selectedUser} />}
   </div> </div>
  );
};

export default App;
