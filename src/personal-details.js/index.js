import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "./personal-details.css";

const PersonalDetails = ({ name, shippingDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
  };
  return (
    <div className="personal-details-container">
      <div className="personal-details personal-details-name">{name}</div>
      <input className="personal-details" type="text" name="fname" placeholder="First name" size="50"/>
      <input className="personal-details" type="text" name="fname" placeholder="Last name" />
      <input className="personal-details" type="text" name="Address Line 1" placeholder="Address Line 1" />
      <input className="personal-details" type="text" name="Address Line 2" placeholder="Address Line 2" />
      <input className="personal-details" type="text" name="City" placeholder="City" />
      <input className="personal-details" type="text" name="State" placeholder="State" />
      <input className="personal-details" type="text" name="ZipCode" placeholder="ZipCode" />
      <input className="personal-details" type="text" name="Country" placeholder="Country" />
      <div>
        <div className="date-picker-container">{shippingDate}</div>
        <DatePicker selected={startDate} onChange={handleChange} icon={<i className="cal-icon"/>}/>
      </div>
    </div>
  );
};

export default PersonalDetails;
