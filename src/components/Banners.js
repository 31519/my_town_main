import React, { useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { bannerListAction } from "../actions/advertiseActions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loaders from "../components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#efb3b6",
    width: "100%",
    height: "500px",

    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
  },
}));

const Banners = () => {
  const location = useLocation();
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const image = "images/default/banner.jpg";
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide: true,
  };
  const classes = useStyles();
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);

  const {
    error: listBannerError,
    loading: listBannerLoading,
    banners: listBanner,
  } = bannerList;

  useEffect(() => {
    dispatch(bannerListAction());
    executeScroll();
  }, [dispatch, location]);
  return (
    <div ref={myRef}>
      {listBanner && listBanner.length === 0 && (
        <div className={classes.container}>
          <img className={classes.image} src={image} alt="banner" />
        </div>
      )}

      {listBannerError ? (
        <>
          <img className={classes.image} src={image} alt="banner" />
        </>
      ) : (
        <Slider {...settings}>
          {listBanner.map((banner) => (
            <div className={classes.container} >
              <img
                className={classes.image}
                key={banner.id}
                src={banner.image}
                alt={banner.title}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Banners;
