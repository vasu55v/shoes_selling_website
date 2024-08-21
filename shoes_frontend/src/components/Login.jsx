import React from 'react'
import '../styles/login.css'
import google from '../assets/google.png'

const Login = () => {
  return (
    <div>
        <div className='nav_Section_login'>
        <h1>Muniqe</h1>
        <button>About us</button>
        </div>
        <div className='middle_text'>
            Start exploring unique/rare <br />Shoes with <span>Muniqe</span>
        </div>
        <div className='outer_login_container'>
        <div className='login_container'>
            <div className='login_with_google'>
                <img src={google}/>
                <p>Login With Google</p>
            </div>
            <div className='email_password'>
                <input type="email" placeholder='Enter your email:'/>
                <br />
                <input type="password" placeholder='Enter password:'/>
                <br />
                <button>Continue</button>
            </div>
            <div className='else_container'>
            <p><u>or</u></p>
            <a href='' className='link_a'>Forget password</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login