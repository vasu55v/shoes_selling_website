import React from 'react'
import '../styles/modelSection.css'
import shoes_model from '../assets/shoes_model.jpeg'
import shoes_model2 from '../assets/shoes_model2.jpeg'
import nike_model from '../assets/nike_model2.jpeg'
import nike_model2 from '../assets/nike_model5.jpeg'


const ModelSection = () => {
  return (
    <center>
    <div className='model_section_container'>
        
        <div className='image_container'>
             <img src={shoes_model}  className="img1" alt='image' />
             <img src={shoes_model2} className="img2" alt='image' />
        </div>

        <div className='second_image_container'>
            <div className='inner_second_image_container'>
               <img src={nike_model} className="img3" alt='image' />
               <center><a href='/products'>All product</a></center>
            </div>
               <img src={nike_model2} className="img4" alt='image' />

        </div>
    </div>
    </center>
  )
}

export default ModelSection