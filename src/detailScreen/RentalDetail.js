import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { hotelDetailAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SocialShare from "../components/SocialShare";
import ListCategory from "../components/ListCategory";
import { localListAction } from "../actions/advertiseActions";
import { makeStyles } from "@mui/styles";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import { advertiseListAction } from "../actions/advertiseActions";
import ImageGallery from "../components/ImageGallery";
import ImageSlider from "../components/ImageSlider";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import Owner from "../components/Owner";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import ContactUs from "../components/ContactUs";
import PageLoader from "../components/PageLoader";

import {} from "@mui/material";

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
  },
  containerTwo: {
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
  title: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 800,
    color: "#18877b",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
  },

  address: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 800,
    color: "black",
    margin: "10px",
    opacity: "0.6",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
  },
  areaPrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  area: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 800,
    color: "black",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
  },
  fees: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 800,
    color: "green",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      fontWeight: 800,
    },
  },

  // More Info Portion

  moreInfocontainer: {
    margin: "10px",
  },

  moreInfoHeader: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: 800,
    margin: "3px",
    opacity: "0.7",
  },
  moreInfoSubContainer: {
    display: "flex",
    width: "100%",
  },
  info: {
    width: "100%",
  },

  contentHeader: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "16px",
    letterSpacing: "1px",
    fontWeight: 900,
  },
  contentMain: {
    fontFamily: "Helvetica",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    fontSize: "14px",
    letterSpacing: "1px",
    fontWeight: 900,
    opacity: "0.6",
    margin: "0px",
  },

  // End Of More Info Portion

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

  preTag: {
    // inlineSize:"150px",
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
  available: {
    padding: "5px",
    border: "2px solid #10b9e8cf",
    borderRadius: "5px",
    color: "#0abc17",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  sold: {
    margin: "5px",
    justifyContent: "center",
    border: "2px solid #10b9e8cf",
    borderRadius: "5px",
    color: "#ff0606e0",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}));

const RentalDetail = () => {
  // const myRef = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  const params = useParams();
  const { id, slug } = params;
  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const hotelDetail = useSelector((state) => state.hotelDetail);

  const {
    error: detailHotelError,
    loading: detailHotelLoading,
    hotel: detailHotel,
  } = hotelDetail;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  useEffect(() => {
    dispatch(hotelDetailAction(id, slug));
    dispatch(localListAction());
    dispatch(advertiseListAction(keyword));
    // executeScroll()
  }, [dispatch, id, slug]);
  return (
    <>
      <Helmet>
        <title>{detailHotel.title}</title>
        <meta name="description" content={detailHotel.content} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialmedia} />
        <meta property="og:title" content={detailHotel.title} />
        <meta property="og:description" content={detailHotel.content} />
        <meta property="og:image" content={detailHotel.image} />
      </Helmet>
      <SideBar />
      <Header />
      {detailHotel && (
        <div>
          {detailHotelLoading ? (
            <PageLoader />
          ) : detailHotelError ? (
            <ErrorMessage type="error" error={detailHotelError} />
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
                    {detailHotel.image ? (
                      <img
                        className={classes.image}
                        key={detailHotel.id}
                        src={detailHotel.image}
                        alt={detailHotel.title}
                      />
                    ) : (
                      <img
                        className={classes.image}
                        key={detailHotel.id}
                        src="images/newsPlaceholder.jpg"
                        alt={detailHotel.title}
                      />
                    )}
                  </div>
                </div>
                <div className={classes.containerTwo}>
                  <Owner user="cosrumut" userImage={detailHotel.image} />
                  <h3 className={classes.title}>{detailHotel.title}</h3>
                  <h3 className={classes.address}>
                    Address: {detailHotel.address}
                  </h3>
                  <h3 className={classes.address}>
                    District: {detailHotel.district}
                  </h3>
                  <div className={classes.areaPrice}>
                    <h3 className={classes.area}>
                      Area : {detailHotel.roomArea} sqrt
                    </h3>
                    <h3 className={classes.fees}>
                      ₹{detailHotel.fees} Per Month
                    </h3>
                  </div>

                  <Contact phoneNumber={detailHotel.contact} />

                  {/* More info Portion */}

                  <div className={classes.moreInfocontainer}>
                    <h3 className={classes.moreInfoHeader}>
                      More Informations
                    </h3>
                    <div className={classes.moreInfoSubContainer}>
                      <div className={classes.info}>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Rent For..</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.rentFor}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Rooms</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.rooms}
                          </h3>
                        </div>

                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Floors</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.floor}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>State</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.state}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Town</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.town}
                          </h3>
                        </div>

                        <div>
                          <h3 className={classes.contentHeader}>Price</h3>
                          <h3 className={classes.contentMain}>
                            ₹{detailHotel.fees}
                          </h3>
                        </div>
                      </div>
                      <div className={classes.info}>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Area</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.roomArea} sqrt
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Bathroom</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.bathrooms}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Parking</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.parking ? "Yes" : "No"}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>Country</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.country}
                          </h3>
                        </div>
                        <div className={classes.moreInfoContent}>
                          <h3 className={classes.contentHeader}>District</h3>
                          <h3 className={classes.contentMain}>
                            {detailHotel.district}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End of More Info Portion */}

                  <hr />
                  {detailHotel.content && (
                    <pre className={classes.preTag}>
                      {parse(detailHotel.content)}
                    </pre>
                  )}
                  <hr />

                  <div className={classes.Buttom}>
                    <div className={classes.socialShare}>
                      <SocialShare url={socialmedia} />
                    </div>
                  </div>
                  <ImageSlider images={detailHotel.manyImages} />
                  <ImageGallery image={detailHotel.manyImages} />
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
              {/* <button onClick={executeScroll} style={{color: 'black'}}>Click</button> */}
            </div>
          )}
        </div>
      )}
      <CategoryCarousel />
      <ContactUs />
      <Footers />
    </>
  );
};

export default RentalDetail;
