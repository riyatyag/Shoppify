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
        Discover a wide range of clothing for men, women, and kids that combines comfort, style, and durability. Our collection includes everything from trendy outfits to classic essentials, perfect for any occasion. Crafted with care and attention to detail, each piece ensures a perfect fit for all ages. Shop now to find fashionable and practical options that cater to the entire family’s wardrobe needs.
        </p>
        <p>
        Our collection offers stylish and comfortable clothing for men, women, and kids, ensuring every family member looks and feels great. From casual wear to smart attire, we have something for every occasion. With high-quality fabrics and a range of sizes, our pieces provide the perfect blend of fashion and functionality. Explore versatile styles designed to suit all ages and tastes, making dressing up fun and easy for everyone.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
