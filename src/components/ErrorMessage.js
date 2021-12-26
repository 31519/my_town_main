import React from "react";
import "../css_styles/cards.css";

import Alert from '@mui/material/Alert';


const ErrorMessage = ({ type , error}) => {
  return (
    
      <div className="error" style={{margin:"10px"}}>
        <Alert 
        severity={type}
        variant="outlined"
        >
            {error}
        </Alert>
      </div>
    
  );
};

export default ErrorMessage;
