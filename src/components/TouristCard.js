import React from "react";
import "../css_styles/TouristCard.css";
import { Link } from "react-router-dom";
const TouristCard = ({ tourisms }) => {
  return (
    <div className="tourist">
      <div className="tourist_header">
        <div className="tourist_header1">TOURISMS</div>
        {/* <div className="celeb_header2">DETAIL</div> */}
      </div>
      <div className="tourist_container">
        <Link to={`/tourisms-detail/${tourisms.id}`} state={{ models: 'TOURIST'}}>
          <div className="tourist_items1">
            <img src={tourisms.image} alt="" />
            <div className="tourist_text">
              <h2 className="tourist_text1">{tourisms.title}</h2>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default TouristCard;
