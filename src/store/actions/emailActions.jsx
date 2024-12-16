export const setInboxEmails = (emails) => ({
    type: 'SET_INBOX_EMAILS',
    payload: emails,
  });
  
  export const setSentEmails = (emails) => ({
    type: 'SET_SENT_EMAILS',
    payload: emails,
  });
  
  export const setTrashEmails = (emails) => ({
    type: 'SET_TRASH_EMAILS',
    payload: emails,
  });
  
  export const deleteEmail = (emailId) => ({
    type: 'DELETE_EMAIL',
    payload: emailId,
  });
  