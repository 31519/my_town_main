import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { localListAction } from "../actions/advertiseActions";
import { tourismsListAction } from "../actions/advertiseActions2";
import { jobListAction } from "../actions/advertiseActions2";
import { advertiseListAction } from "../actions/advertiseActions";
import { celebrityListAction } from "../actions/advertiseActions";

import axios from "axios";
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
    margin: "5px auto",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
    },
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
    [theme.breakpoints.down("xs")]: {
      overflowX: "scroll",
    },
    

    // borderShadow: "0px 5px 10px 0px rgba(0,0,0,0.5"
  },
  // containerBackground:{
  //   backgroundColor: "pink"
  // },
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
    fontSize: "12px",
    letterSpacing: "1.2px",
    fontWeight: 600,
    fontFamily: "Helvetica",
    color: "black",
    opacity: "0.7",
    overflowWrap: "break-word",
    wordBreak: "break-word",

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
    marginLeft: "10px",
  },
}));

const List = ({ classes, data, link, placeholder }) => {
  return (
    <Grid
      container
      component={Link}
      to={`/${link}/${data.id}/${data.slug}`}
      item
      class={classes.containerItem}
    >
      <Grid item className={classes.containerBackground}>
        {data.image ?(
          <img class={classes.containerImage} src={data.image} alt="" />
        ):(
          <img class={classes.containerImage} src={placeholder} alt="" />
        )}
        
      </Grid>
      <Grid item>
        <h4 class={classes.containerTitle}>{data.title}</h4>
      </Grid>
    </Grid>
  );
};

const CategoryCarousel = () => {
  const location = useLocation();
  let keyword = location.search;
  const dispatch = useDispatch();

  const FileHandler = async (e) => {
    const { data } = await axios.get(`api/localnews/list${keyword}`);
  };

  useEffect(() => {
    FileHandler();
  }, [dispatch]);

  const localList = useSelector((state) => state.localList);
  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

  // const data = useSelector((state) => state.localList);
  // const {
  //   error: listLocalError,
  //   loading: listLocalLoading,
  //   locals: listLocal,
  // } = data;

  const tourismsList = useSelector((state) => state.tourismsList);

  const {
    error: listTourismsError,
    loading: listTourismsLoading,
    tourismss: listTourisms,
  } = tourismsList;

  const jobList = useSelector((state) => state.jobList);
  const {
    error: listJobError,
    loading: listJobLoading,
    jobs: listJob,
  } = jobList;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  const celebrityList = useSelector((state) => state.celebrityList);

  const {
    error: listCelebrityError,
    loading: listCelebrityLoading,
    celebrities: listCelebrity,
    pages,
    page,
  } = celebrityList;

  useEffect(() => {
    dispatch(localListAction());
    dispatch(tourismsListAction());
    dispatch(jobListAction());
    dispatch(advertiseListAction());
    dispatch(celebrityListAction());
  }, [dispatch]);

  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",

    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",
          margin: " auto",

        }}
      >
        <ul style={{ margin: "10px 0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          marginTop: "10px",
          width: "20px",
          height: "20px",
          color: "white",
          backgroundColor: "#2b1b1b6e",
          $hover:{
            backgroundColor: "black"
          }
      
        }}
      >
        {i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customPaging: (i) => (
            <div
              style={{
                width: "20px",
                height: "20px",
                color: "white",
                backgroundColor: "#2b1b1b6e",
                $hover:{
                  backgroundColor: "black"
                }
            
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customPaging: (i) => (
            <div
              style={{
                width: "20px",
                height: "20px",
                color: "white",
                backgroundColor: "#2b1b1b6e",
                $hover:{
                  backgroundColor: "black"
                }
            
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          customPaging: (i) => (
            <div
              style={{
                width: "20px",
                height: "20px",
                color: "white",
                backgroundColor: "#2b1b1b6e",
                $hover:{
                  backgroundColor: "black"
                }
            
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {listLocal.length && (
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.container}>
              <Typography
                className={classes.textTypography}
                variant="h6"
                gutterBottom="false"
              >
                Recent News
              </Typography>
              <hr />
              {listLocalLoading ? (
                <Loaders />
              ) : listLocalError ? (
                <ErrorMessage type="error" error={listLocalError} />
              ) : (
                <>
                  {listLocal.map((item) => (
                    <List classes={classes} data={item} link="local-detail" placeholder="images/newsPlaceholder.jpg" />
                  ))}
                </>
              )}
            </Grid>
          </div>
        )}

        {listAdvertise.length && (
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.container}>
              <Typography
                className={classes.textTypography}
                variant="h6"
                gutterBottom="false"
              >
                Recent Advertise
              </Typography>
              <hr />
              {listAdvertiseLoading ? (
                <Loaders />
              ) : listAdvertiseError ? (
                <ErrorMessage type="error" error={listAdvertiseError} />
              ) : (
                <>
                  {listAdvertise.map((item) => (
                    <List
                      classes={classes}
                      data={item}
                      link="advertise-detail"
                      placeholder="images/advertisePlaceholder.jpg"
                    />
                  ))}
                </>
              )}
            </Grid>
          </div>
        )}

        {listTourisms.length && (
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.container}>
              <Typography
                className={classes.textTypography}
                variant="h6"
                gutterBottom="false"
              >
                Top Tourisms
              </Typography>
              <hr />
              {listTourismsLoading ? (
                <Loaders />
              ) : listTourismsError ? (
                <ErrorMessage type="error" error={listTourismsError} />
              ) : (
                <>
                  {listTourisms.map((item) => (
                    <List
                      classes={classes}
                      data={item}
                      link="tourisms-detail"
                    />
                  ))}
                </>
              )}
            </Grid>
          </div>
        )}

        {listJob.length && (
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.container}>
              <Typography
                className={classes.textTypography}
                variant="h6"
                gutterBottom="false"
              >
                Recent Job
              </Typography>
              <hr />
              {listJobLoading ? (
                <Loaders />
              ) : listJobError ? (
                <ErrorMessage type="error" error={listJobError} />
              ) : (
                <>
                  {listJob.map((item) => (
                    <List classes={classes} data={item} link="job-detail"  placeholder="images/jobPlaceholder.jpg"/>
                  ))}
                </>
              )}
            </Grid>
          </div>
        )}

        {listCelebrity.length && (
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.container}>
              <Typography
                className={classes.textTypography}
                variant="h6"
                gutterBottom="false"
              >
                Trend
              </Typography>
              <hr />
              {listCelebrityLoading ? (
                <Loaders />
              ) : listCelebrityError ? (
                <ErrorMessage type="error" error={listCelebrityError} />
              ) : (
                <>
                  {listCelebrity.map((item) => (
                    <List
                      classes={classes}
                      data={item}
                      link="celebrity-detail"
                    />
                  ))}
                </>
              )}
            </Grid>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
