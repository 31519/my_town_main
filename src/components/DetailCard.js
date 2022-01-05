import React from "react";
import "../css_styles/cards.css";
import { Link } from "react-router-dom";
import {Typography} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
    padding: '5px'
  },
  date:{
    opacity:0.6,
    fontSize: '14px',
    display:'flex',
    alignItem:'center',
    textAlign:'center'

  }
});

const DetailCards = ({ item }) => {

  const classes = useStyles();
  return (
    
   
      <div className="cards">
        <div className="card-image">
        {
        item.urlToImage
        ?
        <img src={item.urlToImage} alt="" />
        :
        <img src={item.image} alt="" />
        }
        </div>
        <div  className="card-text">
          <div className="card-date">
          <Typography className={classes.date} variant="h3"><CalendarTodayIcon style={{fill:'green', fontSize: '12px', fontWeight: '700'}}/>{item.createdAt}</Typography>
          </div>

        <h2 className={classes.title} variant="h3">{item.title}</h2>
        <h2 className={classes.title} variant="h3">{item.content}</h2>        
        </div>
      </div>

  );
};

export default DetailCards;
