import React from 'react'; 
import ProductDetailsRow from "./product-details-row"
import './product-details.css'

const ProductDetails = () => {
    return (
        <div>
            <div className="product-headings">
            <h6>Product ID</h6>
            <h6>Product Name</h6>
            <h6>QTY</h6>
            <h6>Unit Price</h6>
            <h6>Total Price</h6>
            <h6>Notes</h6>
            </div>
            <ProductDetailsRow />
        </div>
    )
}

export default ProductDetails;