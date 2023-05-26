import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? 'navbar open' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutpage" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/brandspage" className="navbar-link">
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
