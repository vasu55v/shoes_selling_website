import React,{useState} from "react";
import '../styles/AddShoes.css'
import Navbar from "./Navbar";
import  Cookies  from 'js-cookie';
import api from '../../Api'

const AddShoes = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const [shoesData, setShoesData] = useState({
    name: '',
    product_category: '',
    gender: '',
    size: '',
    price: '',
    description: '',
    image: null,
    shoes_color: '', // This will be used for color_name in Color_And_Photos
  });


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setShoesData({
        ...shoesData,
        image: file  // Update shoesData.image with the file
      });
    }
  };

  const handelInput=(e)=>{
    setShoesData({
      ...shoesData,
      [e.target.name]:e.target.value,
    })
  }

 

  const submitHandler = async (e) => {
    e.preventDefault();
    if (shoesData.name !="" ||shoesData.product_category !="" ||shoesData.gender !="" || 
     shoesData.size !="" ||shoesData.price !="" ||shoesData.image !="" ||shoesData.shoes_color !="") {
      try {
        // First, create the Shoes record
        const shoesFormData = new FormData();
        shoesFormData.append('name', shoesData.name);
        shoesFormData.append('product_category', shoesData.product_category);
        shoesFormData.append('gender', shoesData.gender);
        shoesFormData.append('size', shoesData.size);
        if (!isNaN(parseFloat(shoesData.price))) {
        shoesFormData.append('price', shoesData.price);
        }else{
          alert('Please enter a valid price');
        }
        shoesFormData.append('description', shoesData.description);
    
        const shoesResponse = await api.post('shoes_api/shoes_create/', shoesFormData);
        const createdShoesId = shoesResponse.data.id; // Assuming the API returns the created shoes ID
        
        // Then, create the Color_And_Photos record with the shoes ID
        const colorPhotoFormData = new FormData();
        colorPhotoFormData.append('shoes', createdShoesId); // Add the shoes ID
        colorPhotoFormData.append('color_name', shoesData.shoes_color); // Changed from 'shoes_color' to match model
        colorPhotoFormData.append('photos', shoesData.image);
    
        const colorPhotoResponse = await api.post(
          'shoes_api/color_photo_create/',
          colorPhotoFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
    
        // Handle successful submission
        alert('Shoes and color details added successfully!');
        
        // Reset form
        setShoesData({
          name: '',
          product_category: '',
          gender: '',
          size: '',
          price: '',
          description: '',
          image: null,
          shoes_color: '',
        });
        setSelectedImage(null);
    
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error adding shoes. Please try again.');
      }
  }
  
  
    
   
  };

  return (
    <>
    <Navbar />
    <div className="add-shoes-container">
      <h1>Add New Shoes</h1>
      <div className="form-container">
      <div className="image-upload-container">
          <label htmlFor="fileInput" className="image-upload">
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              name="image"
              accept="image/*"
              className="file-input"
            />
            {selectedImage ? (
              <img src={selectedImage} alt="Selected shoe" className="preview-image" />
            ) : (
              <div className="upload-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <line x1="16" y1="5" x2="22" y2="5"></line>
                  <line x1="19" y1="2" x2="19" y2="8"></line>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                <p>Click to upload image</p>
              </div>
            )}
          </label>
        </div>
        <div className="form-fields">
          <form action="#" method="post" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" onChange={handelInput} value={shoesData.name} required="" className="form-field"/>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="product_category">Product Category</label>
                <select id="product_category" name="product_category"  onChange={handelInput} value={shoesData.product_category} required="" className="form-field">
                  <option value="">Select category</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" value={shoesData.gender} onChange={handelInput} name="gender" required="" className="form-field">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select id="size"value={shoesData.size} onChange={handelInput} name="size" required="" className="form-field">
                  <option value="">Select size</option>
                  <option value="UK6">UK 6</option>
                  <option value="UK7">UK 7</option>
                  <option value="UK8">UK 8</option>
                  <option value="UK9">UK 9</option>
                  <option value="UK10">UK 10</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={handelInput}
                  value={shoesData.price}
                  step="0.01"
                  required=""
                  className="form-field"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shoes_color">Shoes Color</label>
                <input
                  type="text"
                  id="shoes_color"
                  onChange={handelInput}
                  name="shoes_color"
                  value={shoesData.shoes_color}
                  step="0.01"
                  required=""
                  className="form-field"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                onChange={handelInput}
                value={shoesData.description}
                rows={4}
                required=""
                className="form-field"
              />
            </div>
            <button type="submit" className="submit-btn" onClick={submitHandler}>
              Add Shoes
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddShoes;