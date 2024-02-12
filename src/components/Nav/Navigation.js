import React, { useState } from "react";
import { useTheme } from '../../ThemeContext'
import "./Navigation.css";
import logo from "../../assets/dark/Homepage/logo.png";
import arrow from "../../assets/dark/arrow-down.png";
import ThemeToggle from "../../ToggleButton";
import bars from "../../assets/dark/mobile navigation/bars.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  
  const { theme } = useTheme();
  const [showResource, setShowResource] = useState(false);
  const [showResource1, setShowResource2] = useState(false);
  const [showNav, setShowNavbar] = useState(false);
  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
    <div className="navigation-main-wrapper">
      <div className="navigation-second-wrapper">
        <Link to="/">
          <div className="navigation-main-logo">
            <img src={logo} alt="..." />
          </div>
        </Link>

        <div className="d-md-flex d-none">
          <Link to="/">
            <h1 className="navigation-first-heading">Home</h1>
          </Link>
          <Link to="/pricing">
            <h1 className="navigation-first-heading">Pricing</h1>
          </Link>

          <div className="navigation-resources-heading">
            <h1
              onClick={() => {
                setShowResource(!showResource);
                setShowResource2(false);
              }}
            >
              {" "}
              Resources <img src={arrow} />
            </h1>

            <div
              className={
                showResource ? "navigation-resource-wrapper" : "d-none"
              }
            >
              <Link
                to="/about"
                className="d-flex justify-content-between header-about-heading"
              >
                <h1
                  onClick={() => {
                    setShowResource(!showResource);
                    setShowResource2(false);
                  }}
                >
                  About Us
                </h1>

              </Link>
              <Link
                to="/articles"
                className="d-flex justify-content-between header-about-heading"
              >
                <h1
                  onClick={() => {
                    setShowResource(!showResource);
                    setShowResource2(false);
                  }}
                >
                  Articles
                </h1>
              </Link>
              <div
                className="d-flex justify-content-between header-about-heading"
                onClick={() => {
                  setShowResource2(!showResource1);
                }}
              >
                <h1>Show arictle</h1>
                <img src={arrow} />
              </div>
              <div style={{ display: showResource1 ? "block" : "none" }}>
                <Link to="/articlecms" className="header-desc-wrapper">
                  <h1>The Silent Threat</h1>
                </Link>
                <Link to="/articlecms1" className="header-desc-wrapper">
                  <h1>Unveiling a New Era in Investment</h1>
                </Link>
                <Link to="/articlecms2" className="header-desc-wrapper">
                  <h1>Active vs Passive Management</h1>
                </Link>
                <Link to="/articlecms3" className="header-desc-wrapper">
                  <h1>Empowering investors with full control</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex d-none">
          <div className="nav-toggle-theme">
            <ThemeToggle />
          </div>
          <div className="nav-sign-up">
            <button>Sign Up</button>
          </div>
          <div className="nav-sign-in">
            <button>Sign In</button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div
          className="mobik-nav-wrapp"
          onClick={() => setShowNavbar(!showNav)}
        >
          <img src={bars} alt="..." />
        </div>

        <div
          className={
            showNav ? "mobile-nav-position" : "mobile-nav-position-not"
          }
        >
          <Link to="/" className="navigation-first-heading-mobile">
            HOME
          </Link>
          <Link to="/about" className="navigation-first-heading-mobile">
            About
          </Link>
          <Link to="/pricing" className="navigation-first-heading-mobile">
            PRICING
          </Link>

          <h1
            className="navigation-first-heading-mobile"
            onClick={() => {
              setShowResource2(!showResource1);
            }}
          >
            RESOURCES
          </h1>

          <div style={{ display: showResource1 ? "block" : "none" }}>
            <Link to="/ArticleCMS" className="mobile-article-heading">
              The Silent Threat
            </Link>
            <Link to="/ArticleCMS1" className="mobile-article-heading">
              Unveiling a New Era in Investment
            </Link>

            <Link to="/ArticleCMS2" className="mobile-article-heading">
              Active vs Passive Management
            </Link>
            <Link to="/ArticleCMS3" className="mobile-article-heading">
              Empowering investors with full control
            </Link>
          </div>

          <div className="nav-toggle-theme">
            <ThemeToggle />
          </div>
          <div className="nav-sign-up mobile-view">
            <button>Sign Up</button>
          </div>
          <div className="nav-sign-in mobile-view">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navigation;
