import React from "react";
import "../css_styles/cards.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
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
  },
  date:{
    opacity:0.6,
    fontSize: '14px',
    display:'flex',
    alignItem:'center',
    textAlign:'center'

  }
});


const NewsCards = ({news, model}) => {

  const classes = useStyles();
  return (
    <>
    
    <Link className="text-link" to={`/${model}-detail/${news.id}/${news.slug}/`}>
      <div className="cards">
        <div className="card-image">

        <img src={news.urlToImage} alt="" />
        </div>
        <div  className="card-text">
          <div className="card-date">
          <h3 className={classes.date} variant="h3"><CalendarTodayIcon style={{fill:'green', fontSize: '12px', fontWeight: '700'}}/>{news.publishedAt}</h3>
          </div>

        <h3 className={classes.title} variant="h3">{news.title}</h3>        
        </div>
      </div>
      <Grid spacing={1} item xs={12} sm={3} lg={3} md={3} classsName='ads_section_text'>
          <h3>This is the ads section</h3> 
      </Grid>
    </Link>
    </>
  );
};

export default NewsCards;
