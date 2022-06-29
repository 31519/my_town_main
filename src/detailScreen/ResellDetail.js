import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { resellerDetailAction } from "../actions/advertiseActions2";
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
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import ContactUs from "../components/ContactUs";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import PageLoader from "../components/PageLoader";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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
    // height: "150px",
    width: "700px",
    [theme.breakpoints.down("xs")]: {
      // height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      // height: "200px",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      // height: "400px",
      width: "700px",
    },
  },
  image: {
    objectFit: "cover",
    height: "auto",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
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
  contact: {
    padding: "5px",
    margin: "10px 0px ",
    color: "white",
    background: "#0abc17",
    display: "flex",
    justifyContent: "center",

    // [theme.breakpoints.down("md")]: {
    //   fontSize: "14px",
    // },
    cursor: "pointer",
    fontFamily: "Helvetica",
    fontSize: "16px",
    fontWeight: "900",
    letterSpacing: "1.2px",
    alignItems: "center",
    "&:hover": {
      fontSize: "18px",
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
  ImageContainer: {
    background: "#efb3b6",
  },
  state:{
    color:"#727677cf",
    fontFamily: "Helvetica",
    fontSize: "16px",
    margin: "5px 0px"
  }
}));

const ResellDetail = () => {
  // const myRef = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  const params = useParams();
  const { id, slug } = params;
  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const resellerDetail = useSelector((state) => state.resellerDetail);

  const {
    error: detailResellerError,
    loading: detailResellerLoading,
    reseller: detailReseller,
  } = resellerDetail;

  const localList = useSelector((state) => state.localList);
  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

  const advertiseList = useSelector((state) => state.advertiseList);

  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  useEffect(() => {
    dispatch(resellerDetailAction(id, slug));
    dispatch(localListAction());
    dispatch(advertiseListAction(keyword));
    // executeScroll()
  }, [dispatch, id, slug]);
  return (
    <>
      <Helmet>
        <title>{detailReseller.title}</title>
        <meta name="description" content={detailReseller.content} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialmedia} />
        <meta property="og:title" content={detailReseller.title} />
        <meta property="og:description" content={detailReseller.content} />
        <meta property="og:image" content={detailReseller.image} />
      </Helmet>
      <SideBar />
      <Header />
      {detailReseller && (
        <div>
          <IndexAdvertiseBanner index={1} />
          {detailResellerLoading ? (
            <PageLoader />
          ) : detailResellerError ? (
            <ErrorMessage type="error" error={detailResellerError} />
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
                    {detailReseller.image ? (
                      <img
                        className={classes.image}
                        key={detailReseller.id}
                        src={detailReseller.image}
                        alt={detailReseller.title}
                      />
                    ) : (
                      <img
                        className={classes.image}
                        key={detailReseller.id}
                        src="images/newsPlaceholder.jpg"
                        alt={detailReseller.title}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h2 className={classes.state} >MEGHALAYA</h2>
                </div>

                <div className={classes.containerTwo}>
                  <h3 variant="h6" color="primary" className={classes.date}>
                    UPDATED ON{" "}
                    {detailReseller.createdAt &&
                      detailReseller.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailReseller.createdAt &&
                      detailReseller.createdAt.substr(11, 8)}
                  </h3>

                  <h3
                    className={classes.title}
                    variant="h3"
                    color="secondary"
                    gutterBottom
                  >
                    ₹ {detailReseller.price}
                  </h3>

                  <h3
                    className={classes.title}
                    variant="h3"
                    color="secondary"
                    gutterBottom
                  >
                    {detailReseller.title}
                  </h3>
                  <IndexAdvertiseBanner index={2} />
                  <IndexAdvertiseBanner index={3} />
                  <div>
                    <a
                      href={`tel: ${detailReseller.contact}`}
                      className={classes.contact}
                    >
                      {" "}
                      {detailReseller.contact} : <LocalPhoneIcon />{" "}
                    </a>
                  </div>
                  <div>
                    {detailReseller.available ? (
                      <div className={classes.available}>Available</div>
                    ) : (
                      <div className={classes.sold}>Sold</div>
                    )}
                  </div>

                  {detailReseller.content && (
                    <pre className={classes.preTag}>
                      {parse(detailReseller.content)}
                    </pre>
                  )}
                  <hr />
                  <IndexAdvertiseBanner index={4} />

                  <div className={classes.Buttom}>
                    <div className={classes.socialShare}>
                      <SocialShare url={socialmedia} />
                    </div>
                  </div>
                  <IndexAdvertiseBanner index={5} />
                  <ImageSlider images={detailReseller.manyImages} />
                  <ImageGallery image={detailReseller.manyImages} />

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

export default ResellDetail;
