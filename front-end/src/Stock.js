import React, { useState } from "react";
import "./Stock.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Folder, Upload, Share, Download, Trash, User } from "lucide-react";
import companyLogo from "./Bama.png";
import computingImage from "./schoolofcomputing.jpg";
import mechImage from "./mechanical.jpg";
import civilImage from "./civil.jpg";
import artsImage from "./arts.jpg";
import lawImage from "./law.jpeg";
import eceImage from "./ece.jpg";
import eeeImage from "./eee.jpg";

const initialSchools = [
  { name: "SCHOOL OF COMPUTING", image: computingImage },
  { name: "SCHOOL OF MECH", image: mechImage },
  { name: "SCHOOL OF CIVIL", image: civilImage },
  { name: "SCHOOL OF ARTS", image: artsImage },
  { name: "SCHOOL OF LAW", image: lawImage },
  { name: "SCHOOL OF ECE", image: eceImage },
  { name: "SCHOOL OF EEE", image: eeeImage }
];

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [schools, setSchools] = useState(initialSchools);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");
  const [newDeptImage, setNewDeptImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewDeptImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleAddDepartment = () => {
    if (!newDeptName || !newDeptImage) {
      alert("Please fill in all fields.");
      return;
    }
    setShowConfirmPopup(true);
  };

  const confirmAddDepartment = () => {
    const newDepartment = {
      name: newDeptName,
      image: previewImage
    };
    setSchools([...schools, newDepartment]);
    setShowAddPopup(false);
    setShowConfirmPopup(false);
    setNewDeptName("");
    setNewDeptImage(null);
    setPreviewImage(null);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="left-section">
          <AiOutlineMenu className="menu-icon" size={28} onClick={() => setMenuOpen(!menuOpen)} />
          <div className="logo-wrapper">
            <img src={companyLogo} alt="logo" className="logo-image" />
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

      {/* Search & Add Button */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search departments..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-button" onClick={() => setShowAddPopup(true)}>ADD+</button>
      </div>

      {/* Departments Grid */}
      <div className="grid">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <div className="card" key={index}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${school.image})` }}
              ></div>
              <div className="card-footer">{school.name}</div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching departments found.</p>
        )}
      </div>

      {/* Add Department Popup */}
      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Add New Department</h2>
            <input
              type="text"
              placeholder="Enter Department Name"
              className="popup-input"
              value={newDeptName}
              onChange={(e) => setNewDeptName(e.target.value)}
            />
            <input type="file" className="popup-input" onChange={handleImageChange} />
            {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}
            <button className="popup-btn" onClick={handleAddDepartment}>Upload</button>
            <button className="popup-btn cancel" onClick={() => setShowAddPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Do you want to create a new department?</h3>
            <p>Department Name: <b>{newDeptName}</b></p>
            <button className="popup-btn confirm" onClick={confirmAddDepartment}>Yes</button>
            <button className="popup-btn cancel" onClick={() => setShowConfirmPopup(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stock;
