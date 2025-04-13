import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <div key={i} className="collection-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <div className="price-container">
                <span className="new-price">₹{item.new_price}</span>
                <span className="old-price">₹{item.old_price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
