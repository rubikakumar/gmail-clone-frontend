import React, { useState } from 'react';
import EmailList from '../components/EmailList';
import EmailView from '../components/EmailView';

const Sent = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const sentEmails = [
    { id: 1, subject: 'Project Update', message: 'Here is the project update.' },
    { id: 2, subject: 'Meeting Notes', message: 'Summary of the recent meeting.' },
  ];

  return (
    <div className="sent">
      <EmailList emails={sentEmails} onEmailClick={(email) => setSelectedEmail(email)} />
      {selectedEmail && <EmailView email={selectedEmail} />}
    </div>
  );
};

export default Sent;
