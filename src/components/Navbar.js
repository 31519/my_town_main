import React from 'react'
import "../css_styles/CelebCarousel.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Grid,
    Typography,
    InputBase,
    IconButton,
    Badge

 } from "@mui/material";
 import SearchIcon from '@mui/icons-material/Search';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main:'#333996',
            light:"#f8324526"
        }
    }
})
const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#FFF'
    },
    searchInput: {
        padding:'0px 8px',
        opacity:'0.6',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            // marginRight: theme.spacing(2)
        }

    }
}))


const Navbar = () => {

    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <AppBar position='static' className={classes.root} >
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase 
                        placeholder="Search Topics"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon/>}
                        />
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon/>
                            </Badge>
                            <Badge>
                                <NotificationsIcon/>
                            </Badge>
                            <Badge>
                                <PowerSettingsNewIcon/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}


export default Navbar;
