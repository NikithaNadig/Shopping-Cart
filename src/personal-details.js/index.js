import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./personal-details.css";

const PersonalDetails = ({
  Addressname,
  shippingDate,
  billingAddress,
  shippingAddress,
  handleChange,
  fieldName
}) => {
  const [orderedDate, setOrderedDate] = useState(new Date());
  const [expectedDate, setExpectedDate] = useState("");

  const RegexAddr = RegExp(/[A-Za-z0-9'.\-\s,]/);
  const RegexZip = RegExp(/^\d{1,5}$/);

  const handleFieldChange = (e, key) => {
    const { name, value } = e.target;
    const updateDom =document.getElementById(name);

    switch (name) {
      case "last-name":
          if(typeof updateDom !== 'undefined' && updateDom !== null) {
        value.length < 7
          ? (updateDom.innerHTML = "Last name should contain atleast 7 letters")
          : (updateDom.innerHTML = "");
          }
        break;

      case "state":
        value === ""
          ? (updateDom.innerHTML = "This feild cannot be empty")
          : (updateDom.innerHTML = "");
        break;
      case "zip-code":
        RegexZip.test(value)
          ? (updateDom.innerHTML = "Five-digit Zip Code.")
          : (updateDom.innerHTML = "");

        break;
      case "adddress 1":
        RegexAddr.test(value)
          ? (updateDom.innerHTML = "No special characters allowed")
          : (updateDom.innerHTML = "");
        break;
      default:
        break;
    }
    handleChange(key, e.target.value, fieldName.type);
  };
  return (
    <div className="personal-details-container">
      <div className="personal-details personal-details-name">
        {Addressname}
      </div>
      {Addressname === "Billing Address" &&
        Object.keys(billingAddress)
          .slice(0, 8)
          .map(key => {
            return (
              <>
                <input
                  type="text"
                  defaultValue={billingAddress[key]}
                  className="personal-details"
                  size="40"
                  onChange={e => handleFieldChange(e, key)}
                  name={key}
                />
              </>
            );
          })}
      {Addressname === "Shipping Address" &&
        Object.keys(shippingAddress)
          .slice(0, 8)
          .map(key => (
            <input
              type="text"
              defaultValue={shippingAddress[key]}
              className="personal-details"
              size="40"
              onChange={e => handleFieldChange(e, key)}
              name={key}
            />
          ))}
      <div>
        <div className="date-picker-container">{shippingDate}</div>
        {shippingDate === "Order Date" ? (
          <DatePicker
            selected={orderedDate}
            onChange={date => setOrderedDate(date)}
            placeholderText="Date"
          />
        ) : (
          <DatePicker
            selected={expectedDate}
            onChange={date => setExpectedDate(date)}
            placeholderText="Date"
          />
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
