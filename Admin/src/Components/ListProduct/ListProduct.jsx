// import React, { useEffect, useState } from 'react'
// import './ListProduct.css'
// import cross_icon from '../../Assets/cart_cross_icon.png'

// const ListProduct = () => {
// const [allproducts, setAllProducts] = useState([]);

// const fetchInfo = async ()=>{
//   await fetch('http://localhost:4001/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
// }

// useEffect(()=>{
//   fetchInfo();
// },[])

// const remove_product = async (id)=>{
//   await fetch('http://localhost:4001/removeproduct',{
//     method:'POST',
//     headers:{
//       Accept:'application/json',
//       'Content-Type':'application/json',
//     },
//     body:JSON.stringify({id:id})
//   })
//    await fetchInfo();
// }


//   return (
//     <div className='list-product'>
//     <h1>All Products List</h1>
//     <div className="listproduct-format-main">
//       <p>Products</p>
//       <p>Title</p>
//       <p>Old Price</p>
//       <p>New Price</p>
//       <p>Cateogory</p>
//       <p>Remove</p>
//     </div>

//     <div className="listproduct-allproducts">
//       <hr />
//       {allproducts.map((product,index)=>{
//  return <><div  key={index} className="listproduct-format-main listproduct-format">

// <img src={product.image}  alt="" className="listproduct-product-icon" />
// <p>{product.name}</p>
// <p>₹{product.old_price}</p>
// <p>₹{product.new_price}</p>
// <p>{product.category}</p>

// <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon'  src={cross_icon} alt="" />

//  </div>
//  <hr />
//  </>
//       })}
//     </div>
//     </div>
//   )
// }

// export default ListProduct


import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../Assets/cart_cross_icon.png';

const BACKEND_URL = "https://shoppify-backend-gofd.onrender.com";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/allproducts`);
      const data = await res.json();
      setAllProducts(data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/removeproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      await fetchInfo();
    } catch (err) {
      console.error("❌ Error removing product:", err);
    }
  };

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <React.Fragment key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>₹{product.old_price}</p>
              <p>₹{product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => remove_product(product.id)}
                className='listproduct-remove-icon'
                src={cross_icon}
                alt="Remove"
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
