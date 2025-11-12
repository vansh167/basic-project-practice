import React, { useState } from 'react'

const Delete = () => {
    const [name, setName]=useState("")
    const [show, setShow]=useState([])
    
    const handleDelete =(index)=>{
        const updateList = show.filter((_, i)=> i !== index)
        setShow(updateList)
    }
    
    const handleData =(e)=>{
        e.preventDefault()
        setShow([...show, name])
        setName("")
    }
    const handleValue =(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleData}>
        <input type='text'
        value={name}
        placeholder='Name'
        onChange={handleValue}
        />
     <button>Button!</button>
</form>
{show.map((item, index)=>(
    <div key={index}>
    Name:{item}
    <button onClick={()=>handleDelete(index)}>delete</button>
    </div>
))}
    </div>
  )
}

export default Delete