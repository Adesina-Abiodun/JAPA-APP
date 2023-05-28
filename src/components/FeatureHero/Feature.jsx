import React from "react";
import { NavLink } from "react-router-dom";
import "./feature.css";
import info from "../../img/information.png";
import bot from "../../img/image 12.png";
import arrow from "../../img/Arrow 1.png";
import plane from "../../img/flight.png";
import card2Img from "../../img/_cce25d4b-4624-4be5-8385-568e6a0148f6 1.png";
import laptop from "../../img/_cbdd15df-6395-45c5-a4ec-625ef815fcd1.png";
import bag from "../../img/_8b84169f-001c-464e-9e8b-a68c44c0614f 1.png";
import handUp from "../../img/_ffb1ada7-847f-495a-aa03-a3bcee8b37f8.png"

const Solution = () => {
  return (
    <div className="feature-section" id="section3">
      <div className="inner-box">
        <div className="cards">
          <div className="inner-card">
            <p className="small-title">MAKING IT EASY FOR ALL</p>
            <p className="solution">OUR SOLUTION</p>
            <div className="arrow">
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="inner-card">
            <div className="card-head">
              <img src={card2Img} alt="" />
              <p className="cardNum">01</p>
            </div>
            <div className="card-title">
              <p className="solution title">EDUCATION OPPORTUNITIES ABROAD</p>
            </div>
            <div className="card-details">
              <p>
                Explore the world while earning an education. JAPA's resources
                help you discover the best universities, language programs, and
                study abroad options to help you gain new perspectives and open
                up new career opportunities.
              </p>
            </div>
          </div>
          <div className="arrow">
            <img src={arrow} alt="" className="arrow1" />
          </div>
        </div>
        <div className="cards">
          <div className="inner-card">
            <div className="card-head">
              <img src={laptop} alt="" />
              <p className="cardNum">02</p>
            </div>
            <div className="card-title">
              <p className="solution title">WORK ABROAD RESOURCES</p>
            </div>
            <div className="card-details">
              <p>
                Take your career to new heights with JAPA's work abroad
                resources. Our platform connects you to job opportunities,
                industry-specific information, and career development resources
                to help you advance your career on a global scale.
              </p>
            </div>
          </div>
          <div className="arrow arrow2">
            <img src={arrow} alt="" className="arrow-2" />
          </div>
        </div>
        <div className="cards">
        <NavLink className="join-waitlist">JOIN WAITLIST</NavLink>
        </div>
        <div className="cards">
          <div className="inner-card">
            <div className="card-head">
              <img src={bag} alt="" />
              <p className="cardNum">03</p>
            </div>
            <div className="card-title">
              <p className="solution title">VACATION PALLNING ASSISTANCE</p>
            </div>
            <div className="card-details">
              <p>
                Create unforgettable memories with JAPA's vacation planning
                assistance. Our travel guides, accommodation options, and
                itinerary planners help you design the perfect trip, whether
                you're traveling solo or with family and friends.
              </p>
            </div>
          </div>
          <div className="arrow">
            <img src={arrow} alt="" className="arrow-3" />
          </div>
        </div>
        <div className="cards">
          <div className="inner-card">
            <div className="card-head">
              <img src={handUp} alt="" />
              <p className="cardNum">04</p>
            </div>
            <div className="card-title">
              <p className="solution title">MEDICAL ASSISTANCE RESOURCES</p>
            </div>
            <div className="card-details">
              <p>
                Stay healthy and safe while abroad with JAPA's medical
                assistance resources. Our platform provides information on
                health insurance, medical facilities, and emergency services to
                help you access the care you need in case of any unexpected
                situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
