import React, { useState } from 'react';
import { api } from '../services/api';

const ComposeEmail = () => {
  const [email, setEmail] = useState({ to: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/emails', email); 
      alert('Email sent successfully');
      setEmail({ to: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="to" value={email.to} onChange={handleChange} placeholder="To" />
      <input name="subject" value={email.subject} onChange={handleChange} placeholder="Subject" />
      <textarea name="message" value={email.message} onChange={handleChange} placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default ComposeEmail;
