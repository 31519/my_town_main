import React from "react";
import Alert from '@mui/material/Alert';
const ErrorMessage = ({ type , error}) => {
  return (
      <div className="error" style={{margin:"10px auto", color:'red', display:"flex", justifyContent: "center"}}>
        <Alert 
        severity={type}
        variant="contained"
        color='secondary'
        >
            <p style={{color:'red', padding:'0px', margin:'0px', fontFamily: "Helvetica", fontSize:"16px"}}>
              No Internet Connection !
            </p>
        </Alert>
      </div>
  );
};

export default ErrorMessage;
