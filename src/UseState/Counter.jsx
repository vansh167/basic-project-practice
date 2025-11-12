import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]= useState(0);
    const [step, setStep] = useState(1);
  return (
    <>
    <input
    type='number'
    value={step}
    onChange={(e)=> setStep(Number(e.target.value))}
    />
    <button onClick={() => setCount(count + step)} >Increase</button>
    <button onClick={() => setCount(count - step)} >Decrease</button>
    <button onClick={() => setCount(0)} >Reset</button>
    <h1>Count: {count}</h1>

    </>
  )
}

export default Counter