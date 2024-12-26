import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgotEmailDetailsPage = () => {
  const [name, setName] = useState({ firstName: 'user', lastName: 'one' });
  const navigate = useNavigate();
const handleNext = () => {
    
    navigate('/login'); 
  };
return (
    <div className="forgot-email-details-page">
      <h2>Google</h2>
      <h3>What's your name?</h3>
      <p>Enter the name on your Google Account</p>
        <div>
        <label>First Name: </label>
        <button>{name.firstName}</button>
      </div>
      <div>
        <label>Last Name: </label>
        <button>{name.lastName}</button>
      </div>
     <div>
        <h3>Test details</h3>
        <p>First Name: {name.firstName}, Last Name: {name.lastName}</p>
      </div>
    <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default ForgotEmailDetailsPage;
