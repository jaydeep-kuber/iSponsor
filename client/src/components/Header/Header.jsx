import React from 'react'
import './Header.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link for routing


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">iSponsor</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link> 
          </li>
          <li className="nav-item">
            <Link to="/Find" className="nav-link">Find</Link> 
          </li>
          <li className="nav-item">
            <Link to="/Serv" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/Ressources" className="nav-link">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/Work" className="nav-link">how we Works</Link>
          </li>
        </ul>
        {/* <Link to="/login">
          <button className="login-btn"> login </button>
        </Link> */}
        
      </nav>
    </header>
  )
};

export default Header;

