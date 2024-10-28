import React,{useState,useEffect,useRef,useContext } from 'react'
import {ScrollContext} from  '../Context.jsx'
import Navbar from './Navbar'
import '../styles/allProducts.css'
import api from '../../Api.jsx'

// const Products=[
//   { id: 1,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 2,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 3,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 4,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 5,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 6,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 7,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 8,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 9,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 10,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 11,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 12,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 13,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 14,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 15,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 16,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 17,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 18,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 19,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 20,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 21,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 22,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 23,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
//   { id: 24,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },

// ]

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
            <ShoeCard key={item.id} price={item.price} name={item.name} image={"http://127.0.0.1:8000/"+item.colors_and_photos[0]?.photo} />
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