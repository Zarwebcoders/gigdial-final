import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to add a shadow/background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="/" className="navbar-logo">
          <img src={logoImg} alt="GigDial Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Menu Links */}
        <ul className="navbar-links">
          <li>
            <a href="#home" className="nav-link active">Home</a>
          </li>
          <li>
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li>
            <a href="#customers" className="nav-link">For Customers</a>
          </li>
          <li>
            <a href="#professionals" className="nav-link">For Professionals</a>
          </li>
          <li>
            <a href="#how-it-works" className="nav-link">How It Works</a>
          </li>
          <li>
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact Us</a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a href="#login" className="btn btn-login">Login</a>
          <a href="#register" className="btn btn-register">Register</a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <a href="/" className="navbar-logo" onClick={toggleMobileMenu}>
            <img src={logoImg} alt="GigDial Logo" className="navbar-logo-img" />
          </a>
          <button
            className="drawer-close"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul className="mobile-links">
          <li>
            <a href="#home" className="mobile-link active" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="mobile-link" onClick={toggleMobileMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#customers" className="mobile-link" onClick={toggleMobileMenu}>
              For Customers
            </a>
          </li>
          <li>
            <a href="#professionals" className="mobile-link" onClick={toggleMobileMenu}>
              For Professionals
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="mobile-link" onClick={toggleMobileMenu}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#about" className="mobile-link" onClick={toggleMobileMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-link" onClick={toggleMobileMenu}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="mobile-actions">
          <a href="#login" className="btn btn-login" onClick={toggleMobileMenu}>
            Login
          </a>
          <a href="#register" className="btn btn-register" onClick={toggleMobileMenu}>
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
