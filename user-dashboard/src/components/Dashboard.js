import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const [notifications, setNotifications] = React.useState(1);
  
  const lawyers = [
    {
      name: 'Mr. Anthony Silva',
      expertise: 'Family Cases',
      location: 'Gampaha',
      image: '/placeholder-1.jpg'
    },
    {
      name: 'Mr. John Doe',
      expertise: 'Criminal Cases',
      location: 'Colombo 8',
      image: '/placeholder-2.jpg'
    },
    {
      name: 'Ms. Michelle Rehana',
      expertise: 'Family Cases',
      location: 'Negombo',
      image: '/placeholder-3.jpg'
    },
    {
      name: 'Mr. James Fernando',
      expertise: 'Family Cases',
      location: 'Colombo 5',
      image: '/placeholder-4.jpg'
    },
    {
      name: 'Mr. Andrew Perera',
      expertise: 'Criminal Cases',
      location: 'Kandy',
      image: '/placeholder-5.jpg'
    }
  ];

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h1>Dashboard</h1>
        <div className="nav-right">
          <div className="user-profile">
            <img src="/user-avatar.jpg" alt="User" className="avatar" />
            <span className="username">Devshan Abl</span>
          </div>
          <button className="nav-icon settings">⚙️</button>
          <div className="notification-wrapper">
            <button className="nav-icon notification">🔔</button>
            {notifications > 0 && (
              <span className="notification-badge">{notifications}</span>
            )}
          </div>
        </div>
      </nav>
      
      <div className="dashboard-content">
        <h2>Client Dashboard</h2>
        
        <div className="search-filters">
          <input type="text" placeholder="Quick search" className="search-input" />
          <select className="filter-select">
            <option>Case Type</option>
          </select>
          <select className="filter-select">
            <option>Location (Province)</option>
          </select>
          <button className="filter-btn">Filter</button>
        </div>

        <div className="lawyers-list">
          <div className="list-header">
            <span>Lawyer Name</span>
            <span>Area of Expertise</span>
            <span>Location</span>
            <span></span>
          </div>
          {lawyers.map((lawyer, index) => (
            <div key={index} className="lawyer-item">
              <div className="lawyer-info">
                <img src={lawyer.image} alt={lawyer.name} />
                <span>{lawyer.name}</span>
              </div>
              <span>{lawyer.expertise}</span>
              <span>{lawyer.location}</span>
              <button className="view-btn">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;