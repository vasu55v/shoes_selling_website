// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Mens from './components/Men';
import Womens from './components/Womens';
import Kids from './components/Kids';
import UserCheckOut from './components/UserCheckOut';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/Women" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/UserCheckOut" element={<UserCheckOut />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
