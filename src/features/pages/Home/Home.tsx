import React from "react";
import Head from "./components/head";
import { BG_HOME } from "../../../global/assets/global_asset";
import "./style.scss";
import ListBanner from "./components/listBanner";

const Home = () => {
  return (
    <div
      className="container-home"
      style={{ backgroundImage: `url("${BG_HOME}")` }}
    >
      <div className="background"></div>
      <div className="box container">
        <section className="header-section">
          <Head />
        </section>
        <section className="listBanner-section">
          <ListBanner />
        </section>
      </div>
    </div>
  );
};

export default Home;
