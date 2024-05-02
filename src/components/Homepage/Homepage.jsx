import React, { useEffect, useContext } from "react";
import "./home.css";
import styles from "./homepage.module.css";
import sharkUpLogo from "../../data/completeLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import Link, useNavigate, and useLocation
import { AuthContext } from "../context/AuthContext";

const Homepage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate for navigation
  const location = useLocation(); // Use useLocation to get the current URL location

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Check if the pathname contains 'investors'
    if (pathname.includes("investors")) {
      navigate("/investor/me");
    } else if (isLoggedIn) {
      navigate("/startup/me");
    }
  }, [isLoggedIn, location, navigate]); // Add isLoggedIn, location, and navigate to the dependency array

  return (
    <div>
      <div className="land">
        <div className="containerrr">
          <div className="one-half left">
            <h1>Investor</h1>
            <Link to="/ilogin" className="cta"> {/* Use Link instead of anchor */}
              Login
            </Link>
          </div>
          <div className="one-half right">
            <h1>Startup</h1>
            <Link to="/login" className="cta"> {/* Use Link instead of anchor */}
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="homepageWrapper">
        <div className={`${styles.homepageWrapperOne}`}>
          <div className={`${styles.homepageImage}`}>
            <div className={`${styles.imageWrapper}`}>
              <img
                className={`${styles.cover}`}
                src={sharkUpLogo}
                alt="sharkUp Logo"
              />
            </div>
          </div>
          <div className={`${styles.homepageDetails}`}>
            <p>
              Nowadays, it seems like we’re experiencing a startup boom, where
              everyone with a bright idea, a good team, and hard work can become
              the next Steve Jobs. However, in today’s marketing-driven world,
              having a good promotional strategy for your startup is as
              essential as having a good idea for the same. For that, a startup
              requires some funding. We aim to bridge this gap and let the Big
              Companies directly invest in the startup of their choice.
            </p>
            <p>
              We at Shark Up aim to provide a platform to startups to raise
              external funding or capital in order to expand their businesses
              into new markets or locations. It also allows them to invest in
              research & development (R&D) or to fend off the competition. This
              in turn helps generate more employment.
            </p>
          </div>
        </div>
        <div className="homepageWrapperTwo"></div>
      </div>
    </div>
  );
};

export default Homepage;
