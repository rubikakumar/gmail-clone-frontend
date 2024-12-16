import React from 'react';

const EmailList = ({ emails, onEmailClick }) => (
  <div className="email-list">
    {emails.map((email) => (
      <div key={email.id} onClick={() => onEmailClick(email)}>
        <h4>{email.subject}</h4>
        <p>{email.message}</p>
      </div>
    ))}
  </div>
);

export default EmailList;
