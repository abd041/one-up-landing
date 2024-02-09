import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./FAQs.css";
import Minus from "../../assets/dark/faqs/minus.png";
import add from "../../assets/dark/faqs/add.png";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/dark/faqs/arrow-down.png";

const FAQs = () => {
  const [showFaq1, setShowFaqs1] = useState(true);
  const [showFaq2, setShowFaqs2] = useState(false);
  const [showFaq3, setShowFaqs3] = useState(false);
  const [showFaq4, setShowFaqs4] = useState(false);
  const [showFaq5, setShowFaqs5] = useState(false);
  return (
    <Row className="faqs-main-row-wrap">
      <Col lg={3} md={8} className="mx-md-auto mx-lg-0">
        <div className="faqs-main-heading">
          <h4>Frequently Asked Questions</h4>
        </div>
      </Col>
      <Col lg={9} md={8} className="mx-md-auto mx-lg-0">
        <div
          className={
            showFaq1
              ? "faqs-content-main-wrapper ms-auto"
              : "faqs-content-main-wrapper-inactive ms-auto"
          }
        >
          <div className="d-flex justify-content-between w-100 faqs-content-main-heading-main-wrapper">
            <div className="faqs-content-main-heading">
              <h4>How do I get started?</h4>
            </div>
            <div>
              <img
                src={showFaq1 ? Minus : add}
                onClick={() => setShowFaqs1(!showFaq1)}
              />
            </div>
          </div>
          <div
            className={
              showFaq1 ? "faqs-text-heading" : "faqs-text-heading-inactive"
            }
          >
            <p>
              Click Sign Up and create an account in under 60 seconds. Connect
              your existing brokerage account. You can invest now in an existing
              strategy or create your own.
            </p>
          </div>
        </div>
        <div
          className={
            showFaq2
              ? "faqs-content-main-wrapper ms-auto"
              : "faqs-content-main-wrapper-inactive ms-auto"
          }
        >
          <div className="d-flex justify-content-between w-100 faqs-content-main-heading-main-wrapper">
            <div className="faqs-content-main-heading">
              <h4>What fees does OneUp charge?</h4>
            </div>
            <div>
              <img
                src={showFaq2 ? Minus : add}
                onClick={() => setShowFaqs2(!showFaq2)}
              />
            </div>
          </div>
          <div
            className={
              showFaq2 ? "faqs-text-heading" : "faqs-text-heading-inactive"
            }
          >
            <p>
              Click Sign Up and create an account in under 60 seconds. Connect
              your existing brokerage account. You can invest now in an existing
              strategy or create your own.
            </p>
          </div>
        </div>

        <div
          className={
            showFaq3
              ? "faqs-content-main-wrapper ms-auto"
              : "faqs-content-main-wrapper-inactive ms-auto"
          }
        >
          <div className="d-flex justify-content-between w-100 faqs-content-main-heading-main-wrapper">
            <div className="faqs-content-main-heading">
              <h4>When will OneUp start making trades for me?</h4>
            </div>
            <div>
              <img
                src={showFaq3 ? Minus : add}
                onClick={() => setShowFaqs3(!showFaq3)}
              />
            </div>
          </div>
          <div
            className={
              showFaq3 ? "faqs-text-heading" : "faqs-text-heading-inactive"
            }
          >
            <p>
              Click Sign Up and create an account in under 60 seconds. Connect
              your existing brokerage account. You can invest now in an existing
              strategy or create your own.
            </p>
          </div>
        </div>

        <div
          className={
            showFaq4
              ? "faqs-content-main-wrapper ms-auto"
              : "faqs-content-main-wrapper-inactive ms-auto"
          }
        >
          <div className="d-flex justify-content-between w-100 faqs-content-main-heading-main-wrapper">
            <div className="faqs-content-main-heading">
              <h4>Where does my money go after I invest with OneUp?</h4>
            </div>
            <div>
              <img
                src={showFaq4 ? Minus : add}
                onClick={() => setShowFaqs4(!showFaq4)}
              />
            </div>
          </div>
          <div
            className={
              showFaq4 ? "faqs-text-heading" : "faqs-text-heading-inactive"
            }
          >
            <p>
              Click Sign Up and create an account in under 60 seconds. Connect
              your existing brokerage account. You can invest now in an existing
              strategy or create your own.
            </p>
          </div>
        </div>
        <div
          className={
            showFaq5
              ? "faqs-content-main-wrapper ms-auto"
              : "faqs-content-main-wrapper-inactive ms-auto"
          }
        >
          <div className="d-flex justify-content-between w-100 faqs-content-main-heading-main-wrapper">
            <div className="faqs-content-main-heading">
              <h4>Can I track multiple strategies?</h4>
            </div>
            <div>
              <img
                src={showFaq5 ? Minus : add}
                onClick={() => setShowFaqs5(!showFaq5)}
              />
            </div>
          </div>
          <div
            className={
              showFaq5 ? "faqs-text-heading" : "faqs-text-heading-inactive"
            }
          >
            <p>
              Click Sign Up and create an account in under 60 seconds. Connect
              your existing brokerage account. You can invest now in an existing
              strategy or create your own.
            </p>
          </div>
        </div>
        <div className={"faqs-content-main-wrapper-inactive ms-auto"}>
          <div className="faqs-main-links">
            <Link to="/">
              SEE ALL FAQ’s{" "}
              <span>
                <img src={arrow_down} />
              </span>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FAQs;
