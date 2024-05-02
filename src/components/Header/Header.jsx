import React, { useContext } from "react";
import styles from "./header.module.css";
import sharkUpLogo from "../../data/LogoName.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

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
              <li>About Us</li>
            </Link>
            <Link to="/objectives">
              <li>Objective</li>
            </Link>
            <Link to="/investors">
              <li>Start Ups</li>
            </Link>
            <Link to="/startup">
              <li>Investors</li>
            </Link>
            {isLoggedIn ? (
              <li onClick={() => setIsLoggedIn(false)}>Logout</li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
