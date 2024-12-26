import React, { useState } from 'react';
import EmailList from '../components/EmailList';
import EmailView from '../components/EmailView';

const Trash = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const trashedEmails = [
    { id: 1, subject: 'Old Reminder', message: 'This is an old email that was deleted.' },
    { id: 2, subject: 'Spam Message', message: 'This email was marked as spam and moved to trash.' },
  ];

  return (
    <div className="container">
      <div className="email-list">
        <h2>Trash</h2>
        {trashedEmails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            style={{ cursor: 'pointer' }}
          >
            <h4>{email.subject}</h4>
            <p>{email.message.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
      {selectedEmail && (
        <div className="email-view">
          <EmailView email={selectedEmail} />
        </div>
      )}
    </div>
  );
};

export default Trash;
