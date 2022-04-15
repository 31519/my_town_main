import React from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Grid,
    Typography,

 } from "@mui/material";

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    sideMenu: {
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height: '100%',
        backgroundColor:'black',
        // opacity:'0.2%'
    }
})


const SideBar = () => {

    const classes = useStyles()
    return (
        <Grid className={classes.sideMenu}>
            
        </Grid>
    )
}


export default SideBar;
