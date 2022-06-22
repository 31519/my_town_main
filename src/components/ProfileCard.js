import React, { useState } from "react";
// import "../css_styles/cards.css";
import { makeStyles } from "@mui/styles";

// import { Helmet } from "react-helmet";


const useStyles = makeStyles({
  profileCard: {
    // margin: "10px auto",
    display:"flex",
    justifyContent: "center",
    background: "#ffffff57",
    // opacity: "0.5",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 11,
    textAlign: "center",
    alignItems: "center",
    


  },

  cardHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#191c24",
    borderRadius: "5px",
    width: "250px",
    position: "absolute"
  },
  pic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "20px 0px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid white",

  },

  name: {
    fontSize: "16px",
    fontFamily: "Helvetica",
    color: "white",
    margin: "5px 0px",
    textTransform:"capitalize"
  },
  other: {
    fontSize: "10px",
    fontFamily: "Helvetica",
    color: "white",
    margin: "5px 5px",
    textTransform:"capitalize",
    textOverflow: "break-word",
    wordBreak: "break-word",
    opacity: "0.6",
    letterSpacing: "1px"
  },
  approved: {
    fontSize: "16px",
    fontFamily: "Helvetica",
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

  close: {
    position: "absolute",
    right: "3%",
    top: "3%",
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "white",
    border: "2px solid #0a0561",
    zIndex: 111111,
    cursor: "pointer",

  },

});


const ProfileCard = ({ profile }) => {

  const classes = useStyles();
  return (
    <div className={classes.profileCard}>
      <div className={classes.cardHeader}>
        <div className={classes.pic}>
          <img className={classes.image} src={profile.image} alt="profilePic" />
        </div>
        <div className={classes.name}>

          cos
        </div>
        <div className={classes.detailContainer} item xs={12} sm={12} lg={4}>
          {profile.isApproved ? (
            <h4 className={classes.detailTextApproved}>Approved</h4>
          ) : (
            <h4 className={classes.detailTextNotApproved}>Not Approved</h4>
          )}
        </div>
        <div className={classes.other}>
          {profile.address}
        </div>
        <div className={classes.other}>
          {profile.state}
        </div>
        <div className={classes.other}>
          {profile.country}
        </div>
        <div className={classes.close} >
          x
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
