import React,{useState} from "react";
import '../styles/AddShoes.css'
import Navbar from "./Navbar";

const AddShoes = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
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
              <input type="text" id="name" name="name" required="" className="form-field"/>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="product_category">Product Category</label>
                <select id="product_category" name="product_category" required="" className="form-field">
                  <option value="">Select category</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" required="" className="form-field">
                  <option value="">Select gender</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" required="" className="form-field">
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
                rows={4}
                required=""
                className="form-field"
              />
            </div>
            <button type="submit" className="submit-btn">
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