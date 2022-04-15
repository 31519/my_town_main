import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import Paginate from "../components/Pagination";
import { Link } from "react-router-dom";
import SocialShare from "../components/SocialShare";
import SearchBox from "../components/SearchBox";
import {tourismsListAction} from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import IndexAdvertiseBanner from "../components/IndexAdvertiseBanner";

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
}));

const TourismsScreen = () => {
  const location = useLocation();
  let keyword = location.search;

  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const tourismsList = useSelector((state) => state.tourismsList);

  const { error: listTourismsError, loading: listTourismsLoading , tourismss: listTourisms, pages, page } = tourismsList;

  useEffect(() => {
    dispatch(tourismsListAction(keyword));
  }, [dispatch, keyword]);
  return (

    <>
      <SearchBox />

      <div className={classes.container}>
        <Container disableGutters>
          {listTourismsLoading ? (
            <Loaders />
          ) : listTourismsError ? (
            <ErrorMessage type="error" error={listTourismsError} />
          ) : (
            <div item>
              {listTourisms.map((data) => (
                <Paper elevation={20} square={true} className={classes.paper}>
                  <Link
                    className={classes.textLink}
                    to={`/tourisms-detail/${data.id}/${data.slug}`}
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
                        <Typography
                          variant="h5"
                          color="secondary"
                          noWrap
                          gutterBottom
                          paragraph
                        >
                          {data.content}
                        </Typography>
                        <Button className={classes.button} variant="contained">
                          Read More ..
                        </Button>
                      </CardContent>
                      <SocialShare url={socialmedia} />
                    </Card>
                  </Link>
                </Paper>
              ))}
            </div>
          )}
        </Container>
        <IndexAdvertiseBanner index={3}/>
      </div>
      <Paginate keyword={keyword} page={page} pages={pages} />

    </>
  );
};

export default TourismsScreen;