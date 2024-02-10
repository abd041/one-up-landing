import React, { useEffect, useState, useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import "./ArticleCMS.css";
import AbouPara from "../../components/About/AbouPara";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import ArticleHeading from "../../components/About/ArticleHeading";
import fb from "../../assets/dark/articles/fb.png";
import insta from "../../assets/dark/articles/insta.png";
import Navigation from "../../components/Nav/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import arrow_down from "../../assets/dark/articles/arrow-down.png";
import ExpertTeam from "../about/ExpertTeam";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import art2 from "../../assets/dark/about/smarter.png";

const ArticleCMS1 = () => {
  const { theme } = useTheme();
  const [headings, setHeadings] = useState([]);
  const [reachedLastHeading, setReachedLastHeading] = useState(true); // Initially set to true to hide the table of contents
  const contentRef = useRef(null);

  const headingRef = useRef(null);
  const contentShow = useRef(null);

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
      className={theme === "dark" ? "about-page-main-wrapper-dark" : ""}
      ref={contentRef}
    >
      <Navigation />
      <Container>
        {!reachedLastHeading && (
          <div className="toc-container">
            <div className="list-table-of-content">
              <h4>TABLE OF CONTENT</h4>
            </div>
            <ListGroup as="ul">
              {headings.map((heading) => {
                const firstThreeWords = heading.textContent
                  .split(" ")
                  .slice(0, 3)
                  .join(" ");
                return (
                  <ListGroup.Item
                    as="li"
                    key={`toc-${heading.id}`}
                    id={`toc-${heading.id}`}
                    action
                    onClick={() => handleClick(heading.id)}
                    className="list-main-items-article"
                  >
                    {`${firstThreeWords}`}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        )}
        <Row>
          <Col className="mx-auto" lg={8}>
            <div className="aricle-cms-main-wrapper mx-auto">
              <div className="aricle-cms-main-heading">
                <h4 className="d-flex align-items-center">
                  Resources <span>&gt;</span>
                </h4>
                <h4>Article</h4>
                <p className="d-flex align-items-center">
                  <span>&gt;</span>Unveiling a New Era in Investment: The
                  Collective Intelligence Approach
                </p>
              </div>
              <div className="aricle-cms-main-para">
                <h4>
                  Unveiling a New Era in Investment: The Collective Intelligence
                  Approach
                </h4>
              </div>
              <div className="d-flex justify-content-between align-items-center date-in-article-main">
                <div className="date-in-article">
                  <p>Feb 1, 2024 . 6 min read</p>
                </div>
                <div>
                  <img src={fb} className="date-in-image" />
                  <img src={insta} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mx-auto" lg={8}>
            <div className="about-stop-lossing-image-dark">
              <img src={art2} alt="..." />
            </div>
          </Col>
        </Row>
        <ArticleHeading title="Introduction" />
        <AbouPara title="Asset management is witnessing a revolution, one inspired by the ingenious insights of Ray Dalio and his advocacy for meritocracy and collective intelligence. This novel investment methodology leverages advanced technology and machine learning, echoing Dalio's principles, to redefine the asset management realm." />
        <ArticleHeading title="Demystifying Mutual Fund Fees" />
        <AbouPara title="Mutual funds come with a variety of charges, from management fees to shareholder expenses. To cut through the complexity, investors look at the expense ratio. However, these ratios, although small in percentage, can significantly erode your wealth over time." />

        <ArticleHeading title="Navigating Asset Management's Complex Landscape" />
        <AbouPara title="Traditional asset management is riddled with challenges: underperformance, steep fees, and a glaring transparency gap. Investors are often caught in a dilemma, choosing between the steep learning curve of self-management or entrusting funds to managers whose fees don’t always translate into performance." />

        <ArticleHeading title="A Paradigm Shift Inspired by Collective Wisdom" />
        <AbouPara title="Rooted in the concept of collective intelligence, this methodology mirrors Ray Dalio’s ethos: the power of unified intelligence. It’s about channeling the collective expertise of the investment world to drive unparalleled results." />

        <ArticleHeading title="AI-Driven Analysis" />
        <AbouPara title="Employing advanced generative AI, this approach analyzes the investment landscape, scrutinizing institutional strategies to identify strengths and weaknesses. Recognizing that today’s top managers may not hold the title tomorrow, the system is designed to evolve, adapting to the dynamic financial markets." />

        <ArticleHeading title="Performance-Based Ratings:" />
        <AbouPara title="This system assesses industry players based on their track records, spotlighting those who consistently outperform the market. It tackles the challenge of identifying the best managers by tapping into the industry’s collective knowledge." />

        <ArticleHeading title="Dynamic Portfolio Management:" />
        <AbouPara title="Harnessing this collective intelligence, the system autonomously curates portfolios, democratizing investment. It allows anyone to access the collective acumen of top investors, prioritizing investor welfare above all." />

        <ArticleHeading title="Adaptive Learning:" />
        <AbouPara title="Constantly integrating new insights, the methodology adapts to market changes. It’s a testament to the power of collective efforts in enhancing investment strategies." />

        <ArticleHeading title="Placing Users at the Center" />
        <AbouPara title="This approach revolutionizes investment by simplifying complex decision-making. It distills industry-wide expertise into an accessible, user-friendly format, empowering users with a formidable investment tool without needing deep financial knowledge." />

        <ArticleHeading title="Conclusion" />
        <AbouPara title="“This innovative methodology is a game-changer in asset management. Fusing Ray Dalio’s principles with modern AI, it opens investment decision-making to a wider audience. It addresses critical issues of underperformance and transparency, marking a new chapter in investment – efficient, inclusive, and focused on investor success. Inspired by collective intelligence, it heralds a promising future in asset management.”" />
      </Container>
      <div
        className={theme === "dark" ? "articles-page-main-wrapper-dark" : ""}
      >
        <Container className="articles-page-first-container mx-sm-auto mx-0">
          <Row>
            <Col className="article-resousrce-first-wrapper">
              <div className="article-investing-heading">
                <h1>Other Articles</h1>
              </div>
            </Col>
          </Row>
          <Row className="article-card-first-row">
            <Col lg={6}>
              <Link to="/ArticleCMS2">
                <div className="articles-card-main-wrapper">
                  <div className="articles-card-main-heading">
                    <h3>
                      Active vs Passive Management: balancing fees for investor
                      benefit
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p>
                      In the investment realm, the active versus passive
                      management debate is age-old. Passive management, with its
                      straightforward, cost-effective approach, mirrors market
                      returns. Active management, on the other hand, strives to
                      outperform the market, often at a higher fee.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="articles-card-main-btn">
                      <img src={arrow_down} alt="..." />
                    </button>
                  </div>
                </div>
              </Link>
            </Col>

            <Col lg={6}>
              <Link to="/ArticleCMS1">
                <div className="articles-card-main-wrapper">
                  <div className="articles-card-main-heading">
                    <h3>
                      Unveiling a New Era in Investment: The Collective
                      Intelligence Approach
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p>
                      Asset management is witnessing a revolution, one inspired
                      by the ingenious insights of Ray Dalio and his advocacy
                      for meritocracy and collective intelligence. This novel
                      investment methodology leverages advanced technology and
                      machine learning, echoing Dalio's principles, to redefine
                      the asset management realm.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="articles-card-main-btn">
                      <img src={arrow_down} alt="..." />
                    </button>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Link to="/ArticleCMS3">
                <div className="articles-card-main-wrapper">
                  <div className="articles-card-main-heading">
                    <h3>
                      Empowering investors with full control: the OneUp
                      commitment
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p>
                      In the fast-paced world of personal finance, being in
                      charge and clearly understanding your investments is
                      critical. OneUp is here to make that happen. Our platform
                      transforms your investment experience, offering real
                      transparency and putting you firmly in control.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="articles-card-main-btn">
                      <img src={arrow_down} alt="..." />
                    </button>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="expert-team-wrapper-articles">
          <Container className="mx-sm-auto mx-0">
            <ExpertTeam />
          </Container>
        </div>
        <Container className="mx-sm-auto mx-0">
          <FAQs />
        </Container>
        <JoinNow />
        <Footer />
      </div>
    </div>
  );
};

export default ArticleCMS1;
