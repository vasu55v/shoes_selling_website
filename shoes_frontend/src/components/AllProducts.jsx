import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollContext } from '../Context';
import Navbar from './Navbar';
import api from '../../Api';
import '../styles/allProducts.css';

const ShoeCard = ({ shoes_id, price, name, image }) => {
  const navigate = useNavigate();
  
  const redirectPage = (id) => {
    navigate('/shoes/' + id + '/');
  };
  
  return (
    <div className="shoe-card">
      <img src={image} alt={name} className="shoe-image" />
      <h2 className="shoe-name">{name}</h2>
      <h2 className="shoe-price">₹{price.toLocaleString()}</h2>
      <button 
        className="add-to-cart-btn" 
        onClick={() => redirectPage(shoes_id)}
      >
        View
      </button>
    </div>
  );
};

const AllProducts = () => {
  const context = useContext(ScrollContext);
  const { isVisible, scrollRef, scrollUpFunc } = context;
  
  const [shoesData, setShoesData] = useState([]);
  const [reachedEnd, setReachedEnd] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    fetchShoes();
  }, []);

  const fetchShoes = async () => {
    try {
      const response = await api.get('shoes_api/shoes_data/');
      console.log(response.data.shoes);
      setShoesData(response.data.shoes);
    } catch (error) {
      console.error('Error fetching shoes:', error);
    }
  };

  // Check if user has scrolled to bottom
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !reachedEnd) {
      setReachedEnd(true);
    }
  };

  // Add scroll event listener to the list container
  useEffect(() => {
    const listContainer = listRef.current;
    if (listContainer) {
      listContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (listContainer) {
        listContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="all_products_div" ref={scrollRef}>
      <div className="all_products">
        <div className="navbar">
          <Navbar />
        </div>
        <div 
          className="shoe-card-grid" 
          ref={listRef}
          style={{ 
            overflowY: 'auto', 
            maxHeight: 'calc(100vh - 100px)',  // Adjust based on your navbar height
            paddingBottom: '20px'
          }}
        >
          {shoesData.map((item) => (
            <ShoeCard
              key={item.shoes_id}
              shoes_id={item.shoes_id}
              price={item.price}
              name={item.shoes_name}
              image={`http://127.0.0.1:8000/${item.colors_and_photos[0]?.photo}`}
            />
          ))}
          
          {reachedEnd && (
            <div 
              className="end-message"
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                margin: '20px 0',
                fontWeight: 'bold',
                color: '#666'
              }}
            >
              You've reached the end of the list! 🛍️
            </div>
          )}
        </div>
      </div>
      
      {isVisible && (
        <button 
          className="up-arrow" 
          onClick={scrollUpFunc} 
          aria-label="Scroll to top"
        >
          &#11014;
        </button>
      )}
    </div>
  );
};

export default AllProducts;