import React from "react";
import "../styles/vendorPanel.css";
import Navbar from "./Navbar";
import ProgressBar from 'react-bootstrap/ProgressBar';

const VendorPanel = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="container1">
        <h1>Vendor Dashboard</h1>
        <div className="dashboard">
          <div className="card">
            <h4>Total Customers</h4>
            <p id="totalCustomers">1027452</p>
          </div>
          <div className="card">
            <h4>Total Orders</h4>
            <p id="totalOrders">1980320</p>
          </div>
          <div className="card">
            <h4>Pending Orders</h4>
            <p id="pendingOrders">76548</p>
          </div>
          <div className="card">
            <h4>Completed Orders</h4>
            <p id="completedOrders">&#x2705;&nbsp;75492</p>
          </div>
          <div className="card">
            <h4>In Progress Orders</h4>
            <p id="inProgressOrders">879776</p>
          </div>
          <div className="card">
            <h4>Cancel</h4>
            <p id="cancel"> &#x274C;&nbsp;879776</p>
          </div>
          <div className="card add_shoes_card">
            <h4>Add shoes</h4>
            <p id="AddShoes">
              <button className="AddShoes_btn">create</button>
            </p>
          </div>
        </div>
        <div className="chart-container">
          <canvas id="monthlyChart" />
        </div>
        <div className="chart-container">
          <canvas id="yearlyChart" />
        </div>
      </div>
    </>
  );
};

export default VendorPanel;
