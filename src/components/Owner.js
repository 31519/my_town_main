import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ProfileCard from "./ProfileCard";
import { profileDetailActions } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: "0px 0px",
    backgroundColor: "#010101a8",
  },
  imageContainer: {
    width: "30px",
    height: "30px",
    margin: "5px",
  },
  usercontainer: {},

  text: {
    fontFamily: "Helvetica",
    margin: "5px",
    color: "white",
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-evently",
  },
  iconText: {
    display: "flex",
    margin: "0px 5px",
  },
  subtext: {
    fontFamily: "Helvetica",
    margin: "5px",
    color: "white",
    fontSize: "10px",
    letterSpacing: "0.6px",
  },
  icon: {
    color: "green",
    fontSize: "10px",
  },
  overlay: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100vh",
    zIndex: 1,
    display: "none",
    backgroundColor: "white",
  },
  profileClose: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100vh",
    zIndex: 111,
    display: "none",
  },
  profileOpen: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100vh",
    zIndex: 111,
    // display: 'flex',
  },

}));

const Owner = ({ User, userImage = "" }) => {

  const profileDetail = useSelector((state) => state.profileDetail);
  const dispatch = useDispatch();
  const { profile } = profileDetail;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch(profileDetailActions());
  }, [dispatch]);
  const openOverview = () => {
    setIsOpen(true);
  };
  const closeOverview = () => {
    setIsOpen(false);
  };

  document.addEventListener("scroll", function (evt) {
    var showId = document.getElementById("show");
    var targetId = evt.target;
    {
      targetId !== showId && closeOverview();
    }
  });
  // const profile = {
  //   firstName: "cos",
  //   lastName: "Rumut",
  //   image: "../images/blob",
  // };
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={closeOverview}
        className={`${isOpen ? classes.profileOpen : classes.profileClose}`}
        style={{ zIndex: "1111" }}
      >
        {profile && <ProfileCard profile={profile} />}
        {/* <div id="show" className={classes.close}>
          <h2 onClick={closeOverview}>x</h2>
        </div> */}
      </div>

      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            onClick={openOverview}
            src={userImage}
            alt="owner"
          />
        </div>
        <div className={classes.usercontainer}>
          <h3 className={classes.text}>{User.user}</h3>
          <div className={classes.subContainer}>
            <div className={classes.iconText}>
              <DoneAllIcon sx={{ fontSize: 16 }} className={classes.icon} />
              <h3 className={classes.subtext}>Trusted Listing</h3>
            </div>
            <div className={classes.iconText}>
              <DoneAllIcon sx={{ fontSize: 16 }} className={classes.icon} />
              <h3 className={classes.subtext}>Verified</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
