import React from 'react'
import './Dash.css';
import Logo from './Bama.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DashboardA from './Dashboard-admin';
import Stock from './Stock';
import Maintenance from './Maintenance';
import Report from './Report';
import Profile from './Profile';
import Information from './Information';

function Main_admin() {
    const [name,setName] = useState({name:'Lakhshmanan'})
  const [dept,setDept] = useState('CSE')
  const [flag,setFlag] = useState(1)
  //console.log(user)
  // Card data
  let navigate = useNavigate()
  const cardData = [
    { label: "Department", count: "1500+" },
    { label: "Rooms", count: "1500+" },
    { label: "Transport", count: "13" },
    { label: "Teaching", count: "15" },
    { label: "Non-Teaching", count: "150" },
  ];
  console.log(dept)
  const handleStock =()=>{
    if (dept==='CSE'){
      setFlag(2)
    }
    else if (dept==='ECE'){
      navigate('/information')
    }
  }

  const handleReport=()=>{
    setFlag(5)
  }

  const handleMain=()=>{
    setFlag(4)
  }

  const handleHome=()=>{
    setFlag(1)
  }

  const handleProfile=()=>{
    setFlag(7)
  }

  const handleInfo=()=>{
    setFlag(6)
  }
    
  /*function getData(users){
    setUser(users)
    console.log(users)
  }*/
  return (
    <div>
        <header className="header">
                <div className="logo-wrapper">
                  <img src={Logo} alt="logo" className="logo-image" />
                </div>
                <nav className="nav">
                  <ul type="none" className='nav-list'>
                    <button className='nav-button' onClick={handleHome}>Home</button>
                    <button className='nav-button' onClick={handleStock}>Stock</button>
                    <button className='nav-button' onClick={handleMain}>Maintenance</button>
                    <button className='nav-button' onClick={handleReport}>Report</button>
                    <button className='nav-button' onClick={handleInfo}>Notification</button>
                    <button className='nav-button' onClick={handleProfile}>Profile</button>
                  </ul>
                </nav>
        </header>
        {flag==1 && <DashboardA/>}
        {flag==2 && <Stock/>}
        {flag==4 && <Maintenance/>}
        {flag==5 && <Report/>}
        {flag==6 && <Information/>}
        {flag==7 && <Profile/>}
    </div>
  )
}

export default Main_admin