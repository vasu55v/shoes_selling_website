import React,{useEffect, useState} from 'react'
import '../styles/home.css'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import LatestProducts from './LatestProducts.jsx'
import CategoryCrad from './CategoryCard.jsx'
import ModelSection from './ModelSection.jsx'
import Footer from './Footer.jsx'
import Cookies from "universal-cookie"
import { jwtDecode } from 'jwt-decode';
import api from '../../Api'


const Home = () => {
    // console.log(Cookies.get("vendor_id"))
    const [customerData,setCustomerData] =useState([]);
    const [UserId,setUserId] =useState("");
    useEffect(()=>{
      api.get('shoes_api/customer/')
      .then((response)=>{
          setCustomerData(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
    
      const token=localStorage.getItem("access");
      if(token){
        const user_id=jwtDecode(token);
        setUserId(user_id.user_id);
        localStorage.setItem("userid:",UserId);

        // if(customerData.includes(UserId)){
        //     console.log("customer id value index:",arr.indexof(UserId));
        // }
       }
                   
    },[])
 

  return (
    <>
    <Navbar />
    <HeroSection />
    <LatestProducts />
    <CategoryCrad />
    <ModelSection />
    <Footer />
    </>
  )
}

export default Home