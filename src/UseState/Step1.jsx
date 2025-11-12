import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value   // dynamically update by input name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmittedData(formData); // save submitted data
    setFormData({ name: "", email: "", password: "" }); // clear form
  };

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        /><br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        /><br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
        /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>)}
      <ul style={{ marginTop: "20px" }}>
        {submittedData.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
             <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          </li> 
        ))} 
      </ul>
    </>
  );
};

export default Form;
