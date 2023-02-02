import React from "react";
import "./infoHero.css";
import hand from "../../img/image 5.png";
import doc from "../../img/image 7.png";
import sys from "../../img/image 8.png";
import line from "../../img/Line 10.png";

const InfoHero = () => {
  return (
    <div className="infoHero-section" id="section2">
      <div className="infoHero-container">
        <div className="infoHero-title">
          <h2>How It Works</h2>
        </div>
        <div className="infoHero-icon">
          <div className="infoHero-icon-container">
            <img loading='lazy' src={line} alt={line} className="line" />
            <img loading='lazy' src={line} alt={line} className="line-1" />
            {/* going forward, make this a card resuseable component */}
            <div className="infoHero-card">
              <h3 style={{ color: "var(--primary)" }}>
                {" "}
                1. Provide Information
              </h3>
              <img loading='lazy' src={hand} alt={hand} />
              <p>Provide Information on where you want to go</p>
            </div>
            <div className="infoHero-card first">
              <h3 style={{ color: "var(--primary)" }}> 2. View Informations</h3>
              <img loading='lazy' src={doc} alt={doc} />
              <p>View information based on the provided details</p>
            </div>
            <div className="infoHero-card second">
              <h3 style={{ color: "var(--primary)" }}> 3. Acess Services</h3>
              <img loading='lazy' src={sys} alt={sys} />
              <p>Access available services on provided details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
