import React, { useState } from "react";
import { Folder, Upload, Share, Download, Trash, Menu, User } from "lucide-react";
import "./PowerElectrical.css"; // Updated file name
import Logo from "./Bama.png"; // Ensure the logo path is correct

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

const CleaningService = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
            <a key={index} href="#" className="nav-link">{link}</a>
          ))}
        </nav>

        <div className="right-section">
          <User className="profile-icon" size={28} onClick={() => setProfileOpen(!profileOpen)} />
        </div>

        {/* Popup Menus */}
        {menuOpen && (
          <div className="menu-popup">
            <button className="popup-item">📊 Dashboard</button>
            <button className="popup-item">📅 Calendar</button>
            <button className="popup-item">📝 Create</button>
            <button className="popup-item">✏️ Update</button>
            <button className="popup-item">📖 Read</button>
            <button className="popup-item">🗑️ Delete</button>
            <button className="popup-item">📜 Report</button>
            <button className="popup-item">📰 News</button>
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

      {/* Main Dashboard */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">CLEANING SERVICE</h1>

        <div className="dashboard-content">
          {/* Left Section - Folders */}
          <div className="folders-section">
            <div className="folders-header">
              <div className="view-buttons">
              </div>
              <button className="sort-btn">Sort by: Name</button>
            </div>

            <div className="folders-grid">
              {repeatedFolders.map((folder, index) => (
                <div key={index} className="folder-card">
                  <Folder className="folder-icon" size={30} />
                  <p className="folder-name">{folder.name}</p>
                  <p className="folder-items">{folder.items} items</p>
                  <p className="folder-date">Modified: 2 days ago</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Quick Actions & Recent Activity */}
          <div className="right-panel">
            <button className="new-folder-btn"> New Folder+</button>

            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button className="action-btn">
                  <Upload size={18} className="action-icon" /> Upload
                </button>
                <button className="action-btn">
                  <Share size={18} className="action-icon" /> Share
                </button>
                <button className="action-btn">
                  <Download size={18} className="action-icon" /> Download
                </button>
                <button className="action-btn">
                  <Trash size={18} className="action-icon" /> Delete
                </button>
              </div>
            </div>

            <div className="recent-activity">
              <h2>Recent Activity</h2>
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <p className="activity-name">{activity.name}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningService;
