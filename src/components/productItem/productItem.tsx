import React from "react";
import { Link } from "react-router-dom";
import { IMG_1 } from "../../global/assets/global_asset";
import "./style.scss";

const ProductItem = () => {
  return (
    <Link to="/shop-detail" style={{ textDecoration: "none" }}>
      <div className="product-item-container">
        <div className="product-image-global">
          <img src={IMG_1} alt="product" className="img-product-global" />
        </div>
        <div className="product-title-global">
          <p className="title-text-global">Product</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
