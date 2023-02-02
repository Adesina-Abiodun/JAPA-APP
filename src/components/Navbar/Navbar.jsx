import React, { useState, useEffect } from "react";
import logo from "../../img/logo-nav.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  /* simply a temporary navigation for the single page,
  suggest you use routing and state management when scaling */
  useEffect(() => {
    const handleChange = () => {
      const elementId = window.location.hash.slice(1);
      const element = document.getElementById(elementId);
      if(element){
        element.scrollIntoView();
      }
    };
    window.addEventListener('hashchange', handleChange);
    return () => {
      window.removeEventListener('hashchange', handleChange);
    }
  }, []);
  return (
    <div className="nav-section">
      <nav>
        <div className="nav-title">
          <img loading="lazy" src={logo} alt={logo} />
        </div>
        <div className="nav-link">
          <ul className={click ? "nav-menu actives" : "nav-menu"}>
            <li>
              {/* replace with Link */}
              <a href="#section1">
                <p className="active">Home</p>
              </a>
            </li>
            <li>
              <a href="#section2">
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="#section3">
                <p>How it works</p>
              </a>
            </li>
            <li>
              <a href="#section4">
                <p>Features</p>
              </a>
            </li>
            <li>
              <a href="#section5">
                <p>Contacts</p>
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#59CC7F" }} />
            ) : (
              <FaBars size={30} style={{ color: "#59CC7F" }} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
