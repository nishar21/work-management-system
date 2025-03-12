import React, { useState } from "react";
import { Folder, Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Information.css"; // Import the CSS file
import Logo from "./Bama.png"; // Ensure the logo path is correct

const recentActivities = [
  { name: "Modified Annual Report 2023.pdf", time: "2 hours ago" },
  { name: "Created Q4 Analysis.xlsx", time: "4 hours ago" },
  { name: "Shared Project Timeline.docx", time: "6 hours ago" },
];

const CleaningService = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [sortCriteria, setSortCriteria] = useState("name"); // State for sort criteria
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNewFolderClick = () => {
    setIsPopupOpen(true);
  };

  const handleSaveFolder = () => {
    if (newFolderName.trim()) {
      const newFolder = {
        name: newFolderName,
        items: 0,
        date: new Date().toLocaleDateString(), // Add date for sorting
        size: Math.floor(Math.random() * 1000), // Add size for sorting
      };
      setFolders([...folders, newFolder]);
      setIsPopupOpen(false);
      setNewFolderName("");
    }
  };

  const handleFolderClick = (folderName) => {
    navigate(`/folder/${folderName}`); // Navigate to the FilePage with folderName
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    sortFolders(criteria);
  };

  const sortFolders = (criteria) => {
    const sortedFolders = [...folders].sort((a, b) => {
      if (criteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (criteria === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (criteria === "size") {
        return b.size - a.size;
      }
      return 0;
    });
    setFolders(sortedFolders);
  };

  const folder=()=>{
    navigate('/filepage')
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
              {folders.length > 1 && (
                <div className="sort-dropdown">
                  <label htmlFor="sort-by">Sort by:</label>
                  <select
                    id="sort-by"
                    value={sortCriteria}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="size">Size</option>
                  </select>
                </div>
              )}
            </div>

            <div className="folders-grid" onClick={()=>{folder()}}>
              {folders.length === 0 ? (
                <div className="no-folder-message">
                  <p>No folders available. Create a new folder to get started.</p>
                </div>
              ) : (
                folders.map((folder, index) => (
                  <div
                    key={index}
                    className="folder-card"
                    onClick={() => handleFolderClick(folder.name)}
                  >
                    <Folder className="folder-icon" size={30} />
                    <p className="folder-name">{folder.name}</p>
                    <p className="folder-items">{folder.items} items</p>
                    <p className="folder-date">Modified: {folder.date}</p>
                    <p className="folder-size">Size: {folder.size} KB</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Section - Quick Actions & Recent Activity */}
          <div className="right-panel">
            <button className="new-folder-btn" onClick={handleNewFolderClick}>
              New Folder+
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h2>Recent Activity</h2>
          <div className="footer-activity-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="footer-activity-item">
                <p className="footer-activity-name">{activity.name}</p>
                <p className="footer-activity-time">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Popup for New Folder */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Create New Folder</h3>
            <input
              type="text"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <button onClick={handleSaveFolder}>Save</button>
            <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CleaningService;