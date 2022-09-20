import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Form.css';


const Signup = () => {
  //Initializing states 

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", DOB: "", gender: "" })
  const [formErrors, setFormErrors] = useState({});

  let history = useNavigate();
  const { name, email, password, DOB, gender } = credentials;

  //Name Validation 
  if (!name) {

    setFormErrors["nameErr"] = "Name is required";
  }

  //Email ID Validation
  if (!email) {
    setFormErrors["emailErr"] = "Email id is required.";
  }
  else if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email))) {

    setFormErrors["emailErr"] = "Invalid email id.";
  }
  if (!password) {
    setFormErrors["passwordErr"] = "Password is required.";
  }


  //DOB Validation
  if (!DOB) {

    setFormErrors["DOBErr"] = "Date of birth is required.";
  }
  else {
    var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    if (!pattern.test(DOB)) {
      setFormErrors["DOBErr"] = "Invalid date of birth";
    }
  }

  //Gender Validation    
  if (gender === '' || gender === "select") {
    setFormErrors["genderErr"] = "Select gender.";
  }


  const handleSubmit = async (e) => {

    e.preventDefault();
    //settign all the details as credentials to login later
    const { name, email, password, DOB, gender } = credentials;
    //creating user with the given data using fetch api
    const response = await fetch(`http://localhost:5000/api/auth/createuser `, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password, DOB, gender })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth-token and then redirect
      localStorage.setItem('auth-token', json.authToken);
      history("/");
      alert('You have been successfully registered.')
    }
  }


  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const { nameErr, emailErr, passwordErr, DOBErr, genderErr, } = formErrors;

  return (
    <>
      <div className='container my-3'>
        <h2>Signup Form </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={handleChange} minLength={3} required />
            {nameErr &&
              <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>
            }
          </div>
          <div className="mb-3 my-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' onChange={handleChange} required />
            {emailErr &&
              <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Create Password</label>
            <input type="password" className="form-control" id="password" name='password' autoComplete="on" onChange={handleChange} minLength={5} required />
            {passwordErr &&
              <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
            }
          </div>
          <div>
            <label htmlFor="text" className="form-label">Birth Date</label>
            <input type="text"
              name="DOB"
              onChange={handleChange}
              placeholder="DD/MM/YYYY.."
              className={DOBErr ? ' showError' : ''} required />
            {DOBErr &&
              <div style={{ color: "red", paddingBottom: 10 }}>{DOBErr}</div>
            }
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={handleChange}
              className={genderErr ? ' showError' : ''}
              required >
              <option value="select">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {genderErr &&
              <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
            }
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )

}

export default Signup

