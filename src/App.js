import React, { useState } from "react";
import PersonalDetails from "./personal-details.js/index";
import ProductDetails from "./product-details/";
import { ShoppingDetails} from "./shopping-details";
import "./App.css";

function App() {
  const [billingAddress, setBillingAddress] = useState(
    ShoppingDetails.billingAddress
  );
  const [shippingAddress, setShippingAddress] = useState(
    ShoppingDetails.shippingAddress
  );


  const [finalJson, setFinalJson] = useState(ShoppingDetails);

  const saveData =() => {
    return(
      console.log(finalJson)
    )
  }

  const handleChange = (key, value, type) => {
    type === "billingAddress" &&
    setBillingAddress((prevState) => {
        let billingAddress = Object.assign({}, prevState);
        billingAddress[key] = value;
        return billingAddress;
      });
      type === "shippingAddress" &&
    setShippingAddress((prevState) => {
        let shippingAddress = Object.assign({}, prevState);
        shippingAddress[key] = value;
        return shippingAddress;
      });
    
    setFinalJson({
      billingAddress: billingAddress,
      shippingAddress: shippingAddress,
      
    });
  };


  return (
    <div className="App">
      <div className="personal-container">
        <PersonalDetails
          Addressname="Billing Address"
          shippingDate="Order Date"
          billingAddress={billingAddress}
          handleChange={handleChange}
          fieldName={billingAddress}
        />
        <PersonalDetails
          Addressname="Shipping Address"
          shippingDate="Expected Delivery"
          shippingAddress={shippingAddress}
          handleChange={handleChange}
          fieldName={shippingAddress}
        />
      </div>
      <ProductDetails />
      <button className="save-button" onClick={saveData}>SAVE</button>
    </div>
  );
}

export default App;
