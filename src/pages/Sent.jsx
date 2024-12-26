import React, { useState, useEffect } from 'react';
import EmailView from '../components/EmailView'; 

const Sent = () => {
  const [sentEmails, setSentEmails] = useState([]); 
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchSentEmails = async () => {
      try {
        const token = localStorage.getItem('jwtToken'); 
        if (!token) {
          setError('User is not authenticated');
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:6500/api/emails/sent', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch sent emails');
        }

        const data = await response.json();
        setSentEmails(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchSentEmails(); 
  }, []); 

  return (
    <div className="container">
      <div className="email-list">
        <h2>Sent Emails</h2>
        {loading && <p>Loading sent emails...</p>} 
        {error && <p style={{ color: 'red' }}>{error}</p>} 
        {!loading && !error && sentEmails.length === 0 && <p>No sent emails available.</p>}
        {!loading && !error && sentEmails.map((email) => (
          <div
            key={email._id} 
            onClick={() => setSelectedEmail(email)}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
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

export default Sent;
