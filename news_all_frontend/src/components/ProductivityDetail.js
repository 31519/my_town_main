import React from "react";
import "../css_styles/ProductivityDetail.css";
const ProductivityDetail = ({tech, models}) => {
  
  return (
    <div className="productivity">
      <div className="productivity_container">
        <div className="productivity_header">
          <div className="productivity_header1"></div>
          <div className="productivity_header2">{models} DETAIL</div>
        </div>
        <div className="productivity_items">
          <img src={tech.image} alt="" />
          <div className="productivity_text">
            <h2 className="productivity_text1">{tech.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityDetail;
