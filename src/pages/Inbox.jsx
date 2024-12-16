import React, { useState } from 'react';
import EmailList from '../components/EmailList';
import EmailView from '../components/EmailView';

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    { id: 1, subject: 'Welcome', message: 'Hello and welcome!' },
    { id: 2, subject: 'React Project', message: 'Remember to practice React!' },
  ];

  return (
    <div className="inbox">
      <EmailList emails={emails} onEmailClick={(email) => setSelectedEmail(email)} />
      {selectedEmail && <EmailView email={selectedEmail} />}
    </div>
  );
};

export default Inbox;
