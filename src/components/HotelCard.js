import React from "react";
import "../css_styles/CelebCard.css";
import { Link } from "react-router-dom";
const HotelCard = ({ hotel }) => {
  return (
    <div className="celeb">
      <div className="celeb_header">
        {/* <div className="celeb_header2">DETAIL</div> */}
      </div>
      <div className="celeb_container">
        <Link to={`/hotel-detail/${hotel.id}`} state={{ models: 'HOTEL'}}>
          <div className="celeb_items1">
            <img src={hotel.image} alt="" />
            <div className="celeb_text">
              <h2 className="celeb_text1">{hotel.title}</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
