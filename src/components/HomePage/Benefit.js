import React from "react";
import "./Benefit.css";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../../assets/dark/Homepage/arrow-right.png";
import money from "../../assets/dark/Homepage/money-send.png";
import play from "../../assets/dark/Homepage/play.png";
import eye from "../../assets/dark/Homepage/eye.png";
import setting from "../../assets/dark/Homepage/setting.png";
const Benefit = () => {
  return (
    <div>
      <div className="benefit-main-wrapper">
        <Container>
          <Row>
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div className="benefit-left-heading">
                  <h1>Enjoy 0% fees</h1>
                </div>
                <div className="benefit-left-desc">
                  <p>
                    No more performance, management or hidden fees that erode
                    your wealth
                  </p>
                </div>
                <div className="benefit-btn-main-wrapper">
                  <button>
                    Start Saving Now <img src={arrow} />
                  </button>
                </div>
              </div>
              <div className="benefits-right-button">
                <img src={money} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="benefit-main-wrapper">
        <Container>
          <Row>
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div className="benefit-left-heading">
                  <h1>Manage your portfolio hands-free</h1>
                </div>
                <div className="benefit-left-desc">
                  <p>
                    See real-time actions as we actively buy and sell equities,
                    making your portfolio effortlessly stay on course
                  </p>
                </div>
                <div className="benefit-btn-main-wrapper">
                  <button>
                    Automate Your Investments <img src={arrow} />
                  </button>
                </div>
              </div>
              <div className="benefits-right-button">
                <img src={play} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="benefit-main-wrapper">
        <Container>
          <Row>
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div className="benefit-left-heading">
                  <h1>Welcome control and transparency</h1>
                </div>
                <div className="benefit-left-desc">
                  <p>
                    Enjoy the liberty to start and stop at will, with no
                    minimums, in the comfort of your brokerage account{" "}
                  </p>
                </div>
                <div className="benefit-btn-main-wrapper">
                  <button>
                    Step Into Control <img src={arrow} />
                  </button>
                </div>
              </div>
              <div className="benefits-right-button">
                <img src={eye} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="benefit-main-wrapper">
        <Container>
          <Row>
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div className="benefit-left-heading">
                  <h1>Invest with purpose</h1>
                </div>
                <div className="benefit-left-desc">
                  <p>
                    Shape your portfolio to reflect your preferences and values.{" "}
                  </p>
                </div>
                <div className="benefit-btn-main-wrapper">
                  <button>
                    Automate Your Investments <img src={arrow} />
                  </button>
                </div>
              </div>
              <div className="benefits-right-button">
                <img src={setting} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Benefit;
