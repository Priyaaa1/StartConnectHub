import React from "react";
import styles from "./footer.module.css";
import sharkUpLogo from "../../data/LogoName.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footerWrapper}`}>
        <div className={`${styles.footerWrapperOne}`}>
          <div className={`${styles.imageWrapper}`}>
            <img
              className={`${styles.cover}`}
              src={sharkUpLogo}
              alt="StartConnectHub Logo"
            />
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Address:</h5>
            <p> Mumbai-Agra National Highway, Guna, Madhya Pradesh - 473226</p>
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Contact Us:</h5>
            <p> 9988XXXXXX</p>
          </div>
          <div className={`${styles.companyContact}`}>
            <h5>Email:</h5>
            <p> xxyyzz@startconnecthub.com</p>
          </div>
        </div>
        <div className={`${styles.footerWrapperTwo}`}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Objective</li>
            <li>Investors</li>
            <li>Start Ups</li>
          </ul>
        </div>
        <div className={`${styles.footerWrapperThree}`}>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsFacebook />
            </span>
            <span className={`${styles.socialMediaName}`}>Facebook</span>
          </button>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsInstagram />
            </span>
            <span className={`${styles.socialMediaName}`}>Instagram</span>
          </button>
          <button>
            <span className={`${styles.socialMedia}`}>
              <BsTwitter />
            </span>
            <span className={`${styles.socialMediaName}`}>Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
