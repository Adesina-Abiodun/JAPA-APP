import React from "react";
import "./footer.css";
import logo from "../../img/logo.png";
import twitter from '../../img/Vector (2).png';
import insta from '../../img/Vector (1).png';
import face from '../../img/Group (2).png';
import Lin from '../../img/akar-icons_linkedin-box-fill.png';


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-icon">
          <img src={logo} alt={logo} />
          <p>
            Get all informations you need to travel out and process involved.
          </p>
        </div>
        <div className="footer-link">
            <h3>Quick Links</h3>
            <ul>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>About</span>
                </li>
                <li>
                    <span>Explore</span>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </div>
        <div className="footer-contact">
            <h3>Contact</h3>
            <p>No 30A Palmgroove, Lagos state</p>
            <h5>Japahow@gmail.com</h5>
        </div>
        <div className="footer-connect">
            <h3>Connect with Us</h3>
            <div className="footer-icons">
                <img src={twitter} alt={twitter} />
                <img src={insta} alt={insta} />
                <img src={Lin} alt={Lin} />
                <img src={face} alt={face} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
