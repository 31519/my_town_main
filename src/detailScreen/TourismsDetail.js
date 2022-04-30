import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { tourismsDetailAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";

import ErrorMessage from "../components/ErrorMessage";

import { makeStyles } from "@mui/styles";

import SocialShare from "../components/SocialShare";

import { advertiseListAction } from "../actions/advertiseActions";
import ListCategory from "../components/ListCategory";
import { useParams, useLocation } from "react-router-dom";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import ImageGallery from "../components/ImageGallery";
import ImageSlider from "../components/ImageSlider";
import {Helmet} from "react-helmet";

import {
  Typography,
  Container,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
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
  containerParent: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
  },
  containerOne: {
    height: "150px",
    width: "700px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
      width: "700px",
    },
  },
  image: {
    objectFit: "cover",
    height: "400px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
      width: "100%",
    },
  },
  containerTwo: {
    margin: "5px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
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
    backgroundColor: "red",
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
      // display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  date: {
    fontWeight: 600,
    margin: "0px ",
    fontFamily: "Monospace",
    color: "green",
    padding: 0,
    opacity: "0.6",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      opacity: "0.7",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      opacity: "0.7",
    },
  },

  title: {
    fontFamily: "Times New Roman",
    lineHeight: "1.5",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "35px",
    letterSpacing: "1px",
    fontWeight: 500,
    color: "blue",
    margin: "5px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      color: "blue",
      margin: "3px",
      lineHeight: "1.6",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      letterSpacing: "0.6px",
      fontWeight: 600,
      color: "blue",
      margin: "3px",
      lineHeight: "1.6",
    },
  },
  Buttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evently",
    margin: "5px",
  },
  aside: {
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

  preTag: {
    whiteSpace: "pre-wrap",

    overflowX: "auto",
    wordWrap: "break-word",
    fontWeight: 500,
    fontFamily: "Helvetica, San-sarif",
    fontSize: "20px",
    letterSpacing: "1.5px",
    opacity: "0.8",
    margin: "5px",
    lineHeight: "1.5",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "pre-wrap",

      overflowX: "auto",
      wordWrap: "break-word",
      fontWeight: 500,
      fontFamily: "Helvetica, San-sarif",
      fontSize: "14px",
      letterSpacing: "1.5px",
      opacity: "0.8",
    },
    [theme.breakpoints.down("md")]: {
      whiteSpace: "pre-wrap",

      overflowX: "auto",
      wordWrap: "break-word",
      fontWeight: 500,
      fontFamily: "Helvetica, San-sarif",
      fontSize: "14px",
      letterSpacing: "1.5px",
      opacity: "0.8",
    },
  },
  brand: {
    margin: "0px 3px",
    fontSize: "16px",
    letterSpacing: "1px",
  },
  startDate: {
    fontSize: "12px",
    padding: "10px 0px",
    margin: "0px",
    fontFamily: "Monospace",
    fontWeight: "bold",
    color: "blue",
  },
  endDate: {
    fontSize: "12px",
    paddingBottom: "10px",
    margin: "0px",
    fontFamily: "Monospace",
    fontWeight: "bold",
    color: "red",
  },

  placeContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    marginTop: "5px",
  },
  placeText: {
    opacity: "0.7",
    margin: "10px",
    fontFamily: "Sans-serif",
    fontSize: "14px",
    color: "rgb(10 249 248)",
  },
  locationDiv: {
    backgroundColor: "#eef8fa",
    padding: "10px",
  },
  locationText: {
    color: "#02676b",
    fontSize: "25px",
    fontFamily: "Helvetica",
    margin: "10px",
    letterSpacing: "1.5px",
    [theme.breakpoints.down("xs")]: {
      fontFamily: "Helvetica, San-sarif",
      fontSize: "14px",
      letterSpacing: "1.3px",
    },
    [theme.breakpoints.down("md")]: {
      fontFamily: "Helvetica, San-sarif",
      fontSize: "14px",
      letterSpacing: "1.3px",
    },
  },
}));

