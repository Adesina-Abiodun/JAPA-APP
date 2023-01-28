import React from "react";
import logo from "../../img/logo-nav.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-section">
      <nav>
        <div className="nav-title">
          <img src={logo} alt={logo} />
        </div>
        <div className="nav-link">
          <ul>
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
              <span><p>How it works</p></span>
            </li>
            <li>
              <span><p>Features</p></span>
            </li>
            <li>
              <span><p>Contacts</p></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
