import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { advertiseListAction } from "../actions/advertiseActions";
import ListCategory from "../components/ListCategory";
import { useParams, useLocation } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { jobDetailAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SocialShare from "../components/SocialShare";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import SideBar from "../components/SideBar";
import Header from "../screen/Header";
import Footers from "../components/Footers";
import CategoryCarousel from "../components/CategoryCarousel";
import ContactUs from "../components/ContactUs";
import { makeStyles } from "@mui/styles";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

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
  detailText:{
    fontSize: "20px",
    color: "#2dc26b",
    margin: "0px",
    fontFamily: "Times New Roman",
    textDecoration: "underline",
  },

  preTagDetail: {
    whiteSpace: "pre-wrap",

    overflowX: "auto",
    wordWrap: "break-word",
    fontWeight: 500,
    fontFamily: "Helvetica, San-sarif",
    fontSize: "20px",
    letterSpacing: "1.5px",
    opacity: "0.8",
    // margin: "5px",
    lineHeight: "1",
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
  ImageContainer:{
    background: "#efb3b6",
  }
}));

const JobDetail = () => {
  const params = useParams();
  const { id, slug } = params;
  const socialmedia = window.location.href;
  const location = useLocation();
  let keyword = location.search;

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

  const jobDetail = useSelector((state) => state.jobDetail);

  const {
    error: detailJobError,
    loading: detailJobLoading,
    job: detailJob,
  } = jobDetail;

  useEffect(() => {
    dispatch(jobDetailAction(id, slug));
    dispatch(advertiseListAction(keyword));
  }, [dispatch, id, slug]);
  return (
    <>
      <Helmet>
        <title>{detailJob.title}</title>
        <meta name="description" content={detailJob.content} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialmedia} />
        <meta property="og:title" content={detailJob.title} />
        <meta property="og:description" content={detailJob.content} />
        <meta property="og:image" content={detailJob.image} />
      </Helmet>
      <SideBar />
      <Header />
      {detailJob && (
        <div>
          <IndexAdvertiseBanner index={1} />
          {detailJobLoading ? (
            <PageLoader />
          ) : detailJobError ? (
            <ErrorMessage type="error" error={detailJobError} />
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
                    {detailJob.image ? (
                      <img
                        className={classes.image}
                        key={detailJob.id}
                        src={detailJob.image}
                        alt={detailJob.title}
                      />
                    ) : (
                      <img
                        className={classes.image}
                        key={detailJob.id}
                        src="images/jobPlaceholder.jpg"
                        alt={detailJob.title}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h2>MEGHALAYA</h2>
                </div>
                
                <div className={classes.containerTwo}>
                  <h3 variant="h6" color="primary" className={classes.date}>
                    UPDATED ON{" "}
                    {detailJob.createdAt && detailJob.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailJob.createdAt && detailJob.createdAt.substr(11, 8)}
                  </h3>

                  <h2 className={classes.startDate}>
                    Start Date:{" "}
                    {detailJob.startDate && detailJob.startDate.split("T", 1)}
                  </h2>
                  <h2 className={classes.endDate}>
                    End Date:{" "}
                    {detailJob.startDate && detailJob.endDate.split("T", 1)}
                  </h2>

                  <hr />

                  <h3
                    className={classes.title}
                    variant="h3"
                    color="secondary"
                    gutterBottom
                  >
                    {detailJob.title}
                  </h3>
                  <hr />
                  <IndexAdvertiseBanner index={2} />
                  <IndexAdvertiseBanner index={3} />
                  {detailJob.content && (
                    <pre className={classes.preTag}>
                      {parse(detailJob.content)}
                    </pre>
                  )}
                  <IndexAdvertiseBanner index={4} />

                  {detailJob.jobsDetail && (
                    <div className={classes.detailJobContainer}>
                      {detailJob.jobsDetail.map((detail) => (
                        <>
                        <h2 style={{color:"#119eef",fontSize: "25px", marginBottom: "10px",fontFamily: "Times New Roman",}}>
                              Job Detail
                            </h2>
                          {detail.postName && (<>
                          <h2 className={classes.detailText}>Post Name : </h2>
                            <pre className={classes.preTagDetail}>
                              {parse(detail.postName)}
                            </pre>
                          </>)}
                           {detail.qualification && (<>
                           <h2 className={classes.detailText}>Qualification : </h2>
                            <pre className={classes.preTagDetail}>
                              {parse(detail.qualification)}
                            </pre>
                          </>)}
                           {detail.experience && (<>
                           <h2 className={classes.detailText}>Experience : </h2>
                            <pre className={classes.preTagDetail}>
                              {parse(detail.experience)}
                            </pre>
                          </>)}
                           {detail.howToApply && (<>
                            <h2 className={classes.detailText}>How To Apply : </h2>
                            <pre className={classes.preTagDetail}>
                              {parse(detail.howToApply)}
                            </pre>
                            <hr/>
                          </>)}
                        </>
                      ))}
                    </div>
                  )}

                  <div className={classes.Buttom}>
                    <div className={classes.socialShare}>
                      <SocialShare url={socialmedia} />
                    </div>
                  </div>
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
      <CategoryCarousel  />
      <ContactUs/>
      <Footers />
    </>
  );
};

export default JobDetail;
