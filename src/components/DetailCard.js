import React from "react";
import SocialShare from "../components/SocialShare";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { makeStyles } from "@mui/styles";
import ImageSlider from "../components/ImageSlider"

import {
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const useStyles = makeStyles({
  card: {
    // maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: " 0 8px 40px -12px rgba(0,0,0,0.5)",
    "&:hover": {
      boxShadow: " 0 16px 70px -12.125px rgba(0,0,0,0.5)",
    },
  },
  media: {
    paddingTop: "100%",
  },
  content: {
    textAlign: "left",
    padding: "5px",
  },
  subheading: {
    lineHeight: 1.8,
  },
  heading: { fontWeight: "bold" },
  h2: {
    margin: "0px",
    padding: "0px",
    color: "blue",
    lineHeight: 0.5,
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  title: {
    fontSize: "16px",
  },
  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  content: {
    fontSize: "5px",
  },
});

const DetailCards = ({ item }) => {
  const socialmedia = window.location.href;

  const classes = useStyles();
  return (
    <>
      <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
        <Card className={classes.card}>
          {/* <Link className="text-link" to={`/${model}-detail/${item.id}/${item.slug}`}> */}
          <img  src={item.image} alt={item.title} />
          
          {/* </Link> */}
          <CardContent className={classes.content}>
            <Typography variant={"caption"} gutterBottom>
              <CalendarTodayIcon
                style={{ fill: "green", fontSize: "12px", fontWeight: "700" }}
              />
              {item.createdAt && item.createdAt.split('T', 1)}  {item.createdAt && item.createdAt.substr(11, 8)}
            </Typography>
            <br />
            <Typography variant={"caption"} gutterBottom>
              {item.state}
            </Typography>
            <br/>

            <Typography variant={"h6"} gutterBottom>
              {item.title}
            </Typography>

            <h2 style={{fontSize:'16px', fontFamily:"sans-serif", fontWeight:"500", letterSpacing:'1px'}}>{item.content}</h2>

            <br />
            <Typography gutterBottom color="blue">
              {item.country}
            </Typography>
            <Typography gutterBottom color="blue">
              {item.state}
            </Typography>
            <Typography gutterBottom color="blue">
              {item.address}
            </Typography>
            <Typography gutterBottom color="blue">
              {item.contact}
            </Typography>

            <Divider className={classes.divider} />
            <Typography variant={"h6"} gutterBottom>
              share
            </Typography>
            <SocialShare url={socialmedia} />
            <ImageSlider images={item.manyImages}/>
            {/* {item.localnewsGallary && item.localnewsGallary.map((images) => (
            <img src={images.image} alt={item.title} />
          ))} */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DetailCards;
