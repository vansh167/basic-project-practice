import React, { useState } from 'react'

const Crud = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [active, setActive] = useState(false)
  const [show, setShow] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert("Please fill all fields")
      return
    }

    // Add new object to the list
    const newEntry = { name, email, active }
    setShow([...show, newEntry])

    // Clear input fields
    setName("")
    setEmail("")
    setActive(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Simple CRUD Form</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       <label>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Active User
        </label>

        <button type="submit">Add</button>
      </form>

      {show.map((item, index) => (
        <div key={index}>
          <h3>Name:  {item.name}</h3>
          <p>Email:  {item.email}</p>
           <p>Status: {item.active ? "✅ Active" : "❌ Inactive"}</p>
        </div>
      ))}
    </>
  )
}

export default Crud
