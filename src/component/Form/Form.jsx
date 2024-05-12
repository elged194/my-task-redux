// Form.js
import { useDispatch } from "react-redux";
import FirstName from "./First Name/FirstName";
import LastName from "./Last Name/LastName";
import PhoneNumber from "./Phone Number/PhoneNumber";
import {
  changeFirName,
  changeLasName,
  changePhoNumber,
} from "../../redux/formSlice";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");




  const [selectedCountry, setSelectedCountry] = useState("");





  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSelectedCountry('00')
    dispatch(changeFirName(firstName));
    dispatch(changeLasName(lastName));
    dispatch(changePhoNumber(phoneNumber));

  };

  return (
    <form onSubmit={handleSubmit}>
      <FirstName firstName={firstName} setFirstName={setFirstName} />
      <LastName lastName={lastName} setLastName={setLastName} />
      <PhoneNumber
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
