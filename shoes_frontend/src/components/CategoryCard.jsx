import React from 'react'
import '../styles/categoryCard.css'

const CategoryCrad = () => {
  return (
    <div className="category_container">
      <div className="category_title">
        <h1>Category</h1>
        <center>
          <hr />
        </center>
      </div>
      <div className="category_card_container">
        <div className="category_card">
          <p className="category_card_p">Category name</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />

          <button>
            <a href="#" class="btn22">
              <span class="spn22">View all product</span>
            </a>
          </button>
        </div>

        <div className="category_card">
          <p className="category_card_p">Category name</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />

          <button>
            <a href="#" class="btn22">
              <span class="spn22">View all product</span>
            </a>
          </button>
        </div>

        <div className="category_card">
          <p className="category_card_p">Category name</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
           <button>
            <a href="#" class="btn22">
              <span class="spn22">View all product</span>
            </a>
          </button>
        </div>

        <div className="category_card">
          <p className="category_card_p">Category name</p>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt="shoes image"
          />
           <button>
            <a href="#" class="btn22">
              <span class="spn22">View all product</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCrad