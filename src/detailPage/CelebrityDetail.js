import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footers from "../components/Footers";
import "../css_styles/DetailProductivity.css";
import { useParams, useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import PopupComponent from "../components/PopupComponent"

import { celebrityDetailAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";
// import DetailCard from "../components/DetailCard";

import SocialShare from "../components/SocialShare";
import { Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Banners from "../components/Banners";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  gridContent: {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
  },
  title: {
    fontSize: "16px",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
    paddingTop: "20px",
  },
  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "20px",
  },
});

const CelebrityDetail = () => {
  const socialmedia = window.location.href;
  const params = useParams();
  const { id, slug } = params;

  const classes = useStyles();
  const dispatch = useDispatch();

  const celebrityDetail = useSelector((state) => state.celebrityDetail);

  const {
    error: detailCelebrityError,
    loading: detailCelebrityLoading,
    celebrity: detailCelebrity,
  } = celebrityDetail;

  useEffect(() => {
    dispatch(celebrityDetailAction(id, slug));
  }, [dispatch, id, slug]);
  return (
    <>
      <div className="techlist">
        {/* <CelebCarousel celeb={celeb} /> */}
        <Banners />
        <Categories />

        {/* <SearchBox /> */}
        {/* Content */}

        <Grid className={classes.gridHeader} container item>
          <Typography className={classes.header} color="green" variant="h3">
            CELEB
          </Typography>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the add section */}
          </Grid>
          {detailCelebrityLoading ? (
            <Loaders />
          ) : detailCelebrityError ? (
            <ErrorMessage type="error" error={detailCelebrityError} />
          ) : (
            <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
              {/* <DetailCard key={detailCelebrity.id} item={detailCelebrity}/> */}
              <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
                <Card className={classes.card}>
                  {/* <Link className="text-link" to={`/${model}-detail/${item.id}/${item.slug}`}> */}
                  {detailCelebrity.manyImages && (
                    <PopupComponent image={detailCelebrity.manyImages[0].image} title={detailCelebrity.title}/>
                  )}

                  {/* </Link> */}
                  <CardContent className={classes.content}>
                    <Typography variant={"caption"} gutterBottom>
                      <CalendarTodayIcon
                        style={{
                          fill: "green",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      />
                      {detailCelebrity.createdAt &&
                        detailCelebrity.createdAt.split("T", 1)}{" "}
                      {detailCelebrity.createdAt &&
                        detailCelebrity.createdAt.substr(11, 8)}
                    </Typography>
                    <br />
                    <Typography variant={"caption"} gutterBottom>
                      {detailCelebrity.state}
                    </Typography>
                    <br />

                    <Typography variant={"h6"} gutterBottom>
                      {detailCelebrity.title}
                    </Typography>

                    <h2
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                        letterSpacing: "1px",
                      }}
                    >
                      {detailCelebrity.content}
                    </h2>
                      {detailCelebrity.url && (
                        <a href={detailCelebrity.url} target="_blank" style={{
                          marginBottom:'20px'
                        }}>{detailCelebrity.url}</a>
                      )}

                    <br />
                    <Typography gutterBottom color="blue">
                      {detailCelebrity.country}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailCelebrity.state}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailCelebrity.address}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailCelebrity.contact}
                    </Typography>

                    <Divider className={classes.divider} />
                    <Typography variant={"h6"} gutterBottom>
                      share
                    </Typography>
                    <SocialShare url={socialmedia} />
                    <ImageSlider images={detailCelebrity.manyImages} />
                    
                  </CardContent>
                </Card>
              </div>
            </Grid>
          )}

          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the add section */}
          </Grid>
        </Grid>

        <Footers />
      </div>
    </>
  );
};

export default CelebrityDetail;
