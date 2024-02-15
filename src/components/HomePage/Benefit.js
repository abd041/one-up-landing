import React from "react";
import "./Benefit.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import arrow from "../../assets/dark/Homepage/arrow-right.png";
import arrowlight from "../../assets/light/arrowlight.png";
import money from "../../assets/dark/Homepage/money-send.png";
import moneyLight from "../../assets/light/money-send.png";
import play from "../../assets/dark/Homepage/play.png";
import playLight from "../../assets/light/play-cricle.png";
import eye from "../../assets/dark/Homepage/eye.png";
import setting from "../../assets/dark/Homepage/setting.png";
import eyelight from "../../assets/light/eye.png";
import settingLight from "../../assets/light/setting-5.png";
const Benefit = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="">
        <Container>
          <Row className="benefit-main-wrapper-first">
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-heading"
                      : "benefit-left-heading-white"
                  }
                >
                  <h1>Enjoy 0% fees</h1>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-desc"
                      : "benefit-left-desc-white"
                  }
                >
                  <p>
                    No more performance, management or hidden fees that erode
                    your wealth
                  </p>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-btn-main-wrapper"
                      : "benefit-btn-main-wrapper-white"
                  }
                >
                  <button>
                    Start Saving Now{" "}
                    <img src={theme === "dark" ? arrow : arrowlight} />
                  </button>
                </div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "benefits-right-button"
                    : "benefits-right-button-white"
                }
              >
                <img src={theme === "dark" ? money : moneyLight} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="benefit-main-wrapper">
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-heading"
                      : "benefit-left-heading-white"
                  }
                >
                  <h1>Manage your portfolio hands-free</h1>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-desc"
                      : "benefit-left-desc-white"
                  }
                >
                  <p>
                    See real-time actions as we actively buy and sell equities,
                    making your portfolio effortlessly stay on course
                  </p>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-btn-main-wrapper"
                      : "benefit-btn-main-wrapper-white"
                  }
                >
                  <button>
                    Automate Your Investments{" "}
                    <img src={theme === "dark" ? arrow : arrowlight} />
                  </button>
                </div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "benefits-right-button"
                    : "benefits-right-button-white"
                }
              >
                <img src={theme === "dark" ? play : playLight} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="benefit-main-wrapper">
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-heading"
                      : "benefit-left-heading-white"
                  }
                >
                  <h1>Welcome control and transparency</h1>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-desc"
                      : "benefit-left-desc-white"
                  }
                >
                  <p>
                    Enjoy the liberty to start and stop at will, with no
                    minimums, in the comfort of your brokerage account{" "}
                  </p>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-btn-main-wrapper"
                      : "benefit-btn-main-wrapper-white"
                  }
                >
                  <button>
                    Step Into Control{" "}
                    <img src={theme === "dark" ? arrow : arrowlight} />
                  </button>
                </div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "benefits-right-button"
                    : "benefits-right-button-white"
                }
              >
                <img src={theme === "dark" ? eye : eyelight} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="benefit-main-wrapper">
            <Col className="d-flex flex-md-row flex-column justify-content-md-between flex-column-reverse align-items-md-center">
              <div className="benefits-left-main-heading">
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-heading"
                      : "benefit-left-heading-white"
                  }
                >
                  <h1>Invest with purpose</h1>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-left-desc"
                      : "benefit-left-desc-white"
                  }
                >
                  <p>
                    Shape your portfolio to reflect your preferences and values.{" "}
                  </p>
                </div>
                <div
                  className={
                    theme === "dark"
                      ? "benefit-btn-main-wrapper"
                      : "benefit-btn-main-wrapper-white"
                  }
                >
                  <button>
                    Tailor your portfolio{" "}
                    <img src={theme === "dark" ? arrow : arrowlight} />
                  </button>
                </div>
              </div>
              <div
                className={
                  theme === "dark"
                    ? "benefits-right-button"
                    : "benefits-right-button-white"
                }
              >
                <img src={theme === "dark" ? setting : settingLight} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Benefit;
