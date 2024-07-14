import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const toggle_function = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };

  return (
    <div className="nav_section">
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Muniqe</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Category &#129083;
            </a>
            <div className="dropdown-content">
              <a href="#">All Shoes</a>
              <a href="#">Newest Sneakers</a>
              <a href="#">Jordan</a>
              <a href="#">Running</a>
              <a href="#">Gym and Training</a>
              <a href="#">Basketball</a>
              <a href="#">Football</a>
              <a href="#">Sandals and Slides</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Kids
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div classname="cart-icon">
          <a href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cart"
              color="#000"
            />
          </a>
        </div>
        <div classname="menu-toggle" onClick={() => toggle_function()}>
          <a href="#">
            <FontAwesomeIcon icon={faBars} className="bars" color="#000" />
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
