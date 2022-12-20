import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Content = () => {
  return (
    <div className="content-container">
      <h1 className="title-product-text">Blacko Print</h1>
      <p className="content-product-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit
        mattis convallis etiam adipiscing faucibus. Tellus pellentesque
        ullamcorper faucibus vitae. Orci nisl a congue felis lorem dictum quis.
      </p>
      <button className="btn">BUY NOW</button>
      <Link to="/shop" className="link-shop">
        <BsArrowLeft className="icon" /> Back to shop
      </Link>
    </div>
  );
};

export default Content;
