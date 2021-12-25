import React from "react";
import "../css_styles/EntertainmentDetail.css";
const EntertainmentDetail = ({ tech }) => {
  return (
    <div className="entertainment">
      <div className="entertainment_container">
        <div className="entertainment_header">
          <div className="entertainment_header1"></div>
          <div className="entertainment_header2">ENTERTAINMENT DETAIL</div>
        </div>
        <div className="entertainment_items">
          <img src={tech.urlToImage} alt="" />
          <div className="entertainment_text">
            <h2 className="entertainment_text1">{tech.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentDetail;
