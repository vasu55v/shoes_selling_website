import React,{useState,useEffect} from "react";
import "../styles/latestProducts.css";
import api from "../../Api";
import { useNavigate } from 'react-router-dom';

const ShoeCard  = ({shoes_id,price,name,image}) => { 
  const navigate = useNavigate();

  const redirectPage=(id)=>{
      navigate('/shoes/'+id+'/')
  }
  return (
    <div className="shoe-card">
      <img src={image} alt={name} className="shoe-image" />
      <h2 className="shoe-name">{name}</h2>
      <h2 className="shoe-name">₹{price}</h2>
      <button className="add-to-cart-btn" onClick={()=>redirectPage(shoes_id)}>View</button>
    </div>
  );
};

const LatestProducts = () => {
      
  const [shoesData,setShoesData]=useState([]);

  useEffect(()=>{
   api.get('shoes_api/shoes_data/men/')
   .then((response)=>{
    console.log(response.data.shoes);
    setShoesData(response.data.shoes);
    console.log(response.data.shoes[0].colors_and_photos[0].photo)
   })
   .catch((error)=>{
    console.log(error)
   })
},[]);

  return (
    <>
    <center><h1 className="latest_text">Latest products</h1></center>
    <div className="shoe-card-grid">
      {shoesData.slice(-8).map((shoe) => (
        <ShoeCard key={shoe.id} shoes_id={shoe.shoes_id} price={shoe.price} name={shoe.shoes_name} image={"http://127.0.0.1:8000/"+shoe.colors_and_photos[0]?.photo} />
      ))}
    </div>
    </>
  );
};

export default LatestProducts;
