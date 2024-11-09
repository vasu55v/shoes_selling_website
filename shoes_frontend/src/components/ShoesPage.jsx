import React, { useState, useEffect } from "react";
import "../styles/ShoesPage.css";
import shoes from "../assets/home_shoes2.png";
import Navbar from "./Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import api from "../../Api.jsx";
import { useParams } from "react-router-dom";

const ShoesPage = () => {
  const [shoesData, setShoesData] = useState([]);
  const [shoesDataImg, setShoesDataImg] = useState([]);
  const [shoesDataColor, setShoesDataColor] = useState([]);
  const { id } = useParams();

  const customerId=localStorage.getItem('userid');
  const [shoesPrice, setShoesPrice] = useState(null);

  useEffect(() => {
    api
      .get("shoes_api/shoes_data/shoe/" + id + "/")
      .then((response) => {
        setShoesPrice(Math.trunc(response.data.shoes[0].price))
        setShoesDataImg(response.data.shoes[0].colors_and_photos[0].photo);
        setShoesDataColor(response.data.shoes[0].colors_and_photos[0].color)
        setShoesData(response.data.shoes[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const AddToCart=()=>{
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('shoes',id);
    formData.append('qty', 1);
    formData.append('price',shoesPrice);

      api.post('shoes_api/customer/order/create/',formData)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <>
      <Navbar />
        <div className="MainShoesContainer">
          <div className="shoesImageContainer">
            <center>
              <img src={'http://127.0.0.1:8000/'+shoesDataImg} height={400}/>
            </center>
          </div>
          <div className="detailShoesContainer">
            <p style={{ color: "red" }}>Sustainable Materials</p>
            <p className="ShoesName">{shoesData.shoes_name}</p>
            <p className="Price">
              <strong>MRP : ₹</strong>{shoesData.price}
            </p>
            <p>
              Inclusive of all taxes
              <br />
              (Also includes all applicable duties)
            </p>
            <button className="AddToCart" onClick={AddToCart}>Add To Cart</button>
            <p className="description">
              {shoesData.description}
            </p>
            <p className="Color">
              <strong>Color:</strong>{shoesDataColor}
            </p>
            <button className="Backbtn">Back</button>
            <ul class="accordion">
              <li>
                <input type="checkbox" name="accordion" id="first" />
                <label for="first">Reviews(16)</label>

                <div class="content">
                  Responsive cushioning provides a balanced ride for everyday
                  runs. Experience energy return with a combination of Cushlon
                  3.0 foam and a full-length Nike Air unit in the midsole. Plus,
                  an elastic midfoot band and a spacious forefoot provide an
                  accommodating, comfortable fit.
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default ShoesPage;
