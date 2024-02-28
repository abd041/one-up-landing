import React from "react";
import "./Step.css";
import { useTheme } from "../../ThemeContext";
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
import one_light from "../../assets/light/one-light.png";
import c1light from "../../assets/light/c1light.png";
import lightStar from "../../assets/light/lightstar.png";
import twolight from "../../assets/light/twolight.png";
import c2light from "../../assets/light/c2light.png";
import connectlight from "../../assets/light/connectlight.png";
import threelight from "../../assets/light/threelight.png";
import c3light from "../../assets/light/c3light.png";
import thlight from "../../assets/light/thlight.png";

import m1 from "../../assets/dark/m1.png";
import m2 from "../../assets/dark/m2.png";
import m3 from "../../assets/dark/m3.png";

const Step = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      <Container>
        <div className="step-main-wrapper">
          <Row>
            <Col className="d-flex d-lg-block justify-content-center">
              <div className="step-main-heading">
                <h4 style={{ color: theme === "dark" ? "#fff" : "#040815" }}>
                  Get Started in 3 Simple Steps
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="d-flex justify-content-center">
              <div>
                <div className="step-cards-wrapper">
                  <div className="step-card-one-heading">
                    <img src={theme === "dark" ? one : one_light} />
                  </div>

                  <img src={theme === "dark" ? C1 : m1} alt="..." />
                </div>
                <div className="step-card-down-heading d-flex align-items-center">
                  <img src={theme === "dark" ? star : lightStar} alt="..." />
                  <h1 style={{ color: theme === "dark" ? "#fff" : "#131825" }}>
                    Select your strategy
                  </h1>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
              <div>
                <div className="step-cards-wrapper">
                  <div className="step-card-one-heading">
                    <img src={theme === "dark" ? two : twolight} />
                  </div>
                  <img src={theme === "dark" ? C2 : m2} alt="..." />
                </div>
                <div className="step-card-down-heading d-flex align-items-center">
                  <img
                    src={theme === "dark" ? connect : connectlight}
                    alt="..."
                  />
                  <h1 style={{ color: theme === "dark" ? "#fff" : "#131825" }}>
                    Connect your brokerage account
                  </h1>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
              <div>
                <div className="step-cards-wrapper">
                  <div className="step-card-one-heading">
                    <img src={theme === "dark" ? three : threelight} />
                  </div>
                  <img src={theme === "dark" ? c3 : m3} alt="..." />
                </div>
                <div className="step-card-down-heading d-flex align-items-center">
                  <img src={theme === "dark" ? th : thlight} alt="..." />
                  <h1 style={{ color: theme === "dark" ? "#fff" : "#131825" }}>
                    Automatically track your favourite fund
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Step;
