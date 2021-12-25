import React from "react";
import "../css_styles/CelebCarousel.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CelebCarousel = ({ celeb }) => {
  return (
    <div className="slideshow-container fade">
      <Carousel infiniteLoop useKeyboardArrows autoPlay centerMode>
      <Link to="/celebrity-detail" state={{ models: 'CELEB'}}>
        <div className="Containers">
          <div className="MessageInfo">
            <img src={celeb.urlToImage} alt="" />

            <div className="Info">
              <h2 className="carousel__title">vv{celeb.title}</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/celebrity-detail" state={{ models: 'CELEB'}}>
        <div className="Containers">
          <div className="MessageInfo">
            <img src={celeb.urlToImage} alt="" />

            <div className="Info">
              <h2 className="carousel__title">{celeb.title}</h2>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/celebrity-detail" state={{ models: 'CELEB'}}>
        <div className="Containers">
          <div className="MessageInfo">
            <img src={celeb.urlToImage} alt="" />

            <div className="Info">
              <h2 className="carousel__title">{celeb.title}</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/celebrity-detail" state={{ models: 'CELEB'}}>
        <div className="Containers">
          <div className="MessageInfo">
            <img src={celeb.urlToImage} alt="" />

            <div className="Info">
              <h2 className="carousel__title">{celeb.title}</h2>
            </div>
          </div>
        </div>
      </Link>
      </Carousel>

    </div>
  );
};

export default CelebCarousel;
