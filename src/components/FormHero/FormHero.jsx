import React from "react";
import "./formHero.css";
import hello from '../../img/image 9.png';

const FormHero = () => {
  return (
    <div className="formHero-section" id="section4">
      <div className="formHero-container">
      <img src={hello} alt={hello} />
        <div className="formHero-title">
          <h4>Say Hello</h4>
          <h2>Get in Touch</h2>
        </div>
        <div className="formHero-form">
          <form>
            <div className="input-table">
              <div className="input-row">
                <div className="input-column">
                  <label> First Name</label>
                  <input type="text" placeholder="Your First Name" />
                </div>
                <div className="input-column">
                  <label> Last Name</label>
                  <input type="text" placeholder="Your Last Name" />
                </div>
              </div>
              <div className="input-row">
                <div className="input-column">
                  <label> Mail</label>
                  <input type="text" placeholder="Your Mail" />
                </div>
                <div className="input-column">
                  <label> Phone Number</label>
                  <input type="text" placeholder="Your Phone Number" />
                </div>
              </div>
            </div>
            <div className="input-form">
              <label> Subject</label>
              <input type="text" placeholder="Enter Subject" />
            </div>
            <div className="input-form">
              <label> Message</label>
              <textarea type="text" placeholder="Enter Message" />
            </div>
            <input type="submit" placeholder="Type Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormHero;
