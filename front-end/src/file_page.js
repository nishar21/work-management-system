import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePlus, AiOutlineEdit, AiOutlineCheck, AiOutlineSetting } from "react-icons/ai";
import { Folder, Upload, Share, Download, Trash, Menu, User,Bell,Eye } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to read URL parameters
import "./file_page.css";
import Logo from "./Bama.png";

const notifications = [
  { id: 1, text: "You have upcoming activities due", time: "26 days 15 hours ago" },
  { id: 2, text: "Maintenance task completed", time: "3 days ago" },
  { id: 3, text: "New request received", time: "1 hour ago" }
];

const FilePage = () => {
  const { folderName } = useParams(); // Read the folderName from URL parameters
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);

  const exampleFiles = [];

  let navigate = useNavigate()
  const [showEditDeleteButtons, setShowEditDeleteButtons] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // State for notification popup
  /*const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);*/

  const selector = useSelector(state=>state)

  useEffect(() => {
    setFiles(exampleFiles);
  }, [folderName]);

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

      {/* Main Content */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">INFORMATION TECHNOLOGY</h1><br></br>
        <h2 className="folder-title">{folderName}</h2> {/* Display the folder name */}

        <div className="quick-actions">
          <div className="hamburger-menu" onClick={() => setQuickActionsOpen(!quickActionsOpen)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div><br></br><br></br>
          {quickActionsOpen && (
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
                <Eye size={18} className="action-icon" /> View
              </button>
              <button className="action-btn">
                <Trash size={18} className="action-icon" /> Delete
              </button>
            </div>
          )}
        </div>

        <div className="file-container">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className="file-card">
                <Folder className="file-icon" size={20} />
                <div className="file-details">
                  <p className="file-name">{file.name}</p>
                  <p className="file-size">{file.size}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-files-msg">No files in this folder.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilePage;