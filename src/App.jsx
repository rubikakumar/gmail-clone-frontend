import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ComposeEmail from './components/ComposeEmail';
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import Trash from './pages/Trash';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/compose" element={<ComposeEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
