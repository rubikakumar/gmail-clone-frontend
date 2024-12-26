import React, { useState } from 'react';

const PasswordPage = ({ email, onNext }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    if (password) {
      onNext(password);
    } else {
      alert('Please enter your password!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <img src="/Google1.jpg" alt="Google Logo" className="logo-image" />
        <h2 className="title">Hi Test user</h2>
        <p className="subtitle">{email}</p>
        <p className="email">To continue, first verify it's you</p>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <div>
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="show-password">Show Password</label>
        </div>
        <div className="login-links">
          <a href="#" className="link">
            Forgot password?
          </a>
        </div>
        <p className="test-email">Test email Password: User@123</p>
        <div className="login-footer">
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
