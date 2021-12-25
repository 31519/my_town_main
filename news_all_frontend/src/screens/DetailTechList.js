import React from "react";
import Footers from "../components/Footers";
import Advertise from "../components/Advertise";
import "../css_styles/DetailTechList.css";
import DetailCard from "../components/DetailCard";


const tech = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};
const DetailTechList = () => {
  return (
    <div>
      <div className="detail_main">
        <div className="detail_cards">
          <DetailCard tech={tech}/>
        </div>
        <div className="detail_advertise">
          <Advertise tech={tech} />
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default DetailTechList;
