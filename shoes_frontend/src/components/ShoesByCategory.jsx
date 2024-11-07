import React,{useState,useEffect,useRef,useContext } from 'react'
import {ScrollContext} from  '../Context.jsx'
import Navbar from './Navbar'
import '../styles/allProducts.css'
import api from '../../Api.jsx'
import { useParams } from 'react-router-dom'



const ShoeCard = ({ price, name, image }) => {
  return (
    <div className="shoe-card">
      <img src={image} alt={name} className="shoe-image" />
      <h2 className="shoe-name">{name}</h2>
      <h2 className="shoe-price">${price.toLocaleString()}</h2>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

const ShoesByCategory = () => {
  const context = useContext(ScrollContext);
  const { isVisible, scrollRef, scrollUpFunc } = context;

  const {category}=useParams();
  const [shoesData,setShoesData]=useState([]);

  const cate={category};
  const cateValue=(cate.category)
  cateValue.toUpperCase();
  console.log( cateValue.toUpperCase())

  useEffect(()=>{
   
    api.get('shoes_api/shoes_data/category/'+cateValue+'/')
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
            <h1>{category}</h1>
            <center><hr /></center>
        </div>
        <div className='shoe-card-grid'>
          {shoesData.map((item) => (
            <ShoeCard key={item.id} price={item.price} name={item.shoes_name} image={"http://127.0.0.1:8000/"+item.colors_and_photos[0]?.photo} />
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

export default ShoesByCategory;