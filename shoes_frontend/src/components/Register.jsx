import React, { useState } from 'react'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom'
// import google from '../assets/google.png'
import api from '../../Api'

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
      'profile_photo':'',
      'password':'',
    })

  const inputHandler=(e)=>{
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]:e.target.value,
    })
  };

  const fileHandler = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.files[0],
    })
  };

  const handleSubmit=()=>{
    const formData=new FormData();
    formData.append('first_name', registerFormData.firstName);
    formData.append('last_name', registerFormData.lastName);
    formData.append('email', registerFormData.email);
    formData.append('username', registerFormData.username);
    formData.append('mobile_number', registerFormData.mobile_number);
    formData.append('address', registerFormData.address);
    if (registerFormData.profile_photo) {
      formData.append('profile_photo', registerFormData.profile_photo);
    } else {
      alert("image is not sending in the background...!")
    }
    formData.append('password', registerFormData.password);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }


    api.post('shoes_api/customer/register/',formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response)=>{
      console.log(response)
      setRegisterFormData({
        'firstName':'',
        'lastName':'',
        'email':'',
        'username':'',
        'mobile_number':'',
        'address':'',
        'profilePhoto':'',
        'password':'',
      })
    })
    .catch((error)=>{
      console.log(error)
    })

    
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
                name="address"
                value={registerFormData.address}
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="profile_photo">Profile Photo</label>
              <input
                type="file"
                id="profile_photo"
                name="profile_photo"
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
            onClick={handleSubmit}
            defaultValue="Register"
          />
          </form>
        </div>
        </div>
        
    </div>
  )
}

export default Register