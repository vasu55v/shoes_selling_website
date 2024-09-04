import React, { useState,useEffect } from "react";
import "../styles/UserProfile.css";
import Navbar from './Navbar'
import img from "../assets/default.jpg";
import Footer from "./Footer";
// import api from '../Api'
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';


const UserProfile = () => {

  const navigate=useNavigate();


  // const [ProfileData, setProfileData] = useState({
  //   user_id:"",
  //   first_name: "",
  //   last_name: "",
  //   username: "",
  //   email: "",
  //   profile_img: "",
  // });

  // localStorage.setItem('username',ProfileData.username)

  // const inputHandler = (e) => {
  //   setProfileData({
  //     ...ProfileData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const fileChangeHandler = (e) => {
  //   if (e.target.files[0]) {
  //   setProfileData({
  //     ...ProfileData,
  //     [e.target.name]: e.target.files[0],
  //   });
  // }

  // };

  // const VisitorUser_id = localStorage.getItem("visitor_user_id");

  // useEffect(() => {
  //   api.get("/backend_api/VisitorUser/" + VisitorUser_id + "/").then((response) => {
  //     // console.log(response.data);
  //     setProfileData({
  //       user_id:response.data.user.id,
  //       first_name: response.data.user.first_name,
  //       last_name: response.data.user.last_name,
  //       username: response.data.user.username,
  //       email: response.data.user.email,
  //       profile_img: response.data.profile_img,
  //     });
  //   });
  // }, []);

  // const handleSubmit = (e) => {

  //   const formData = new FormData();
  //   formData.append("user",ProfileData.user_id);
  //   if (ProfileData.profile_img instanceof File) {
  //   formData.append("profile_img", ProfileData.profile_img);
  //   }

  //   for (const [key, value] of formData.entries()) {
  //     console.log(key, value);
  //   }

  
  //   api.put("/backend_api/VisitorUser/" + VisitorUser_id + "/Update/", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     toast("Profile updated successfully");
  //     setTimeout(()=>{
  //       if(response.status==200){
  //         location.reload();
  //       }
  //     },5000)
      
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data);
  //     toast.error("Oops something went wrong...!try again")  // Log the full error response
  //   });

    // const formUserData = new FormData();
    // formUserData.append("first_name", ProfileData.first_name);
    // formUserData.append("last_name", ProfileData.last_name);
    // formUserData.append("username", ProfileData.username);
    // formUserData.append("email", ProfileData.email);

    // api
    //   .put("/backend_api/User/" + ProfileData.user_id+ "/", formUserData)
    //   .then(function (res) {
    //     console.log(res);
       
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // };


  return (
    <>        
    <Navbar />
    <div className="main_user_profile">
      {/* <div className="User_profile_navbar">
      </div> */}
      <div className="user_profile_text">
        <p>Your Profile</p>
      </div>
      <div className="outer_user_profile">
        <div className="user_profile">
          <label htmlFor="profile_img" id="profile_image_text">
            Profile image
          </label>
          {/* {
            ProfileData.profile_img !=="" &&
              <p id="profile_img">
              <img src={ProfileData.profile_img} alt="Profile" />
            </p>
          }
          {
            ProfileData.profile_img =="" && */}
              <p id="profile_img">
              <img src={img} alt="Profile" />
            </p>
          {/* } */}
         
          <label htmlFor="img">Image:</label>
          <input
            type="file"
            name="profile_img"
            // onChange={fileChangeHandler}
            id="img"
            className="img"
          />
          <label htmlFor="f_name">First name:</label>
          <input
            type="text"
            name="first_name"
            // onChange={inputHandler}
            // value={ProfileData.first_name}
            placeholder="Enter your first name"
            id="f_name"
            className="f_name"
          />
          <label htmlFor="l_name">Last name:</label>
          <input
            type="text"
            name="last_name"
            // onChange={inputHandler}
            // value={ProfileData.last_name}
            placeholder="Enter your last name"
            id="l_name"
            className="l_name"
          />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            // onChange={inputHandler}
            // value={ProfileData.username}
            placeholder="Enter your username"
            id="username"
            className="username"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            // onChange={inputHandler}
            // value={ProfileData.email}
            placeholder="Enter your email"
            id="email"
            className="email"
          />
          {/* <button className="submit_btn" type="button" onClick={handleSubmit}> */}
          <button className="submit_btn" type="button">
            Submit
          </button>
        </div>
        <div className="user_profile_div_second">
        <p>My Orders</p>
          <button className="check_order_btn" onClick={()=>navigate('/UserOrder')}>
           Check Order status
          </button>
          <br />
          <hr className="hr_box"/>
          <br />
          <p>Account Management</p>
          <button className="logout_btn" onClick={()=>navigate('/Logout')}>
           Log out
          </button>     
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserProfile;