import React from "react";
import Footers from "../components/Footers";
import Banners from "../components/Banners";
import { useNavigate, Link } from "react-router-dom";

import "../css_styles/TechList.css";
// IMPORT FROM ACTIONS

import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  gridContent: {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
  },
  title: {
    fontSize: "16px",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
  },
  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "20px",
  },
});

const AboutUs = () => {
  const navigate = useNavigate();

  // const pathname = window.location.pathname

  const classes = useStyles();

  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="techlist">
        <Banners />

        <Grid className={classes.gridHeader} container item>
          <Button onClick={navigateHandler} color="info" variant="contained">
            Back
          </Button>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the ads section */}
          </Grid>

          <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
            <Grid style={{ margin: "10px" }} item>
              <h1>About Us</h1>
              <h2>
                We help people put their content in the web whether it be local shop,
               youtube channel, video content ..etc . We help to advertise their content
               for easy eccessibility let people know their business

              </h2>
            </Grid>
          </Grid>

          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the ads section */}
          </Grid>
        </Grid>

        <Footers />
      </div>
    </>
  );
};

export default AboutUs;
