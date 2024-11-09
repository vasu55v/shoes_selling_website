import React,{useState,useEffect,useRef,useContext } from 'react'
import {ScrollContext} from  '../Context.jsx'
import Navbar from './Navbar'
import '../styles/allProducts.css'
import api from '../../Api.jsx'
import { useParams } from 'react-router-dom'
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
      <button className="add-to-cart-btn" onClick={()=>redirectPage(shoes_id)}>view</button>
    </div>
  );
};

const ShoesByCategory = () => {
  const context = useContext(ScrollContext);
  const { isVisible, scrollRef, scrollUpFunc } = context;

  const {category}=useParams();
  const [shoesData,setShoesData]=useState([]);
  const [shoesDataCount,setShoesDataCount]=useState([]);

  const cate={category};
  const cateValue=(cate.category)

  useEffect(()=>{
   
    api.get('shoes_api/shoes_data/category/'+cateValue.toUpperCase()+'/')
    .then((response)=>{
        setShoesDataCount(response.data.count);
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
            <h1>{category.toUpperCase()}</h1>
            <p>Total {category} ({shoesDataCount})</p>
            <center><hr /></center>
        </div>
        <div className='shoe-card-grid'>
          {shoesData.map((item) => (
            <ShoeCard key={item.id} shoes_id={item.shoes_id} price={item.price} name={item.shoes_name} image={"http://127.0.0.1:8000/"+item.colors_and_photos[0]?.photo} />
          ))}
          {shoesData.length == 0 && <center><p style={{color:"red"}}>No Data for {category}</p></center>}
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