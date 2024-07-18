import React from 'react'
import '../styles/home.css'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import LatestProducts from './LatestProducts.jsx'
import CategoryCrad from './CategoryCard.jsx'
import ModelSection from './ModelSection.jsx'
import Footer from './Footer.jsx'

const Home = () => {
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