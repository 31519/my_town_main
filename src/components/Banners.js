import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { bannerListAction } from "../actions/advertiseActions";
import { useSelector, useDispatch } from "react-redux";
import Loaders from "../components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const image = "images/home_bg.jpg";


const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      minHeight: "70vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
  },

  image: {
    height: "150px",
    width: "100%",
    objectFit:"cover",
    [theme.breakpoints.up("md")]: {
      minHeight: "80vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "180px",
    },
  },
}));

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
  }, [dispatch]);
  return (
    <div>
          {listBanner && listBanner.length === 0 && (
            <>
              <img className={classes.image} src={image} alt="banner" />
            </>
          )}
      
        
          {listBannerLoading ? (
            <Loaders />
          ) : listBannerError ? (
            <>
              <img className={classes.image} src={image} alt="banner" />
            </>
          ) : (
            <Slider {...settings}>
              {listBanner.map((banner) => (
                <div className={classes.container} container>
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
