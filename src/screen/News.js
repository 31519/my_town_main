import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import { localListAction } from "../actions/advertiseActions";
import SocialShare from "../components/SocialShare";
import Loaders from "../components/Loader";
import PageLoader from "../components/PageLoader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import ListCategory from "../components/ListCategory";
import FilterData from "../components/FilterData";
import { Link } from "react-router-dom";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import { advertiseListAction } from "../actions/advertiseActions";
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import ContactUs from "../components/ContactUs";
import CategoryCarousel from "../components/CategoryCarousel";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "90vh",
    [theme.breakpoints.down("xs")]: {
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
    background: "#00FFFF",
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
    fontFamily: "Helvetica",
    color: "#949393",
    padding: 0,
    opacity: "0.7",
    fontSize: "14px",
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
}));

const News = () => {

  const init = () => {
    const items = document.querySelectorAll('.ImageContainer');
    const randomColor = '#' +Math.floor(Math.random()*1677215).toString(16);
    for (let i = 0; i < items.length; i++){
      items[i].style.background = randomColor({luminosity: 'light'})
    }
    
  }
  init()

  const classes = useStyles();
  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  // const pathname = window.location.pathname

  const dispatch = useDispatch();

  const localList = useSelector((state) => state.localList);

  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
    pages,
    page,
  } = localList;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  const LocalNewsViews = async (e) => {
    try {
      const { data } = await axios.put(
        `/api/users/createViews/`,
        { VeiwPage: "LocalNews" }
      );
    } catch (eror) {
      return;
    }
  };

  useEffect(() => {
    dispatch(localListAction(keyword));
    dispatch(advertiseListAction(keyword));
    LocalNewsViews();
  }, [dispatch, keyword]);
  return (
    <>
      <Helmet>
        <title>Inmatown - Latest news</title>
        <meta name="title" content="Inmatown - Latest news" />
        <meta name="description" content="latest news" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialmedia} />
        <meta property="og:title" content="{detailAdvertise.title}" />
        <meta property="og:description" content="{detailAdvertise.content}" />
        <meta property="og:image" content="{detailAdvertise.image}" />
      </Helmet>
      <SideBar />
      <Header />
      <SearchBox />
      {/* <PageLoader /> */}
      {listLocal && (
        <div>
          {listLocalLoading ? (
            <PageLoader />
          ) : listLocalError ? (
            <ErrorMessage type="error" error={listLocalError} />
          ) : (
            
            <div className={classes.container}>
              {/* {listLocal && (

              <FilterData datas={listLocal}/>
              )} */}
              <div>
                {listLocal.map((data) => (
                  <Link
                    className={classes.textLink}
                    to={`/local-detail/${data.id}/${data.slug}`}
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
                              alt={data.title}
                            />
                          ) : (
                            <img
                              className={classes.image}
                              key={data.id}
                              src="images/newsPlaceholder.jpg"
                              alt={data.title}
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
                          Posted {" "}
                          {/* {data.createdAt && data.createdAt.split("T", 1)}{" "}
                          {"Time"}{" "}
                          {data.createdAt && data.createdAt.substr(11, 8)} */}
                        <Moment fromNow >{data.createdAt}</Moment>
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
                            {parse(data.content)}
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
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <IndexAdvertiseBanner index={1} />
              </div>
              <div className={classes.aside}>
                <ListCategory
                  error={listAdvertiseError}
                  list={listAdvertise}
                  loading={listAdvertiseLoading}
                  link="advertise-detail"
                  name="Advertise"
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

export default News;
