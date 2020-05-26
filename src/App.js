import React from 'react';
import PersonalDetails from './personal-details.js/index';
import ProductDetails from './product-details/'
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="personal-container">
     <PersonalDetails name="Billing Address" shippingDate="Order Date"/>
     <PersonalDetails name="Shipping Address" shippingDate="Expected Delivery"/>
    </div>
     <ProductDetails />
    </div>
  );
}

export default App;
