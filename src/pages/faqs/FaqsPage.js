import React, { useState , useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import Minus from "../../assets/dark/faqs/minus.png";
import add from "../../assets/dark/faqs/add.png";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/dark/faqs/arrow-down.png";
import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/Footer/Footer";

const FaqsPage = () => {
  const { theme } = useTheme();
  const [showFaq1, setShowFaqs1] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    {
      id: 10,
      q1: "How secure is the integration between OneUp and my brokerage?",
      a1: "We prioritize your security by employing bank-level safeguards for all data. Integration occurs through a proxy authentication system, similar to Plaid, allowing us to securely manage your account without direct access to your login credentials. Access can be revoked anytime through your brokerage settings.",
    },
    {
      id: 11,
      q1: "Does OneUp engage in short selling or crypto trading?",
      a1: "OneUp strictly avoids short selling and does not engage in cryptocurrency or options trading, focusing instead on stocks within the parameters of your chosen strategies.",
    },
    {
      id: 12,
      q1: "How are trades executed in my brokerage account?",
      a1: "We utilize your brokerage's API, leveraging authentication tokens (without accessing your login details) to execute trades according to your strategy preferences. This ensures seamless and secure transaction management.",
    },
    {
      id: 13,
      q1: "Will OneUp trade on margin?",
      a1: "We do not conduct margin trading, regardless of whether your brokerage account permits it. Our commitment is to ensure a responsible and secure investment approach.",
    },
    {
      id: 14,
      q1: "Does OneUp reinvest my earnings?",
      a1: "Yes, earnings are automatically reinvested to maintain and enhance your strategy's alignment, leveraging both your initial allocation and accrued profits for portfolio rebalancing.",
    },
    {
      id: 15,
      q1: "Will OneUp affect other stocks in my account?",
      a1: "OneUp operates with precision, managing only the shares acquired through our platform. Your existing holdings, even those with matching tickers, remain untouched and under your control.",
    },
  ];
  
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col lg={9} md={8} className="mx-auto">
            <div className="faqs-main-heading faqs-page-headin">
              <h4 style={{ color: theme === "dark" ? "#fff" : "#11172A" }}>
                Frequently Asked Questions
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="faqs-main-row-wrap-page">
          <Col lg={9} md={8} className="mx-auto">
            {data.map((da) => {
              return (
                <div
                  className={
                    da.id == showFaq1
                      ? `faqs-content-main-wrapper ms-auto ${
                          theme === "dark"
                            ? "faqs-content-main-wrapper-dark-border"
                            : "faqs-content-main-wrapper-light-border"
                        }`
                      : "faqs-content-main-wrapper-inactive ms-auto"
                  }
                >
                  <div
                    className={`d-flex justify-content-between w-100 ${
                      theme === "dark"
                        ? "faqs-content-main-heading-main-wrapper"
                        : "faqs-content-main-heading-main-wrapper-white"
                    } `}
                  >
                    <div className="faqs-content-main-heading">
                      <h4
                        style={{ color: theme === "dark" ? "#FFF" : "#11172A" }}
                      >
                        {da.q1}
                      </h4>
                    </div>
                    <div>
                      <img
                        src={da.id === showFaq1 ? Minus : add}
                        style={{width :"24px" , height:"24px",
                        filter: "invert(38%) sepia(71%) saturate(506%) hue-rotate(188deg) brightness(90%) contrast(86%)"
                      }}
                        onClick={() => {
                          if (da.id == showFaq1) {
                            setShowFaqs1(0);
                          } else setShowFaqs1(da.id);
                        }}
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
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default FaqsPage;
