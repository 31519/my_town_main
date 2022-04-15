import React from "react";
import { makeStyles } from "@mui/styles";

import {

  CircularProgress
} from "@mui/material";


const useStyles = makeStyles((theme) => ({
  loaderWrapper : {
    width: "60px",
    height: "60px",
    margin: "auto"
  },
  loader : {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    border: "7px solid #162534",
    borderTopColor: " #4bc8eb",
    borderBottomColor: " #f13a8f",
    borderRadius: "50px",
    animation: "rotate 5s linear infinite"
  },
  loaderInner:{
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    border: "5px solid #162534",
    // borderTopColor: " #4bc8eb",
    // borderBottomColor: " #f13a8f",
    borderRadius: "50px",
    animation: "rotate 5s linear infinite",

    borderTopColor: "#36f372",
    borderBottomColor: "#fff",
    animationDuration: "2.5s"

  }
}));


const Loaders = () => {
  const classes = useStyles();
  return (
    
      <div className={classes.loaderWrapper} style={{ display:'flex', alignItem:'center', justifyContent:'center'}}>
        {/* <CircularProgress
        color="primary" /> */}
        <div className={classes.loader}>
          <div className={classes.loaderInner}></div>
        </div>
      </div>
    
  );
};

export default Loaders;
