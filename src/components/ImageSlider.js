import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css_styles/DetailCard.css";
// import PopupComponent from "../components/PopupComponent"

const ImageSlider = ({ images }) => {
  return (
    <div className="slideshow-container fade">
      <Carousel infiniteLoop useKeyboardArrows autoPlay centerMode>
        {images && images.map((item) =>(
           <img src={item.image} alt=""/>)
          )}

      </Carousel>
    </div>
  );
};

export default ImageSlider;
