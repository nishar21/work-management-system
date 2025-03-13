import React, { useState } from "react";
import "./News.css";
import Logo from "./assets/Sathyaa.png"; // Import logo image
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePlus, AiOutlineEdit, AiOutlineCheck, AiOutlineSetting } from "react-icons/ai";
import { Folder, Upload, Share, Download, Trash, Menu, User,Bell,X } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const notifications = [
  { id: 1, text: "You have upcoming activities due", time: "26 days 15 hours ago" },
  { id: 2, text: "Maintenance task completed", time: "3 days ago" },
  { id: 3, text: "New request received", time: "1 hour ago" }
];

const News = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [updates, setUpdates] = useState([
    {
      title: "New Maintenance Protocol Released",
      completionDate: "February 10, 2025",
      description: "Updated safety protocols for handling electrical equipment maintenance...",
    },
    {
      title: "Equipment Inspection Schedule Update",
      completionDate: "February 9, 2025",
      description: "Monthly inspection schedule for heavy machinery has been revised...",
    },
    {
      title: "Maintenance Training Session",
      completionDate: "February 8, 2025",
      description: "Upcoming training session on new diagnostic tools implementation...",
    },
  ]);

  // Form state
  const [newTitle, setNewTitle] = useState("");
  const [newCompletionDate, setNewCompletionDate] = useState("");
  const [newDescription, setNewDescription] = useState("");
  let navigate = useNavigate()
  const [showEditDeleteButtons, setShowEditDeleteButtons] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // State for notification popup
  /*const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);*/

  const selector = useSelector(state=>state)
  const handleSubmit = () => {
    if (newTitle && newCompletionDate && newDescription) {
      const newUpdate = {
        title: newTitle,
        completionDate: newCompletionDate,
        description: newDescription,
      };
      setUpdates([newUpdate, ...updates]); // Add new update to the top of the list
      setModalOpen(false); // Close modal
      setNewTitle("");
      setNewCompletionDate("");
      setNewDescription("");
    }
  };

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

  const news=()=>{
    navigate('/news')
  }

  const logout=()=>{
    navigate('/')
  }

  const toggleEditDeleteButtons = () => {
    setShowEditDeleteButtons(!showEditDeleteButtons);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const noti=()=>{
    navigate('/notification')
  }

  const calender=()=>{
    navigate('/calender')
  }
  
  const noti_setting=()=>{
    navigate('/noti_setting')
  }

  return (
    <div className="app-container">
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
          <ul type="none" className='nav'>
            <button className='nav-link' onClick={handleHome}>Home</button>
            <button className='nav-link' onClick={handleStock}>Stock</button>
            {selector.userDetails.dept!=='CSE' && selector.userDetails.dept!=='ECE' && <button className='nav-link' onClick={handleMain}>Maintenance</button>}
            <button className='nav-link' onClick={handleReport}>Report</button>
            {/*<button className='nav-link' onClick={handleInfo}>Notification</button>*/}
          </ul>
        </nav>
        <div className='space'></div>

        {/*<div className="right-section">
          <User className="profile-icon" size={28} onClick={() => setProfileOpen(!profileOpen)} />
        </div>*/}

        {/* Popup Menus */}
        {menuOpen && (
          <div className="menu-popup">
          <button className="popup-item" onClick={handleHome}>📊 Dashboard</button>
          <button className="popup-item" onClick={ticket}>🎟 Ticket</button>
          <button className="popup-item" onClick={handleProfile}>👤 Profile</button>
          <button className="popup-item" onClick={news}>📰 News</button>
          <button className="popup-item" onClick={handleReport}>📜 Report</button>
          <button className="popup-item" onClick={calender}>📅 Calendar</button>
      
        </div>

        )}
        <div className="right-section">
              
              <div className="notification-wrapper">
                <Bell className="notification-icon" size={28} onClick={toggleNotifications} />
                {/* Notification Popup */}
                {notificationsOpen && (
                  <div className="notification-popup">
                    <div className="notification-header">
                      <h3>Notifications</h3>
                      <div className="notification-actions">
                        {/*<AiOutlineCheck className="tick-icon" />*/}
                        <AiOutlineSetting className="settings-icon" onClick={noti_setting}/>
                      </div>
                    </div>
                    <div className="notification-list">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="notification-item">
                          <p>{notification.text}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                      ))}
                    </div>
                    <button className="see-all-button" onClick={noti}>See all</button>
                  </div>
                )}
              </div>
              
            </div>
            <div>
            <User className="profile-icon" size={28} onClick={() => setProfileOpen(!profileOpen)}/>
            </div>
            
        {profileOpen && (
          <div className="profile-popup">
            <button className="popup-item" onClick={handleHome}>📊 Dashboard</button>
            <button className="popup-item" onClick={handleProfile}>👤 Profile</button>
            <button className="popup-item" onClick={news}>📰 News</button>
            <button className="popup-item" onClick={logout}>🚪 Logout</button>
          </div>
        )}
      </header>

      {/* News Section */}
      <div className="news-container">
        <h2 className="news-title">Latest Updates</h2>
        <div className="news-card">
          <div className="news-header">
            <h3>Latest Updates</h3>
            <div className="news-actions">
              <button className="filter-button">⚙️ Filter</button>
              <button className="add-button" onClick={() => setModalOpen(true)}>➕ Add Update</button>
            </div>
          </div>
          {updates.map((update, index) => (
            <div key={index} className="news-item">
              <div className="news-content">
                <h4>{update.title}</h4>
                <p className="news-meta">Completed at: {update.completionDate}</p>
                <p className="news-description">{update.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add Update</h3>
              <X className="close-icon" size={24} onClick={() => setModalOpen(false)} />
            </div>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="modal-input"
            />
            <input
              type="date"
              placeholder="Completed At"
              value={newCompletionDate}
              onChange={(e) => setNewCompletionDate(e.target.value)}
              className="modal-input"
            />
            <textarea
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="modal-textarea"
            />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
