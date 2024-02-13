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
import team1 from "../../assets/light/team1.png"
import team2 from "../../assets/light/team2.png"
import team3 from "../../assets/light/team3.png"
import team4 from "../../assets/light/team4.png"
import team5 from "../../assets/light/team5.png"
const Hero = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "dark"
          ? "Homepage-Hero-warpper-dark"
          : "Homepage-Hero-warpper-dark-light"
      }
    >
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
                <h4
                  className={
                    theme === "dark"
                      ? "hero-main-heading-dark"
                      : "hero-main-heading-light"
                  }
                >
                  Stop loosing $100,000s.
                </h4>
              </div>
              <div className="hero-main-desc  d-flex justify-content-center">
                <p style={{ color: theme === "dark" ? "#b7b7b7" : "#4A537D" }}>
                  Choose Any Mutual Fund Strategy - We've Removed All
                  Fees. Plus, Tailor <br /> Your Investments to Match Your
                  Values, All in the Comfort and Control of Your Preferred
                  Brokerage.
                </p>
              </div>
              <div className="hero-section-btn  mx-auto">
                <button
                  className={
                    theme === "dark"
                      ? "hero-invset-btn"
                      : "hero-invset-btn-light"
                  }
                >
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
                <div>
                  <img src={ theme === "dark" ? expert_one : team1} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_two : team2} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_three : team3} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_four : team4} alt="..." />
                </div>
                <div>
                  <img src={theme === "dark" ? expert_five : team5} alt="..." />
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
