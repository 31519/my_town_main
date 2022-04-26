import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  // image: {
  //   [theme.breakpoints.up("xs")]: {
  //     height: "250px",
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     height: "250px",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     height: "450px",
  //   },
  //   [theme.breakpoints.up("ls")]: {
  //     height: "450px",
  //   },
  // },
  containerMain: {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    margin: "15px auto",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
    },
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
    [theme.breakpoints.down("xs")]: {
      overflowX: "scroll",
    },
  },
  container: {
    widht: "180px",
    height: "320px",
    backgroundColor: "#e8f1f0",

    margin: "5px 10px",
    overflowY: "scroll",
    scrollbarWidth: "none",
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    alignItem: "center",
    textDecoration: "none",
  },
  containerImage: {
    width: "100px",
    height: "60px",
    objectFit: "cover",

    paddingTop: "0px",
    borderRadius: "5px",
    // [theme.breakpoints.down("md")]: {
    //   width: "30px",
    // height: "15px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "50px",
    //   height: "20px",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "50px",
    // height: "20px",
    // },
  },
  containerTitle: {
    margin: 0,
    padding: "0px 5px 0px 5px",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Helvetica",
    color: "black",

    // [theme.breakpoints.down("md")]: {
    //   fontSize: "10px",
    //   fontWeight: 500,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "10px",
    //   fontWeight: 500,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "10px",
    //   fontWeight: 500,
    // },
  },
  textTypography: {
    fontFamily: "Helvetica",
    marginLeft: "10px"
  }
}));

const ListCategory = ({ list, error, loading, link, name }) => {
  const classes = useStyles();

  return (
    <div>
      <div container class={classes.containerMain}>
        <Grid item md={12} sm={12} lg={3} class={classes.container}>
          <Typography class={classes.textTypography} variant="h3" gutterBottom="false">
            Recent {name}
          </Typography>
          <hr />
          {loading ? (
            <Loaders />
          ) : error ? (
            <ErrorMessage type="error" error={error} />
          ) : (
            <>
              {list.map((data) => (
                <Grid
                  container
                  component={Link}
                  to={`/${link}/${data.id}/${data.slug}`}
                  item
                  class={classes.containerItem}
                >
                  <Grid item>
                    <img
                      class={classes.containerImage}
                      src={data.image}
                      alt=""
                    />
                  </Grid>
                  <Grid item>
                    <h4 class={classes.containerTitle}>{data.title}</h4>
                  </Grid>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ListCategory;
