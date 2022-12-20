import React from "react";
import Layout1 from "../../../layout/layout1";
import Banner from "./components/banner";
import ListBanner from "./components/listBanner";
import "./style.scss";

const ConcertDetail = () => {
  return (
    <Layout1 textColor={"white"}>
      <section className="banner-section">
        <Banner />
      </section>
      <section className="list-banner-section container">
        <ListBanner />
        <div className="btn-aria">
          <a href="#" className="btn-link">
            book now
          </a>
        </div>
      </section>
    </Layout1>
  );
};

export default ConcertDetail;
