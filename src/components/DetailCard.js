import React from "react";

import SocialShare from "../components/SocialShare"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { makeStyles } from '@mui/styles';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider

} from '@mui/material';

const useStyles = makeStyles({
  card: {
    // maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: " 0 8px 40px -12px rgba(0,0,0,0.5)",
    "&:hover": {
      boxShadow: " 0 16px 70px -12.125px rgba(0,0,0,0.5)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding:"5px"
  },
  subheading: {
    lineHeight: 1.8
  },
  heading: {fontWeight: "bold"
  },
  h2:{
    margin:"0px",
    padding:"0px",
    color:"blue",
    lineHeight: 0.5
  },
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


const DetailCards = ({ item}) => {
  const socialmedia = window.location.href

  const classes = useStyles();
  return (
    <>
    <div className="App" style={{backgrounColor:"#e0e7e9ee"}}>
      
      <Card className={classes.card}>
        {/* <Link className="text-link" to={`/${model}-detail/${item.id}/${item.slug}`}> */}
        <CardMedia
        className={classes.media}
        image={item.image}
        />
        {/* </Link> */}
        <CardContent className={classes.content}>
          <Typography
          variant={"caption"}
          gutterBottom
          >
            <CalendarTodayIcon style={{fill:'green', fontSize: '12px', fontWeight: '700'}}/>
            {item.createdAt}
          </Typography>
          <br/>
          <Typography
          variant={"caption"}
          gutterBottom
          >
            {item.state}
          </Typography>

          <Typography
          variant={"h6"}
          gutterBottom
          >
            {item.title}
          </Typography>

          <Typography
          variant={"h6"}
          gutterBottom
          >
            {item.content}
          </Typography>

          <br/>

          <h2
          variant={"h6"}
          gutterBottom
          className={classes.h2}
          >
            {item.country}
          </h2>
          <br/>
          <h2
          className={classes.h2}
          >
            {item.contact}
          </h2>
          <br/>
          <h2
          className={classes.h2}
          >
            {item.address}
          </h2>

          <Divider className={classes.divider} />
          <h2
          variant={"h6"}
          gutterBottom
          >
            share
          </h2>
          <SocialShare url={socialmedia}/>
          

        </CardContent>
      </Card>
    </div>

    </>
  );
};

export default DetailCards;
