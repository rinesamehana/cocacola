import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const getActivePageClass = (pathname) => {
    if (pathname === "/fantapage") {
      return "active-fanta";
    } 
    
    if (pathname === "/spritepage") {
      return "active-sprite";
    } 
    if (pathname === "/fuzeteapage") {
      return "active-fuzetea";
    } 
    if (pathname === "/schweppespage") {
      return "active-schweppes";
    } 

    if (pathname === "/cielpage") {
      return "active-ciel";
    } 
    
    
    return ""; 
  };

  const activePageClass = getActivePageClass(location.pathname);

  return (
    <header className={activePageClass} ref={navRef}>
      <div className="img">
        <img className="logo" src="../../../images/icon.png" alt="Logo" />
      </div>
      <nav>
        <a href="/#">Home</a>
        <a href="/aboutpage">Our Company</a>
        <a href="/brandspage">Brands</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
