import React, { useEffect, useState, useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import "./ArticleCMS.css";
import about_stop_lossing from "../../assets/dark/about/about-stop-lossing.png";
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
import updated from "../../assets/dark/about/updated.png";
import fblight from "../../assets/light/fb_light.png";
import instalight from "../../assets/light/insta_light.png";
import nextLight from "../../assets/light/nextlight.png";
import { FacebookShareButton } from "react-share";
import ArticleNavigation from "../../components/Nav/ArticleNavigation";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const ArticleCMS = () => {
  const { theme } = useTheme();
  const [headings, setHeadings] = useState([]);
  const [reachedLastHeading, setReachedLastHeading] = useState(true); // Initially set to true to hide the table of contents
  const contentRef = useRef(null);

  const articleUrl = "https://one-up-landing.vercel.app/ArticleCMS";

  const handleShare = () => {
    const emailSubject = encodeURIComponent("Check out this article!");
    const emailBody = encodeURIComponent(
      `Hey there,\n\nI thought you might be interested in reading this article:\n\n${articleUrl}`
    );

    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleShareLinkdIn = () => {
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      articleUrl
    )}`;
    window.open(linkedinShareUrl, "_blank");
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
        <div className="toc-container mx-auto">
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
        <Row className="text-center text-lg-start">
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
                  The Silent Threat: How Mutual Fund Fees Erode Your Wealth Over
                  Time
                </p>
              </div>
              <div className="aricle-cms-main-para">
                <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                  The Silent Threat: How Mutual Fund Fees Erode Your Wealth Over
                  Time
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
                <div className="d-flex">
                  <FacebookShareButton
                    url={"https://one-up-landing.vercel.app/ArticleCMS"}
                    quote={
                      "The Silent Threat: How Mutual Fund Fees Erode Your Wealth Over Time"
                    }
                    hashtag="#oneup"
                  >
                    <img
                      src={theme === "dark" ? fb : fblight}
                      className="date-in-image"
                    />
                  </FacebookShareButton>
                  <div
                    className={
                      theme === "dark"
                        ? "artilce-email-link-dark"
                        : "artilce-email-link"
                    }
                    style={{ marginRight: "24px" }}
                    onClick={handleShare}
                  >
                    <IoMailOutline style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div
                    className={
                      theme === "dark"
                        ? "artilce-email-link-dark"
                        : "artilce-email-link"
                    }
                    onClick={handleShareLinkdIn}
                  >
                    <FaLinkedin style={{ width: "20px", height: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mx-auto" lg={8}>
            <div className="about-stop-lossing-image-dark">
              <img src={updated} alt="..." />
            </div>
          </Col>
        </Row>
        <ArticleHeading title="Introduction" />
        <AbouPara title="Investing is about building wealth and financial security, yet there's a silent threat undermining this goal: mutual fund fees. Often hidden and complex, these fees chip away at your returns over time. Let's dive into how mutual fund fees work, their impact, and why OneUp's revolutionary subscription-based model is changing the game." />
        <ArticleHeading title="Demystifying Mutual Fund Fees" />
        <AbouPara title="Mutual funds come with a variety of charges, from management fees to shareholder expenses. To cut through the complexity, investors look at the expense ratio. However, these ratios, although small in percentage, can significantly erode your wealth over time." />

        <ArticleHeading title="The High Cost of Small Numbers" />
        <AbouPara title="Consider this: a 1.5% expense ratio might not sound like much, but over 30 years, it can cost you over $628,000 in potential earnings. This example drives home how even seemingly minor fees can have a major impact on your long-term financial health." />

        <ArticleHeading title="OneUp vs. Traditional Investment Models" />
        <AbouPara title="OneUp stands apart from passive ETFs and index funds. While these options track indices, they lack the adaptability and specificity of OneUp’s actively managed funds. Our model combines the benefits of active management with a low-cost structure, making it a smarter choice for long-term wealth accumulation." />

        <ArticleHeading title="Shifting Away from Traditional Fee Structures" />
        <AbouPara title="Traditionally, investment firms have relied on AUM fees, often at the cost of your growing assets. Enter OneUp: our subscription-based model replaces these escalating AUM fees with a fixed, transparent rate. It's active management made affordable, focusing on maximizing your returns, not our profits." />

        <ArticleHeading title="OneUp’s ZERO Fee Edge in Active Management" />
        <AbouPara title="While traditional active management can offer higher returns, it often comes at a high cost. OneUp changes this equation. Using technology and AI, we provide strategic, active management opportunities at a fraction of the cost, outpacing traditional indices and ETFs." />

        <ArticleHeading title="Embracing a Fee-Free Future with OneUp" />
        <AbouPara title="Say goodbye to the days of hefty active management fees. OneUp’s Netflix-like subscription model offers you the advantages of active management without the financial strain. It's a new era of investing where improved performance and compounded savings work together to grow your wealth." />

        <ArticleHeading title="Conclusion" />
        <AbouPara title="Mutual fund fees, though often overlooked, have a tangible impact on your investments. By understanding and addressing these fees, you can make smarter choices for your financial future. OneUp’s innovative approach, merging tech-driven active management with a cost-effective subscription model, presents a compelling alternative. It’s time to step into a world where your investments work harder for you, free from the drag of traditional fees. Join OneUp and take control of your financial destiny." />
      </Container>
      <div
        className={
          theme === "dark"
            ? "articles-page-main-wrapper-dark"
            : "white-background-wrap"
        }
      >
        <Container className="articles-page-first-container mx-sm-auto mx-0">
          <Row className="text-center text-lg-start">
            <Col className="article-resousrce-first-wrapper">
              <div className="article-investing-heading">
                <h1>Other Articles</h1>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col
              lg={6}
              className="d-flex justify-content-center article-card-first-row"
            >
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
            <Col
              lg={6}
              className="d-flex justify-content-center article-card-first-row"
            >
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
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center article-card-first-row"
            >
              <Link to="/ArticleCMS3">
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
                      Empowering investors with full control: the OneUp
                      commitment
                    </h3>
                  </div>
                  <div className="articles-card-main-para">
                    <p
                      style={{
                        color: theme === "dark" ? "#b2b2b2" : "#596780",
                      }}
                    >
                      In the fast-paced world of personal finance, being in
                      charge and clearly understanding your investments is
                      critical. OneUp is here to make that happen. Our platform
                      transforms your investment experience, offering real
                      transparency and putting you firmly in control.
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

export default ArticleCMS;
