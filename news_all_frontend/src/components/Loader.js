import React from "react";
import "../css_styles/cards.css";

import Loader from "react-loader-spinner";


const Loaders = () => {
  return (
    
      <div className="loader" style={{margin:"50px"}}>
        <Loader 
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100} />
      </div>
    
  );
};

export default Loaders;
