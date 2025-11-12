import React, { useReducer } from 'react'
import TodoReducer from './ToDoReducer';


const Counter = () => {
const[add,setAdd]= useReducer(reducer, 0);
 
function reducer(state, action) {
    switch (action.type) {
        case "inc":  return state + 1;
        case "dec":  return state -1 ;
        case "reset": return 0;
        default : return state;
    }
}
  return (
<>
<TodoReducer/>
<h1>{add}</h1>

      <button onClick={() => setAdd({ type: "inc" })}>+</button>
      <button onClick={() => setAdd({ type: "dec" })}>-</button>
      <button onClick={() => setAdd({ type: "reset" })}>Reset</button></>
  )
}

export default Counter;