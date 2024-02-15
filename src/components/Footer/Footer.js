import React from "react";
import "./Footer.css";
import { useTheme } from "../../ThemeContext";
import LogoLight from "../../assets/light/logo-light.png";
import logo from "../../assets/dark/Homepage/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="footer-main-wrapper">
      <div className="footer-b-1">
        <img src={theme === "dark" ? logo : LogoLight} />
      </div>
      <div className="footer-b-2">
        <div className="footer-heading">
          <h1 style={{ color: theme === "dark" ? "#FFF" : "#1A202C" }}>
            Quick Links
          </h1>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Home
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Pricing
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Resources
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            About
          </h2>
        </div>
      </div>
      <div className="footer-b-3">
        <div className="footer-heading">
          <h1 style={{ color: theme === "dark" ? "#FFF" : "#1A202C" }}>
            Join Now
          </h1>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Register Now
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Sign In
          </h2>
        </div>
      </div>
      <div className="footer-b-4">
        <div className="footer-heading">
          <h1 style={{ color: theme === "dark" ? "#FFF" : "#1A202C" }}>
            Resources
          </h1>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            About Us
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Blogs
          </h2>
        </div>
        <div className="footer-desc">
          <Link to="/faq" style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            FAQ
          </Link>
        </div>
      </div>
      <div className="footer-b-5">
        <div className="footer-heading">
          <h1 style={{ color: theme === "dark" ? "#FFF" : "#1A202C" }}>
            Follow Us
          </h1>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Instagram
          </h2>
        </div>
        <div className="footer-desc">
          <h2 style={{ color: theme === "dark" ? "#B2B2B2" : "#596780" }}>
            Facebook
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
