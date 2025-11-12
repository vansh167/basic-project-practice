import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or username..." value={value} onChange={(e) => onChange(e.target.value)}style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
