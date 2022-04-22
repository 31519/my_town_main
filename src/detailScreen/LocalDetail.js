import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { localDetailAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SocialShare from "../components/SocialShare";
import ListCategory from "../components/ListCategory";
import { localListAction } from "../actions/advertiseActions";
import { makeStyles } from "@mui/styles";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";

import {
  Typography,
  Container,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

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
      height: 200,
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: 200,
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
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

const LocalDetail = () => {
  const params = useParams();
  const { id, slug } = params;
  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const localDetail = useSelector((state) => state.localDetail);

  const {
    error: detailLocalError,
    loading: detailLocalLoading,
    local: detailLocal,
  } = localDetail;



  const localList = useSelector((state) => state.localList);
  const {
    error: listLocalError,
    loading: listLocalLoading,
    locals: listLocal,
  } = localList;

  useEffect(() => {
    dispatch(localDetailAction(id, slug));
    dispatch(localListAction());
  }, [dispatch, id, slug]);
  return (
    <>
      <div className={classes.container}>
        <Container disableGutters>
          {detailLocalLoading ? (
            <Loaders />
          ) : detailLocalError ? (
            <ErrorMessage type="error" error={detailLocalError} />
          ) : (
            <div item>
              <Paper elevation={20} square={true} className={classes.paper}>
                <Card className={classes.card} key={detailLocal.id}>
                  <h2
                    variant="h6"
                    gutterBottom
                    color="primary"
                    className={classes.date}
                  >
                    Updated on{" "}
                    {detailLocal.createdAt &&
                      detailLocal.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailLocal.createdAt &&
                      detailLocal.createdAt.substr(11, 8)}
                  </h2>

                  <div className={classes.stateBox}>
                    <Typography variant="title">MEGHALAYA</Typography>
                  </div>
                  <CardMedia
                    class={classes.cardMedia}
                    component="img"
                    image={detailLocal.image}
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
                    {detailLocal.createdAt &&
                      detailLocal.createdAt.split("T", 1)}{" "}
                    {"Time"}{" "}
                    {detailLocal.createdAt &&
                      detailLocal.createdAt.substr(11, 8)}
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                    {detailLocal.state}
                  </Typography>
                  <hr />
                  <CardContent>
                    <Typography variant="h3" color="secondary" gutterBottom>
                      {detailLocal.title}
                    </Typography>
                    <hr />


                    <IndexAdvertiseBanner index={1}/>


                    <pre class={classes.preTag}>{detailLocal.content}</pre>
                    <hr />
                  </CardContent>
                  <SocialShare url={socialmedia} />
                </Card>
              </Paper>
                <IndexAdvertiseBanner index={2}/>
            </div>
          )}

          <ListCategory error={listLocalError} list={listLocal} loading={listLocalLoading} link="local-detail" name="News" />
          <IndexAdvertiseBanner index={3}/>
        </Container>
      </div>
    </>
  );
};

export default LocalDetail;
