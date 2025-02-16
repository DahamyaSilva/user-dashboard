import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
       <div className="logo">
        <img src="/logo.png" alt="FindMyLawyer Logo" />
      </div>
      <nav>
        <ul>
          <li className="active"><span className="icon">⬜</span>Dashboard</li>
          <li><span className="icon">📅</span>Calendar</li>
          <li><span className="icon">📊</span>Progress</li>
          <li><span className="icon">📥</span>Inbox</li>
          <li><span className="icon">👥</span>About Us</li>
          <li><span className="icon">❓</span>Help</li>
        </ul>
      </nav>
      <div className="help-section">
        <h3>Need Help?</h3>
        <p>Please check our docs</p>
        <button className="documentation-btn">DOCUMENTATION</button>
      </div>
    </div>
  );
}

export default Sidebar;