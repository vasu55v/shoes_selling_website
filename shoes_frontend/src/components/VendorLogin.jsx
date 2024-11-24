import React,{useState} from 'react'
import '../styles/login.css'
import google from '../assets/google.png'
import { redirect, useNavigate } from 'react-router-dom'
import api from '../../Api'
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../../Constants'
import {toast } from "react-toastify";
import  Cookies  from 'js-cookie';
import "@fortawesome/fontawesome-free/css/all.min.css";

const VendorLogin = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    const navigate=useNavigate();
    const redirectToHome=()=>{
        navigate('/')
    }

    const [LoginFormData,setLoginFormData]=useState({
        "username":"",
        "password":""
      });           
    
    const inputHandler=(e)=>{
      setLoginFormData({
        ...LoginFormData,
        [e.target.name]:e.target.value,
      })
    };

    const handleSubmit = async (e) => {
        const formData =new FormData();
          formData.append('username',LoginFormData.username); 
          formData.append('password',LoginFormData.password); 
          api.post('shoes_api/vendor/login/',formData)
            .then((response)=>{
              console.log(response.data);
              if(response.data.bool == true){
                setLoginFormData({
                    username:"",
                    password:"",
                  });
                  Cookies.set("vendor_id",response.data.vendor_user_id,{expires: 7}) // Expires in 7 days
                  navigate('/vendorpanel')
                }
                if(response.data.bool==false){
                  toast.error("You are not a vendor please login as customer...!",{autoClose:2000})
                }
            })
            .catch((error)=>{
              toast.error("You are not a vendor please login as customer...!",{autoClose:2000})
              console.log(error);
            })              
    };


  return (
    <div>
        <div className='nav_Section_login'>
        <h1>Muniqe</h1>
        <button onClick={redirectToHome}>Home</button>
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
            <center><u>or</u></center>
            <div className='email_password'>
                <input type="text" placeholder='Enter your username:' name='username' value={LoginFormData.username} onChange={inputHandler}/>
                <br />
                <input type="password" placeholder='Enter password:' name='password' value={LoginFormData.password} onChange={inputHandler}/>
                <br />
                <button type='submit' onClick={handleSubmit}>Continue</button>
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

export default VendorLogin