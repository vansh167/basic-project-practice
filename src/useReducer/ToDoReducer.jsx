import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((_, index) => index !== action.payload);
    case "clear":
      return [];
    default:
      return state;
  }
}

const TodoReducer = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          if (task.trim() !== "") {
            dispatch({ type: "add", payload: task });
            setTask("");
          }
        }}
      >
        Add
      </button>

      <button onClick={() => dispatch({ type: "clear" })}>
        Clear All
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => dispatch({ type: "remove", payload: index })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoReducer;
