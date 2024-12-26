import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgotEmailPage = () => {
  const [securityKey, setSecurityKey] = useState('');
  const navigate = useNavigate();
const handleNext = () => {
    if (securityKey === '12345') {  
      navigate('/forgot-email-details');  
    } else {
      alert('Invalid security key!');
    }
  };
return (
    <div className="forgot-email-page">
      <h2>Google</h2>
      <h3>Find your email</h3>
      <p>Enter your account security key</p>
         <div>
        <label>Account Security Key: </label>
        <input 
          type="text" 
          value={securityKey} 
          onChange={(e) => setSecurityKey(e.target.value)} 
          placeholder="Enter your security key" 
        />
      </div>

      <div>
        <button onClick={handleNext}>Next</button>
      </div>
   <div>
        <button onClick={() => navigate('/login')}>Back to Login</button>
      </div>
    </div>
  );
};
export default ForgotEmailPage;
