import React, { useState } from "react";
import Logo from './Bama.png';
import "./Maintenance.css";
import { AiOutlineEdit, AiOutlineMinus, AiOutlineCheck, AiOutlineSetting } from "react-icons/ai";
import { User, Bell, Menu } from "lucide-react";
import {
  MdComputer,
  MdOutlinePlumbing,
  MdElectricalServices,
  MdOutlineCleaningServices,
  MdDirectionsBus,
  MdAcUnit,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Departments Data (initial state)
const initialDepartments = [
  { name: "IT Support", description: "Computer & Network Issues", icon: <MdComputer /> },
  { name: "Water Services", description: "Plumbing & Water Systems", icon: <MdOutlinePlumbing /> },
  { name: "Power & Electrical", description: "Electrical Maintenance", icon: <MdElectricalServices /> },
  { name: "AC Maintenance", description: "Air Conditioning Services", icon: <MdAcUnit /> },
  { name: "Cleaning Services", description: "Janitorial & Cleaning", icon: <MdOutlineCleaningServices /> },
  { name: "Transport", description: "Vehicle & Transport", icon: <MdDirectionsBus /> },
];

// Mock Notifications Data
const notifications = [
  { id: 1, text: "You have upcoming activities due", time: "26 days 15 hours ago" },
  { id: 2, text: "Maintenance task completed", time: "3 days ago" },
  { id: 3, text: "New request received", time: "1 hour ago" },
];

const Maintenance = () => {
  const [departments, setDepartments] = useState(initialDepartments);
  const [showEditDeleteButtons, setShowEditDeleteButtons] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [newDepartmentDescription, setNewDepartmentDescription] = useState("");
  const [editMode, setEditMode] = useState(false); // Global edit mode
  const [editingDepartment, setEditingDepartment] = useState(null); // Department being edited
  const [deleteMode, setDeleteMode] = useState(false); // State for delete mode
  const [departmentToDelete, setDepartmentToDelete] = useState(null); // State for department to delete
  const [notificationsOpen, setNotificationsOpen] = useState(false); // State for notification popup
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); // State for confirmation popup
  const [confirmationMessage, setConfirmationMessage] = useState(""); // Confirmation message
  const [confirmationAction, setConfirmationAction] = useState(null); // Action to perform on confirmation
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const selector = useSelector(state=>state)
  const navigate = useNavigate();

  // Toggle Edit/Delete button

  // Handle Add Button Click


  // Handle Add Department Submission
  const handleAddDepartment = () => {
    if (newDepartmentName && newDepartmentDescription) {
      setConfirmationMessage("Are you sure you want to add this department?");
      setConfirmationAction(() => () => {
        const newDepartment = {
          name: newDepartmentName,
          description: newDepartmentDescription,
          icon: <MdComputer />, // Default icon (can be customized)
        };
        setDepartments([...departments, newDepartment]);
        setShowAddPopup(false);
        setNewDepartmentName("");
        setNewDepartmentDescription("");
        setShowConfirmationPopup(false);
      });
      setShowConfirmationPopup(true);
    }
  };

  const handleAddButtonClick = () => {
    setShowAddPopup(true);
  };
  // Handle Edit Button Click (Global Edit Mode)
  const handleEditButtonClick = () => {
    setEditMode(!editMode); // Toggle edit mode
    setDeleteMode(false); // Disable delete mode if active
  };

  // Handle Pen Icon Click on a Department Card
  const handlePenIconClick = (index) => {
    setEditingDepartment(index); // Set the department being edited
  };

  // Handle Save Edited Department
  const handleSaveEdit = (index, updatedName, updatedDescription) => {
    setConfirmationMessage("Are you sure you want to save changes to this department?");
    setConfirmationAction(() => () => {
      const updatedDepartments = [...departments];
      updatedDepartments[index] = {
        ...updatedDepartments[index],
        name: updatedName,
        description: updatedDescription,
      };
      setDepartments(updatedDepartments);
      setEditingDepartment(null); // Exit edit mode for this department
      setShowConfirmationPopup(false);
    });
    setShowConfirmationPopup(true);
  };

  // Handle Delete Button Click
  const handleDeleteButtonClick = () => {
    setDeleteMode(!deleteMode); // Toggle delete mode
    setEditMode(false); // Disable edit mode if active
  };

  // Handle Minus Icon Click (Delete Confirmation)
  const handleMinusIconClick = (index) => {
    setDepartmentToDelete(index); // Set the department to delete
    setConfirmationMessage("Are you sure you want to delete this department?");
    setConfirmationAction(() => () => {
      const updatedDepartments = departments.filter((_, i) => i !== index);
      setDepartments(updatedDepartments);
      setDepartmentToDelete(null); // Reset department to delete
      setDeleteMode(false); // Disable delete mode
      setShowConfirmationPopup(false);
    });
    setShowConfirmationPopup(true);
  };

  // Confirm Action
  const confirmAction = () => {
    if (confirmationAction) {
      confirmationAction();
    }
  };

  // Cancel Action
  const cancelAction = () => {
    setShowConfirmationPopup(false);
    setConfirmationAction(null);
    setConfirmationMessage("");
  };

    const handleCard=(name)=>{
    if (name=='IT Support'){
      navigate('/information')
    }
    else if (name=='Water Services'){
      navigate('/waterService')
    }
    else if(name=='Power & Electrical'){
      navigate('/powerElectrical')
    }
    else if(name=='AC Maintenance'){
      navigate('/ac')
    }
    else if(name=='Cleaning Services'){
      navigate('/cleaningService')
    }
    else if(name=='Transport'){
      navigate('/transport')
    }
  }

  const folder=()=>{
    navigate('/filepage')
  }

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

      {/* Action Buttons Container */}
      {selector.userDetails.position=="Super Admin" && <div className="action-buttons-container-main">
        <button className="pen-icon-button-main" onClick={toggleEditDeleteButtons}>
          <AiOutlineEdit size={24} />
        </button>
        {showEditDeleteButtons && (
          <div className="action-buttons-main">
            <button className="add-button-main" onClick={handleAddButtonClick}>Add New</button>
            <button className="edit-button-main" onClick={handleEditButtonClick}>
              {editMode ? "Cancel Edit" : "Edit"}
            </button>
            <button className="delete-button-main" onClick={handleDeleteButtonClick}>
              {deleteMode ? "Cancel Delete" : "Delete"}
            </button>
          </div>
        )}
      </div>}

      {/* Add Department Popup */}
      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add New Department</h3>
            <input
              type="text"
              placeholder="Department Name"
              value={newDepartmentName}
              onChange={(e) => setNewDepartmentName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={newDepartmentDescription}
              onChange={(e) => setNewDepartmentDescription(e.target.value)}
            />
            <button onClick={handleAddDepartment}>Add</button>
            <button onClick={() => setShowAddPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>{confirmationMessage}</h3>
            <button onClick={confirmAction}>Yes</button>
            <button onClick={cancelAction}>Cancel</button>
          </div>
        </div>
      )}

      {/* Maintenance Section */}
      <div className="maintenance-container">
        <h2 className="maintenance-title">Maintenance  Departments</h2>
        <div className="departments-header">
         
        </div>
        <div className="departments-grid-main">
          {departments.map((dept, index) => (
            <div className="department-card" key={index} onClick={()=>{handleCard(dept.name)}}>
              {/* Pen Icon for Editing  */}
              {editMode && (
                <button className="pen-icon-button" onClick={() => handlePenIconClick(index)}>
                  <AiOutlineEdit size={20} />
                </button>
              )}
              
              {deleteMode && (
                <button className="minus-icon-button" onClick={() => handleMinusIconClick(index)}>
                  <AiOutlineMinus size={20} />
                </button>
              )}
              {/* Edit Form */}
              {editingDepartment === index ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={dept.name}
                    onChange={(e) => {
                      const updatedDepartments = [...departments];
                      updatedDepartments[index].name = e.target.value;
                      setDepartments(updatedDepartments);
                    }}
                  />
                  <input
                    type="text"
                    value={dept.description}
                    onChange={(e) => {
                      const updatedDepartments = [...departments];
                      updatedDepartments[index].description = e.target.value;
                      setDepartments(updatedDepartments);
                    }}
                  />
                  <button onClick={() => handleSaveEdit(index, dept.name, dept.description)}>Save</button>
                  <button onClick={() => setEditingDepartment(null)}>Cancel</button>
                </div>
              ) : (
                <>
                  <div className="icon">{dept.icon}</div>
                  <h4>{dept.name}</h4>
                  <p>{dept.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;