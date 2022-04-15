import React from "react";

import Alert from '@mui/material/Alert';


const ErrorMessage = ({ type , error}) => {
  return (
    
      <div className="error" style={{margin:"10px", color:'red'}}>
        <Alert 
        severity={type}
        variant="contained"
        color='secondary'
        >
            <p style={{color:'red', padding:'0px', margin:'0px'}}>
              {error}
            
            </p>
        </Alert>
      </div>
    
  );
};

export default ErrorMessage;
