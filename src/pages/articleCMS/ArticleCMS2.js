import React, { useEffect, useState, useRef } from "react";
import { ListGroup } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import "./ArticleCMS.css";
import { Container, Row, Col } from "react-bootstrap";
import about_stop_lossing from "../../assets/dark/about/about-stop-lossing.png";
import AbouPara from "../../components/About/AbouPara";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import ArticleHeading from "../../components/About/ArticleHeading";
import fb from "../../assets/dark/articles/fb.png";
import insta from "../../assets/dark/articles/insta.png";
import Navigation from "../../components/Nav/Navigation";
import active from "../../assets/dark/articles/active.png";
import arrow_down from "../../assets/dark/articles/arrow-down.png";
import ExpertTeam from "../about/ExpertTeam";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import art2 from "../../assets/dark/articles/art2.png";
const ArticleCMS2 = () => {
  const { theme } = useTheme();
  const [headings, setHeadings] = useState([]);
  const [reachedLastHeading, setReachedLastHeading] = useState(true); // Initially set to true to hide the table of contents
  const contentRef = useRef(null);

  const headingRef = useRef(null);
  const contentShow = useRef(null);

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
                  <span>&gt;</span>Active vs Passive Management: balancing fees
                  for investor benefit
                </p>
              </div>
              <div className="aricle-cms-main-para">
                <h4>
                  Active vs Passive Management: balancing fees for investor
                  benefit
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
              <img src={active} alt="..." />
            </div>
          </Col>
        </Row>
        <ArticleHeading title="Introduction: The Active vs. Passive Debate Reimagined" />
        <AbouPara
          title="In the investment realm, the active versus passive management debate is age-old. 

Passive management, with its straightforward, cost-effective approach, mirrors market returns. Active management, on the other hand, strives to outperform the market, often at a higher fee. 

The burning question is: do the perks of active management outweigh its costs? While passive management's low fees and benchmark tracking allure many, it's crucial to reevaluate active management's benefits, particularly in terms of fees.
"
        />

        <ArticleHeading title="Demystifying Mutual Fund Fees" />
        <AbouPara title="Mutual funds come with a variety of charges, from management fees to shareholder expenses. To cut through the complexity, investors look at the expense ratio. However, these ratios, although small in percentage, can significantly erode your wealth over time." />

        <ArticleHeading title="Active Management: Unleashing Its Full Potential" />
        <AbouPara title="There's a certain confidence that comes from truly understanding your investments. OneUp illuminates your financial picture, giving you the clarity you need to invest with confidence and peace of mind." />

        <ArticleHeading title="Responsive Market Strategies" />
        <AbouPara title="Active managers swiftly adapt to market shifts, tweaking portfolios to seize opportunities and cushion risks. This agility is priceless during volatile markets or economic fluxes, safeguarding and boosting your investments." />

        <ArticleHeading title="Mastering Market Inefficiencies:" />
        <AbouPara title="Active managers excel in uncovering and leveraging market inefficiencies. Their thorough research can unearth hidden gems, outperforming passive strategies and amplifying long-term wealth accumulation." />

        <ArticleHeading title="Tailored Portfolio Solutions" />
        <AbouPara title="Active management means personalized portfolio strategies, aligning with individual investor goals, risk appetites, and timelines, unlike passive strategies that rigidly follow set indices." />

        <ArticleHeading title="Strategic Risk Management:" />
        <AbouPara title="Active managers wield various risk management tactics, including hedging and asset reallocation, to fortify portfolios against market downturns, enhancing long-term gains." />

        <ArticleHeading title="Rethinking Fees in Active Management" />
        <AbouPara
          title="The fee model in active management is a paradox. It's essential for compensating the expertise of portfolio managers and research teams, but it can also undercut investors' wealth-building efforts.
A stark reality looms: a vast majority of active managers don't beat their benchmarks in the long run, mainly due to fee burdens. Exorbitant fees can erode active management's benefits, making it hard to achieve excess market returns.
This fee dilemma is a significant barrier in the investment world. It prevents investors from fully benefiting from active management's advantages. The challenge is not in the strategy, but in the overwhelming fees that dampen its effectiveness."
        />

        <ArticleHeading title="Revolutionizing Active Management with OneUp" />
        <AbouPara
          title="It's time to transform the fee landscape. Imagine an active management environment where fees aren't the enemy. OneUp is doing exactly that. We're aligning manager compensation with performance, not assets under management. 

This shift incentivizes active managers to focus on what truly matters – your financial success. By cutting down the fee load, OneUp reveals the real prowess of active management: a strategy that can surpass passive approaches in returns.
"
        />
        <ArticleHeading title="Conclusion: Active Management Redefined" />
        <AbouPara
          title="The active versus passive debate isn't just about strategy – it's about balancing fees, performance, and investor benefits. At OneUp, we're redefining active management.
Stripped of excessive fees, it emerges as a superior strategy, particularly in fluctuating markets. Our mission is to recalibrate the fee structure, ensuring that active management works in tandem with your financial aspirations.

This change promises to amplify the benefits and wealth-building potential for those embracing this dynamic approach, marking a new era where active management not only promises but delivers exceptional value.

Join OneUp and experience the renaissance of active management. Say goodbye to traditional fees and hello to a brighter financial future."
        />
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
  );
};

export default ArticleCMS2;
