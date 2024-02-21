import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import "./FAQs.css";
import Minus from "../../assets/dark/faqs/minus.png";
import add from "../../assets/dark/faqs/add.png";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/dark/faqs/arrow-down.png";

const FAQs = () => {
  const { theme } = useTheme();
  const [showFaq1, setShowFaqs1] = useState(4);

  const data = [
    {
      id: 4,
      q1: "How can I begin investing with OneUp?",
      a1: "To start, simply click on the 'Sign Up' button and create your account in under a minute. Next, link your existing brokerage account to our platform. You're now ready to invest using one of our existing strategies or craft a unique one just for you.",
    },
    {
      id: 5,
      q1: "What are OneUp's fees?",
      a1: "For a detailed breakdown of our fees, please visit our pricing page. At OneUp, we're proud to offer a service free of management and trading fees, ensuring your investments work harder for you.",
    },
    {
      id: 6,
      q1: "When does OneUp execute trades on my behalf?",
      a1: "Trades are initiated during market hours (9:30 AM to 4:00 PM EST). If you set up your account outside these hours, trades will commence at the next market opening. Should you initiate setup during market hours but observe a delay, please allow up to 15 minutes for trades to process. For delays beyond 15 minutes, contact our support team at support@one-up.io.",
    },
    {
      id: 7,
      q1: "Where does my money go when I invest with OneUp?",
      a1: "Your capital remains within your brokerage account, safeguarding your funds. By allocating funds to OneUp, you're merely authorizing us to manage trades within your account. Rest assured, no funds are transferred out of your brokerage.",
    },
    {
      id: 8,
      q1: "Can I follow multiple investment strategies with OneUp?",
      a1: "Absolutely! Paid members can track and implement multiple strategies, contingent on their account's buying power. Basic members are permitted to initiate a single strategy, which includes only the initial trade setup without subsequent trading actions.",
    },
    {
      id: 9,
      q1: "How does OneUp adjust my strategy if new positions are added by the portfolio manager?",
      a1: "Our system ensures your portfolio aligns with your chosen strategy by automatically adjusting holdings based on the portfolio manager's actions. If new positions are acquired, we proportionally rebalance your portfolio to maintain strategy alignment.",
    },
  ];
  return (
    <Row className="faqs-main-row-wrap">
      <Col lg={3} md={8} className="mx-md-auto mx-lg-0">
        <div className="faqs-main-heading">
          <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
            Frequently Asked Questions
          </h4>
        </div>
      </Col>
      <Col lg={9} md={8} className="mx-md-auto mx-lg-0">
        <div className={theme === "dark" ? "" : "faqs-main-bg-light"}>
          {data.map((da) => {
            return (
              <div
                className={
                  da.id == showFaq1
                    ? `faqs-content-main-wrapper ms-auto ${theme === "dark"
                      ? "faqs-content-main-wrapper-dark-border"
                      : "faqs-content-main-wrapper-light-border"
                    }`
                    : "faqs-content-main-wrapper-inactive ms-auto"
                }
              >
                <div
                  className={`d-flex justify-content-between w-100 ${theme === "dark"
                      ? "faqs-content-main-heading-main-wrapper"
                      : "faqs-content-main-heading-main-wrapper-white"
                    } `}
                >
                  <div className="faqs-content-main-heading">
                    <h4 style={{ color: theme === "dark" ? "#FFF" : "#11172A" }}>
                      {da.q1}
                    </h4>
                  </div>
                  <div>
                    <img
                      src={da.id === showFaq1 ? Minus : add}
                      onClick={() => {
                        if (da.id == showFaq1) {
                          setShowFaqs1(0);
                        } else setShowFaqs1(da.id);
                      }}
                      style={{width :"24px" , height:"24px"}}
                    />
                  </div>
                </div>
                <div
                  className={
                    da.id == showFaq1
                      ? "faqs-text-heading"
                      : "faqs-text-heading-inactive"
                  }
                >
                  <p
                    style={{
                      color: theme === "dark" ? "#AAADB1" : "#596780",
                    }}
                  >
                    {da.a1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={"faqs-content-main-wrapper-inactive ms-auto"}>
          <div className="faqs-main-links">
            <Link to="/faq">
              SEE ALL FAQ’s
              <span>
                <img src={arrow_down} />
              </span>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FAQs;
