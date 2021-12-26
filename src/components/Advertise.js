import React from "react";
import "../css_styles/Advertise.css";
import { Link } from "react-router-dom";
const Advertise = ({ advertise }) => {
  return (
    <Link to={`/advertise-detail/${advertise.id}`} >
      <div className="advertise_container">
        {/* <div className="advertise_header">
          <div className="advertise_header1"></div>
          <div className="advertise_header2">Advertise</div>
        </div> */}
        <div className="advertise_items">
          <img src={advertise.image} alt="" />
          <div className="advertise_text">
            <h2 className="advertise_text1">{advertise.title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Advertise;
