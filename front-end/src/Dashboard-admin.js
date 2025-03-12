//import React from 'react';
import './Dash.css';
import Logo from './Bama.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loginpage from './Loginpage';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { Folder, Upload, Share, Download, Trash, Menu, User } from "lucide-react";


const folders = [
  { name: "BLOCK 1", items: 48 },
  { name: "HP BILL", items: 156 },
  { name: "BENQ BILL", items: 23 },
  { name: "HEAD OF DEPARTMENT", items: 12 },
  { name: "Personal", items: 34 },
  { name: "Archive", items: 89 },
  { name: "Important", items: 15 },
  { name: "Backup", items: 67 },
];

const repeatedFolders = Array(3).fill(folders).flat();

const recentActivities = [
  { name: "Modified Annual Report 2023.pdf", time: "2 hours ago" },
  { name: "Created Q4 Analysis.xlsx", time: "4 hours ago" },
  { name: "Shared Project Timeline.docx", time: "6 hours ago" },
];
const DashboardA = (props) => {
  //console.log(user)
  // Card data
  let navigate = useNavigate()
  const selector = useSelector(state=>state)
  const cardData = [
    { label: "Department", count: "1500+" },
    { label: "Rooms", count: "1500+" },
    { label: "Transport", count: "13" },
    { label: "Teaching", count: "15" },
    { label: "Non-Teaching", count: "150" },
  ];
  /*function getData(users){
    setUser(users)
    console.log(users)
  }*/
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  


    const handleStock =()=>{
      navigate('/stock')
    }
    const handleReport=()=>{
      navigate('/report')
    }
  
    const handleMain=()=>{
      navigate('/maintenance')
    }
  
    const handleHome=()=>{
      navigate('/dashboard-admin')
    }
  
    const handleProfile=()=>{
      navigate('/profile')
    }
  
    const handleInfo=()=>{
      navigate('/information')
    }

    const ticket=()=>{
      navigate('/ticket')
    }

    
    

  return (
    <div className="app-container">
      {/*<header className="header">
        <div className='menu'>
        <GiHamburgerMenu className='menu-icon'/>
        <div>
          <select>
            <option>Dashboard</option>
            <option>Ticket</option>
            <option>Calendar</option>
          </select>
        </div>
        </div>
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo-image" />
        </div>
        <nav className="nav">
          <ul type="none" className='nav-list'>
            <button className='nav-button' onClick={handleHome}>Home</button>
            <button className='nav-button' onClick={handleStock}>Stock</button>
            {selector.userDetails.dept!=='CSE' && selector.userDetails.dept!=='ECE' && <button className='nav-button' onClick={handleMain}>Maintenance</button>}
            <button className='nav-button' onClick={handleReport}>Report</button>
            <button className='nav-button' onClick={handleInfo}>Notification</button>
            <button className='nav-button' onClick={handleProfile}>Profile</button>
          </ul>
        </nav>
      </header>*/}
          {/*<div className="app-container">*/} 
      {/* Navbar */}
      <header className="header">
        <div className="left-section">
          <Menu className="menu-icon" size={28} onClick={() => setMenuOpen(!menuOpen)} />
          <div className="logo-wrapper">
            <img src={Logo} alt="logo" className="logo-image" />
          </div>
        </div>

        {/*<nav className="nav">
          {["Dashboard","Service","Report","News"].map((link, index) => (
            <a key={index} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </nav>*/}

        <nav className="nav">
          <ul type="none" className='nav-list'>
            <button className='nav-button' onClick={handleHome}>Home</button>
            <button className='nav-button' onClick={handleStock}>Stock</button>
            {selector.userDetails.dept!=='CSE' && selector.userDetails.dept!=='ECE' && <button className='nav-button' onClick={handleMain}>Maintenance</button>}
            <button className='nav-button' onClick={handleReport}>Report</button>
            <button className='nav-button' onClick={handleInfo}>Notification</button>
            <button className='nav-button' onClick={handleProfile}>Profile</button>
          </ul>
        </nav>

        <div className="right-section">
          <User className="profile-icon" size={28} onClick={() => setProfileOpen(!profileOpen)} />
        </div>

        {/* Popup Menus */}
        {menuOpen && (
          <div className="menu-popup">
          <button className="popup-item">📊 Dashboard</button>
          <button className="popup-item">🎟 Ticket</button>
          <button className="popup-item">👤 Profile</button>
          <button className="popup-item">📰 News</button>
          <button className="popup-item">📜 Report</button>
          <button className="popup-item">📅 Calendar</button>
      
        </div>

        )}

        {profileOpen && (
          <div className="profile-popup">
            <button className="popup-item">📊 Dashboard</button>
            <button className="popup-item">👤 Profile</button>
            <button className="popup-item">📰 News</button>
            <button className="popup-item">🚪 Logout</button>
          </div>
        )}
      </header>

      <main className="main-content">
        <div className="Back-Container">
          <div className="overview-cards">
            {cardData.map((item, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="card-number">{item.count}</div>
                  <div className="card-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-sections">
          <section className="news-section">
            <h2 className="section-title">News Update</h2>
            <div className="news-list">
              {[ 
                { title: "Water Supply Maintenance", date: "2024-02-15", priority: "High" },
                { title: "IT Infrastructure Update", date: "2024-02-14", priority: "Medium" },
                { title: "Building Renovation", date: "2024-02-13", priority: "Normal" },
              ].map((news, index) => (
                <div key={index} className="news-item">
                  <div>
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-date">{news.date}</p>
                  </div>
                  {/* Fixed the class name interpolation */}
                  <span className={`priority-badge priority-${news.priority.toLowerCase()}`}>
                    {news.priority} Priority
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="ticket-section">
            <h2 className="section-title">Ticket Raising</h2>
            {/*<form className="ticket-form" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select>
                  <option>Select department</option>
                  <option>Maintenance</option>
                  <option>IT</option>
                  <option>Engineering</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Describe your issue"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>*/}
            <button className='raise' onClick={ticket}>Raise a Ticket</button>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-item">
            <label>Phone</label>
            <span>+123 567 890</span>
          </div>
          <div className="footer-item">
            <label>Email</label>
            <span>support@maintenance.edu</span>
          </div>
          <div className="footer-item">
            <label>Address</label>
            <span>123 Campus Street, Education City</span>
          </div>
        </div>
        <div className="footer-section">
          <h3>Office Hours</h3>
          <div className="footer-item">
            <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardA;
