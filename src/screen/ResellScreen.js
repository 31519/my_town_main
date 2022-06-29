import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import { resellerListAction } from "../actions/advertiseActions2";
import SocialShare from "../components/SocialShare";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import ListCategory from "../components/ListCategory";
import { Link } from "react-router-dom";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import { advertiseListAction } from "../actions/advertiseActions";
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import axios from "axios";
import ContactUs from "../components/ContactUs";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import Owner from "../components/Owner";
import PageLoader from "../components/PageLoader";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
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
    margin: "0px 10px",
    // position: "relative"
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
    fontWeight: 800,
    color: "blue",
    margin: "5px",
    opacity: "0.7",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      margin: "3px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      margin: "3px",
    },
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
    margin: "0px",
    lineSpacing: "0px",
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

  fees: {
    margin: "0px",
    color: "black",
    opacity: "0.9",
    fontFamily: "Helvetica",
    fontSize: "16px",
  },
  address: {
    margin: "5px",
    color: "black",
    opacity: "0.6",
    fontSize: "10px",
    fontWeight: 800,
    fontFamily: "Helvetica",
    letterSpacing: "0.5px",
  },
  rooms: {
    margin: "5px",
    opacity: "0.6",
    fontSize: "14px",
    color: "#14830b",
    fontFamily: "Helvetica",
    fontWeigt: 800,
  },

  available: {
    border: "2px solid #10b9e8cf",
    borderRadius: "5px",
    color: "#0abc17",
  },
  sold: {
    margin: "5px",
    border: "2px solid #10b9e8cf",
    borderRadius: "5px",
    color: "#ff0606e0",
  },
  Readmore: {
    backgroundColor: "#218aae",
    borderRadius: "2px",
    justifyContent:"center",

  },
  Buttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evently",
    margin: "5px",
  },
  ImageContainer: {
    background: "#5de8ee3d",
  },
}));

const ResellScreen = () => {
  const classes = useStyles();
  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  // const pathname = window.location.pathname

  const dispatch = useDispatch();
  const resellerList = useSelector((state) => state.resellerList);

  const {
    error: listResellerError,
    loading: listResellerLoading,
    resellers: listReseller,
    pages,
    page,
  } = resellerList;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;


  const ResellViews = async (e) => {
    try{

      const { data } = await axios.put(
        `/api/users/createViews/`,
        {VeiwPage : 'Resell'}
        
        );
      } catch (eror){
        return;
      }
  }

  useEffect(() => {
    dispatch(resellerListAction(keyword));
    dispatch(advertiseListAction(keyword));
    ResellViews();
  }, [dispatch, keyword]);
  return (
    <>
      <Helmet>
        <title>Inmatown - Latest news</title>
        <meta name="title" content="Products - Latest products" />
        <meta name="description" content="latest products" />
      </Helmet>
      <SideBar />
      <Header />
      <SearchBox />
      {listReseller && (
        <div>
          {listResellerLoading ? (
            <PageLoader />
          ) : listResellerError ? (
            <ErrorMessage type="error" error={listResellerError} />
          ) : (
            <div className={classes.container}>
              <div>
                {listReseller.map((data) => (
                  <div style={{ margin: "10px 10px" }}>
                    <div className={classes.containerParent}>
                      <div className={classes.containerOne}>
                        <Link
                          className={classes.textLink}
                          to={`/resell-detail/${data.id}/${data.slug}`}
                        >
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
                        </Link>
                      </div>

                      <div className={classes.containerTwo}>
                        <h3 className={classes.fees}>₹ {data.price}</h3>

                        <h3 className={classes.title}>{data.title}</h3>

                        <h3 className={classes.address}>{data.address}</h3>

                        <h3 className={classes.address}>{data.state}</h3>

                        {data.content && (
                          <Typography
                            className={classes.content}
                            color="secondary"
                            noWrap
                          >
                            {parse(data.content)}
                          </Typography>
                        )}

                        <div>
                          {data.available ? (
                            <div className={classes.available}>
                              <h2
                                style={{
                                  fontFamily: "Helvetica",
                                  fontSize: "14px",
                                  margin: "5px 5px",
                                  color: "green",
                                }}
                              >
                                Available
                              </h2>
                            </div>
                          ) : (
                            <div className={classes.sold}>
                              <h2
                                style={{
                                  fontFamily: "Helvetica",
                                  fontSize: "14px",
                                  margin: "5px 5px",
                                  color: "red",
                                }}
                              >
                                Sold
                              </h2>
                            </div>
                          )}
                        </div>

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

                    {/* <Owner User={data.user.email} userImage={data.image} /> */}
                  </div>
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
      <ContactUs/>
      <Footers />
    </>
  );
};

export default ResellScreen;
