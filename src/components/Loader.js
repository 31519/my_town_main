import React from "react";
import "../css_styles/cards.css";

import {

  CircularProgress
} from "@mui/material";


const Loaders = () => {
  return (
    
      <div className="loader" style={{width:'100%', display:'flex', alignItem:'center', justifyContent:'center'}}>
        <CircularProgress
        color="primary" />
      </div>
    
  );
};

export default Loaders;
