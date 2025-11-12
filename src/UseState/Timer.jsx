import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime]= useState(0);
    const [isRunning, setIsRunning] = useState(true);

useEffect(() => { document.title = `Time: ${time}s`; }, [time]);


useEffect(() => {
  if (!isRunning) return;

  const intervalId = setInterval(() => setTime(t => t + 1), 1000);
  return () => clearInterval(intervalId);
}, [isRunning]);




  return (
    <>
    <h1>Timer</h1>
   <button onClick={()=> setTime(time + 1)}>Timer</button>
      <button onClick={()=> setTime(0)}>Reset</button>
      <button onClick={() => setIsRunning(!isRunning)}>
  {isRunning ? "Pause" : "Resume"}
</button>

<h1>{time}</h1>

    </>
  )
}

export default Timer