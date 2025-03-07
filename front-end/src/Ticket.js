import { useState } from "react";
import { Menu, User, Edit, Trash2 } from "lucide-react";
import "./Ticket.css";
import Logo from "./assets/Sathyaa.png";

const Ticket = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [ticket, setTicket] = useState({
    department: "",
    ticketImage: null,
    block: "",
    description: "",
    priority: "",
    assignedTo: "",
  });

  const handleInputChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setTicket({ ...ticket, ticketImage: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTickets = [...tickets];
      updatedTickets[editIndex] = ticket;
      setTickets(updatedTickets);
      setEditIndex(null);
    } else {
      setTickets([...tickets, ticket]);
    }
    setTicket({
      department: "",
      ticketImage: null,
      block: "",
      description: "",
      priority: "",
      assignedTo: "",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTicket(tickets[index]);
  };

  const handleDelete = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
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

      {/* Page Heading */}
      <h1 className="page-heading">Ticket Management</h1>

      {/* Ticket Section */}
      <div className="ticket-container">
        {/* Left Side - Raised Tickets */}
        <div className="ticket-list">
          <h2>Raised Tickets</h2>
          <div className="ticket-scroll">
            {tickets.length === 0 ? (
              <p className="no-tickets">No tickets raised yet.</p>
            ) : (
              tickets.map((tkt, index) => (
                <div key={index} className="ticket-card">
                  {tkt.ticketImage && <img src={tkt.ticketImage} alt="Ticket" className="ticket-image" />}
                  <div className="ticket-info">
                    <p><strong>Dept:</strong> {tkt.department}</p>
                    <p><strong>Block:</strong> {tkt.block}</p>
                    <p><strong>Desc:</strong> {tkt.description}</p>
                    <p><strong>Priority:</strong> {tkt.priority}</p>
                    <p><strong>Assign:</strong> {tkt.assignedTo}</p>
                  </div>
                  <div className="ticket-actions">
                    <Edit className="edit-icon" size={20} onClick={() => handleEdit(index)} />
                    <Trash2 className="delete-icon" size={20} onClick={() => handleDelete(index)} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side - Raise Ticket Form */}
        <div className="ticket-form-wrapper">
          <div className="ticket-form-container">
            <h2>{editIndex !== null ? "Edit Ticket" : "Raise a Ticket"}</h2>
            <div className="form-scroll">
              <form className="ticket-form" onSubmit={handleSubmit}>
                <label className="small-heading">Department</label>
                <select name="department" value={ticket.department} onChange={handleInputChange}>
                  <option value="">Select Department</option>
                  {["CSE", "ECE", "EEE", "Mechanical", "IT", "BBA", "Aeronautical", "Arts"].map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <label className="small-heading">Image (Optional)</label>
                <input type="file" name="ticketImage" onChange={handleFileChange} />

                <label className="small-heading">Block</label>
                <select name="block" value={ticket.block} onChange={handleInputChange}>
                  <option value="">Select Block</option>
                  {["Block1", "Block2", "Block3", "Block4", "Block5", "Block6", "Block7", "StPauls", "AdvanceStudies"].map((blk) => (
                    <option key={blk} value={blk}>{blk}</option>
                  ))}
                </select>

                <label className="small-heading">Description</label>
                <textarea name="description" value={ticket.description} onChange={handleInputChange} placeholder="Enter description" />

                <label className="small-heading">Priority</label>
                <select name="priority" value={ticket.priority} onChange={handleInputChange}>
                  <option value="">Select Priority</option>
                  {["High", "Medium", "Low"].map((prio) => (
                    <option key={prio} value={prio}>{prio}</option>
                  ))}
                </select>

                <label className="small-heading">Assign To</label>
                <select name="assignedTo" value={ticket.assignedTo} onChange={handleInputChange}>
                  <option value="">Select Person</option>
                  {["Tamizh", "Tharun", "Raja", "Nishar", "Mohan"].map((person) => (
                    <option key={person} value={person}>{person}</option>
                  ))}
                </select>

                <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;