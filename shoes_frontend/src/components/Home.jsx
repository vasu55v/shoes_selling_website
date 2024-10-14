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