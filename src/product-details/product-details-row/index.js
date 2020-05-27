import React from 'react'; 
import './product-details-row.css'

const ProductDetailsRow = () => {
    return (
        <form className="form-container">
            <input type="number" />
            <input type="text" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="text" />
            <button className="delete-btn">DELETE</button>
        </form>
    )
}

export default ProductDetailsRow;