import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
        Our diverse clothing collection caters to all ages and styles, offering the perfect balance of comfort and fashion. From laid-back casuals to smart essentials, each piece is crafted with care and quality. Designed to suit every individual’s unique style, it’s all about looking and feeling great. Perfect for any occasion, our clothing is here to elevate your wardrobe. 
        </p>
        <p>
        Step into style with our versatile clothing line, made for men, women, and kids alike. With a focus on comfort, durability, and contemporary trends, every piece is designed to fit seamlessly into your everyday life. Whether for work, play, or anything in between, our collection delivers on both fashion and function. Embrace timeless designs for every wardrobe.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;