import React, { useState } from 'react';
import EmailList from '../components/EmailList';
import EmailView from '../components/EmailView';

const Trash = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const trashEmails = [
    { id: 1, subject: 'Old Newsletter', message: 'This is an old newsletter.' },
    { id: 2, subject: 'Spam Email', message: 'This email has been marked as spam.' },
  ];

  return (
    <div className="trash">
      <EmailList emails={trashEmails} onEmailClick={(email) => setSelectedEmail(email)} />
      {selectedEmail && <EmailView email={selectedEmail} />}
    </div>
  );
};

export default Trash;
