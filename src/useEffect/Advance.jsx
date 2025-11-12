import React, { useEffect, useState } from 'react'

const Advance = () => {
 const [count, setCount] = useState(0);
 const [key, setKey] = useState("");
  useEffect(() => {
    // start timer
    const timer = setInterval(() => {
      setCount((prev) => prev);
    },[]);

    // cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);
  

  return (
    <>
    
      <h1>⏱️ Timer: {count}</h1>

        <div>
      <h1>Press any key ⌨️</h1>
      <h2>You pressed: {key}</h2>
    </div>
    </> 
     )
}

export default Advance;