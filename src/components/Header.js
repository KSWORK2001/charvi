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
          <Link to="/charvi/memoirs" className="dropdown-toggle">Letters</Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/month">First Month</Link>
              <Link to="/letter2">Charvi's Poems</Link>
              <Link to="/letter3">Letter 3</Link>
            </div>
          )}
        </div>
        <Link to="/charvi/timeline">Timeline</Link>
        <Link to="/charvi/memories">Memories</Link>
        <Link to="/charvi/photos-videos">Photos/Videos</Link>
        <Link to="/charvi/tug-of-war">Tug of War</Link>
      </nav>
    </header>
  );
};

export default Header;
