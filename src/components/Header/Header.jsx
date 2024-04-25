import React from "react";
import styles from "./header.module.css";
import sharkUpLogo from "../../data/LogoName.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={`${styles.headerWrapper}`}>
        <div className={`${styles.imageWrapper}`}>
          <img
            className={`${styles.cover}`}
            src={sharkUpLogo}
            alt="sharkUp Logo"
          />
        </div>
        <div className={`${styles.headerContentWrapper}`}>
          <ul className={`${styles.headerContent}`}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/aboutus">
              {" "}
              <li>About Us</li>
            </Link>
            <Link to="/objectives">
              <li>Objective</li>
            </Link>
            <Link to="/investors">
              <li>Investors</li>
            </Link>
            <Link to="/startup">
              <li>Start Ups</li>
            </Link>
            {/* Example of conditional rendering for login/logout */}
            {/* Adjust this logic based on your authentication */}
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
