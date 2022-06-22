import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Pagination";
import { Link } from "react-router-dom";
import SocialShare from "../components/SocialShare";
import SearchBox from "../components/SearchBox";
import { tourismsListAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import ContactUs from "../components/ContactUs";
import axios from "axios";
import PageLoader from "../components/PageLoader";
import { Helmet } from "react-helmet";

import { Button, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    // margin: "10px",
    // [theme.breakpoints.down("xs")]: {
    //   flexDirection: "column",
    // },
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
  },
  containerParent: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  containerOne: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "300px",
    position: "relative",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  absoluteTitle: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: "linear-gradient(rgba(0,0,0, 0.64), rgba(0,0,0,0.45))",
    color: "white",
  },
  containerTwo: {
    margin: "5px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    textAlign: "center",
    alignItem: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
  },

  gridToday: {
    border: "2px solid #05eb4d",
    margin: "10px",
    borderRadius: "20px",
    backgroundColor: "green",
  },
  headerTitle: {
    margin: 0,
    padding: 0,
  },
  paper: {
    marginBottom: "15px",
  },
  textLink: {
    textDecoration: "none",
  },
  stateBox: {
    color: "white",
    backgroundColor: "red",
    padding: "4px",
    display: "flex",
    width: "100%",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  button: {
    color: "white",
    backgroundColor: "red",
    padding: "0 4px 0 4px",
    margin: 0,
    borderRadius: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  socialShare: {
    [theme.breakpoints.down("xs")]: {
      // display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },

  title: {
    fontFamily: "Helvetica",
    lineHeight: "1.5",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 700,
    color: "#00ddff",
    margin: "10px",
    width: "100%",
    opacity: "0.7",
    zIndex: 99,
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      letterSpacing: "0.6px",
      fontWeight: 700,
      margin: "5px",
      lineHeight: "1.6",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      margin: "5px",
      lineHeight: "1.6",
    },
  },
  Buttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evently",
    margin: "5px",
  },

  gridParent: {
    margin: "20px",
    alignItem: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonRead: {
    color: "white",
    fontSize: "20px",
    fontWeight: 600,
    backgroundColor: "#16e1e6",
  },
  placeContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
  },
  placeText: {
    opacity: "0.7",
    margin: "10px",
    fontFamily: "Sans-serif",
    fontSize: "14px",
    color: "rgb(10 249 248)",
  },
  Readmore: {
    backgroundColor: "#218aae",
    borderRadius: "0px",
  },
  ImageContainer: {
    background: "#5de8ee3d",
  },
}));

const TourismsScreen = () => {
  const location = useLocation();
  let keyword = location.search;

  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const tourismsList = useSelector((state) => state.tourismsList);

  const {
    error: listTourismsError,
    loading: listTourismsLoading,
    tourismss: listTourisms,
    pages,
    page,
  } = tourismsList;

  const TourismsViews = async (e) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_PORT}/api/users/createViews/`,
        { VeiwPage: "Tourisms" }
      );
    } catch (eror) {
      return;
    }
  };

  useEffect(() => {
    dispatch(tourismsListAction(keyword));
    TourismsViews();
  }, [dispatch, keyword]);
  return (
    <>
      <Helmet>
        <title>Inmatown - Best Tourist Spot</title>
        <meta name="description" content="Best Tourist Spot" />
      </Helmet>
      <SideBar />
      <Header />
      <SearchBox />
      {listTourisms && (
        <div>
          {listTourismsLoading ? (
            <PageLoader />
          ) : listTourismsError ? (
            <ErrorMessage type="error" error={listTourismsError} />
          ) : (
            <Grid container className={classes.container}>
              {listTourisms.map((data) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  className={classes.containerParent}
                >
                  <div className={classes.gridParent}>
                    <Grid className={classes.containerOne}>
                      <div className={classes.ImageContainer}>
                        <Link
                          className={classes.textLink}
                          to={`/tourisms-detail/${data.id}/${data.slug}#content`}
                        >
                          <div>
                            <img
                              className={classes.image}
                              key={data.id}
                              src={data.image}
                              alt={data.title}
                            />
                            <div className={classes.absoluteTitle}>
                              <h2 className={classes.title} variant="p">
                                {data.title}
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Grid>
                    <div className={classes.placeContainer}>
                      <div>
                        <h4 className={classes.placeText}>{data.country}</h4>
                      </div>
                      <div>
                        {data.fees === 0 ? (
                          <h4 className={classes.placeText}>Entrance : Free</h4>
                        ) : (
                          <h4 className={classes.placeText}>
                            Entrance : Rs <span>{data.fees}</span>{" "}
                          </h4>
                        )}
                      </div>
                      <div>
                        <h4 className={classes.placeText}>{data.state}</h4>
                      </div>
                    </div>
                    <div
                      style={{
                        margin: "auto",
                        width: "100%",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      <h3 style={{ opacity: "0.7" }}>{data.city}</h3>
                      <Button
                        variant="contained"
                        className={classes.buttonRead}
                        component={Link}
                        to={`/tourisms-detail/${data.id}/${data.slug}#content`}
                      >
                        Read More
                      </Button>
                      {/* <div className={classes.Readmore}>
                            <h2
                              style={{
                                fontFamily: "Helvetica",
                                fontSize: "10px",
                                marginLeft: "5px",
                                marginRight: "5px",
                                color: "white",
                              }}
                            >
                              Read More
                            </h2>
                          </div> */}
                    </div>
                    <div className={classes.containerTwo}>
                      <hr />

                      {/* <div className={classes.Buttom}>
                    <div className={classes.socialShare}>
                      <SocialShare url={socialmedia} />
                    </div>
                  </div> */}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      )}
      <Paginate keyword={keyword} page={page} pages={pages} />
      <CategoryCarousel />
      <ContactUs />
      <Footers />
    </>
  );
};

export default TourismsScreen;
