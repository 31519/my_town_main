import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { advertiseListAction } from "../actions/advertiseActions";
import ListCategory from "../components/ListCategory";
import { useParams, useLocation } from "react-router-dom";
import { advertiseDetailAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SocialShare from "../components/SocialShare";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";

import {
  Typography,
  Container,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    container: {
      width: 700,
      margin: "auto",
    },
  },
  card: {
    width: "100%",
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
    backgroundColor: "#158f89",
    padding: "4px",
    display: "flex",
    width: "100px",
  },
  button: {
    color: "white",
    backgroundColor: "red",
    padding: "0 4px 0 4px",
    margin: 0,
    borderRadius: 0,
  },
  date: {
    fontWeight: 500,
    marginLeft: "5px",
    fontFamily: "Monospace",
    color: "green",
    padding: 0,
  },
  startDate: {
    fontSize: "12px",
    paddingBottom: "10px",
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
  preTag: {
    // inlineSize:"150px",
    whiteSpace: "pre-wrap",

    overflowX: "auto",
    wordWrap: "break-word",
    fontWeight: 500,
    fontFamily: "Helvetica, San-sarif",
    fontSize: "20px",
    letterSpacing: "1px",
  },
}));

const AdvertiseDetail = () => {
  const params = useParams();
  const { id, slug } = params;
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

  const advertiseDetail = useSelector((state) => state.advertiseDetail);

  const {
    error: detailAdvertiseError,
    loading: detailAdvertiseLoading,
    advertise: detailAdvertise,
  } = advertiseDetail;

  useEffect(() => {
    dispatch(advertiseDetailAction(id, slug));
    dispatch(advertiseListAction(keyword));
  }, [dispatch, id, slug]);
  return (
    <>
      <div className={classes.container}>
        <Container disableGutters>
          {detailAdvertiseLoading ? (
            <Loaders />
          ) : detailAdvertiseError ? (
            <ErrorMessage type="error" error={detailAdvertiseError} />
          ) : (
            <div item>
              <Paper elevation={20} square={true} className={classes.paper}>
                <Card className={classes.card} key={detailAdvertise.id}>
                <h2
                    variant="h6"
                    gutterBottom
                    color="primary"
                    className={classes.date}
                  >
                    UPDATED ON{" "}
                    {detailAdvertise.createdAt &&
                      detailAdvertise.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailAdvertise.createdAt &&
                      detailAdvertise.createdAt.substr(11, 8)}
                  </h2>

                  <div className={classes.stateBox}>
                    <Typography variant="title">
                      {detailAdvertise.state}
                    </Typography>
                  </div>
                  <CardMedia
                    class={classes.cardMedia}
                    component="img"
                    image={detailAdvertise.image}
                    alt={"img"}
                  />



                  <Typography variant="h5" gutterBottom>
                    <CalendarTodayIcon
                      style={{
                        fill: "green",
                        fontSize: "20px",
                        fontWeight: "800",
                      }}
                    />
                    {detailAdvertise.createdAt &&
                      detailAdvertise.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailAdvertise.createdAt &&
                      detailAdvertise.createdAt.substr(11, 8)}
                  </Typography>

                  <CardContent>
                    <Typography variant="h3" color="secondary" gutterBottom>
                      {detailAdvertise.title}
                    </Typography>
                    <hr/>


                    <IndexAdvertiseBanner index={1}/>


                    <pre class={classes.preTag}>{detailAdvertise.content}</pre>
                    <hr/>
                  </CardContent>
                  <SocialShare url={socialmedia} />
                </Card>
              </Paper>
              <IndexAdvertiseBanner index={2}/>
            </div>
          )}
          <ListCategory error={listAdvertiseError} list={listAdvertise} loading={listAdvertiseLoading} link="advertise-detail" />
          <IndexAdvertiseBanner index={3}/>
        </Container>
      </div>
    </>
  );
};

export default AdvertiseDetail;
