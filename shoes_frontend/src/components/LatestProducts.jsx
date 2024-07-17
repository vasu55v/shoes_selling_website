import React from "react";
import "../styles/latestProducts.css";


const shoeData = [
  { id: 1,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 2,price:10000, name: 'Sneakers', image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 3,price:10000, name: 'Boots',  image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 4,price:10000, name: 'Sandals', image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 5,price:10000, name: 'Loafers', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'},
  { id: 6,price:10000, name: 'High Heels',image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 7,price:10000, name: 'Loafers', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'},
  { id: 7,price:10000, name: 'High Heels',image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png'  },
];

const ShoeCard  = ({price,name,image}) => {
 
  return (
    <div className="shoe-card">
      <img src={image} alt={name} className="shoe-image" />
      <h2 className="shoe-name">{name}</h2>
      <h2 className="shoe-name">${price}</h2>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

const LatestProducts = () => {
  return (
    <>    

    <center><h1 className="latest_text">Latest products</h1></center>
    <div className="shoe-card-grid">
      {shoeData.map((shoe) => (
        <ShoeCard key={shoe.id} price={shoe.price} name={shoe.name} image={shoe.image} />
      ))}
    </div>
    </>
  );
};

export default LatestProducts;