import React, { useState } from "react";
import { productDetailsRow } from "../../shopping-details";
import "./product-details-row.css";

const ProductDetailsRow = () => {
  const [productDetails, updatedproductDetails] = useState(productDetailsRow);

  const handleDelete = item => {
    productDetails.splice(item, 1);
    updatedproductDetails([...productDetails])
  };


  return productDetails.map((item, i) => {
    return (
      <>
      <form className="form-container" >
        <input type="number" defaultValue={item.productId} />
        <input type="text" defaultValue={item.productName}  />
        <input type="number" defaultValue={item.qty} />
        <input type="number" defaultValue={item.unitPrice} />
        <input type="number" defaultValue={item.unitPrice * item.qty} />
        <input type="text" />
        <button className="delete-btn" onClick={() =>{handleDelete(i)}}>
          DELETE
        </button>
      </form>
      </>
    );
  });
};

export default ProductDetailsRow;
