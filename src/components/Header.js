import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="names">
        <Link to="/about-Charvi" className="charvi">Charvi</Link>.<Link to="/about-Karan" className="karan">Karan</Link>
      </div>
      <nav className="nav-links">
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link to="/" className="dropdown-toggle">Letters</Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/">First Month</Link>
              <Link to="/letters/letter2">Letter 2</Link>
              <Link to="/letters/letter3">Letter 3</Link>
            </div>
          )}
        </div>
        <Link to="/timeline">Timeline</Link>
        <Link to="/memories">Memories</Link>
        <Link to="/photos-videos">Photos/Videos</Link>
        <Link to="/tug-of-war">Tug of War</Link>
      </nav>
    </header>
  );
};

export default Header;
