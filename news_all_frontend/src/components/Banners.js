import React from "react";
// import "../css_styles/Banner.css";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    padding: "0 30px",
    backgrounColor: "red",
    flexWrap: 'wrap',
    // height: '300px',
  },
  title1: {
    fontSize: "20px",
    padding: "5px 5px 0px 5px",
    color: "black",
    fontWeight: "bold",
  },
  title2: {
    fontSize: "16px",
    padding: "5px 5px 0px 5px",
    color: "black",
    margin: "20px",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "green",
  },
});

const Banners = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
        <Typography className={classes.title1} variant="h3">
          I could never moved on
        </Typography>
        <Typography className={classes.title2} variant="h3">
          --darklover
        </Typography>
    </Grid>
  );
};

export default Banners;
