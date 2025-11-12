import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <table border="1" cellPadding="11" cellSpacing="0" style={{ width: '100%', marginBottom: '20px' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => onUserClick(user.id)} style={{ cursor: 'pointer' }}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
