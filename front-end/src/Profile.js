import React, { useState } from "react";
import { Menu, User, Settings } from "lucide-react";
import Logo from "./assets/Sathyaa.png";
import DefaultProfileIcon from "./assets/profile.jpg";
import "./Profile.css";

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

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

        <nav className="nav">
          {["Dashboard", "Stock", "Service", "Report"].map((link, index) => (
            <a key={index} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="right-section">
          <User className="profile-icon" size={28} onClick={() => setProfileOpen(!profileOpen)} />
        </div>

        {menuOpen && (
          <div className="menu-popup">
            <button className="popup-item">📊 Dashboard</button>
            <button className="popup-item">📅 Calendar</button>
            <button className="popup-item">📝 Create</button>
            <button className="popup-item">✏️ Update</button>
            <button className="popup-item">📖 Read</button>
            <button className="popup-item">🗑️ Delete</button>
            <button className="popup-item">📜 Report</button>
          </div>
        )}

        {profileOpen && (
          <div className="profile-popup">
            <button className="popup-item">📊 Dashboard</button>
            <button className="popup-item">👤 Profile</button>
            <button className="popup-item">🚪 Logout</button>
          </div>
        )}
      </header>

      {/* Profile Info Section */}
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-info">
            <label htmlFor="profile-upload" className="profile-icon-container">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <img src={DefaultProfileIcon} alt="Default Profile" className="default-icon" />
              )}
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </label>
            <h1 className="profile-name">Tamizhiniyan J</h1>
            <div className="settings-wrapper">
              <Settings
                className="settings-icon"
                size={24}
                onClick={() => setSettingsOpen(!settingsOpen)}
              />
              {settingsOpen && (
                <div className="settings-dropdown">
                  <button className="dropdown-item">Edit Profile</button>
                  <button className="dropdown-item">Change Profile Image</button>
                  <button className="dropdown-item">Edit Name</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-navigation">
          <p className="breadcrumb">Dashboard / Profile</p>
          <div className="action-buttons">
            <button className="action-button">Reset Page to Default</button>
            <button className="action-button">Customize This Page</button>
          </div>
        </div>
        

        {/* User Details & Miscellaneous Section */}
        <div className="user-section">
          {/* User Details */}
          <div className="user-details-container">
            <h2 className="section-title">User Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Email Address:</span>
                <span className="detail-value">tamizhiniyanmanju123@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">City/Town:</span>
                <span className="detail-value">Chennai</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Year of Admission:</span>
                <span className="detail-value">2022</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Role:</span>
                <span className="detail-value">Admin</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Employee ID:</span>
                <span className="detail-value">12346678</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Section:</span>
                <span className="detail-value">A</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">Male</span>
              </div>
              
              
              
            </div>
          </div>

          {/* Right Column: Miscellaneous, Reports, and Login Activity */}
          <div className="right-column">
            {/* Miscellaneous */}
            <div className="miscellaneous-container">
              <h2 className="section-title">Miscellaneous</h2>
              <p className="misc-text">Additional user information or settings can go here.</p>
            </div>

            {/* Reports */}
            <div className="reports-container">
              <h2 className="section-title">Reports</h2>
              <p className="report-text">Recent activity reports and performance data.</p>
            </div>

            {/* Login Activity */}
            <div className="login-activity-container">
              <h2 className="section-title">Login Activity</h2>
              <p className="login-text">Monitor recent login attempts and account activity.</p>
            </div>
          </div>
        </div>
      </div>
      
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

export default Profile;