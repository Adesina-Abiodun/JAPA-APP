import React from "react";
import "./feature.css";
import info from "../../img/information.png";
import bot from "../../img/image 12.png";
import plane from '../../img/flight.png';

const Feature = () => {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <div className="feature-title">
          <h2>Features</h2>
        </div>
        <div className="feature-table">
          <div className="feature-row">
            <div className="feature-icon">
              <img src={info} alt={info} />
            </div>
            <div className="feature-text">
              <h3>Get Info</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-icon">
              <img src={bot} alt={bot} />
            </div>
            <div className="feature-text">
              <h3 style={{ color: "var(--primary" }}>Chat with Bot</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-icon">
              <img src={plane} alt={plane} />
            </div>
            <div className="feature-text">
              <h3>Get Info</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
