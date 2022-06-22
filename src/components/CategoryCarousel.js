import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

import { localListAction } from "../actions/advertiseActions";
import { tourismsListAction } from "../actions/advertiseActions2";
import { jobListAction } from "../actions/advertiseActions2";
import { advertiseListAction } from "../actions/advertiseActions";
import { celebrityListAction } from "../actions/advertiseActions";

import axios from "axios";
const useStyles = makeStyles((theme) => ({
  MainError: {
    width: "100%",
    display: "flex",
    marginBottom: "10px",
    overflowX: "scroll",
    overflowY: "hidden",
    justifyContent: "center",
    whiteSpace: "noWrap",
    [theme.breakpoints.down("md")]: {
      display: "inline-block",
    },
    [theme.breakpoints.down("sm")]: {
      display:  "inline-block",
    },
    [theme.breakpoints.down("xs")]: {
      display:  "inline-block",
    },
  },

  container: {
    display: "inline-block",

    height: "320px",
    backgroundColor: "#e8f1f0",

    width: "300px",
    margin: "10px 10px",
    overflowY : "scroll",
    scrollbarWidth: "none",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      margin: "5px 5px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      margin: "5px 5px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      margin: "5px 5px",
    },
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",
    padding: "0px",
    alignItem: "center",
    textDecoration: "none",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    margin: "10px 0px"
  },
  containerImage: {
    width: "60px",
    height: "50px",
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
    fontSize: "10px",
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
    fontSize: "10px",
    position: 'sticky',
    top : "0",
    background: "#c8fffa",
    zIndex:"6"
  },
  gridTitle: {
    width: "150px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
  containerBackground:{
    background: "#efb3b6",
  }
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
        {data.image ? (
          <img class={classes.containerImage} src={data.image} alt="" />
        ) : (
          <img class={classes.containerImage} src={placeholder} alt="" />
        )}
      </Grid>
      <Grid item className={classes.gridTitle}>
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


  return (
    <div className={classes.MainError}>
      {listLocal && listLocal.length !== 0 && (
        <div className={classes.container}>
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.containers}>
              <div className={classes.sticky}>

              </div>
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
                    <List
                      classes={classes}
                      data={item}
                      link="local-detail"
                      placeholder="images/newsPlaceholder.jpg"
                    />
                  ))}
                </>
              )}
            </Grid>
          </div>
        </div>
      )}
      {listAdvertise && listAdvertise.length !== 0 && (
        <div className={classes.container}>
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.containers}>
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
        </div>
      )}
      {listTourisms && listTourisms.length !== 0 && (
        <div className={classes.container}>
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.containers}>
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
        </div>
      )}
      {listJob && listJob.length !== 0 && (
        <div className={classes.container}>
          <div container class={classes.containerMain}>
            <Grid item md={12} sm={12} lg={3} class={classes.containers}>
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
                    <List
                      classes={classes}
                      data={item}
                      link="job-detail"
                      placeholder="images/jobPlaceholder.jpg"
                    />
                  ))}
                </>
              )}
            </Grid>
          </div>
        </div>
      )}

    </div>
  );
};

export default CategoryCarousel;
