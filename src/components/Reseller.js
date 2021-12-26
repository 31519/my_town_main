import React from "react";
import "../css_styles/Reseller.css";
import { Link } from "react-router-dom";

const Reseller = ({ reseller }) => {
  return (
    <div className="reseller_boss">
      <div className="reseller">
        <div className="reseller_header">
          {/* <div className="reseller_header1">RESELLER</div> */}
          {/* <div className="celeb_header2">DETAIL</div> */}
        </div>

        <div className="reseller_container">
          <Link to={`/reseller-detail/${reseller.id}/${reseller.slug}`} state={{ models: 'RESELLER'}}>
            <div className="reseller_items1">
              <img src={reseller.image} alt="" />
              <div className="reseller_text">
                <h2 className="reseller_text1">{reseller.title}</h2>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Reseller;
