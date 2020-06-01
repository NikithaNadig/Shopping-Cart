import React, { useState } from "react";
import { ShoppingDetails } from "../shopping-details";
import "./product-details.css";

const productDetailsHeading = [
  "Product Id",
  "Product Name",
  "QTY",
  "Unit Price",
  "Total Price",
  "Notes"
];
const ProductDetails = () => {
  const [addNewRow, updateAddNewRow] = useState(
    ShoppingDetails.productDetailsRow
  );

  const addNewProduct = () => {
    console.log("addNewRow", addNewRow);
    updateAddNewRow([...addNewRow, {}]);
  };

  const handleDelete = item => {
    addNewRow.splice(item, 1);
    updateAddNewRow([...addNewRow]);
  };

  return (
    <>
      <div className="product-headings-container">
        {productDetailsHeading.map(i => (
          <h6 className="product-headings">{i}</h6>
        ))}
      </div>
        
      {addNewRow.map((item, i) => {
        return (
          <form className="form-container">
            <input type="number" defaultValue={item.productId} />
            <input type="text" defaultValue={item.productName} />
            <input type="number" defaultValue={item.qty} />
            <input type="number" defaultValue={item.unitPrice} />
            <input type="number" defaultValue={item.qty*item.unitPrice} />
            <input type="text" />
            <button
              className="delete-btn"
              onClick={() => {
              handleDelete(i);
              }}> DELETE </button>
          </form>
        );
      })}
      <button className="add-product" onClick={addNewProduct}>ADD PRODUCT</button>
    </>
  );
};

export default ProductDetails;
