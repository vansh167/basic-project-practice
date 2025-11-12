import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return; // prevent empty
    setTasks([...tasks, task]); // add new task at bottom
    setTask(""); // clear input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
