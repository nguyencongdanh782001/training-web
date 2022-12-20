import React from "react";
import { IMG_1, IMG_2, IMG_3 } from "../../../../global/assets/global_asset";

const listImg = [
  {
    title: "concerts",
    img: IMG_1,
  },
  {
    title: "weddings",
    img: IMG_2,
  },
  {
    title: "Portraits",
    img: IMG_3,
  },
];

const ListBanner = () => {
  return (
    <div className="listBanner-container">
      {listImg.map((item, index) => (
        <div className={`item item-${index + 1}`} key={index}>
          <div className="item-title">
            <p className="item-text">{item.title}</p>
          </div>
          <div className="item-img">
            <img className="img" src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListBanner;
