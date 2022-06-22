import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
    // textAlign: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: "80vh",
  },
  container: {
    display: "flex",

    width: "100%",
    alignItems: "center",
    backgroudColor: "#383b38",
    margin: "20px 20px",
    justifyContent: "center",
    alignItem: "center",
    background: "#191c24",
    borderRadius: "5px",
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
  },
  subContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  detailContainer: {
    margin: "10px",
  },
  detailText: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    color: "rgb(172, 172, 172)",
    margin: "10px",
  },
  detailTextApproved: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    color: "#00d25b",
    margin: "10px",
  },
  detailTextNotApproved: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    color: "red",
    margin: "10px",
  },
}));

const ProfileOverview = ({ user }) => {
  const classes = useStyles();
  const userDefaultImage = "images/default/userDefaultImage.png";

  return (
    <Grid className={classes.header}>
      <Grid className={classes.container} container>
        <Grid
          className={classes.imageContainer}
          style={{ margin: "20px 0px" }}
          item
          xs={12}
          sm={12}
          lg={12}
        >
          {user.image ? (
            <img
              className={classes.profileImage}
              src={user.image}
              alt={user.email}
            />
          ) : (
            <img
              className={classes.profileImage}
              src={userDefaultImage}
              alt="img"
            />
          )}
        </Grid>
        <Grid
          className={classes.subContainer}
          container
          item
          xs={12}
          sm={12}
          lg={12}
        >
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>
              {user.first_name} {user.last_name}
            </h4>
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>{user.email}</h4>
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            {user.is_approved ? (
              <h4 className={classes.detailTextApproved}>Approved</h4>
            ) : (
              <h4 className={classes.detailTextNotApproved}>Not Approved</h4>
            )}
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>{user.address}</h4>
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>{user.country}</h4>
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>{user.phone_number}</h4>
          </Grid>
          <Grid
            className={classes.detailContainer}
            item
            xs={12}
            sm={12}
            lg={12}
          >
            <h4 className={classes.detailText}>{user.gender}</h4>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileOverview;
