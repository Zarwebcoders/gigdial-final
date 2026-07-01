import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

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
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="GigDial Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Menu Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link active">Home</Link>
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
            <Link to="/require-worker" className="nav-link">Require Worker</Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Language Selector Dropdown */}
          <div className="lang-select-container">
            <button className="lang-select-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
              🌐 {language} <span className="lang-arrow">▼</span>
            </button>
            {isLangOpen && (
              <div className="lang-select-options">
                <button className={language === 'EN' ? 'active' : ''} onClick={() => { setLanguage('EN'); setIsLangOpen(false); }}>English</button>
                <button className={language === 'HI' ? 'active' : ''} onClick={() => { setLanguage('HI'); setIsLangOpen(false); }}>हिंदी</button>
                <button className={language === 'GU' ? 'active' : ''} onClick={() => { setLanguage('GU'); setIsLangOpen(false); }}>ગુજરાતી</button>
              </div>
            )}
          </div>
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
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
          <Link to="/" className="navbar-logo" onClick={toggleMobileMenu}>
            <img src={logoImg} alt="GigDial Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <ul className="mobile-links">
          <li>
            <Link to="/" className="mobile-link active" onClick={toggleMobileMenu}>
              Home
            </Link>
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
            <Link to="/require-worker" className="mobile-link" onClick={toggleMobileMenu}>
              Require Worker
            </Link>
          </li>
        </ul>
        {/* Mobile Language Selector */}
        <div className="mobile-lang-section">
          <span className="mobile-lang-label">Language:</span>
          <div className="mobile-lang-buttons">
            <button className={language === 'EN' ? 'active' : ''} onClick={() => { setLanguage('EN'); toggleMobileMenu(); }}>EN</button>
            <button className={language === 'HI' ? 'active' : ''} onClick={() => { setLanguage('HI'); toggleMobileMenu(); }}>HI</button>
            <button className={language === 'GU' ? 'active' : ''} onClick={() => { setLanguage('GU'); toggleMobileMenu(); }}>GU</button>
          </div>
        </div>
        <div className="mobile-actions">
          <Link to="/login" className="btn btn-login" onClick={toggleMobileMenu}>
            Login
          </Link>
          <Link to="/register" className="btn btn-register" onClick={toggleMobileMenu}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
