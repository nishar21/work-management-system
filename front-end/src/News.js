import React, { useState } from "react";
import "./News.css";
import Logo from "./assets/Sathyaa.png"; // Import logo image
import { Menu, User, X } from "lucide-react";

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

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="left-section">
          <Menu className="menu-icon" size={28} onClick={() => setMenuOpen(!menuOpen)} />
          <div className="logo-wrapper">
            <img src={Logo} alt="Company Logo" className="logo-image" />
          </div>
        </div>

        <nav className="nav">
          {["Dashboard", "Stock", "Service", "Maintenance", "Report"].map((link, index) => (
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
