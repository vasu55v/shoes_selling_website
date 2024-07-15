import React from 'react'
import '../styles/home.css'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import LatestProduct from './LatestProduct.jsx'
import CategoryCrad from './CategoryCard.jsx'

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <LatestProduct />
    <CategoryCrad />
    </>
  )
}

export default Home