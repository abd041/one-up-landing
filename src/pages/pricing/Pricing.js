import React from "react";
import { useTheme } from "../../ThemeContext";
import "./Pricing.css";
import { Container, Row, Col } from "react-bootstrap";
import Lovely from "../../assets/dark/pricing/lovely.png";
import tick from "../../assets/dark/pricing/tick-circle.png";
import crown from "../../assets/dark/pricing/crown.png";
import share from "../../assets/dark/pricing/share.png";
import ToggleSwicth from "../../components/Pricing/ToggleSwicth";
import Navigation from "../../components/Nav/Navigation";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import Footer from "../../components/Footer/Footer";
const Pricing = () => {
  const { theme } = useTheme();
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={theme === "dark" ? "pricing-page-main-wrapper-dark" : ""}>
      <Navigation />
      <Container className="pricing-main-container-wrapper">
        <Row className="mx-0">
          <Col lg={6} className="mx-sm-auto mx-0">
            <div className="pricing-main-heading">
              <h4>PRICING</h4>
            </div>
            <div className="pricing-main-description">
              <h3>
                Maximize Your Wealth: Transparent, Fee-Free Pricing for
                Long-Term Growth
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-center pricing-toggle-main-warpper">
              <div className="pricing-monthly-heading">
                <h4>Monthly</h4>
              </div>

              <ToggleSwicth
                isOn={checked}
                handleToggle={() => setChecked(!checked)}
                colorOne="#6984D6"
                colorTwo="#6984D6"
              />
              <div className="pricing-yearly-heading">
                <h5>Yearly</h5>
              </div>
            </div>

            <div className="yealy-save-heading">
              <h5>Save 65%</h5>
            </div>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col
            lg={4}
            className="d-flex justify-content-lg-end  justify-content-center mx-0"
          >
            <div className="pricing-card-main-wrap">
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={Lovely} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4>Basic</h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p>The perfect plan to get started</p>
              </div>
              <div className="pricing-main-value">
                <h1>
                  $0 <span>/{!checked ? "month" : "year"}</span>
                </h1>
              </div>
              <div className="princing-description">
                <p>
                  A free plan grants you access to some cool features of Oneup
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>1 strategy</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>1 brokerage account connection</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Manual buy/sell options</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Navigation via ISIN</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center mx-0 ">
            <div className="pricing-card-main-wrap">
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={crown} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4>Standard</h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p>Regular investors seeking more flexibility!</p>
              </div>
              <div className="pricing-main-value">
                <h1>
                  {!checked ? "$25" : "$20"} <span>/{!checked ? "month" : "year"}</span>
                </h1>
              </div>
              <div className="princing-description">
                <p>
                  For regular investors! Start arranging your expenses with our
                  best templates.
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Up to 3 strategies</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>2 brokerage account connection</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Automatic buy/sell with notifications</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Strategy personalization</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Navigation via ISIN and sector/style</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Compare and discover top-rated strategies</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <div className="pricing-card-main-wrap">
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={share} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4>Advanced</h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p>Perfect plan for professionals!</p>
              </div>
              <div className="pricing-main-value">
                <h1>
                {!checked ? "$40" : "$32"} <span>/{!checked ? "month" : "year"}</span>
                </h1>
              </div>
              <div className="princing-description">
                <p>
                  Experienced investors looking for comprehensive tools and
                  personalization
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Unlimited strategies</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Up to 5 brokerage account connections</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Automatic buy/sell with notifications</h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Strategy personalization</h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>
                    Portfolio analysis and optimization for multiple strategies
                  </h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Navigation via ISIN and sector/style</h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={tick} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4>Compare and discover top-rated strategies</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col>
            <div className="open-account-btn-wrapper mx-auto">
              <button>Open an Account</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="pricing-additional-information-main-wrapper">
        <Container>
          <Row className="mx-0">
            <Col lg={6}>
              <div className="pricing-additional-information">
                <h5>Additional Information</h5>
              </div>
              <div className="pricing-additional-cancellation-pricing">
                <p>
                  <span>Free Trial:</span> 30-day free trial for all paid plans{" "}
                </p>
              </div>
              <div className="pricing-additional-cancellation-pricing">
                <p>
                  <span>Cancellation Policy:</span> No long-term commitment,
                  cancel anytime
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <div className="pricing-additional-info-btn">
                <button>Get Started</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
      <FAQs />
      </Container>
     

      <JoinNow />
      <Footer />
    </div>
  );
};

export default Pricing;
