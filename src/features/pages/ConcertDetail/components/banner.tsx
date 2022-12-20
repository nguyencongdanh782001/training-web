import React from "react";
import { BG_HOME } from "../../../../global/assets/global_asset";
import "./style.scss";
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BG_HOME} alt="banner" className="banner-img" />
      <div className="title-baner">
        <p className="title-text">concert</p>
      </div>
    </div>
  );
};

export default Banner;