const TourismsDetail = () => {
  const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef)
  const params = useParams();
  const { id, slug } = params;
  const location = useLocation();
  let keyword = location.search;

  const classes = useStyles();
  const dispatch = useDispatch();

  const tourismsDetail = useSelector((state) => state.tourismsDetail);

  const {
    error: detailTourismsError,
    loading: detailTourismsLoading,
    tourisms: detailTourisms,
  } = tourismsDetail;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
    pages,
    page,
  } = advertiseList;
  useEffect(() => {
    dispatch(tourismsDetailAction(id, slug));
    dispatch(advertiseListAction(keyword));
    // executeScroll()
  }, [dispatch, id, slug]);
  const socialmedia = window.location.href;
  return (
    <>
      <Helmet>
        <title>{detailTourisms.title}</title>
        <meta name="description" content={detailTourisms.content} />
      </Helmet>
      {detailTourisms && (
        <div>
          {detailTourismsLoading ? (
            <Loaders />
          ) : detailTourismsError ? (
            <ErrorMessage type="error" error={detailTourismsError} />
          ) : (
            <div className={classes.container}>
              <div className={classes.containerParent}>
                <div className={classes.containerOne}>
                  <div className={classes.stateBox}>
                    <h2 className={classes.brand} variant="p">
                      Inmatown
                    </h2>
                  </div>
                  <div className={classes.ImageContainer}>
                    <img
                      className={classes.image}
                      key={detailTourisms.id}
                      src={detailTourisms.image}
                      alt={detailTourisms.title}
                    />
                  </div>
                </div>
                <div className={classes.placeContainer}>
                  <div>
                    <h4 className={classes.placeText}>
                      {detailTourisms.country}
                    </h4>
                  </div>
                  <div>
                    <h4 className={classes.placeText}>
                      Entrance : Rs <span>{detailTourisms.fees}</span>{" "}
                    </h4>
                  </div>
                  <div>
                    <h4 className={classes.placeText}>
                      {detailTourisms.state}
                    </h4>
                  </div>
                </div>

                <div className={classes.containerTwo}>
                  <h3
                    className={classes.title}
                    variant="h3"
                    color="secondary"
                    gutterBottom
                  >
                    {detailTourisms.title}
                  </h3>
                  <hr />
                  <div className={classes.locationDiv}>
                    <h4 className={classes.locationText}>
                      Distance of {detailTourisms.distance} km from Shillong
                    </h4>
                    <h4 className={classes.locationText}>
                      Location: {detailTourisms.address}
                    </h4>
                    <h4 className={classes.locationText}>
                      Contact: {detailTourisms.contact}
                    </h4>
                    <h4 className={classes.locationText}>
                      Resort: {detailTourisms.resort}
                    </h4>
                    <h4 className={classes.locationText}>
                      Hotel: {detailTourisms.hotel}
                    </h4>
                  </div>
                  <pre className={classes.preTag}>{detailTourisms.content}</pre>
                  <hr />

                  <div className={classes.Buttom}>
                    <div className={classes.socialShare}>
                      <SocialShare url={socialmedia} />
                    </div>
                  </div>
                  <ImageSlider images={detailTourisms.manyImages} />
                  <ImageGallery image={detailTourisms.manyImages} />
                  <IndexAdvertiseBanner index={1} />
                  <IndexAdvertiseBanner index={2} />
                  <IndexAdvertiseBanner index={3} />
                  <IndexAdvertiseBanner index={4} />
                  <IndexAdvertiseBanner index={5} />
                  <IndexAdvertiseBanner index={6} />
                  <IndexAdvertiseBanner index={7} />
                  <IndexAdvertiseBanner index={8} />
                  <IndexAdvertiseBanner index={9} />
                  <IndexAdvertiseBanner index={10} />
                  <IndexAdvertiseBanner index={11} />
                  <IndexAdvertiseBanner index={12} />
                  <IndexAdvertiseBanner index={13} />
                </div>
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
    </>
  );
};

export default TourismsDetail;
