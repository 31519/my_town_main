import React from "react";
import { useNavigate, Link } from "react-router-dom";

// IMPORT FROM ACTIONS

import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ContactUs from "../components/ContactUs";
import Header from "../screen/Header";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";

const useStyles = makeStyles({
  gridContent: {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
  },
  title: {
    fontFamily: "Helvetica",
    margin: "30px",
    fontSize: "25px",
    fontWeight: "600",
    letterSpacing: "1.2px",
    lineSpacing: "1.2px",
    opacity: "0.8",
  },
  aboutContent: {
    fontFamily: "Helvetica",
    margin: "30px",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1.2px",
    lineSpacing: "1.2px",
    opacity: "0.8",
    textAlign: "start",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
  },
  titleContainer: {
    alignItems: "center",
    textAlign: "center",
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
      <SideBar />
      <Header />
      <div className="techlist">
        <Grid className={classes.gridHeader} container item>
          <Button onClick={navigateHandler} color="info" variant="contained">
            Back
          </Button>
        </Grid>

        <div spacing={2} className={classes.gridContent} container>
          <div className={classes.titleContainer}>
            <p className={classes.title}>About Us</p>
            <p className={classes.title}>- Our Mission -</p>
            <p className={classes.title}>
              To provide the people with latest news and information related to
              education, jobs, schemes, tourisms, event and many other usefull
              information which benefits the people
            </p>
            <hr />
            <p className={classes.aboutContent}>
              At inmatown.com we work hard every day to provide updated
              informations to the people related to news, event , schemes,
              tourisms, jobs. We also except partnership with our brand . We are
              quick to work with you whether it be personal or to promote your
              brand or to advertise according to your needs.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footers />
    </>
  );
};

export default AboutUs;
