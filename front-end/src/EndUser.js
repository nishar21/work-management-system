import { useState } from "react";
import { Menu, User } from "lucide-react"; // Import icons
import Logo from "./Bama.png"; // Update with actual path to logo
import "./EndUser.css";

const Enduser = ({ tickets = [], updateTicketStatus }) => {
  const [confirmComplete, setConfirmComplete] = useState(null);
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
            <button className="popup-item">✏ Update</button>
            <button className="popup-item">📖 Read</button>
            <button className="popup-item">🗑 Delete</button>
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

      {/* Ticket Section */}
      <div className="enduser-container">
        <h2>Tickets</h2>
        <div className="ticket-scroll-box">
          {tickets.length === 0 ? (
            <p>No tickets available</p>
          ) : (
            tickets.map((ticket, index) => (
              <div key={index} className="ticket-card">
                <img src={ticket?.ticketImage || ""} alt="Ticket" className="ticket-image" />
                <p><strong>{ticket?.description || "No description available"}</strong></p>
                <button className={`status-button ${ticket?.status?.toLowerCase() || ""}`} onClick={() => setConfirmComplete(index)}>
                  {ticket?.status === "In Progress" ? "Complete" : "Completed"}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Confirmation Popup */}
        {confirmComplete !== null && (
          <div className="popup">
            <p>Are you sure you want to mark this as completed?</p>
            <button onClick={() => { updateTicketStatus(confirmComplete, "Completed"); setConfirmComplete(null); }}>Yes</button>
            <button onClick={() => setConfirmComplete(null)}>No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enduser;