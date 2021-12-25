import React from "react";
import "../css_styles/CelebCarousel.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    title:{
      fontSize: '16px',
      padding: '5px 5px 0px 5px',
      color: 'white',
      backgroundColor: 'green',
      borderRadius: '5px',
      '&:hover': {
        background: 'white',
        color: 'green',
        fontWeight: '900'
     },
    },
    gridHeader: {
      justifyContent: 'center',
      marginTop: '10px', 
      marginBottom: '10px',
      backgrounColor: 'white',
      color:'green',
      '&:hover': {
        background: 'white',
     },
      
    },
  
    date:{
      opacity:0.6,
      fontSize: '14px',
      display:'flex',
      alignItem:'center',
      textAlign:'center'
  
    },
    header : {
      fontSize: '20px'
    }
  });

const CategoryCarousel = ({ celeb }) => {
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

export default CategoryCarousel;
