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
    updateAddNewRow([...addNewRow, {}]);
  };

  const handleDelete = itemToBeDeleted => {
    const modifiedItems = addNewRow.filter(
      (item, key) => key !== itemToBeDeleted
    );
    updateAddNewRow(modifiedItems);
  };

  return (
    <>
      <div className="product-headings-container">
        {productDetailsHeading.map(i => (
          <h6 className="product-headings">{i}</h6>
        ))}
      </div>
        
      {addNewRow.map((item, key) => {
        return (
          <div className="form-container" key={item.productId}>
            <input type="number" defaultValue={item.productId} />
            <input type="text" defaultValue={item.productName} />
            <input type="number" defaultValue={item.qty} />
            <input type="number" defaultValue={item.unitPrice} />
            <input type="number" defaultValue={item.qty * item.unitPrice} />
            <input type="text" />
            <button
              className="delete-btn"
              onClick={() => {
                handleDelete(key);
              }}
            >
              {" "}
              DELETE 
            </button>
          </div>
        );
      })}
      <button className="add-product" onClick={addNewProduct}>
        ADD PRODUCT
      </button>
    </>
  );
};

export default ProductDetails;
