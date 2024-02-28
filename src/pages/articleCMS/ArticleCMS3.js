import React, { useEffect, useState, useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import "./ArticleCMS.css";
import { Container, Row, Col } from "react-bootstrap";
import AbouPara from "../../components/About/AbouPara";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import ArticleHeading from "../../components/About/ArticleHeading";
import fb from "../../assets/dark/articles/fb.png";
import insta from "../../assets/dark/articles/insta.png";
import Navigation from "../../components/Nav/Navigation";
import pic from "../../assets/dark/articles/pik.png";
import arrow_down from "../../assets/dark/articles/arrow-down.png";
import ExpertTeam from "../about/ExpertTeam";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import fblight from "../../assets/light/fb_light.png";
import instalight from "../../assets/light/insta_light.png";
import nextLight from "../../assets/light/nextlight.png";
import { FacebookShareButton } from "react-share";
import ArticleNavigation from "../../components/Nav/ArticleNavigation";

const ArticleCMS3 = () => {
  const { theme } = useTheme();
  const [headings, setHeadings] = useState([]);
  const [reachedLastHeading, setReachedLastHeading] = useState(true); // Initially set to true to hide the table of contents
  const contentRef = useRef(null);

  const headingRef = useRef(null);
  const contentShow = useRef(null);

  const articleUrl = "https://one-up-landing.vercel.app/ArticleCMS2";

  const handleShare = () => {
    window.open(
      `https://www.instagram.com/?url=${encodeURIComponent(articleUrl)}`,
      "_blank"
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const headings =
        contentRef.current.querySelectorAll('h3[id^="section-"]');
      setHeadings(Array.from(headings));
    }
  }, [contentRef.current]);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollingUp = currentScrollTop < lastScrollTop;
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      setReachedLastHeading(scrollingUp); // Update reachedLastHeading based on scrolling direction
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headings.length > 0) {
      const lastHeading = headings[headings.length - 1];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !reachedLastHeading) {
              // Only set to true if scrolling up and last heading is intersecting
              setReachedLastHeading(true);
            } else {
              setReachedLastHeading(false);
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(lastHeading);
      return () => observer.disconnect();
    }
  }, [headings, reachedLastHeading]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={
        theme === "dark"
          ? "about-page-main-wrapper-dark"
          : "white-background-wrap"
      }
      ref={contentRef}
    >
      <ArticleNavigation />
      {!reachedLastHeading && (
        <div className="toc-container">
          <div className="list-table-of-content">
            <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
              TABLE OF CONTENT
            </h4>
          </div>
          <ListGroup as="ul">
            {headings.map((heading) => {
              const firstThreeWords = heading.textContent
                .split(" ")
                .slice(0, 7)
                .join(" ");
              return (
                <ListGroup.Item
                  as="li"
                  key={`toc-${heading.id}`}
                  id={`toc-${heading.id}`}
                  action
                  onClick={() => handleClick(heading.id)}
                  className={
                    theme === "dark"
                      ? "list-main-items-article"
                      : "list-main-items-article-light"
                  }
                >
                  {`${firstThreeWords}`}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      )}
      <Container>
        <Row>
          <Col className="mx-auto" lg={8}>
            <div className="aricle-cms-main-wrapper mx-auto">
              <div className="aricle-cms-main-heading">
                <h4
                  className="d-flex align-items-center"
                  style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                >
                  Resources{" "}
                  <span
                    style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                  >
                    &gt;
                  </span>
                </h4>
                <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                  Article
                </h4>
                <p
                  className="d-flex align-items-center"
                  style={{ color: theme === "dark" ? "#B2B2B2" : "#90A3BF" }}
                >
                  <span
                    style={{ color: theme === "dark" ? "#fff" : "#90A3BF" }}
                  >
                    &gt;
                  </span>
                  Empowering investors with full control: the OneUp commitment
                </p>
              </div>
              <div className="aricle-cms-main-para">
                <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                  Empowering investors with full control: the OneUp commitment
                </h4>
              </div>
              <div className="d-flex justify-content-between align-items-center date-in-article-main">
                <div className="date-in-article">
                  <p
                    style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}
                  >
                    Feb 1, 2024 . 6 min read
                  </p>
                </div>
                <div>
                  <FacebookShareButton
                    url={"https://one-up-landing.vercel.app/ArticleCMS3"}
                    quote={
                      "Empowering investors with full control: the OneUp commitment"
                    }
                    hashtag="#oneup"
                  >
                    <img
                      src={theme === "dark" ? fb : fblight}
                      className="date-in-image"
                    />
                  </FacebookShareButton>

                  <img
                    src={theme === "dark" ? insta : instalight}
                    onClick={handleShare}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mx-auto" lg={8}>
            <div className="about-stop-lossing-image-dark">
              <img src={pic} alt="..." />
            </div>
          </Col>
        </Row>
        <ArticleHeading title="Introduction" />
        <AbouPara title="Unlock your financial future with OneUp. We're flipping the script on investing, championing control, transparency, and customization. Dive into a world where clarity reigns and you command your investments." />

        <ArticleHeading title="Seize Control of Your Wealth" />
        <AbouPara title="OneUp liberates you to navigate your financial path effortlessly. Flip the switch on your strategieswhenever you like – your investment journey, your rules." />

        <ArticleHeading title="Transparency at Every Turn" />
        <AbouPara title="See everything with OneUp. Every move, every position, crystal clear. Stay informed, stay ahead." />

        <ArticleHeading title="Investing on Your Terms" />
        <AbouPara title="Forget about constraints with OneUp. No ties, no minimums, just pure, flexible investing. Adapt, evolve, and invest with absolute freedom." />

        <ArticleHeading title="Strategies That Speak to You" />
        <AbouPara title="You're unique, and your investments should be too. OneUp lets you carve out a strategy that mirrors your values and aspirations. Say no to what doesn't fit and craft a portfolio that's truly yours." />

        <ArticleHeading title="The OneUp Experience" />
        <AbouPara title="Modern investors demand more – insight, control, flexibility. OneUp delivers, bringing you the crème de la crème of mutual fund strategies, all within a platform that bends to your will." />

        <ArticleHeading title="Conclusion" />
        <AbouPara title="OneUp isn't just a platform; it's a movement towards smarter, more personalized investing. We'rehere to make sure your investments work tirelessly for you. Embrace control, transparency, and personalization with OneUp. Step into a new era of investing" />
      </Container>
      <div
        className={
          theme === "dark"
            ? "articles-page-main-wrapper-dark"
            : "white-background-wrap"
        }
      >
        <Container className="articles-page-first-container mx-sm-auto mx-0">
          <Row  className="text-center text-lg-start">
            <Col className="article-resousrce-first-wrapper">
              <div className="article-investing-heading">
                <h1>Other Articles</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="d-flex justify-content-center article-card-first-row">
              <Link to="/ArticleCMS">
                <div
                  className={
                    theme === "dark"
                      ? "articles-card-main-wrapper"
                      : "articles-card-main-wrapper-light"
                  }
                >
                  <div className={"articles-card-main-heading"}>
                    <h3
                      style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                    >
                      The Silent Threat: How Mutual Fund Fees Erode Your Wealth
                      Over Time
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p
                      style={{
                        color: theme === "dark" ? "#b2b2b2" : "#596780",
                      }}
                    >
                      Investing is about building wealth and financial security,
                      yet there's a silent threat undermining this goal: mutual
                      fund fees. Often hidden and complex, thesefees chip away
                      at your returns over time. Let's dive into how mutual fund
                      fees work, their impact, and why OneUp's revolutionary
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

            <Col lg={6} className="d-flex justify-content-center article-card-first-row">
              <Link to="/ArticleCMS1">
                <div
                  className={
                    theme === "dark"
                      ? "articles-card-main-wrapper"
                      : "articles-card-main-wrapper-light"
                  }
                >
                  <div className="articles-card-main-heading">
                    <h3
                      style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                    >
                      Unveiling a New Era in Investment: The Collective
                      Intelligence Approach
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p
                      style={{
                        color: theme === "dark" ? "#b2b2b2" : "#596780",
                      }}
                    >
                      Asset management is witnessing a revolution, one inspired
                      by the ingenious insights of Ray Dalio and his advocacy
                      for meritocracy and collective intelligence. This novel
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
            <Col lg={6} className="d-flex justify-content-center article-card-first-row">
              <Link to="/ArticleCMS2">
                <div
                  className={
                    theme === "dark"
                      ? "articles-card-main-wrapper"
                      : "articles-card-main-wrapper-light"
                  }
                >
                  <div className="articles-card-main-heading">
                    <h3
                      style={{ color: theme === "dark" ? "#fff" : "#11172A" }}
                    >
                      Active vs Passive Management: balancing fees for investor
                      benefit
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p
                      style={{
                        color: theme === "dark" ? "#b2b2b2" : "#596780",
                      }}
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
        <div
          className={`app ${theme === "dark" ? "dark-theme" : "light-theme"}`}
        >
          <Container className="mx-sm-auto mx-0">
            <FAQs />
          </Container>
        </div>
        <JoinNow />
        <Footer />
      </div>
    </div>
  );
};

export default ArticleCMS3;
