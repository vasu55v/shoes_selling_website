import React from "react";
import "../styles/categoryCard.css";
import boot from  '../assets/boot.png'
import casual from  '../assets/casual.jpg'
import flip from  '../assets/flip.webp'
import formal from  '../assets/formal.webp'
import sendal from  '../assets/sendal.jpg'
import football from  '../assets/football.png'
import sport from  '../assets/sport.webp'
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CategoryData = [
  { id: 1, name: 'BOOTS', image:boot },
  { id: 2, name: 'CASUALS SHOES',  image: casual },
  { id: 3, name: 'FLIP FLOPS', image: flip },
  { id: 4, name: 'FORMAL SHOES', image: formal},
  { id: 5, name: 'SANDALS & FLOATERS  ',image: sendal },
  { id: 6, name: 'Football', image:football},
  { id: 7, name: 'SPORTS SHOES & SNEAKERS',image: sport },
];

const Category  = ({name,image}) => {
  const navigate = useNavigate();

  const redirectPage=(name)=>{
      navigate('ShoesByCategory/'+name)
  }

  return (
    <div className="category-card" id="category-card">
      <img src={image} alt={name} className="category-image" />
      <h2 className="category-name">{name}</h2>
      <button className="add-to-cart-btn" onClick={()=>redirectPage(name)}>View all</button>
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
