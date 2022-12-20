import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <div className="icon-aria">
          <i className="icon-box">
            <BsFacebook className="icon-item" />
          </i>
          <i className="icon-box">
            <AiOutlineInstagram className="icon-item" />
          </i>
          <i className="icon-box">
            <AiOutlineTwitter className="icon-item" />
          </i>
        </div>
        <div className="logo-aria">
          <p className={`logo-text`}>abdularfat</p>
        </div>
        <div className="policy-aria">
          <p className="policy-text">
            © Abdul Arafat 2022, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
