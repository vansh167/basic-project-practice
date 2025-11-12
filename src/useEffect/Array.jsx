import React, { useState } from 'react'
import Color from './Color';
import Todo from './Todo';
import Advance from './Advance';

const Array = () => {
  const [index, setIndex] = useState(0); // ✅ track joke position

  const jokes = [
    "Why don't skeletons fight each other? Because they don’t have the guts!",
    "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.'",
    "Why was the math book sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ]

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length); // ✅ pick random index
    setIndex(randomIndex); // ✅ update index instead of storing string
  }

  return (
    <>
    <Advance/>
    <Todo/>
    <Color/>
      <h1>{jokes[index]}</h1> {/* ✅ show current joke */}
      
      <button onClick={() => setIndex((index - 1 + jokes.length) % jokes.length)}>
        Previous
      </button>
      
      <button onClick={handleClick}>
        Random
      </button>
      
      <button onClick={() => setIndex((index + 1) % jokes.length)}>
        Next
      </button>
    </>
  )
}

export default Array
