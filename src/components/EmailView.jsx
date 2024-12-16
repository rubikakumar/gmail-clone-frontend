import React from 'react';

const EmailView = ({ email }) => (
  <div className="email-view">
    <h4>{email.subject}</h4>
    <p>{email.message}</p>
  </div>
);

export default EmailView;
