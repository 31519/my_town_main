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

]


const ShopCategory = () => {


  return (
    <Grid className="detailCategory" container>
        {shops && shops.map((shop) => (
        <Grid item className="detailCategoryItem" md={3} lg={3} sm={4} xs={4}>
            <Link className="text-link" to={shop.link}>
            <div className='gridImage'>
                <img src={shop.image} alt={shop.category}/>
            </div>
            </Link>
        </Grid>
        ))
        }

    </Grid>
  );
};

export default ShopCategory;
