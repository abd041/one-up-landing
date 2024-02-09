import React from "react";
import "./Step.css";
import { Container, Row, Col } from "react-bootstrap";
import C1 from "../../assets/dark/Homepage/c1.png";
import one from "../../assets/dark/Homepage/one.png";
import star from "../../assets/dark/Homepage/star.png";
import two from "../../assets/dark/Homepage/two.png";
import C2 from "../../assets/dark/Homepage/c2.png";
import connect from "../../assets/dark/Homepage/connect.png";
import three from "../../assets/dark/Homepage/three.png";
import c3 from "../../assets/dark/Homepage/c3.png";
import th from "../../assets/dark/Homepage/th.png";
const Step = () => {
  return (
    <Container>
      <div className="step-main-wrapper">
        <Row>
          <Col className="d-flex d-lg-block justify-content-center">
            <div className="step-main-heading">
              <h4>Get Started in 3 Simple Steps</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <div>
              <div className="step-cards-wrapper">
                <div className="step-card-one-heading">
                  <img src={one} />
                </div>
                <img src={C1} alt="..." />
              </div>
              <div className="step-card-down-heading d-flex align-items-center">
                <img src={star} alt="..." />
                <h1>Select your strategy</h1>
              </div>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div>
              <div className="step-cards-wrapper">
                <div className="step-card-one-heading">
                  <img src={two} />
                </div>
                <img src={C2} alt="..." />
              </div>
              <div className="step-card-down-heading d-flex align-items-center">
                <img src={connect} alt="..." />
                <h1>Connect your brokerage account</h1>
              </div>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div>
              <div className="step-cards-wrapper">
                <div className="step-card-one-heading">
                  <img src={three} />
                </div>
                <img src={c3} alt="..." />
              </div>
              <div className="step-card-down-heading d-flex align-items-center">
                <img src={th} alt="..." />
                <h1>Automatically track your favourite fund</h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Step;
