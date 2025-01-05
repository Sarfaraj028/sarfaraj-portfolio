import React, { useState } from 'react';
import './layout.css'; // Import your CSS file
import { Link } from 'react-scroll';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo or Brand Name */}
          <div className="navbar-logo">
            <a href="/">Sarfaraj port.</a>
          </div>

          {/* Toggle button for mobile */}
          <div className="menu-icon" onClick={toggleMenu}>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          </div>

          {/* Navbar links */}
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              
              {/* React Scroll Links for smooth scrolling within the homepage */}
              <li>
                <Link to="home" smooth={true} duration={500} offset={-70}>Home </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-70}>About </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70}>Services </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70}>Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Layout;
