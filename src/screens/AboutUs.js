import React from "react";
import { useNavigate, Link } from "react-router-dom";

// IMPORT FROM ACTIONS

import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ContactUs from "../components/ContactUs";
import Header from "../screen/Header";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";

const useStyles = makeStyles((theme) => ({
  titleContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  gridContent: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
    width: "500px",
    textAlign:"center",
    margin: "5px auto",
    [theme.breakpoints.down("xs")]: {
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
}));

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
              At inmatown.com we area group entrepreneur base at Jowai who
               work hard every day to improve and provide updated
              informations to the people related to news, event , schemes,
              tourisms, jobs. We also except partnership with our brand . We are
              quick to work with you whether it be personal or to promote your
              brand or to advertise according to your needs.


            </p>
            <p className={classes.aboutContent}>
              We work mainly on providing Jobs related information
              and Tourisms and apart from this we provide latest news relating
              to education, jobs , skill , ideas , business . We provide information 
              about various schemes, events . We also let you to put any second hand
              things in our site for reselling

              
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
