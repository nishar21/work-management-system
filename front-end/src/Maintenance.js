import React, { useState } from "react";
import "./Maintenance.css";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Folder, Upload, Share, Download, Trash, User } from "lucide-react";
import {
  MdUpdate,
  MdReadMore,
  MdDelete,
  MdComputer,
  MdOutlinePlumbing,
  MdElectricalServices,
  MdOutlineCleaningServices,
  MdDirectionsBus,
  MdAcUnit
} from "react-icons/md";

const Logo = "/navlogo.png"; // No import needed, just use the path

// Departments Data
const departments = [
  { name: "IT Support", description: "Computer & Network Issues", icon: <MdComputer /> },
  { name: "Water Services", description: "Plumbing & Water Systems", icon: <MdOutlinePlumbing /> },
  { name: "Power & Electrical", description: "Electrical Maintenance", icon: <MdElectricalServices /> },
  { name: "AC Maintenance", description: "Air Conditioning Services", icon: <MdAcUnit /> },
  { name: "Cleaning Services", description: "Janitorial & Cleaning", icon: <MdOutlineCleaningServices /> },
  { name: "Transport", description: "Vehicle & Transport", icon: <MdDirectionsBus /> }
];

const Maintenance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Fixed: Defined state
  const [profileOpen, setProfileOpen] = useState(false); // ✅ Fixed: Defined state

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="left-section">
          <AiOutlineMenu className="menu-icon" size={28} onClick={() => setMenuOpen(!menuOpen)} />
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

      {/* Maintenance Section */}
      <div className="maintenance-container">
        <h2 className="maintenance-title">Maintenance</h2>
        <div className="departments-header">
          <h3>Departments</h3>
          <button className="add-button">
            Add New
          </button>
        </div>

        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <div className="icon">{dept.icon}</div>
              <h4>{dept.name}</h4>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
