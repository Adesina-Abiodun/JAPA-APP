import React from "react";
import "./hero.css";
import phone from '../../img/iPhone 13 Prophone.png';
import plane from '../../img/plane.png'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <aside className="hero-text">
          <div className="hero-text-container">
            <img loading='lazy' src={plane} alt={plane} />
            <h3>Introducing Japa</h3>
            <h1>
              Providing the best steps on moving{" "}
              <span style={{ color: "var(--primary" }}>Abroad</span>
            </h1>
            <p>
              Get all informations you need to travel out and process involved.
              To assist People who intend to either study abroad, go on vacation
              or work outside the country.
            </p>
            <input type="text" placeholder="Enter Mail" />
            <button className="hero-btn">
                Join Waitlist
            </button>
          </div>
        </aside>
        <aside className="hero-img">
            <div className="hero-img-container">
                <img loading='lazy' src={phone} alt={phone} />
            </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
