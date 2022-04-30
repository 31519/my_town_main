import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up("xs")]: {
      height: "250px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "250px",
    },
    [theme.breakpoints.up("md")]: {
      height: "450px",
    },
    [theme.breakpoints.up("ls")]: {
      height: "450px",
    },
    
  },
}));

const ImageSlider = ({ images }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",
          margin: "auto",
        }}
      >
        <ul style={{ margin: "5px 0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          marginTop: "20px",
          width: "20px",
          height: "20px",
          color: "white",
          backgroundColor: "#2b1b1b6e"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    
    
    <div>

    
        <Slider {...settings}>
          {images &&
            images.map((item) => (
              <div>
                <img className={classes.image} src={item.image} alt="" />
              </div>
            ))}
        </Slider>

      </div>
  );
};

export default ImageSlider;
