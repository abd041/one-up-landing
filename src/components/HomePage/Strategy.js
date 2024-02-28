import React from "react";
import "./Strategy.css";
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import card_bg from "../../assets/dark/Homepage/card_bg.png";
import stars from "../../assets/dark/Homepage/5star.png";
import arrowdown from "../../assets/dark/Homepage/arrow-down.png";
import star_white from "../../assets/light/star_white.png";
const Strategy = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="strategy-main-wrapper">
        <Container>
          <Row>
            <Col className="d-md-block d-flex justify-content-center">
              <div className="strategy-main-heading">
                <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                  Discover Some Strategies
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="d-md-block d-flex justify-content-center">
              <div
                className={
                  theme === "dark"
                    ? "strategy-card-first-main-wrapper"
                    : "strategy-card-first-main-wrapper-white"
                }
              >
                <div
                  className={
                    theme === "dark"
                      ? "strategy-card-main-wrapper"
                      : "strategy-card-main-wrapper-light"
                  }
                >
                  <div className="strategy-card-second-main-wrapper">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="card-fisrt-heading">
                          <h4
                            style={{
                              color: theme === "dark" ? "#fff" : "#596780",
                            }}
                          >
                            FSELX
                          </h4>
                        </div>
                        <div className="card-second-heading">
                          <h5
                            style={{
                              color: theme === "dark" ? "#afff48" : "#659711",
                            }}
                          >
                            +50% (1Y)
                          </h5>
                        </div>
                      </div>
                      <div className="card-main-start">
                        <img src={theme === "dark" ? stars : star_white} />
                      </div>
                    </div>
                  </div>
                  <div className="strategy-card-bottom">
                    <div className="strategy-card-bottom-heading">
                      <h4>Fidelity Select Semiconductors</h4>
                    </div>
                    <div className="startegy-card-btn">
                      <img src={arrowdown} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-md-block d-flex justify-content-center">
              <div
                className={
                  theme === "dark"
                    ? "strategy-card-first-main-wrapper"
                    : "strategy-card-first-main-wrapper-white"
                }
              >
                <div
                  className={
                    theme === "dark"
                      ? "strategy-card-main-wrapper-two"
                      : "strategy-card-main-wrapper-two-light"
                  }
                >
                  <div className="strategy-card-second-main-wrapper">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="card-fisrt-heading">
                          <h4
                            style={{
                              color: theme === "dark" ? "#fff" : "#596780",
                            }}
                          >
                            TRLGX
                          </h4>
                        </div>
                        <div className="card-second-heading">
                          <h5
                            style={{
                              color: theme === "dark" ? "#afff48" : "#659711",
                            }}
                          >
                            +42% (1Y)
                          </h5>
                        </div>
                      </div>
                      <div className="card-main-start">
                        <img src={theme === "dark" ? stars : star_white} />
                      </div>
                    </div>
                  </div>
                  <div className="strategy-card-bottom">
                    <div className="strategy-card-bottom-heading">
                      <h4>T. Rowe Price Large Cap Growth</h4>
                    </div>
                    <div className="startegy-card-btn">
                      <img src={arrowdown} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-md-block d-flex justify-content-center">
              <div
                className={
                  theme === "dark"
                    ? "strategy-card-first-main-wrapper"
                    : "strategy-card-first-main-wrapper-white"
                }
              >
                <div
                  className={
                    theme === "dark"
                      ? "strategy-card-main-wrapper-three"
                      : "strategy-card-main-wrapper-three-light"
                  }
                >
                  <div className="strategy-card-second-main-wrapper">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="card-fisrt-heading">
                          <h4
                            style={{
                              color: theme === "dark" ? "#fff" : "#596780",
                            }}
                          >
                            GOODX{" "}
                          </h4>
                        </div>
                        <div className="card-second-heading">
                          <h5
                            style={{
                              color: theme === "dark" ? "#afff48" : "#659711",
                            }}
                          >
                            +26% (1Y)
                          </h5>
                        </div>
                      </div>
                      <div className="card-main-start">
                        <img src={theme === "dark" ? stars : star_white} />
                      </div>
                    </div>
                  </div>
                  <div className="strategy-card-bottom">
                    <div className="strategy-card-bottom-heading">
                      <h4
                        style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                      >
                        GoodHaven Small Cap Value
                      </h4>
                    </div>
                    <div className="startegy-card-btn">
                      <img src={arrowdown} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Strategy;
