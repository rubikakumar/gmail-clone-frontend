import React from 'react';

const EmailList = ({ emails, onEmailClick }) => (
  <div className="email-list">
    {emails.map((email) => (
      <div
        key={email.id}
        onClick={() => onEmailClick(email)}
        style={{ cursor: 'pointer', padding: '12px', borderBottom: '1px solid #e0e0e0' }}
      >
        <h4>{email.subject}</h4>
        <p>{email.message.substring(0, 50)}...</p>
      </div>
    ))}
  </div>
);
export default EmailList;
