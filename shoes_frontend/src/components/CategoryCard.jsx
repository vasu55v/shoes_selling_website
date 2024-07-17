import React from "react";
import "../styles/categoryCard.css";


const CategoryData = [
  { id: 1, name: 'All Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 2, name: 'BOOTS', image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 3, name: 'CASUALS SHOES',  image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 4, name: 'FLIP FLOPS', image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 5, name: 'FORMAL SHOES', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'},
  { id: 6, name: 'SANDALS & FLOATERS  ',image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png' },
  { id: 7, name: 'Football', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png'},
  { id: 7, name: 'SPORTS SHOES & SNEAKERS',image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_409,c_limit/0d8e5265-83c0-460b-843f-b6d3af7f8486/infinityrn-4-road-running-shoes-mLRjcz.png'  },
];

const Category  = ({name,image}) => {
 
  return (
    <div className="category-card" id="category-card">
      <img src={image} alt={name} className="category-image" />
      <h2 className="category-name">{name}</h2>
      <button className="add-to-cart-btn">View all(299)</button>
    </div>
  );
};

const CategoryCard = () => {
  return (
    <>    
    <center><h1 className="latest_text">Product Category</h1></center>
    <div className="scroll_category_div">
    <div className="category-card-grid">
      {CategoryData.map((categories) => (
        <Category key={categories.id} name={categories.name} image={categories.image} />
      ))}
    </div>
    </div>
    </>
  );
};

export default CategoryCard;
