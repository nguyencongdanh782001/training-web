import React from "react";
import { IMG_1, IMG_2, IMG_3 } from "../../../../global/assets/global_asset";

const listImg = [
  {
    title: "detty rave 2020",
    img: IMG_1,
  },
  {
    title: "vgma 2022",
    img: IMG_2,
  },
  {
    title: "made in lagos 2021",
    img: IMG_3,
  },
];

const ListBanner = () => {
  return (
    <div className="listBanner-container-2">
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
