import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
    </div>
  );
};

export default UserDetails;
