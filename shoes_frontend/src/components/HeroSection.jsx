import React from "react";
import "../styles/heroSection.css";
import home_img1 from "../assets/home_shoes1.png";
import home_img from "../assets/home_shoes2.png";
import home_img2 from "../assets/shoes_home2.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero_container">
      <div className="hero-row">
        <div className="hero-col-2 first">
          <motion.img
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="home_shoes_img"
            src={home_img2}
            alt="shoes image"
          />
          {/* <img className="home_shoes_img2" src={home_img1} alt="shoes image" /> */}
        </div>
        <div className="hero-col-2 second">
          <motion.h1 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          >WIN ON AIR</motion.h1>
          <p>
            Meet the next generation of Muniqe Air. Engineered to the exact
            specifications of championship athletes.
          </p>
          <motion.button
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1}}
          className="hero_btn">Shop Muniqe</motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
