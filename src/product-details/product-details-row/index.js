import React from 'react'; 
import './product-details.css'

const ProductDetailsRow = () => {
    return (
        <form>
            <input className="form-input" type="number" size="20"/>
            <input className="form-input" type="text" size="40"/>
            <input className="form-input" type="number" size="10"/>
            <input className="form-input" type="number" size="10"/>
            <input className="form-input" type="number" size="10"/>
            <input className="form-input" type="text" size="20"/>
            <input className="form-input" type="DELETE" value="DELETE" size="10"/>
        </form>
    )
}

export default ProductDetailsRow;