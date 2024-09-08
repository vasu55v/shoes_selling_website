import React, { useState } from 'react'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom'
// import google from '../assets/google.png'

const Register = () => {
  const navigate=useNavigate();
    const redirectToHome=()=>{
        navigate('/')
    }

    const [registerFormData,setRegisterFormData]=useState({
      'firstName':'',
      'lastName':'',
      'email':'',
      'username':'',
      'mobile_number':'',
      'address':'',
      'profilePhoto':'',
      'password':'',
    })

  const inputHandler=(e)=>{
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]:e.target.value,
    })
  }

  const fileHandler=(e)=>{
     setRegisterFormData({
      ...registerFormData,
      [e.target.name]:e.target.files[0],
     })
  }

  const handleSubmit=()=>{
    const formData=new FormData();
    formData.append('first_name',registerFormData.firstName);
    formData.append('last_name',registerFormData.lastName);
    formData.append('email',registerFormData.email);
    formData.append('username',registerFormData.username);
    formData.append('password',registerFormData.password);
    formData.append('mobile_number',registerFormData.mobile_number);
    formData.append('address',registerFormData.address);
    formData.append('profile_photo',registerFormData.profilePhoto);

    
  }

  return (
    <div>
        <div className='nav_Section_login'>
        <h1>Muniqe</h1>
        <button onClick={redirectToHome}>Home</button>
        </div>
        <div className='middle_text'>Start with <span>Muniqe</span></div>
        <div className='outer_register_container'>
        <div className='inner_register_container'>
             <h1>Register</h1>
             <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={registerFormData.firstName}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={registerFormData.lastName}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerFormData.email}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={registerFormData.username}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile_number">Mobile Number</label>
              <input
                type="number"
                id="mobile_number"
                name="mobile_number"
                value={registerFormData.mobile_number}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address"
                value={registerFormData.address}
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="profilePhoto">Profile Photo</label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                onChange={fileHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerFormData.password}
                onChange={inputHandler}
              />
            </div>
            <input
            type="button"
            className="reg_submit_btn"
            // onClick={handleSubmit}
            defaultValue="Register"
          />
          </form>
        </div>
        </div>
        
    </div>
  )
}

export default Register