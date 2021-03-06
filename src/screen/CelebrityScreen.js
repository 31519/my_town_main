import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Pagination";
import { Link } from "react-router-dom";
import SocialShare from "../components/SocialShare";
import SearchBox from "../components/SearchBox";
import { celebrityListAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";
import parse from "html-react-parser";

import {
  Typography,
  Container,
  Button,
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
  Readmore: {
    backgroundColor: "#218aae",
    borderRadius: "0px"

  }
}));

const CelebrityScreen = () => {
  const location = useLocation();
  let keyword = location.search;

  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const celebrityList = useSelector((state) => state.celebrityList);

  const {
    error: listCelebrityError,
    loading: listCelebrityLoading,
    celebrities: listCelebrity,
    pages,
    page,
  } = celebrityList;

  useEffect(() => {
    dispatch(celebrityListAction(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <SearchBox />

      <div className={classes.container}>
        <Container disableGutters>
          {listCelebrityLoading ? (
            <Loaders />
          ) : listCelebrityError ? (
            <ErrorMessage type="error" error={listCelebrityError} />
          ) : (
            <div item>
              {listCelebrity.map((data) => (
                <Paper elevation={20} square={true} className={classes.paper}>
                  <Link
                    className={classes.textLink}
                    to={`/celebrity-detail/${data.id}/${data.slug}`}
                  >
                    <Card className={classes.card} key={data.index}>
                      <h2
                        variant="h6"
                        gutterBottom
                        color="primary"
                        className={classes.date}
                      >
                        UPDATED ON{" "}
                        {data.createdAt && data.createdAt.split("T", 1)}{" "}
                        {"Time"}{" "}
                        {data.createdAt && data.createdAt.substr(11, 8)}
                      </h2>

                      <div className={classes.stateBox}>
                        <Typography variant="title">{data.state}</Typography>
                      </div>
                      <CardMedia
                        class={classes.cardMedia}
                        component="img"
                        image={data.image}
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
                        {data.createdAt && data.createdAt.split("T", 1)}{" "}
                        {"Time"}{" "}
                        {data.createdAt && data.createdAt.substr(11, 8)}
                      </Typography>

                      <CardContent>
                        <Typography variant="h3" color="secondary" gutterBottom>
                          {data.title}
                        </Typography>
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
                        <div className={classes.Readmore}>
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
                          </div>
                      </CardContent>
                      {/* <SocialShare url={socialmedia} /> */}
                    </Card>
                  </Link>
                </Paper>
              ))}
            </div>
          )}
        </Container>
        <IndexAdvertiseBanner index={3} />
      </div>
      <Paginate keyword={keyword} page={page} pages={pages} />
      
    </>
  );
};

export default CelebrityScreen;
