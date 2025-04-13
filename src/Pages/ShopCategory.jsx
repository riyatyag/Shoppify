import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter((item) => item.category === category);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="Shop Category Banner" />
             <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {filteredProducts.length > 12 && (
        <div className="shopcategory-loadmore">Explore More</div>
      )}
    </div>
  );
};

export default ShopCategory;
