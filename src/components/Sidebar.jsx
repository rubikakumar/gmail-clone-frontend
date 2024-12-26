import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ComposeEmail from './ComposeEmail'; 

const Sidebar = () => {
  const [showCompose, setShowCompose] = useState(false);

  const toggleCompose = () => {
    setShowCompose(!showCompose);
  };

  return (
    <div className="sidebar">
      <div className="compose-btn" onClick={toggleCompose}>
        <span className="material-icons">edit</span> Compose
      </div>
      {showCompose && <ComposeEmail toggleCompose={toggleCompose} />} {/* Show ComposeEmail component when toggled */}
      <nav className="sidebar-links">
        <NavLink to="/inbox" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">inbox</span> Inbox
        </NavLink>
        <NavLink to="/starred" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">star</span> Starred
        </NavLink>
        <NavLink to="/important" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">label_important</span> Important
        </NavLink>
        <NavLink to="/sent" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">send</span> Sent
        </NavLink>
        <NavLink to="/drafts" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">drafts</span> Drafts
        </NavLink>
        <NavLink to="/trash" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">delete</span> Trash
        </NavLink>
        <NavLink to="/spam" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <span className="material-icons">report_problem</span> Spam
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
