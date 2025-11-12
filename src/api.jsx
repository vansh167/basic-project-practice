// src/api.js
export const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export const fetchUserDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};
