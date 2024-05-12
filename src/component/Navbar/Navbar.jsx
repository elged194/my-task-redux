// Navbar.js
import React from 'react';
import {  useSelector } from 'react-redux';


const Navbar = () => {
  const {showFirstName , showLastName , showPhoneNumber } = useSelector((state) => state.counter)

  return (
    <nav>
      <ul>
        <li>First Name: {showFirstName}</li>
        <li>Last Name: {showLastName}</li>
        <li>Phone Number: {showPhoneNumber}</li>
      </ul>
    </nav>
  );
};



export default Navbar;
