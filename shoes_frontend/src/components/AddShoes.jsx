import React from "react";
import '../styles/AddShoes.css'
const AddShoes = () => {
  return (
    <div>
    <center>
        <h1>Add Shoes</h1>
      <div className="form-container">
        <div className="image-upload-container">
          <div className="image-upload" id="imageUpload">
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              required=""
            />
            <img
              id="previewImage"
              src="/api/placeholder/200/200"
              alt="Upload Image"
            />
          </div>
        </div>
        <div className="form-fields">
          <form action="#" method="post" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required="" className="form_field"/>
            </div>
            <div className="form-group">
              <label htmlFor="product_category">Product Category:</label>
              <select id="product_category" name="product_category" required="" className="form_field">
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" required="" className="form_field">
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="size">Size:</label>
              <select id="size" name="size" required="" className="form_field">
                <option value="UK6">UK6</option>
                <option value="UK7">UK7</option>
                <option value="UK8">UK8</option>
                <option value="UK9">UK9</option>
                <option value="UK10">UK10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                required=""
                className="form_field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required=""
                defaultValue={""}
                className="form_field"
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </center>
    </div>

  );
};

export default AddShoes;
