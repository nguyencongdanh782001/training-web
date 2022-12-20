import React from "react";
import { IMG_1 } from "../../../../global/assets/global_asset";
import "./style.scss";

const ImageProduct = () => {
  return (
    <div className="product-image">
      <img src={IMG_1} alt="image product" className="img-product" />
    </div>
  );
};

export default ImageProduct;
