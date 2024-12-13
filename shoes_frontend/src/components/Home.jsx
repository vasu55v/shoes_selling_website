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
import Lenis from '@studio-freight/lenis';


const Home = () => {
    // console.log(Cookies.get("vendor_id"))

    useEffect(() => {
      // Initialize Lenis
      const lenis = new Lenis({
        duration: 1.5,   // Adjust scroll duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        smooth: true,    // Enable smooth scroll
      });
  
      // Scroll Update Function
      const onScroll = (time) => {
        lenis.raf(time);
        requestAnimationFrame(onScroll);
      };
  
      requestAnimationFrame(onScroll);
  
      return () => {
        // Cleanup on component unmount
        lenis.destroy();
      };
    }, []);

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