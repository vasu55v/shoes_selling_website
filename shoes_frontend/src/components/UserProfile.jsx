import React, { useState, useEffect } from "react";
import "../styles/UserProfile.css";
import Navbar from "./Navbar";
import img from "../assets/default.jpg";
import Footer from "./Footer";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const UserProfile = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);
  const [UserId, setUserId] = useState("");
  const [CustomerId, setCustomerId] = useState("");
  const [newImageSelected, setNewImageSelected] = useState(false);

  useEffect(() => {
    api
      .get("shoes_api/customer/")
      .then((response) => {
        setCustomerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      const user_id = jwtDecode(token);
      setUserId(user_id.user_id);
      localStorage.setItem("userid:", user_id.user_id);
      console.log(user_id.user_id);
      const UserData = customerData.find((obj) => obj.user === user_id.user_id);
      if (UserData) {
        console.log("userdata:", UserData.id);
        setCustomerId(UserData.id);
      } else {
        console.log("User not found in customerData");
      }
    }
  }, [customerData]);

  const [ProfileData, setProfileData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    address: "",
    profile_img: null,
    mobile_number: "",
  });

  const inputHandler = (e) => {
    setProfileData({
      ...ProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
    setProfileData({
      ...ProfileData,
      [e.target.name]: e.target.files[0],
    });
    }
    setNewImageSelected(true);

  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userid");
    Cookies.remove("vendor_id");
    Cookies.remove("Customer_id");
    navigate("/");
    location.reload();
  };

  useEffect(() => {
    if (CustomerId) {
      api
        .get("shoes_api/customer/" + CustomerId + "/")
        .then((response) => {
          console.log("response data:", response.data);
          console.log("userprofile:",response.data.profile_photo)
          setProfileData({
            user_id: response.data.user.id,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
            username: response.data.user.username,
            email: response.data.user.email,
            profile_img: response.data.profile_photo,
            address: response.data.address,
            mobile_number: response.data.mobile_number,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [CustomerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Form data for the user fields
    const formUserData = new FormData();
    formUserData.append("first_name", ProfileData.first_name);
    formUserData.append("last_name", ProfileData.last_name);
    formUserData.append("username", ProfileData.username);
    formUserData.append("email", ProfileData.email);
  
    // API call to update the user details
    api
      .put("/shoes_api/user/" + UserId + "/", formUserData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  
    // Form data for the customer fields
    const formData = new FormData();
    formData.append("user", UserId);
    formData.append("mobile_number", ProfileData.mobile_number);
    formData.append("address", ProfileData.address);
  
    // Append file only if a new image is selected
    if (newImageSelected && ProfileData.profile_img instanceof File) {
      formData.append("profile_photo", ProfileData.profile_img); // Append the file
    } else if (!newImageSelected && ProfileData.profile_img) {
    // You might want to send it to the backend as part of the data, if required.
      formData.append("profile_photo", ProfileData.profile_img);
    }
  
    // API call to update the customer details
    api
      .put("/shoes_api/customer/" + CustomerId + "/update/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        toast("Profile updated successfully", { autoClose: 2000 });
        setTimeout(() => {
          if (response.status === 200) {
            location.reload();
          }
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response?.data);
        toast.error("Oops something went wrong...! Try again", {
          autoClose: 2000,
        });
      });
  };
  

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
            <label htmlFor="profile_photo" id="profile_image_text">
              Profile image
            </label>
            <p id="profile_img">
              <img
                src={
                  ProfileData.profile_img ? ProfileData.profile_img : img
                }
                alt="Profile"
              />
            </p>

            <label htmlFor="profile_img">Image:</label>
            <input
              type="file"
              name="profile_img"
              onChange={fileChangeHandler}
              id="profile_img"
              className="img"
            />

            <label htmlFor="f_name">First name:</label>
            <input
              type="text"
              name="first_name"
              onChange={inputHandler}
              value={ProfileData.first_name}
              placeholder="Enter your first name"
              id="f_name"
              className="f_name"
            />
            <label htmlFor="l_name">Last name:</label>
            <input
              type="text"
              name="last_name"
              onChange={inputHandler}
              value={ProfileData.last_name}
              placeholder="Enter your last name"
              id="l_name"
              className="l_name"
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              onChange={inputHandler}
              value={ProfileData.username}
              placeholder="Enter your username"
              id="username"
              className="username"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={inputHandler}
              value={ProfileData.email}
              placeholder="Enter your email"
              id="email"
              className="email"
            />
            <label htmlFor="mobile_number">Contact Number:</label>
            <input
              type="number"
              name="mobile_number"
              onChange={inputHandler}
              value={ProfileData.mobile_number}
              placeholder="Enter your mobile_number"
              id="mobile_number"
              className="mobile_number"
            />
            <label htmlFor="f_name">Address:</label>
            <textarea
              name="address"
              onChange={inputHandler}
              value={ProfileData.address}
              id="address"
              className="address"
            />
            <button className="submit_btn" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="user_profile_div_second">
            <p>My Orders</p>
            <button
              className="check_order_btn"
              onClick={() => navigate("/UserOrder")}
            >
              Check Order status
            </button>
            <br />
            <hr className="hr_box" />
            <br />
            <p>Account Management</p>
            <button className="logout_btn" onClick={logout}>
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
