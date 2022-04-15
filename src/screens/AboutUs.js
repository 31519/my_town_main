import React from "react";
import { useNavigate, Link } from "react-router-dom";

// IMPORT FROM ACTIONS

import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
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

        <Grid className={classes.gridHeader} container item>
          <Button onClick={navigateHandler} color="info" variant="contained">
            Back
          </Button>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>


          <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
            <Grid style={{ margin: "10px" }} item>
              <h1 className={classes.title}>About Us</h1>
              <h2 className={classes.title}>
                We help people put their content in the web whether it be local shop,
               youtube channel, video content ..etc . We help to advertise their content
               for easy eccessibility let people know their business

              </h2>
            </Grid>
          </Grid>


        </Grid>
      </div>
    </>
  );
};

export default AboutUs;
