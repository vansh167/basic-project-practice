import React, { useState } from 'react'

const Crud = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [active, setActive] = useState(false)
  const [show, setShow] = useState([])

  // editing states
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const resetForm = () => {
    setName("")
    setEmail("")
    setActive(false)
    setIsEditing(false)
    setEditIndex(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert("Please fill all fields")
      return
    }

    if (isEditing && editIndex !== null) {
      // Update existing entry
      const updated = [...show]
      updated[editIndex] = { name, email, active }
      setShow(updated)
      resetForm()
      return
    }

    // Add new object to the list
    const newEntry = { name, email, active }
    setShow([...show, newEntry])
    resetForm()
  }

  // Click Edit: populate form with entry values and set editing state
  const handleEdit = (index) => {
    const item = show[index]
    setName(item.name)
    setEmail(item.email)
    setActive(item.active)
    setIsEditing(true)
    setEditIndex(index)
    // optionally focus first input (needs ref), not required
  }

  // Delete helper
  const handleDelete = (index) => {
    if (!window.confirm("Delete this entry?")) return
    const filtered = show.filter((_, i) => i !== index)
    setShow(filtered)
    // If deleting the one currently being edited, reset form
    if (isEditing && editIndex === index) resetForm()
    // If deleting an earlier item, adjust editIndex
    if (isEditing && editIndex > index) setEditIndex(prev => prev - 1)
  }

  // Cancel editing
  const handleCancel = () => {
    resetForm()
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

        <label style={{ display: "block", marginTop: 8 }}>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          {' '}Active User
        </label>

        <div style={{ marginTop: 8 }}>
          <button type="submit">{isEditing ? "Save" : "Add"}</button>
          {isEditing && (
            <button type="button" onClick={handleCancel} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      {show.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        show.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}>
            <h3>Name: {item.name}</h3>
            <p>Email: {item.email}</p>
            <p>Status: {item.active ? "✅ Active" : "❌ Inactive"}</p>

            <div>
              <button type="button" onClick={() => handleEdit(index)}>Edit</button>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Crud
