import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Pagination";
import SocialShare from "../components/SocialShare";
import SearchBox from "../components/SearchBox";
import { advertiseListAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import { localListAction } from "../actions/advertiseActions";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import ListCategory from "../components/ListCategory";
import { Helmet } from "react-helmet";
import Header from "../screen/Header";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import axios from "axios";
import ContactUs from "../components/ContactUs";
import PageLoader from "../components/PageLoader";
import parse from "html-react-parser";


import { Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {},
  container: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: "100%",
  },
  containerParent: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
  containerOne: {
    height: "150px",
    width: "250px",
    margin: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "120px",
    },
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "120px",
    },
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "120px",
    },
  },
  image: {
    objectFit: "cover",
    height: "150px",
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
      width: "120px",
    },
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "120px",
    },
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "120px",
    },
  },
  containerTwo: {
    overflowWrap: "break-word",
    margin: "5px",
    // inlineSize: "150px",
    // height: "200px",
    width: "500px",
    [theme.breakpoints.down("xs")]: {
      // height: "100px",
      width: "130px",
    },
    [theme.breakpoints.down("md")]: {
      // height: "100px",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      // height: "200px",
      width: "500px",
    },
  },

  cardMedia: {
    [theme.breakpoints.up("xs")]: {
      height: 220,
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: 220,
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: 350,
      width: "100%",
      borderRadius: "0px",
    },
  },
  cardHeader: {
    margin: 0,
    padding: 0,
    color: "green",
    fontWeight: 800,
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
    backgroundColor: "rgb(193 79 201 / 74%);",
    padding: "4px",
    display: "flex",
    width: "100px",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: "90px",
    },
    [theme.breakpoints.down("md")]: {
      width: "90px",
    },
    [theme.breakpoints.down("md")]: {
      width: "90px",
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
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  date: {
    fontWeight: 600,
    margin: "0px ",
    fontFamily: "Monospace",
    color: "green",
    padding: 0,
    opacity: "0.7",
    [theme.breakpoints.down("xs")]: {
      opacity: "1",
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      opacity: "1",
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      opacity: "1",
      fontSize: "10px",
    },
  },
  title: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 500,
    color: "black",
    margin: "5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      color: "black",
      margin: "3px",
      opacity: "0.8",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      letterSpacing: "0.6px",
      fontWeight: 500,
      color: "black",
      margin: "3px",
      opacity: "0.8",
    },
  },
  Buttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evently",
    margin: "5px",
  },
  aside: {
    // border: "1px solid red",
    // width: "100%",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  content: {
    fontFamily: "Helvetica",
    fontSize: "16px",
    fontWeight: 500,
    color: "blue",
    margin: "5px",
    [theme.breakpoints.down("xs")]: {
      display: "none",

      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
  },
  Readmore: {
    backgroundColor: "#218aae",
    borderRadius: "2px",
    justifyContent: "center",
  },
  ImageContainer: {
    background: "#5de8ee3d",
  },
}));

const AdvertiseScreen = () => {
  const init = () => {
    const items = document.querySelectorAll(".ImageContainer");
    const randomColor = "#" + Math.floor(Math.random() * 1677215).toString(16);
    for (let i = 0; i < items.length; i++) {
      items[i].style.background = randomColor({ luminosity: "light" });
    }
  };
  init();

  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
    pages,
    page,
  } = advertiseList;

  const localList = useSelector((state) => state.localList);

  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

  const AdvertiseViews = async (e) => {
    try {
      const { data } = await axios.put(`/api/users/createViews/`, {
        VeiwPage: "Advertise",
      });
    } catch (eror) {
      return;
    }
  };

  useEffect(() => {
    dispatch(localListAction(keyword));
    dispatch(advertiseListAction(keyword));
    AdvertiseViews();
  }, [dispatch, keyword]);
  return (
    <>
      <Helmet>
        <title>Inmatown - Latest Advertisements</title>
        <meta name="description" content="latest Advertisements" />
      </Helmet>
      <SideBar />
      <Header />
      <SearchBox />
      {listAdvertise && (
        <div>
          {listAdvertiseError ? (
            <ErrorMessage type="error" error={listAdvertiseError} />
          ) : (
            <div className={classes.container}>
              <div>
                {listAdvertise.map((data) => (
                  <Link
                    className={classes.textLink}
                    to={`/advertise-detail/${data.id}/${data.slug}`}
                  >
                    <div className={classes.containerParent}>
                      <div className={classes.containerOne}>
                        <div className={classes.stateBox}>
                          <Typography variant="p">MEGHALAYA</Typography>
                        </div>
                        <div className={classes.ImageContainer}>
                          {data.image ? (
                            <img
                              className={classes.image}
                              key={data.id}
                              src={data.image}
                              alt=""
                            />
                          ) : (
                            <img
                              className={classes.image}
                              key={data.id}
                              src="images/default/advertisePlaceholder.jpg"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className={classes.containerTwo}>
                        <h3
                          variant="h6"
                          color="primary"
                          className={classes.date}
                        >
                          UPDATED ON{" "}
                          {data.createdAt && data.createdAt.split("T", 1)}{" "}
                          {"Time"}{" "}
                          {data.createdAt && data.createdAt.substr(11, 8)}
                        </h3>

                        <h3
                          className={classes.title}
                          variant="h3"
                          color="secondary"
                          gutterBottom
                        >
                          {data.title}
                        </h3>
                        {data.content && (
                          <Typography
                            className={classes.content}
                            variant="h6"
                            color="secondary"
                            noWrap
                            gutterBottom
                            paragraph
                          >
                            {data.content}
                          </Typography>
                        )}

                        <div className={classes.Buttom}>
                          <div className={classes.Readmore}>
                            <h2
                              style={{
                                fontFamily: "Helvetica",
                                fontSize: "10px",
                                margin: "5px",
                                color: "white",
                              }}
                            >
                              Read More
                            </h2>
                          </div>
                          {/* <div className={classes.socialShare}>
                            <SocialShare url={socialmedia} />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <IndexAdvertiseBanner index={3} />
              </div>
              <div className={classes.aside}>
                <ListCategory
                  error={listLocalError}
                  list={listLocal}
                  loading={listLocalLoading}
                  link="local-detail"
                  name="News"
                />
              </div>
            </div>
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

export default AdvertiseScreen;
