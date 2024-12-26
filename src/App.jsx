import React, { useState } from 'react';
import Login from './pages/Login';
import PasswordPage from './pages/PasswordPage';
import EmailService from './pages/EmailService';
import ForgotEmailPage from './pages/ForgotEmailPage';
import ForgotEmailDetailsPage from './pages/ForgotEmailDetailsPage';

const App = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

 
  const validEmail = 'Testuser@gmail.com';
  const validPassword = 'User@123';

  const handleNext = (data, nextStep) => {
    if (step === 1) {
      if (data === validEmail) {
        setEmail(data);
        setStep(nextStep);
      } else {
        alert('Invalid email address!');
      }
    } else if (step === 2) {
  
      if (data === validPassword) {
        setStep(nextStep);
      } else {
        alert('Invalid password!');
      }
    } else {

      setStep(nextStep);
    }
  };

  return (
    <div>
      {step === 1 && <Login onNext={(data) => handleNext(data, 2)} />}
      {step === 2 && <PasswordPage email={email} onNext={(data) => handleNext(data, 3)} />}
      {step === 3 && <EmailService />}
      {step === 4 && <ForgotEmailPage onNext={(data) => handleNext(data, 5)} />}
      {step === 5 && <ForgotEmailDetailsPage onNext={(data) => handleNext(data, 6)} />}
    </div>
  );
};

export default App;
