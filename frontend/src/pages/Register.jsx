import React, { useState } from 'react';
import sideimage from "../public/img/sideimagelogin.png";
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from "../contant.js"
import popup from "../model/popup.js"
import { FacebookLoginButton } from 'react-social-login-buttons';
function Register() {
  const [credentials, setCredentials] = useState({ username: '', email: '', phone: '', password: '' });
  let navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Registering with:', credentials);
    try {
      let response = await api.post("/user/create", {
        name: credentials.username,
        email: credentials.email,
        phone: credentials.phone,
        password: credentials.password
      })
      if (response.status === 200) {
        await popup("success","account created successfully","","false",1000000000)
        console.log(response);
        navigate("/")
      } 
    } catch (error) {
      console.log(error);
      await popup("error",error.response.data.message,"","false",10000)
    }
    
  };

  return (
    <div className='d-flex justify-content-center bg-black min-vh-100'>
      <div className='ms-auto d-none d-lg-flex mt-auto mb-auto me-0 justify-content-end'>
        <img src={sideimage} alt="Side view" className='w-75 img-cont' />
      </div>
      <div className='login-container mt-5 mt-lg-auto mb-auto h-full me-auto'>
        <h1 className='login-title p-0'>Register</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor="username" className="visually-hidden">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className='form-input'
          />
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className='form-input'
          />

          <label htmlFor="phone" className="visually-hidden">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={credentials.phone}
            onChange={handleChange}
            className='form-input'
          />
          <label htmlFor="password" className="visually-hidden">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className='form-input'

          />
          <button type="submit" className='register-button' onClick={handleSubmit}>Register</button>
        </form>
        <div className='or-container'>
          <div className='or-line'></div>
          <span className='or-text'>OR</span>
          <div className='or-line'></div>
        </div>
        <FacebookLoginButton/>
        <div className='signup'>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div >
  );
}

export default Register;
