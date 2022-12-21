import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../global/routes/path";
import "./style.scss";
const Head = () => {
  return (
    <div className="header-container">
      <div className="title">
        <p className="title-text">abdularfat</p>
      </div>
      <div className="link-group">
        <Link to="#" className="link">
          about
        </Link>
        <Link to={routes.shop} className="link">
          shop
        </Link>
      </div>
    </div>
  );
};

export default Head;
