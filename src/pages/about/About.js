import React from "react";
import { useTheme } from "../../ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import about_stop_lossing from "../../assets/dark/about/about-stop-lossing.png";
import AbouPara from "../../components/About/AbouPara";

import ExpertTeam from "./ExpertTeam";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/Footer/Footer";
import bg_article from "../../assets/dark/about/bg_article.png"
const About = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "about-page-main-wrapper-dark" : ""}>
      <Navigation/>
      <Container>
        <Row className="about-main-heading-row">
          <Col lg={8} className="mx-auto">
            <div className={theme === "dark" ? "about-page-main-heading" : ""}>
              <h3>
                ABOUT ONE<span>UP</span>
              </h3>
            </div>
            <div className="about-page-main-para">
              {/* <p>Read the whole Ideation behind oneup’s within 5 min</p> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mx-auto" lg={8}>
            <div className="about-stop-lossing-image-dark">
              <img src={bg_article} alt="..." />
            </div>
          </Col>
        </Row>
        <AbouPara title="For too long, asset management has been a playground for the elite, with firms charging fees based on Assets Under Management (AUM) – benefiting themselves more than their clients. We didn't think that was fair." />
        <AbouPara title="OneUp is the first platform that democratizes access to every investment strategy out there, much like Spotify did for music. Crafted by industry veterans, we empower investors by offering a universe of strategies, all without the traditional fee burden." />
        <AbouPara title="At OneUp, we've got you covered. We track top-performing funds, giving you access to elite strategies without the commitment or minimum investment barriers." />
        <AbouPara title="OneUp personalizes any existing strategy to fit your unique needs. It's not just about investment returns; it's about investing in a way that's true to you." />
        <AbouPara title="Traditional firms often work for their interests, not yours, in a one-size-fits-all, opaque manner. OneUp changes that. We connect to your account for full transparency and tailor strategies to your unique needs, all under a fair subscription model. You pay for the service, not based on your wealth." />
        <AbouPara
          title="Connect your existing brokerage account in seconds and experience the OneUp difference from the comfort of your account. It's quick, seamless, and transformative.
Why not start with replicating your first fund with us? It's a simple, effective way to explore what OneUp offers."
        />
        <div className="image-following-para-text">
          <AbouPara title="We believe your money should work for you, and only you. Embrace freedom from compounded management fees. Discover the power of active investments without the costs. With OneUp, your choices are expanded. Step into the world of smart investing with us and experience the growth of your finances like never before." />
        </div>

        <ExpertTeam />
        <FAQs />
      </Container>
      <JoinNow />
      <Footer/>
    </div>
  );
};

export default About;
