import React, { useEffect, useState } from "react";
import "../styles/userCheckOut.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../Api";

const UserCheckOut = () => {
  const [orderUserData, setOrderUserData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    api
      .get("shoes_api/customer/" + Cookies.get("customer_id") + "/orderItem/")
      .then((response) => {
        const data = response.data.map((item) => ({
          ...item,
          quantity: 1, // Default quantity
          subTotal: parseFloat(item.shoes.price), // Default subtotal
        }));
        setOrderUserData(data);
        setTotalPrice(data.reduce((total, item) => total + item.subTotal, 0)); // Initial total
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ProdImage = ({ shoesId }) => {
    const [productImage, setProductImage] = useState("");
    useEffect(() => {
      api
        .get("shoes_api/color_photo_shoes/" + shoesId + "/")
        .then((response) => {
          setProductImage(response.data[0]?.photos || "");
        })
        .catch((error) => {
          console.log(error);
        });
    }, [shoesId]);
    return (
      <td>
        <img src={productImage} className="image_checkout" alt="Product" />
      </td>
    );
  };

  const QuantityManager = ({ price, index }) => {
    const [quantity, setQuantity] = useState(orderUserData[index].quantity);

    const updateSubtotal = (newQuantity) => {
      const updatedOrderData = [...orderUserData];
      updatedOrderData[index].quantity = newQuantity;
      updatedOrderData[index].subTotal = newQuantity * price;

      setOrderUserData(updatedOrderData);

      // Recalculate the total price
      const newTotal = updatedOrderData.reduce(
        (total, item) => total + item.subTotal,
        0
      );
      setTotalPrice(newTotal);
    };

    const incrementQty = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateSubtotal(newQuantity);
    };

    const decrementQty = () => {
      const newQuantity = quantity > 1 ? quantity - 1 : 1;
      setQuantity(newQuantity);
      updateSubtotal(newQuantity);
    };

    return (
      <div className="quantity-controls">
        <button className="qty-button" onClick={decrementQty}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="qty-button" onClick={incrementQty}>
          +
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="nav_Section_login">
        <h1>Muniqe</h1>
        <button onClick={redirectToHome}>Home</button>
      </div>
      <hr className="etr_hr" />
      <h1 className="text_checkout">CheckOut</h1>
      <div className="userCheckOutContainer">
        <div className="second_container">
          <div className="Order_summery">
            <h1>ORDER Summary</h1>
            {orderUserData && (
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>SubTotal</th>
                  </tr>
                </thead>
                <tbody>
                  {orderUserData.map((item, index) => (
                    <tr key={item.shoes.id}>
                      <ProdImage shoesId={item.shoes.id} />
                      <td>{item.shoes.name}</td>
                      <td>${parseFloat(item.shoes.price).toFixed(2)}</td>
                      <td>
                        <QuantityManager
                          price={parseFloat(item.shoes.price)}
                          index={index}
                        />
                      </td>
                      <td>${item.subTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <hr />
                  <tr className="table_total">
                    <td colSpan={4}>Total</td>
                    <td>${totalPrice.toFixed(2)}</td>
                  </tr>
                  <hr />
                </tfoot>
              </table>
            )}
          </div>
        </div>
        <div class="con">
          <center>
            <h2>Shipping Address</h2>
          </center>
          <form className="address_form">
            {/* <div class="form-group">
                <label for="firstName">First Name</label>
                <input className="input_field" type="text" id="firstName" name="firstName" required/>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input className="input_field" type="text" id="lastName" name="lastName" required/>
            </div> 
            <div class="form-group">
                <label for="streetAddress">Street Address</label>
                <input className="input_field" type="text" id="streetAddress" name="streetAddress" required/>
            </div>
            <div class="form-group">
                <label for="building">Building / Home / Apartment</label>
                <input className="input_field" type="text" id="building" name="building"/>
            </div>
            */}
            <div class="form-group">
              <label for="address">Address</label>
              <textarea id="address" name="address"></textarea>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input
                className="input_field"
                type="text"
                id="city"
                name="city"
                required
              />
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input
                className="input_field"
                type="text"
                id="state"
                name="state"
                required
              />
            </div>
            <div class="form-group">
              <label for="zipCode">ZIP Code</label>
              <input
                className="input_field"
                type="text"
                id="zipCode"
                name="zipCode"
                required
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input
                className="input_field"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
              />
            </div>
            <div class="form-group">
              <input className="input_field" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserCheckOut;
