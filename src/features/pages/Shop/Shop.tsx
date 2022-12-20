import React from "react";
import ProductItem from "../../../components/productItem/productItem";

import Layout1 from "../../../layout/layout1";
import "./style.scss";

const Shop = () => {
  return (
    <Layout1 position={"relative"} textColor={"black"}>
      <section className="shop-container container">
        <div className="list-product-container-1">
          {Array(9)
            .fill(0)
            .map((item, index) => (
              <ProductItem key={index} />
            ))}
        </div>
      </section>
    </Layout1>
  );
};

export default Shop;
