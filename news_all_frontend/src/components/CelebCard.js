import React from "react";
import "../css_styles/CelebCard.css";
import { Link } from "react-router-dom";
const CelebCard = ({ celebrity }) => {
  return (
    <div className="celeb">
      <div className="celeb_header">
        {/* <div className="celeb_header1">LATEST FEATURES</div> */}
        {/* <div className="celeb_header2">DETAIL</div> */}
      </div>
      <div className="celeb_container">
        <Link to={`/celebrity-detail/${celebrity.id}`} state={{ models: 'CELEB'}}>
          <div className="celeb_items1">
            <img src={celebrity.image} alt="" />
            <div className="celeb_text">
              <h2 className="celeb_text1">{celebrity.title}</h2>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CelebCard;
