import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <div className="img">
      <img className="logo" src="../../../images/icon.png" alt="Logo" />
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/aboutpage">Our Company</a>
        <a href="/brandspage">Brands</a>
        <a href="/#">Sustainability</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
