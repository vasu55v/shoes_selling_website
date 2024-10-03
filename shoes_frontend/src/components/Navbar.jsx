import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';


const Navbar = () => {

  const navigate=useNavigate();

  const toggle_function = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };

  const [cookie_is_set, set_cookie_is_set] = useState(null); // Start with null to indicate it's loading
  const [is_Access, set_is_Access] = useState(null); // Same for access check

  useEffect(() => {
    const vendor_id = Cookies.get("vendor_id");
    const access = localStorage.getItem("access");

    if (vendor_id) {
      set_cookie_is_set(true);  // Vendor cookie exists
    } else {
      set_cookie_is_set(false);
    }

    if (access) {
      set_is_Access(true);  // User is authenticated
    } else {
      set_is_Access(false);
    }
  }, []);

  if (is_Access === null || cookie_is_set === null) {
    return null; // Avoid rendering until state is fully updated
  }
  
  const logout=()=>{
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    Cookies.remove('vendor_id'); 
    location.reload();
  }

  return (
    <div className="nav_section">
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Muniqe</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">All products</a>
          </li>
          <li className="nav-item">
            <a href="/men" className="nav-link">Men</a>
          </li>
          <li className="nav-item">
            <a href="/women" className="nav-link">Women</a>
          </li>
          <li className="nav-item">
            <a href="/kids" className="nav-link">Kids</a>
          </li>

          {is_Access ? (
            <>
              <li className="nav-item">
                <a href="/userprofile" className="nav-link">My Profile</a>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="nav-link logout_bttn">Logout</button>
              </li>
            </>
          ) : (
            <>
              {!cookie_is_set ? (
                <>
                <li className="nav-item">
                 <a href="/login" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                 <a href="/register" className="nav-link"><b>SignUp</b></a>
                </li>
              </>
              ):(
                <></>
              )}
              
            </>
          )}

          {cookie_is_set ?(
            <>
              <li className="nav-item">
                <a href="/vendorpanel" className="nav-link">Vendor Panel</a>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="nav-link logout_bttn">Logout</button>
              </li>
            </>
          ): (
              <>
                {/* <li className="nav-item">
                  <a href="/login" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="/register" className="nav-link"><b>SignUp</b></a>
                </li> */}
              </>
            )}

        </ul>

        <div className="cart-icon" onClick={() => navigate('/UserCheckOut')}>
          <a href="#" className="cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p>0</p>
          </a>
        </div>

        <div className="menu-toggle" onClick={toggle_function}>
          <a href="#" className="bars">
            <svg width="30" height="30" viewBox="0 0 100 100">
              <rect className="bar" width="80" height="10" x="10" y="25" rx="5"></rect>
              <rect className="bar" width="80" height="10" x="10" y="45" rx="5"></rect>
              <rect className="bar" width="80" height="10" x="10" y="65" rx="5"></rect>
            </svg>
          </a>
        </div>

      </div>
    </nav>

    <section className="search_section">
      <input type="text" placeholder="Search" />
      <button className="search_btn">Search</button>
    </section>
  </div>
  );
};

export default Navbar;

  
