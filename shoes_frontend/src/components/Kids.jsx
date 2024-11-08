import React,{useState,useEffect,useRef,useContext } from 'react'
import {ScrollContext} from  '../Context.jsx'
import Navbar from './Navbar'
import '../styles/allProducts.css'
import api from '../../Api.jsx'
import { useNavigate } from 'react-router-dom';

const ShoeCard = ({ shoes_id,price, name, image }) => {
  const navigate = useNavigate();

  const redirectPage=(id)=>{
      navigate('/shoes/'+id+'/')
  }
  return (
    <div className="shoe-card">
      <img src={image} alt={name} className="shoe-image" />
      <h2 className="shoe-name">{name}</h2>
      <h2 className="shoe-price">${price.toLocaleString()}</h2>
      <button className="add-to-cart-btn" onClick={()=>redirectPage(shoes_id)}>View</button>
    </div>
  );
};

const Mens = () => {
  const context = useContext(ScrollContext);
  const { isVisible, scrollRef, scrollUpFunc } = context;

  const [shoesData,setShoesData]=useState([]);

  useEffect(()=>{
    api.get('shoes_api/shoes_data/kids/')
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
    <Navbar />
    <div className='all_products_div' ref={scrollRef}>
      <div className='all_products'>
        <div className='men_title'>
            <h1>Kid's shoes</h1>
            <center><hr /></center>
        </div>
        <div className='shoe-card-grid'>
          {shoesData.map((item) => (
            <ShoeCard key={item.id} shoes_id={item.shoes_id} price={item.price} name={item.shoes_name} image={"http://127.0.0.1:8000/"+item.colors_and_photos[0]?.photo} />
          ))}
        </div>
      </div>

      {isVisible && (
        <button className='up-arrow' onClick={scrollUpFunc} aria-label="Scroll to top">
          &#11014; 
        </button>
      )}
    </div>
    </>
  );
};

export default Mens;