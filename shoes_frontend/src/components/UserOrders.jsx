import React from "react";
import "../styles/UserOrders.css";
import { useNavigate } from "react-router-dom";
import dummy from '../assets/download.png'

const UserOrders = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/userprofile");
  };

  const products = [
    { name: "Smartphone", price: 599.99, status: "In Stock" },
    { name: "Laptop", price: 999.99, status: "Out of Stock" },
    { name: "Headphones", price: 129.99, status: "In Stock" },
    { name: "Smartwatch", price: 199.99, status: "Low Stock" },
    { name: "Tablet", price: 349.99, status: "In Stock" },
    { name: "Wireless Mouse", price: 29.99, status: "In Stock" },
  ];

  return (
    <div>
      <div className="nav_Section_login">
        <h1>Muniqe</h1>
        <button onClick={redirectToHome}>Back To The Profile</button>
      </div>
      <div class="product-grid" id="productGrid">
        {products.map((prod, index) => {
          return (
            <div className="product-card" key={index}>
              <div class="product-name">${prod.name}</div>
              <div className="shoes_image"><img src={dummy}/></div>
              <div class="product-price">$${prod.price.toFixed(2)}</div>
              <div class="product-status">Status: ${prod.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserOrders;
