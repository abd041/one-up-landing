import React, { useEffect } from "react";
import "./Articles.css";
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import arrow_down from "../../assets/dark/articles/arrow-down.png";
import ExpertTeam from "../about/ExpertTeam";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import FAQs from "../../components/Faqs/FAQs";
import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import nextLight from "../../assets/light/nextlight.png";

const Articles = () => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={theme === "dark" ? "articles-page-main-wrapper-dark" : ""}>
      <Navigation />
      <Container className="articles-page-first-container mx-sm-auto mx-0">
        <Row>
          <Col className="article-resousrce-first-wrapper">
            <div className="article-resources-heading">
              <h6 style={{ color: theme === "dark" ? "#fff" : "#5573D1" }}>
                RESOURCES
              </h6>
            </div>
            <div className="article-investing-heading">
              <h1 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                All About Investing
              </h1>
            </div>
            <div className="article-investing-discover">
              <p style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}>
                Discover tutorials, walkthroughs, and everything to do with
                investing on OneUp
              </p>
            </div>
          </Col>
        </Row>
        <Row className="article-card-first-row">
          <Col lg={6}>
            <Link to="/ArticleCMS">
              <div
                className={
                  theme === "dark"
                    ? "articles-card-main-wrapper"
                    : "articles-card-main-wrapper-light"
                }
              >
                <div className={"articles-card-main-heading"}>
                  <h3 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                    The Silent Threat: How Mutual Fund Fees Erode Your Wealth
                    Over Time
                  </h3>
                </div>
                <div className="articles-card-main-para">
                  <p
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    Investing is about building wealth and financial security,
                    yet there's a silent threat undermining this goal: mutual
                    fund fees. Often hidden and complex, thesefees chip away at
                    your returns over time. Let's dive into how mutual fund fees
                    work, their impact, and why OneUp's revolutionary
                    subscription-based model is changing the game.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className={
                      theme === "dark"
                        ? "articles-card-main-btn"
                        : "articles-card-main-btn-light"
                    }
                  >
                    <img
                      src={theme === "dark" ? arrow_down : nextLight}
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </Link>
          </Col>

          <Col lg={6}>
            <Link to="/ArticleCMS1">
              <div
                className={
                  theme === "dark"
                    ? "articles-card-main-wrapper"
                    : "articles-card-main-wrapper-light"
                }
              >
                <div className="articles-card-main-heading">
                  <h3 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                    Unveiling a New Era in Investment: The Collective
                    Intelligence Approach
                  </h3>
                </div>
                <div className="articles-card-main-para">
                  <p
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    Asset management is witnessing a revolution, one inspired by
                    the ingenious insights of Ray Dalio and his advocacy for
                    meritocracy and collective intelligence. This novel
                    investment methodology leverages advanced technology and
                    machine learning, echoing Dalio's principles, to redefine
                    the asset management realm.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className={
                      theme === "dark"
                        ? "articles-card-main-btn"
                        : "articles-card-main-btn-light"
                    }
                  >
                    <img
                      src={theme === "dark" ? arrow_down : nextLight}
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Link to="/ArticleCMS2">
              <div
                className={
                  theme === "dark"
                    ? "articles-card-main-wrapper"
                    : "articles-card-main-wrapper-light"
                }
              >
                <div className="articles-card-main-heading">
                  <h3 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                    Active vs Passive Management: balancing fees for investor
                    benefit
                  </h3>
                </div>
                <div className="articles-card-main-para">
                  <p
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    In the investment realm, the active versus passive
                    management debate is age-old. Passive management, with its
                    straightforward, cost-effective approach, mirrors market
                    returns. Active management, on the other hand, strives to
                    outperform the market, often at a higher fee.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className={
                      theme === "dark"
                        ? "articles-card-main-btn"
                        : "articles-card-main-btn-light"
                    }
                  >
                    <img
                      src={theme === "dark" ? arrow_down : nextLight}
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </Link>
          </Col>

          <Col lg={6}>
            <Link to="/ArticleCMS3">
              <div
                className={
                  theme === "dark"
                    ? "articles-card-main-wrapper"
                    : "articles-card-main-wrapper-light"
                }
              >
                <div className="articles-card-main-heading">
                  <h3 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                    Empowering investors with full control: the OneUp commitment
                  </h3>
                </div>
                <div className="articles-card-main-para">
                  <p
                    style={{ color: theme === "dark" ? "#b2b2b2" : "#596780" }}
                  >
                    In the fast-paced world of personal finance, being in charge
                    and clearly understanding your investments is critical.
                    OneUp is here to make that happen. Our platform transforms
                    your investment experience, offering real transparency and
                    putting you firmly in control.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className={
                      theme === "dark"
                        ? "articles-card-main-btn"
                        : "articles-card-main-btn-light"
                    }
                  >
                    <img
                      src={theme === "dark" ? arrow_down : nextLight}
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
      <div
        className={
          theme === "dark"
            ? "expert-team-wrapper-articles"
            : "expert-team-wrapper-articles-light"
        }
      >
        <Container className="mx-sm-auto mx-0">
          <ExpertTeam />
        </Container>
      </div>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
     
      <Container className="mx-sm-auto mx-0">
        <FAQs />
      </Container>
      </div>
      <JoinNow />
      <Footer />
    </div>
  );
};

export default Articles;
