import React, { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import "./Home.css";
import { Container } from "react-bootstrap";
import Hero from "../../components/HomePage/HeroSection";
import Step from "../../components/HomePage/Step";
import Benefit from "../../components/HomePage/Benefit";
import Strategy from "../../components/HomePage/Strategy";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Nav/Navigation";
import FAQs from "../../components/Faqs/FAQs";
import { JoinNow } from "../../components/JoinNow/JoinNow";
const Home = () => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navigation />
      <Hero />
      <div
        className={`app ${
          theme === "dark" ? "dark-theme" : "light-mode-for-the-page"
        }`}
      >
        <Step />
        <Benefit />
        <Strategy />
        <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
          <Container>
            <FAQs />
          </Container>
        </div>
      </div>

      <JoinNow />

      <Footer />
    </div>
  );
};

export default Home;
