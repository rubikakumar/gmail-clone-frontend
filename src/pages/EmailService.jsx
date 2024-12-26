import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Inbox from './Inbox';
import Sent from './Sent';
import Trash from './Trash';

const EmailService = () => {
  const [currentPage, setCurrentPage] = useState('Inbox', 'Sent', 'Trash');

  return (
    <div className="email-service">
      <Sidebar />
      <div className="main-content">
        {currentPage === 'Inbox' && <Inbox />}
        {currentPage === 'Sent' && <Sent />}
        {currentPage === 'Trash' && <Trash />}
      </div>
    </div>
  );
};

export default EmailService;
