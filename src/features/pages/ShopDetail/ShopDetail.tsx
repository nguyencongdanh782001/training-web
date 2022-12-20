import React from "react";
import ProductItem from "../../../components/productItem/productItem";
import Layout1 from "../../../layout/layout1";
import Content from "./components/content";
import ImageProduct from "./components/imageProduct";
import "./style.scss";

const ShopDetail = () => {
  return (
    <Layout1 position={"relative"}>
      <div className="detail-product-container container">
        <div className="top">
          <div className="left">
            <ImageProduct />
          </div>
          <div className="right">
            <Content />
          </div>
        </div>
        <div className="bottom">
          <div className="title-relate-product">
            <h1 className="title-relate-text">More like this</h1>
          </div>
          <div className="list-product-relate">
            {Array(2)
              .fill(0)
              .map((item, index) => (
                <ProductItem key={index} />
              ))}
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default ShopDetail;
