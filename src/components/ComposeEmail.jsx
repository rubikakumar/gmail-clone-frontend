import React, { useState } from 'react';
import { api } from '../services/api';

const ComposeEmail = ({ toggleCompose }) => {
  const [email, setEmail] = useState({ to: '', subject: '', message: '', file: null });
  const [sentEmail, setSentEmail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEmail({ ...email, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('to', email.to);
      formData.append('subject', email.subject);
      formData.append('message', email.message);
      if (email.file) {
        formData.append('file', email.file);
      }

      await api.post('/emails', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Email sent successfully');
      setSentEmail(email);
      setEmail({ to: '', subject: '', message: '', file: null });
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <div className="compose-email-popup">
      <div className="compose-email-container">
        <div className="compose-email-header">
          <h2>New Message</h2>
          <button className="close-btn" onClick={toggleCompose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="compose-field">
            <label htmlFor="to">To:</label>
            <input
              name="to"
              value={email.to}
              onChange={handleChange}
              placeholder="Recipient Email"
              className="compose-input"
            />
          </div>

          <div className="compose-field">
            <label htmlFor="subject">Subject:</label>
            <input
              name="subject"
              value={email.subject}
              onChange={handleChange}
              placeholder="Email Subject"
              className="compose-input"
            />
          </div>

          <div className="compose-field">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={email.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="compose-textarea"
            />
          </div>

          <div className="compose-field">
            <input
              type="file"
              onChange={handleFileChange}
              className="compose-file-input"
            />
          </div>

          <div className="compose-footer">
            <button type="submit" className="send-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComposeEmail;
