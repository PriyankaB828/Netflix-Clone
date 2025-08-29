import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBell, FaCaretDown, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleLanguageToggle = () => {
    setShowLanguages((prev) => !prev);
  };

  const handleLanguageSelect = (language) => {
    console.log("Selected Language:", language);
    setShowLanguages(false);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img
          src="/src/assets/logo.png"
          alt="Netflix Logo"
          className="netflix-logo"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>

          <li
            className={`dropdown-wrapper ${showLanguages ? "open" : ""}`}
            onClick={handleLanguageToggle}
          >
            Browse by Languages
            <FaCaretDown style={{ marginLeft: "6px" }} />
            {showLanguages && (
              <ul className="dropdown-menu">
                <li onClick={(e) => { e.stopPropagation(); handleLanguageSelect("Hindi"); }}>Hindi</li>
                <li onClick={(e) => { e.stopPropagation(); handleLanguageSelect("English"); }}>English</li>
                <li onClick={(e) => { e.stopPropagation(); handleLanguageSelect("Kannada"); }}>Kannada</li>
                <li onClick={(e) => { e.stopPropagation(); handleLanguageSelect("Telugu"); }}>Telugu</li>
                <li onClick={(e) => { e.stopPropagation(); handleLanguageSelect("Others"); }}>Others</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <FaSearch className="icons" />
        <p>Children</p>
        <FaBell className="icons" />
        <div className="navbar-profile">
          <FaUser className="profile" />
          <FaCaretDown className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
