import React, { useEffect } from "react";
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
import ticklight from "../../assets/light/ticklight.png";
import arrow from "../../assets/light/Arrow_07.png"
import arrowDark from "../../assets/dark/Arrow_07.png"
const Pricing = () => {
  const { theme } = useTheme();
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={theme === "dark" ? "pricing-page-main-wrapper-dark" : ""}>
      <Navigation />
      <Container className="pricing-main-container-wrapper">
        <Row className="mx-0">
          <Col lg={6} className="mx-sm-auto mx-0">
            <div className="pricing-main-heading">
              <h4 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                PRICING
              </h4>
            </div>
            <div className="pricing-main-description">
              <h3 style={{ color: theme === "dark" ? "#f3f5f7" : "#596780" }}>
                Maximize Your Wealth: Transparent, Fee-Free Pricing for
                Long-Term Growth
              </h3>
            </div>
            <div className="d-flex align-items-center justify-content-center pricing-toggle-main-warpper">
              <div className="pricing-monthly-heading">
                <h4 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                  Monthly
                </h4>
              </div>

              <ToggleSwicth
                isOn={checked}
                handleToggle={() => setChecked(!checked)}
                colorOne="#6984D6"
                colorTwo="#6984D6"
              />
              <div className="pricing-yearly-heading">
                <h5 style={{ color: theme === "dark" ? "#fff" : "#0D121F" , position:"relative" }}>
                  Yearly
                  <img src={theme === "dark" ? arrowDark : arrow} className="yearly-arrow-pricing"/>
                </h5>
              </div>
            </div>

            <div className="yealy-save-heading">
              <h5 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                Save 20%
             
              </h5>
             
            </div>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col
            lg={4}
            className="d-flex justify-content-lg-end  justify-content-center mx-0"
          >
            <div
              className={
                theme === "dark"
                  ? "pricing-card-main-wrap"
                  : "pricing-card-main-wrap-light"
              }
            >
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={Lovely} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                    Basic
                  </h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}>
                  The perfect plan to get started
                </p>
              </div>
              <div
                className="pricing-main-value"
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid #1d334f"
                      : "1px solid #C3D4E9",
                }}
              >
                <h1 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                  $0{" "}
                  <span
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    /{!checked ? "month" : "month"}
                  </span>
                </h1>
              </div>
              <div className="princing-description">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#1A202C" }}>
                  A free plan grants you access to some cool features of Oneup
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>

                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    1 strategy
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    1 brokerage account connection
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Manual buy/sell options
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Navigation via ISIN
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center mx-0 ">
            <div
              className={
                theme === "dark"
                  ? "pricing-card-main-wrap pricing-dark-mode-border"
                  : "pricing-card-main-wrap-light pricing-light-mode-border"
              }
            >
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={crown} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                    Standard
                  </h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}>
                  Regular investors seeking more flexibility!
                </p>
              </div>
              <div
                className="pricing-main-value"
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid #1d334f"
                      : "1px solid #C3D4E9",
                }}
              >
                <h1 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                  {!checked ? "$25" : "$20"}{" "}
                  <span
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    /{!checked ? "month" : "month"}
                  </span>
                </h1>
              </div>
              <div className="princing-description">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#1A202C" }}>
                  For regular investors! Start arranging your expenses with our
                  best templates.
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Up to 3 strategies
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    2 brokerage account connection
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Automatic buy/sell with notifications
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Strategy personalization
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Navigation via ISIN and sector/style
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Compare and discover top-rated strategies
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <div
              className={
                theme === "dark"
                  ? "pricing-card-main-wrap"
                  : "pricing-card-main-wrap-light"
              }
            >
              <div className="pricing-first-heading-wrap">
                <div className="pricing-first-heading-image">
                  <img src={share} />
                </div>
                <div className="pricing-first-heading-main">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                    Advanced
                  </h4>
                </div>
              </div>
              <div className="pricing-desc">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}>
                  Perfect plan for professionals!
                </p>
              </div>
              <div
                className="pricing-main-value"
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid #1d334f"
                      : "1px solid #C3D4E9",
                }}
              >
                <h1 style={{ color: theme === "dark" ? "#fff" : "#0D121F" }}>
                  {!checked ? "$40" : "$32"}{" "}
                  <span
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    /{!checked ? "month" : "month"}
                  </span>
                </h1>
              </div>
              <div className="princing-description">
                <p style={{ color: theme === "dark" ? "#b2b2b2" : "#1A202C" }}>
                  Experienced investors looking for comprehensive tools and
                  personalization
                </p>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Unlimited strategies
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Up to 5 brokerage account connections
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Automatic buy/sell with notifications
                  </h4>
                </div>
              </div>

              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Strategy personalization
                  </h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Portfolio analysis and optimization for multiple strategies
                  </h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Navigation via ISIN and sector/style
                  </h4>
                </div>
              </div>
              <div className="tick-image-heading">
                <div className="tick-main-wrapper">
                  <img src={theme === "dark" ? tick : ticklight} alt="..." />
                </div>
                <div className="tick-main-heading">
                  <h4 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>
                    Compare and discover top-rated strategies
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col>
            <div
              className={
                theme === "dark"
                  ? "open-account-btn-wrapper mx-auto"
                  : "open-account-btn-wrapper-light mx-auto"
              }
            >
              <button>Open an Account</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        className={
          theme === "dark"
            ? "pricing-additional-information-main-wrapper"
            : "pricing-additional-information-main-wrapper-light"
        }
      >
        <Container>
          <Row className="mx-0">
            <Col lg={6}>
              <div className="pricing-additional-information">
                <h5 style={{ color: theme === "dark" ? "#fff" : "#596780" }}>Additional Information</h5>
              </div>
              <div className="pricing-additional-cancellation-pricing">
                <p style={{ color: theme === "dark" ? "#fff" : "#1A202C" }}>
                  <span style={{ color: theme === "dark" ? "#fff" : "#1A202C" }}>Free Trial:</span> 30-day free trial for all paid plans{" "}
                </p>
              </div>
              <div className="pricing-additional-cancellation-pricing">
                <p style={{ color: theme === "dark" ? "#fff" : "#1A202C" }}>
                  <span style={{ color: theme === "dark" ? "#fff" : "#1A202C" }}>Cancellation Policy:</span> No long-term commitment,
                  cancel anytime
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <div className={theme === "dark" ? "pricing-additional-info-btn" :"pricing-additional-info-btn-light"}>
                <button>Get Started</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
     
      <Container>
        <FAQs />
      </Container>

      </div>

      <JoinNow />
      <Footer />
    </div>
  );
};

export default Pricing;
