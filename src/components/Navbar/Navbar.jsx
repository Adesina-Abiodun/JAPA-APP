import React, { useState } from "react";
import logo from "../../img/logo-nav.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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
              <span>
                <p className="active">Home</p>
              </span>
            </li>
            <li>
              <span>
                <p>About</p>
              </span>
            </li>
            <li>
              <span>
                <p>How it works</p>
              </span>
            </li>
            <li>
              <span>
                <p>Features</p>
              </span>
            </li>
            <li>
              <span>
                <p>Contacts</p>
              </span>
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
