import React from 'react'
import '../styles/modelSection.css'
import shoes_model from '../assets/shoes_model.jpeg'
import shoes_model2 from '../assets/shoes_model2.jpeg'
import nike_model from '../assets/nike_model2.jpeg'
import nike_model2 from '../assets/nike_model3.jpeg'


const ModelSection = () => {
  return (
    <div className='model_section_container'>
        
        <div className='image_container'>
             <img src={shoes_model} alt='image' />
             <img src={shoes_model2} alt='image' />
        </div>

        <div className='second_image_container'>
            <div className='inner_second_image_container'>
               <img src={nike_model} alt='image' />
               <a href='#'>All product</a>
               </div>
               <img src={nike_model2} alt='image' />

        </div>
    </div>
  )
}

export default ModelSection