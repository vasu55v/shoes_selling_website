import React from "react";
import "../styles/ShoesPage.css";
import shoes from "../assets/home_shoes2.png";
import Navbar from "./Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ShoesPage = () => {
  return (
    <>
      <Navbar />
      <div className="MainShoesContainer">
        <div className="shoesImageContainer">
          <center>
          <img src={shoes} />
          </center>
        </div>
        <div className="detailShoesContainer">
          <p style={{ color: "red" }}>Sustainable Materials</p>
          <p className="ShoesName">Nike Winflo 11</p>
          <p className="Price">
            <strong>MRP : ₹</strong> 13,999
          </p>
          <p>
            Inclusive of all taxes
            <br />
            (Also includes all applicable duties)
          </p>
          <button className="AddToCart">Add To Cart</button>
          <p className="description">
            Responsive cushioning provides a balanced ride for everyday runs.
            Experience energy return with a combination of Cushlon 3.0 foam and
            a full-length Nike Air unit in the midsole. Plus, an elastic midfoot
            band and a spacious forefoot provide an accommodating, comfortable
            fit.
          </p>
          <p className="Color">
            <strong>Color:</strong>Nvy Blue
          </p>
          <button className="Backbtn">Back</button>
          <ul class="accordion">
            <li>
              <input type="checkbox" name="accordion" id="first"/>
              <label for="first">Reviews(16)</label>

              <div class="content">
              Responsive cushioning provides a balanced ride for everyday runs.
            Experience energy return with a combination of Cushlon 3.0 foam and
            a full-length Nike Air unit in the midsole. Plus, an elastic midfoot
            band and a spacious forefoot provide an accommodating, comfortable
            fit.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShoesPage;
