import React, { useState } from 'react';

const LoginPage = ({ onNext }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      onNext(email);
    } else {
      alert('Please enter your email!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Google1.jpg" alt="Google Logo" className="logo-image" /> {/* Add this line */}
        <h2 className="title">Sign in</h2>
        <p className="subtitle">to continue to Gmail</p>
        <input
          type="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <div className="login-links">
          <a href="#" className="link">
            Forgot email?
          </a>
        </div>
        <p className="test-email">Test email Id: Testuser@gmail.com</p>
        <div className="login-footer">
          <a href="#" className="link">
            Create account
          </a>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;