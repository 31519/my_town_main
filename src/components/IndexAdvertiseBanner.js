import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { advertiseListAction } from "../actions/advertiseActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    opacity: "0.8",
    display:"flex",
    justifyContent: "center",
    border: "1px",
    [theme.breakpoints.up("md")]: {
      // height: "320px",
    },
    [theme.breakpoints.down("md")]: {
      // height: "220px",
    },
    postion: "relative",
  },

  image: {
    width: "500px",
    [theme.breakpoints.up("md")]: {
      height: "auto",
      

      objectFit: "cover",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "100%",

      objectFit: "cover",
      
    },
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "San-sarif",
    opacity: "0.8",
    textAlign: "center",
    padding: "0px 0px",
    margin: "0px",
    // position: "absolute",
    zIndx: "222",
    [theme.breakpoints.down("md")]: {
      left: "15%",
      top: "20%",
    },
    [theme.breakpoints.up("md")]: {
      left: "30%",
      top: "30%",
    },
  },
  heading: {
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "San-sarif",
    opacity: "0.9",
    textAlign: "center",
    padding: "0px 5px",
  },
  textLink: {
    textDecoration: "none",
  },
}));

const IndexAdvertiseBanner = ({ index = 0, link = "advertise-detail" }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const classes = useStyles();

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  const indexData = listAdvertise[index];

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);
  return (
    <>
      {indexData && (
        <div style={{margin: "30px"}}>
          {indexData && indexData.length !== 0 ? (
            <h2 className={classes.heading}>Advertisement</h2>
          ) : null}
          {indexData && listAdvertiseLoading ? (
            <Loaders />
          ) : listAdvertiseError ? (
            <ErrorMessage type="error" error={listAdvertiseError} />
          ) : (
            <div className={classes.container} container>
              {indexData && (
                <Link
                  className={classes.textLink}
                  to={`/${link}/${indexData.id}/${indexData.slug}`}
                >
                  <>
                  {indexData.image ? (
                    <img
                      className={classes.image}
                      key={indexData.id}
                      src={indexData.image}
                      alt={indexData.title}
                    />
                  ):(
                    <img
                      className={classes.image}
                      key={indexData.id}
                      src="images/advertisePlaceholder.jpg"
                      alt={indexData.title}
                    />
                  )}
                    
                    <h2 className={classes.title}>{indexData.title}</h2>
                  </>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IndexAdvertiseBanner;
