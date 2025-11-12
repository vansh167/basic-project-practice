import React, { useState } from 'react';
import Form from './form';
import TodoList from './Try';
import Timer from './Timer';
import Counter from './Counter';

const Togal = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "blacke" : "white",
        minHeight: "100vh",
        minWidth:"199vh",
      }}
    >
      {/* Pass theme state to children */}
      <Form isDark={isDark} />
      <TodoList isDark={isDark} />
      <Timer/>
      <Counter/>
      
      <h1>Toggle button</h1>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Togal;
