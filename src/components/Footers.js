import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container:{
    backgroundColor: "#0d1e26",
    padding: "20px",
    display: "flex",
    justifyCotent: "center",
  },
  list: {
    fontSize: "16px",
    padding: "10px",
    color: "white",
    fontWeight: 500,
    fontFamily: "Helvetica",
    textAlign: "start",
    textDecoration: "none",
    transition: "all .2s ease",
    "&:hover": {
      fontSize: "18px",
    }
  },
  item:{
    margin:"10px 20px"
  },
  itemList: {
    marginTop:"20px"
  },
  title:{
    fontSize: "16px",
    padding: "5px 5px 0px 5px",
    color: "white",
    fontWeight: 700,
    fontFamily: "Helvetica",
    textAlign: "start",
    textDecoration: "none",
  },
  textLink: {
    textDecoration: "none"
  },
  breakLine:{
    background: "red",
    fontWeight: "900"
  }
});

const Footers = () => {
  const classes = useStyles();
  return (
    <div>
    <Grid spacing={2} container className={classes.container}>
      <Grid spacing={1} item xs={12} sm={12} lg={4} md={12} className={classes.item}>
        <h2 className={classes.title} >
          GET IN TOUCH
        </h2>
        <hr className={classes.breakLine}/>
        <div  className={classes.itemList}>
          <h2 className={classes.list} variant="h2">
            Shillong, Meghalaya , India
          </h2>
          
            <a
              className={classes.list}
              href="mailto:inmatown@gmail.com"
            >
              inmatown@gmail.com
            </a>
          <Link className={classes.textLink} to="/privacy-policy#content">
            <h2  className={classes.list}>
              Privacy Policy
            </h2>
          </Link>
          <Link className={classes.textLink} to="/about-us">
            <h2 className={classes.list}>
              About Us
            </h2>
          </Link>
        </div>
      </Grid>



      <Grid spacing={1} item xs={12} sm={12} lg={4} md={12} className={classes.item}>
        <h2 className={classes.title} >
          LINKS
        </h2>
        <hr className={classes.breakLine}/>
        <div  className={classes.itemList}>
          <h2 className={classes.list}  variant="h2">
            STARDUST
          </h2>
          <Link className={classes.textLink} to="/">
          <h2 className={classes.list} >www.inmatown.com</h2>
        </Link>
        <h2 className={classes.list} >
          All Right Reserved
        </h2>
        <h2 className={classes.list} >
          Created by: Stardust
        </h2>
        </div>
      </Grid>
      <Grid spacing={1} item xs={12} sm={12} lg={4} md={12} className={classes.item}>
        <h2 className={classes.title} >
          SPONSORED BY
        </h2>
        <hr className={classes.breakLine}/>
        <div  className={classes.itemList}>
          <h2 className={classes.list} variant="h2">
            STARDUST
          </h2>
          <Link className={classes.textLink} to="/inmatown.com">
            <h2 className={classes.list} variant="h2">
              INMATOWN
            </h2>
          </Link>
        </div>
      </Grid>

    </Grid>
    </div>
  );
};

export default Footers;
