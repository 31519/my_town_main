import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container:{
    backgroundColor: "#0d1e26",
    marginTop: "50px"
  },
  inTouch: {
    fontSize: "20px",
    padding: "5px 5px 0px 5px",
    color: "white",
    fontWeight: 500,
    fontFamily: "Helvetica",
    textAlign: "start",
    textDecoration: "none",
  },
  item:{
    margin:"10px 20px"
  },
  itemList: {
    marginTop:"30px"
  },
  title:{
    fontSize: "25px",
    padding: "5px 5px 0px 5px",
    color: "white",
    fontWeight: 700,
    fontFamily: "Monospace",
    textAlign: "start",
    textDecoration: "none",
  },
  textLink: {
    textDecoration: "none"
  }
});

const Footers = () => {
  const classes = useStyles();
  return (
    <Grid spacing={2} container className={classes.container}>
      <Grid spacing={1} item xs={12} sm={12} lg={3.5} md={12} className={classes.item}>
        <h2 className={classes.title} >
          GET IN TOUCH
        </h2>
        <hr/>
        <div  className={classes.itemList}>
          <h2 className={classes.inTouch} variant="h2">
            Shillong, Meghalaya , India
          </h2>
          <h2>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                marginLeft: "5px",
                textAlign: "center",
                fontWeight: 500,
                fontFamily: "Monospace",
              }}
              href="mailto:inmatown@gmail.com"
            >
              inmatown@gmail.com
            </a>
          </h2>
          <Link className={classes.textLink} to="/privacy-policy#content">
            <h2 className={classes.inTouch} variant="h2">
              Privacy Policy
            </h2>
          </Link>
          <Link className={classes.textLink} to="/about-us">
            <h2 className={classes.inTouch} variant="h2">
              About Us
            </h2>
          </Link>
        </div>
      </Grid>

      <Grid spacing={1} item xs={12} sm={12} lg={3.5} md={12} className={classes.item}>
        <h2 className={classes.title} >
          SPONSORED BY
        </h2>
        <hr/>
        <div  className={classes.itemList}>
          <h2 className={classes.inTouch} variant="h2">
            STARDUST
          </h2>
          <Link className={classes.textLink} to="/inmatown.com">
            <h2 className={classes.inTouch} variant="h2">
              INMATOWN
            </h2>
          </Link>
        </div>
      </Grid>

      <Grid spacing={1} item xs={12} sm={12} lg={3.5} md={12} className={classes.item}>
        <h2 className={classes.title} >
          LINKS
        </h2>
        <hr/>
        <div  className={classes.itemList}>
          <h2 className={classes.inTouch} variant="h2">
            STARDUST
          </h2>
          <Link className={classes.textLink} to="/">
          <h2 className={classes.inTouch}>www.inmatown.com</h2>
        </Link>
        <h2 className={classes.inTouch} variant="h2">
          All Right Reserved
        </h2>
        <h2 className={classes.inTouch} variant="h2">
          Created by: Stardust
        </h2>
        </div>
      </Grid>

    </Grid>
  );
};

export default Footers;
