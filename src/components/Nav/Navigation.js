import React, { useState } from "react";
import { useTheme } from "../../ThemeContext";
import "./Navigation.css";
import logo from "../../assets/dark/Homepage/logo.png";
import arrow from "../../assets/dark/arrow-down.png";
import ThemeToggle from "../../ToggleButton";
import bars from "../../assets/dark/mobile navigation/bars.png";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/light/logo-light.png";
import arrowdown from "../../assets/light/arrow-down.png";
import lightbar from "../../assets/light/lightbar.png"

const Navigation = () => {
  const { theme } = useTheme();
  const [showResource, setShowResource] = useState(false);
  const [showResource1, setShowResource2] = useState(false);
  const [showNav, setShowNavbar] = useState(false);
  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="navigation-main-wrapper">
        <div
          className={
            theme === "dark"
              ? "navigation-second-wrapper"
              : "navigation-second-wrapper-white"
          }
        >
          <Link to="/">
            <div className="navigation-main-logo">
              <img src={theme === "dark" ? logo : LogoLight} alt="..." />
            </div>
          </Link>

          <div className="d-md-flex d-none">
            <Link to="/">
              <h1
                className={
                  theme === "dark"
                    ? "navigation-first-heading"
                    : "navigation-first-heading-white"
                }
              >
                Home
              </h1>
            </Link>
            <Link to="/pricing">
              <h1
                className={
                  theme === "dark"
                    ? "navigation-first-heading"
                    : "navigation-first-heading-white"
                }
              >
                Pricing
              </h1>
            </Link>
            <div
              className={
                theme === "dark"
                  ? "navigation-resources-heading"
                  : "navigation-resources-heading-white"
              }
            >
              <h1
                onClick={() => {
                  setShowResource(!showResource);
                  setShowResource2(false);
                }}
              >
                Resources <img src={theme === "dark" ? arrow : arrowdown} />
              </h1>

              <div
                className={
                  showResource ? "navigation-resource-wrapper" : "d-none"
                }
                style={{ background: theme === "dark" ? "#0d0d0d" : "#fff" }}
              >
                <Link
                  to="/about"
                  className="d-flex justify-content-between header-about-heading"
                  style={{
                    borderColor: theme === "dark" ? "#1f2228" : "#E5E7EB",
                  }}
                >
                  <h1
                    onClick={() => {
                      setShowResource(!showResource);
                      setShowResource2(false);
                    }}
                    style={{ color: theme === "dark" ? "#fff" : "#111928" }}
                  >
                    About Us
                  </h1>
                </Link>
                <Link
                  to="/articles"
                  className="d-flex justify-content-between header-about-heading"
                  style={{
                    borderColor: theme === "dark" ? "#1f2228" : "#E5E7EB",
                  }}
                >
                  <h1
                    onClick={() => {
                      setShowResource(!showResource);
                      setShowResource2(false);
                    }}
                    style={{ color: theme === "dark" ? "#fff" : "#111928" }}
                  >
                    Articles
                  </h1>
                </Link>
                <div
                  className="d-flex justify-content-between header-about-heading"
                  style={{
                    borderColor: theme === "dark" ? "#1f2228" : "#E5E7EB",
                  }}
                  onClick={() => {
                    setShowResource2(!showResource1);
                  }}
                >
                  <h1 style={{ color: theme === "dark" ? "#fff" : "#111928" }}>
                    Show arictle
                  </h1>
                  <img src={arrow} />
                </div>
                <div style={{ display: showResource1 ? "block" : "none" }}>
                  <Link to="/articlecms" className="header-desc-wrapper">
                    <h1
                      style={{ color: theme === "dark" ? "#fff" : "#596780" }}
                    >
                      The Silent Threat
                    </h1>
                  </Link>
                  <Link to="/articlecms1" className="header-desc-wrapper">
                    <h1
                      style={{ color: theme === "dark" ? "#fff" : "#596780" }}
                    >
                      Unveiling a New Era in Investment
                    </h1>
                  </Link>
                  <Link to="/articlecms2" className="header-desc-wrapper">
                    <h1
                      style={{ color: theme === "dark" ? "#fff" : "#596780" }}
                    >
                      Active vs Passive Management
                    </h1>
                  </Link>
                  <Link to="/articlecms3" className="header-desc-wrapper">
                    <h1
                      style={{ color: theme === "dark" ? "#fff" : "#596780" }}
                    >
                      Empowering investors with full control
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-flex d-none">
            <div className="nav-toggle-theme">
              <ThemeToggle />
            </div>
            <div
              className={theme === "dark" ? "nav-sign-up" : "nav-sign-up-white"}
            >
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
            <img src={theme === "dark" ? bars : lightbar} alt="..." />
          </div>

          <div
            className={
              showNav ? "mobile-nav-position" : "mobile-nav-position-not"
            }
            style={{background: theme === "dark" ? "#000" : "#fff"}}
          >
            <Link to="/" className={theme === "dark"? "navigation-first-heading-mobile" : "navigation-first-heading-mobile-white"}>
              HOME
            </Link>
            <Link to="/about" className={theme === "dark"? "navigation-first-heading-mobile" : "navigation-first-heading-mobile-white"}>
              About
            </Link>
            <Link to="/pricing" className={theme === "dark"? "navigation-first-heading-mobile" : "navigation-first-heading-mobile-white"}>
              PRICING
            </Link>

            <h1
              className={theme === "dark"? "navigation-first-heading-mobile" : "navigation-first-heading-mobile-white"}
              onClick={() => {
                setShowResource2(!showResource1);
              }}
            >
              RESOURCES
            </h1>

            <div style={{ display: showResource1 ? "block" : "none" }}>
              <Link to="/ArticleCMS" className={theme === "dark"? "mobile-article-heading":"mobile-article-heading-white"}>
                The Silent Threat
              </Link>
              <Link to="/ArticleCMS1" className={theme === "dark"? "mobile-article-heading":"mobile-article-heading-white"}>
                Unveiling a New Era in Investment
              </Link>

              <Link to="/ArticleCMS2" className={theme === "dark"? "mobile-article-heading":"mobile-article-heading-white"}>
                Active vs Passive Management
              </Link>
              <Link to="/ArticleCMS3" className={theme === "dark"? "mobile-article-heading":"mobile-article-heading-white"}>
                Empowering investors with full control
              </Link>
            </div>

            <div className="nav-toggle-theme">
              <ThemeToggle />
            </div>
            <div
              className={
                theme === "dark"
                  ? "nav-sign-up mobile-view"
                  : "nav-sign-up-white mobile-view"
              }
            >
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
