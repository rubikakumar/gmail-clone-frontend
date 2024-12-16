import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/inbox">
      <FontAwesomeIcon icon={faInbox} /> Inbox
    </Link>
    <Link to="/sent">
      <FontAwesomeIcon icon={faPaperPlane} /> Sent
    </Link>
    <Link to="/trash">
      <FontAwesomeIcon icon={faTrash} /> Trash
    </Link>
  </div>
);

export default Sidebar;
