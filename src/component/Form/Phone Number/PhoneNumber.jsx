// PhoneNumber.js
import React, { useEffect } from "react";

const PhoneNumber = ({ setPhoneNumber, phoneNumber ,selectedCountry , setSelectedCountry}) => {

  useEffect(() => {
    setPhoneNumber((prevFirstName) => {
      // Remove old country code if exists
      const countryCodeRemoved = prevFirstName.substring(4);
      // Return the new value with the selected country code
      return selectedCountry + countryCodeRemoved;
    });
  }, [selectedCountry, setPhoneNumber]);

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      <label>Phone Number:</label>
      <input type="text" value={phoneNumber} onChange={handleChange} />

      <select value={selectedCountry} onChange={handleSelectChange}>
        <option value="">..</option>
        <option value="+02">Egypt</option>
        <option value="+001">Palestine</option>
        <option value="+099">Saudi Arabia</option>
      </select>
    </div>
  );
};

export default PhoneNumber;
