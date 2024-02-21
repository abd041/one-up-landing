import React from "react";
import "./JoinNow.css";
import arrowRight from "../../assets/dark/Join_Now/arrow-right.png";
import { Row, Col } from "react-bootstrap";
import Join_now_image from "../../assets/dark/Join_Now/join_now_image.png";
import { useTheme } from "../../ThemeContext";
export const JoinNow = () => {
  const { theme } = useTheme();
  return (
    <div className={ theme === "dark" ? "Join_now_main_wrapper" :"Join_now_main_wrapper-light"}>
      <Row className="m-0">
        <Col className="mx-auto">
          <div className="join-page-main-wrap-heading">
            <div className={"join-page-main-heading"}>
              <h3>
                Join ONE<span>UP</span> Today
              </h3>
            </div>
            <div className="join-page-main-para">
              <p>
                Unleash the full potential of your Investments with just one
                click <img src={arrowRight} alt="..." />
              </p>
            </div>
            <div className="join-now-btn-wrapper ">
              <button className="join-create-account-btn">
                Create your Account Now <img src={arrowRight} alt="..." />
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="Join_now_image_main_wrapper">
        <img src={Join_now_image} />
      </div>
    </div>
  );
};
