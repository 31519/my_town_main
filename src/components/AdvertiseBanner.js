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


import Slider from "react-slick";

const image = "images/home_bg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "550px",
    },
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
    postion: "relative",
  },

  image: {
    [theme.breakpoints.up("md")]: {
      height: "550px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "180px",
      width: "100%",
    },
    objectFit:"cover"
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "San-sarif",
    opacity: "0.7",
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
    fontFamily: "Helvetica",
    opacity: "0.9",
    textAlign: "center",
    padding: "0px 5px",
  },
  textLink: {
    textDecoration: "none",
  },
}));

const AdvertiseBanners = () => {
  // const location = useLocation();
  // let keyword = location.search;
  const dispatch = useDispatch();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 40000,
    swipeToSlide: true,
  };
  const classes = useStyles();

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  useEffect(() => {
    dispatch(advertiseListAction());
  }, [dispatch]);
  return (
    <div >
      {listAdvertise.length && listAdvertise.length !== 0 ? (
      <h2 className={classes.heading}>Advertisement</h2>
      ): null }
      {listAdvertise && listAdvertiseLoading ? (
        <Loaders />
      ) : listAdvertiseError ? (
        <ErrorMessage type="error" error={listAdvertiseError} />
      ) : (
        <Slider {...settings}>
          {listAdvertise.map((banner) => (
            <div className={classes.container} container>
              <Link
              className={classes.textLink}
              to={`/advertise-detail/${banner.id}/${banner.slug}`}
            >
              <img
                className={classes.image}
                key={banner.id}
                src={banner.image}
                alt={banner.title}
              />
            </Link>
              <h2 className={classes.title}>{banner.title}</h2>
              <hr />
            </div>
          ))}
        </Slider>
      )}
      
    </div>
  );
};

export default AdvertiseBanners;
