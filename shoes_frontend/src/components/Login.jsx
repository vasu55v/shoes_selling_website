    import React,{useEffect, useState} from 'react'
    import '../styles/login.css'
    import google from '../assets/google.png'
    import { redirect, useNavigate } from 'react-router-dom'
    import api from '../../Api'
    import { ACCESS_TOKEN,REFRESH_TOKEN } from '../../Constants'
    import { toast } from "react-toastify";
    import { jwtDecode } from 'jwt-decode';

    const Login = () => {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const navigate=useNavigate();
        const redirectToHome=()=>{
            navigate('/')
        }

       

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const res = await api.post('shoes_api/token/', { username, password })
                    localStorage.setItem(ACCESS_TOKEN, res.data.access);
                    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                    navigate("/")
                    console.table(res)
                    console.log("access:",res.access)
                    console.log("refresh:",res.refresh)


                  
                   

            } catch (error) {
                console.log("error:",error)
                toast.error("Please enter correct username or password ",{autoClose:2000})
            } finally {
                // setLoading(false)
                console.log("done......!")
               
            }
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
                    <input type="text" placeholder='Enter your username:'  onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <input type="password" placeholder='Enter password:'  onChange={(e) => setPassword(e.target.value)}/>
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

    export default Login