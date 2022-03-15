import React from 'react';
import {
    Grid,
    Typography,
    InputBase,
    IconButton,
    Badge,
    Card,
    Paper

 } from "@mui/material";
 import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#blue',
        height: 380,
        paddingBottom:'50px'
    },
    pageHeader:{
        padding: '16px',
        display:'flex',
        marginBottom:'16px',
        color:'blue'
    }
    
}))

const PageHeader = (props) => {
    const classes = useStyles()
    const {icon, title, subtitle} = props
    return (
        <Paper elevation={0} square className={classes.root}>
            <Grid>
                <Card>
                    {icon}
                    
                    <Grid>
                    <Typography
                    variant="h6"
                    component="div"
                    >
                    {title}
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    component="div"
                    >
                    {subtitle}adfasdf
                    </Typography>
                    {subtitle}
                </Grid>
                </Card>
                <Grid className={classes.pageHeader}>
                    <Typography
                    variant="h6"
                    component="div"
                    >
                    {title}dfgsdg
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    component="div"
                    >
                    {subtitle}
                    </Typography>
                    {subtitle}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PageHeader