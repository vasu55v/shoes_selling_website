import React,{useState,useEffect,useRef, useContext } from 'react'
import Navbar from './Navbar'
import '../styles/allProducts.css'
import {ScrollContext} from  '../Context.jsx'


const Products=[
  { id: 1,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 2,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 3,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 4,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 5,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 6,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 7,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 8,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 9,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 10,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 11,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 12,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 13,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 14,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 15,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 16,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 17,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 18,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 19,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 20,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 21,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 22,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 23,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },
  { id: 24,price:10000, name: 'Running Shoes', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' },

]

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

// const AllProducts = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const scrollUpFunc = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);  

//   return (
//     <div className='all_products_div'>
//       <div className='all_products'>
//         <div className='navbar'>
//           <Navbar />
//         </div>
//         <div className='shoe-card-grid'>
//           {Products.map((item) => (
//             <ShoeCard key={item.id} price={item.price} name={item.name} image={item.image} />
//           ))}
//         </div>
//       </div>

//       {isVisible && (
//         <button className='up-arrow' onClick={scrollUpFunc} aria-label="Scroll to top">
//           &#11014; 
//         </button>
//       )}
//     </div>
//   );
// };

// export default AllProducts;


const Mens = () => {
 
  const context=useContext(ScrollContext);
  const {isVisible,scrollRef,scrollUpFunc}=context;

  return (
    <>
    <Navbar />
    <div className='all_products_div' ref={scrollRef}>
      <div className='all_products'>
        <div className='men_title'>
            <h1>Men's shoes</h1>
            <center><hr /></center>
        </div>
        <div className='shoe-card-grid'>
          {Products.map((item) => (
            <ShoeCard key={item.id} price={item.price} name={item.name} image={item.image} />
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