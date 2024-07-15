import React from "react";
import "../styles/latestProduct.css";

const LatestProduct = () => {
  return (
    <div className="latest_product_container">
      <div className="latest_title">
        <h1>Latest Products</h1>
        <center>
          <hr />
        </center>
      </div>
      <div className="latest_product_card_container">
        <div className="card">
          <p className="card_p">shoes title with max length</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
          <button>
            <a href="#" class="btn2">
              <span class="spn2">Add to cart</span>
            </a>
          </button>
        </div>

        <div className="card">
          <p className="card_p">shoes title with max length</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
          <button>
            <a href="#" class="btn2">
              <span class="spn2">Add to cart</span>
            </a>
          </button>
        </div>

        <div className="card">
          <p className="card_p">shoes title with max length</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
          <button>
            <a href="#" class="btn2">
              <span class="spn2">Add to cart</span>
            </a>
          </button>
        </div>

        <div className="card">
          <p className="card_p">shoes title with max length</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
          <button>
            <a href="#" class="btn2">
              <span class="spn2">Add to cart</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
