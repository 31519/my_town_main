import React from "react";
import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10px",
  },
  gridContainer: {
    width: "100%",
    alignItem: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  imageContainer: {
    margin: "10px 10px",
    alignItem: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      margin: "10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

const ImageGallery = ({ image }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {image &&
        image.map((data) => (
          <Grid
            item
            sm={12}
            xm={12}
            md={6}
            lg={6}
            className={classes.gridContainer}
          >
            <div className={classes.imageContainer}>
              <img className={classes.image} src={data.image} alt="img" />
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default ImageGallery;
