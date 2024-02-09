import React from "react";
import "./Strategy.css";
import { Container, Row, Col } from "react-bootstrap";
import card_bg from "../../assets/dark/Homepage/card_bg.png";
import stars from "../../assets/dark/Homepage/5star.png";
import arrowdown from "../../assets/dark/Homepage/arrow-down.png";
const Strategy = () => {
  return (
    <div className="strategy-main-wrapper">
      <Container>
        <Row>
          <Col className="d-md-block d-flex justify-content-center">
            <div className="strategy-main-heading">
              <h4>Discover Some Strategies</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="d-md-block d-flex justify-content-center">
            <div className="strategy-card-first-main-wrapper">
              <div className="strategy-card-main-wrapper">
                <div className="strategy-card-second-main-wrapper">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="card-fisrt-heading">
                        <h4>FSELX</h4>
                      </div>
                      <div className="card-second-heading">
                        <h5>+50% (1Y)</h5>
                      </div>
                    </div>
                    <div className="card-main-start">
                      <img src={stars} />
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
            <div className="strategy-card-first-main-wrapper">
              <div className="strategy-card-main-wrapper-two">
                <div className="strategy-card-second-main-wrapper">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="card-fisrt-heading">
                        <h4>TRLGX</h4>
                      </div>
                      <div className="card-second-heading">
                        <h5>+42% (1Y)</h5>
                      </div>
                    </div>
                    <div className="card-main-start">
                      <img src={stars} />
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
            <div className="strategy-card-first-main-wrapper">
              <div className="strategy-card-main-wrapper-three">
                <div className="strategy-card-second-main-wrapper">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="card-fisrt-heading">
                        <h4>GOODX </h4>
                      </div>
                      <div className="card-second-heading">
                        <h5>+26% (1Y)</h5>
                      </div>
                    </div>
                    <div className="card-main-start">
                      <img src={stars} />
                    </div>
                  </div>
                </div>
                <div className="strategy-card-bottom">
                  <div className="strategy-card-bottom-heading">
                    <h4>GoodHaven Small Cap Value</h4>
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
  );
};

export default Strategy;
