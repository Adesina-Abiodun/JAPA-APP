import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./faqs.css";
import QuestionImg from "../../img/pexels-leeloo-thefirst-5428835-removebg-preview 1.png";

const FAQ = () => {
 
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleAccordion = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="FAQ">
      <div className="inner-faq">
        <div className="question-tag">
          <img src={QuestionImg} alt="" />
        </div>
        <div className="question-section">
          <div className="inner-section">
            <h2 className="section-title">
              FREQUENTLY ASKED <span className="question">QUESTIONS</span>
            </h2>
            <div className="nav-link">
              <ul>
                <li>
                  <NavLink to="" exact className="links">
                    General
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" activeClassName="active" className="links">
                    Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" activeClassName="active" className="links">
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" activeClassName="active" className="links">
                    Refund
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" activeClassName="active" className="links">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div
              class="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                     className={`accordion-button ${
                      expandedItems.includes(1) ? "expanded" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded={expandedItems.includes(1)}
                    aria-controls="panelsStayOpen-collapseOne"
                    onClick={() => toggleAccordion(1)}
                  >
                    <strong className="japa">01 WHAT IS JAPA?</strong>
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    expandedItems.includes(1) ? "show" : ""
                  }`}
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>
                      JAPA is a comprehensive platform that provides the
                      information and resources you need to explore the world
                      and make your international dreams a reality, including
                      education opportunities, work abroad, vacation planning,
                      and medical assistance. We believe in making your
                      international journey seamless and stress-free, and our
                      dedicated team is committed to providing you with accurate
                      and up-to-date information to ensure your success.
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                  className={`accordion-button ${
                    expandedItems.includes(2) ? "expanded" : ""
                  }`}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded={expandedItems.includes(2)}
                    aria-controls="panelsStayOpen-collapseTwo"
                    onClick={() => toggleAccordion(2)}
                  >
                    <strong className="japa">
                      02 What kind of services can JAPA offer?
                    </strong>
                  </button>
                </h2>
                <div
                 className={`accordion-collapse collapse ${
                  expandedItems.includes(2) ? "show" : ""
                }`}
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                   className={`accordion-button ${
                    expandedItems.includes(3) ? "expanded" : ""
                  }`}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded={expandedItems.includes(3)}
                    onClick={() => toggleAccordion(3)}
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <strong className="japa">03 How does JAPA work?</strong>
                  </button>
                </h2>
                <div
                 className={`accordion-collapse collapse ${
                  expandedItems.includes(3) ? "show" : ""
                }`}
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                   className={`accordion-button ${
                    expandedItems.includes(4) ? "expanded" : ""
                  }`}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded={expandedItems.includes(4)}
                    onClick={() => toggleAccordion(4)}
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    <strong className="japa"> 04 Why do I need JAPA?</strong>
                  </button>
                </h2>
                <div
                 className={`accordion-collapse collapse ${
                  expandedItems.includes(4) ? "show" : ""
                }`}
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                   className={`accordion-button ${
                    expandedItems.includes(5) ? "expanded" : ""
                  }`}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded={expandedItems.includes(5)}
                    onClick={() => toggleAccordion(5)}
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    <strong className="japa">
                    
                      05 Can JAPA help me find job opportunities abroad?
                    </strong>
                  </button>
                </h2>
                <div
                className={`accordion-collapse collapse ${
                  expandedItems.includes(5) ? "show" : ""
                }`}
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
