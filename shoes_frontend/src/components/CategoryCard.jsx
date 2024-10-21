import React from "react";
import "../styles/categoryCard.css";
import boot from  '../assets/boot.png'
import casual from  '../assets/casual.jpg'
import flip from  '../assets/flip.webp'
import formal from  '../assets/formal.webp'
import sendal from  '../assets/sendal.jpg'
import football from  '../assets/football.png'
import sport from  '../assets/sport.webp'


const CategoryData = [
  { id: 1, name: 'All Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 2, name: 'BOOTS', image:boot },
  { id: 3, name: 'CASUALS SHOES',  image: casual },
  { id: 4, name: 'FLIP FLOPS', image: flip },
  { id: 5, name: 'FORMAL SHOES', image: formal},
  { id: 6, name: 'SANDALS & FLOATERS  ',image: sendal },
  { id: 7, name: 'Football', image:football},
  { id: 7, name: 'SPORTS SHOES & SNEAKERS',image: sport },
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
