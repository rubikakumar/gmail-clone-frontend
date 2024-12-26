import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Emails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        console.log('API URL:', process.env.REACT_APP_API_URL);  

        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/emails/inbox`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) return <p>Loading emails...</p>;

  return (
    <div>
      <ul>
        {emails.map(email => (
          <li key={email._id}>
            <p><strong>From:</strong> {email.from}</p>
            <p><strong>Subject:</strong> {email.subject}</p>
            <p><strong>Message:</strong> {email.message}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emails;
