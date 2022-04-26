import React from "react";
import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width: "100%",
        alignItem: "center",
        justifyContent:"center",
        textAlign:"center"
      },
      imageContainer: {
        margin: "20px",
        alignItem: "center",
        justifyContent:"center",
        textAlign:"center"
      },
    image:{
        width:"100%",
        height: "350px",
        objectFit: "cover",
        
    }

}));

const ImageGallery = ({ image }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {image &&
        image.map((data) => (
          <Grid item sm={12} xm={12} md={6} lg={6} className={classes.gridContainer}>
            <div className={classes.imageContainer}>
              <img className={classes.image} src={data.image} alt="img" />
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default ImageGallery;
