import React, { useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}> ADD +</button>
            <button onClick={() => setCount(count - 1)}>Dicrese -</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
{/* ----------------------------------------------------------------------------------------------------------------------------- */}
            <h1>Task 2</h1>

            <input type='text'
                value={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <h2>Your text: {text}</h2>
{/* ----------------------------------------------------------------------------------------------------------------------- */}
            <h1>Task 3</h1>
            <input 
            type= {password ? "Password" : "text"}
              value={password}
              onChange={(e) => {setPassword (e.target.value)}}
            />
           <button onClick={() => setPassword(!password)}>
            {password ? "Hide" : "Show" }
            </button>
{/* ------------------------------------------------------------------------------------------------------------------------*/}
       <h1>Task 4</h1>
       <textarea
       value={text}
       onChange={(e) => {setText(e.target.value)}}
       rows="4"
        cols="40"
       />
       <h2>Length: {text.length}</h2>


        </div>
    )
}

export default Practice