import React from "react";
import "../css_styles/DetailCategory.css";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
const shops = [
    {
        'category': 'Flowers',
        "image": "/static/flowers.png",
        "link": "/flowers"
    },
    {
        "category": 'Restaurant',
        "image": "../images/restaurant.png",
        "link": "/restaurant"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    {
        "category": 'Music',
        "image": "../images/music.png",
        "link": "/music"
    },
    
]


const DetailCategory = () => {


  return (
    <Grid className="detailCategory" container>
        {shops.map((shop) => (
        <Grid item className="detailCategoryItem" md={3} lg={3} sm={4} xs={4}>
            <Link className="text-link" to={shop.link}>
            <div className='gridImage'>
                <img src={shop.image} />
                <h3>{shop.category}</h3>
            </div>
            </Link>
        </Grid>
        ))
        }

    </Grid>
  );
};

export default DetailCategory;
