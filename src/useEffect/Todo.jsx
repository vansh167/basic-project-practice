import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");  // single input
      const [tasks, setTasks] = useState(() => {
    // Load from localStorage when component mounts
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });// list of tasks
    const [editIndex, setEditIndex] = useState(null);  // which task is being edited
  
    
   const handleSubmit = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
    return (
        <>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}
                   <button onClick={() => {
        // remove task at this index
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      }}>
        Delete
      </button>
      <button onClick={() => {
        setTask(t)
        setEditIndex(index);
      }}>  {editIndex !== null ? "Update" : "Edit"}</button>
      </li>
                ))}
            </ul>

        </>
    )
}

export default Todo