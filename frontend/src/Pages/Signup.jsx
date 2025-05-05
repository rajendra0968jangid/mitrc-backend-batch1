import React, { useState } from 'react'

function Signup() {
  let [formData, setFormData] = useState(
    { name:"hello",phone:"1234567",email: "admin@gmail.com", password: "pass123456" }
  )
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    //api
    let response = await fetch("http://localhost:5000/user/create-user", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    let jsonResponse = await response.json();
    alert(jsonResponse?.messsage);
  }
  return (
    <>
      <div className='container m-4'>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-outline mb-4'>
            <input id='form1Example1' type="text" className='form-control'
              value={formData.name}
              name='name'
              onChange={(e) => handleChange(e)} />
            <label htmlFor="form2Example1" className='form-label'>
              Name:
            </label>
          </div>
          <div className='form-outline mb-4'>
            <input id='form1Example1' type="text" className='form-control'
              value={formData.phone}
              name='phone'
              onChange={(e) => handleChange(e)} />
            <label htmlFor="form2Example1" className='form-label'>
              Phone:
            </label>
          </div>
          <div className='form-outline mb-4'>
            <input id='form1Example1' type="email" className='form-control'
              value={formData.email}
              name='email'
              onChange={(e) => handleChange(e)} />
            <label htmlFor="form2Example1" className='form-label'>
              Email:
            </label>
          </div>
          <div className='form-outline mb-4'>
            <input id='form1Example1' type="password" className='form-control'
              value={formData.password}
              name='password'
              onChange={(e) => handleChange(e)} />
            <label htmlFor="form2Example1" className='form-label'>
              Password:
            </label>
          </div>
          <button
            type='submit' className='btn btn-primary btn-block mb-4'>
            Sign up
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
