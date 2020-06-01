import React, { useState } from "react";
import ProductDetailsRow from "./product-details-row";
import { productDetailsRow } from "../shopping-details";
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
  const [addNewRow, updateAddNewRow] = useState(productDetailsRow);

  const addNewProduct = () => {
    updateAddNewRow([...addNewRow, {}]);
  };

 
  return (
    <div>
      <div className="product-headings-container">
        {productDetailsHeading.map(i => (
          <h6 className="product-headings">{i}</h6>
        ))}
      </div>
      <ProductDetailsRow />
      <button className="add-product" onClick={addNewProduct}>
        ADD PRODUCT
      </button>
    </div>
  );
};

export default ProductDetails;
