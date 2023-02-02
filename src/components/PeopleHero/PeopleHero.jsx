import React from "react";
import "./peopleHero.css";
import people from "../../img/image 11.png";

const PeopleHero = () => {
  return (
    <div className="peopleHero-section" id="section4">
      <div className="peopleHero-container">
        <div className="peopleHero-title">
          <h2>What People Say</h2>
          <img loading='lazy' src={people} alt={people} />
        </div>
        <div className="peopleHero-card-container">
          <div className="peopleHero-card">
            <div className="peopleHero-circle">
              <h3>G.O</h3>
            </div>
            <div className="peopleHero-text">
              <p>
                "I love the app idea, i am really looking forward to knowing
                more about it. i feel it would be very important innovation.Good
                work!"
              </p>
            </div>
          </div>

          <div className="peopleHero-card middle">
            <div className="peopleHero-circle">
              <h3>G.O</h3>
            </div>
            <div className="peopleHero-text">
              <p>
                "I love the app idea, i am really looking forward to knowing
                more about it. i feel it would be very important innovation.Good
                work!"
              </p>
            </div>
          </div>

          <div className="peopleHero-card">
            <div className="peopleHero-circle">
              <h3>G.O</h3>
            </div>
            <div className="peopleHero-text">
              <p>
                "I love the app idea, i am really looking forward to knowing
                more about it. i feel it would be very important innovation.Good
                work!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleHero;
