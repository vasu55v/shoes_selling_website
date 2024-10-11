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
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import VendorPanel from './components/VendorPanel';
import NotFound from './components/NotFound';
import UserOrders from './components/UserOrders';
import AddShoes from './components/AddShoes';
import VendorLogin from './components/VendorLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/Women" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/UserCheckOut" element={<UserCheckOut />} />
          <Route path="/UserOrder" element={<UserOrders />} />
          <Route path="/VendorPanel" element={<VendorPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AddShoes" element={<AddShoes />} />
          <Route path="/vendorlogin" element={<VendorLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
