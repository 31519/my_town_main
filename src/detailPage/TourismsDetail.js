import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footers from "../components/Footers";
import "../css_styles/DetailProductivity.css";
import { useParams } from "react-router-dom";

// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

import PopupComponent from "../components/PopupComponent"
import { tourismsDetailAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Banners from "../components/Banners";

import SocialShare from "../components/SocialShare";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import ImageSlider from "../components/ImageSlider";

import { Typography, Card, CardContent, Divider } from "@mui/material";

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

const TourismsDetail = () => {
  const params = useParams();
  const { id, slug } = params;

  const classes = useStyles();
  const dispatch = useDispatch();

  const tourismsDetail = useSelector((state) => state.tourismsDetail);

  const {
    error: detailTourismsError,
    loading: detailTourismsLoading,
    tourisms: detailTourisms,
  } = tourismsDetail;

  useEffect(() => {
    dispatch(tourismsDetailAction(id, slug));
  }, [dispatch, id, slug]);
  const socialmedia = window.location.href;
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
            PLACES
          </Typography>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the add section */}
          </Grid>
          {detailTourismsLoading ? (
            <Loaders />
          ) : detailTourismsError ? (
            <ErrorMessage type="error" error={detailTourismsError} />
          ) : (
            <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
              {/* <DetailCard key={detailTourisms.id} item={detailTourisms}/> */}
              <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
                <Card className={classes.card}>
                  {/* <Link className="text-link" to={`/${model}-detail/${item.id}/${item.slug}`}> */}
                  {detailTourisms.manyImages && (
                    <PopupComponent image={detailTourisms.manyImages[0].image} title={detailTourisms.title}/>
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
                      {detailTourisms.createdAt}
                    </Typography>
                    <br />
                    <Typography variant={"caption"} gutterBottom>
                      {detailTourisms.state}
                    </Typography>
                    <br />

                    <br />
                    <h2
                      style={{
                        fontSize: "12px",
                        paddingBottom: "10px",
                        margin: "0px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      Distance: {detailTourisms.distance} km from Shillong
                    </h2>

                    <Typography variant={"h6"} gutterBottom>
                      {detailTourisms.title}
                    </Typography>

                    <h2
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                        letterSpacing: "1px",
                      }}
                    >
                      {detailTourisms.content}
                    </h2>

                    <br />
                    <Typography gutterBottom color="blue">
                      {detailTourisms.country}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailTourisms.state}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailTourisms.address}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailTourisms.contact}
                    </Typography>

                    <Divider className={classes.divider} />
                    <Typography variant={"h6"} gutterBottom>
                      share
                    </Typography>
                    <SocialShare url={socialmedia} />
                    <ImageSlider images={detailTourisms.manyImages} />
                  </CardContent>
                </Card>
              </div>
            </Grid>
          )}

          <Grid spacing={1} detailTourisms xs={12} sm={3} lg={3} md={3}>
            {/* This is the add section */}
          </Grid>
        </Grid>
        {/* <Paginate keyword={keyword} page={page} pages={pages}/> */}

        {/* <CategoryCarousel celeb={techss} /> */}

        <Footers />
      </div>
    </>
  );
};

export default TourismsDetail;
