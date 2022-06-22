import React from "react";
import { makeStyles } from "@mui/styles";

import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "80vh",
    display:"flex",
    justifyContent:"center",
    alignItem: "center",
    height: "100%"

  },
  loaderWrapper: {
    width: "30px",
    height: "30px",
    margin: "auto",
  },
  loader: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    border: "2px solid white",
    borderTopColor: " white",
    borderBottomColor: " white",
    borderRadius: "50px",
    animation: "rotate 5s linear infinite",
  },
  loaderInner: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    border: "2px solid #0b958d",
    // borderTopColor: " white",
    // borderBottomColor: " white",
    borderRadius: "50px",
    animation: "rotate 5s linear infinite",

    borderTopColor: "white",
    borderBottomColor: " #abb8b7",
    animationDuration: "2.5s",
  },
}));

const PageLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={classes.loaderWrapper}
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        {/* <CircularProgress
        color="primary" /> */}
        <div className={classes.loader}>
          <div className={classes.loaderInner}></div>
        </div>
      </div>
    </div>
  );
};


export default PageLoader;
