import React from 'react'
import '../styles/register.css'
// import google from '../assets/google.png'

const Register = () => {
  return (
    <div>
        <div className='nav_Section_login'>
        <h1>Muniqe</h1>
        <button>About us</button>
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
                // value={registerFormData.firstName}
                // onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // value={registerFormData.lastName}
                // onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                // value={registerFormData.email}
                // onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                // value={registerFormData.username}
                // onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="profilePhoto">Profile Photo</label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                // onChange={fileHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                // value={registerFormData.password}
                // onChange={inputHandler}
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