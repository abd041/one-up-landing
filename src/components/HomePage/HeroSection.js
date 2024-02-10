import React from "react";
import "./Hero.css";
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";

import expert_one from "../../assets/dark/about/expert_one.png";
import expert_two from "../../assets/dark/about/expert_two.png";
import expert_three from "../../assets/dark/about/expert_three.png";
import expert_four from "../../assets/dark/about/expert_four.png";
import expert_five from "../../assets/dark/about/expert_five.png";

import arrow from "../../assets/dark/Homepage/arrow-right.png";
import Line1 from "../../assets/dark/Homepage/line.png";
import Line2 from "../../assets/dark/Homepage/line1.png";
const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "Homepage-Hero-warpper-dark" : ""}>
      <Container>
        <Row>
          <Col>
            <div className="hero-section-main-wrapper mx-auto">
              <div className="hero-lines-wrapper-second">
                {" "}
                <img src={Line2} />
              </div>
              <div className="hero-lines-wrapper">
                <div>
                  <img src={Line1} />
                </div>
              </div>
              <div className="hero-main-heading d-flex justify-content-center">
                <h4>Stop loosing $100,000’s.</h4>
              </div>
              <div className="hero-main-desc  d-flex justify-content-center">
                <p>
                  Choose Any Mutual Fund Strategy - We've Removed All
                  Fees. Plus, Tailor <br /> Your Investments to Match Your
                  Values, All in the Comfort and Control of Your Preferred
                  Brokerage.
                </p>
              </div>
              <div className="hero-section-btn  mx-auto">
                <button>
                  Invest with OneUp <img src={arrow} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="expert-team-hero-section">
          <Col lg={9} className="mx-auto" style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <div className="expert-team-haeding text-center">
                <h1>Our team, decades of expertise</h1>
              </div>
              <div
                className="expert-team-images-wrape"
                style={{ width: "100%" }}
              >
                <div className="expert-team-first-image">
                  <img src={expert_one} alt="..." />
                </div>
                <div>
                  <img src={expert_two} alt="..." />
                </div>
                <div>
                  <img src={expert_three} alt="..." />
                </div>
                <div>
                  <img src={expert_four} alt="..." />
                </div>
                <div className="expert-team-image-five">
                  <img src={expert_five} alt="..." />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
