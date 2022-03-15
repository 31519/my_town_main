import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footers from "../components/Footers";
import "../css_styles/DetailProductivity.css";
import { useParams, useLocation } from "react-router-dom";

import { jobDetailAction } from "../actions/advertiseActions2";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";
// import DetailCard from "../components/DetailCard";
import SocialShare from "../components/SocialShare";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { Grid, Typography, Card, CardContent, Divider } from "@mui/material";
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

const JobDetail = () => {
  const params = useParams();
  const { id, slug } = params;
  const socialmedia = window.location.href;

  const classes = useStyles();
  const dispatch = useDispatch();

  const jobDetail = useSelector((state) => state.jobDetail);

  const {
    error: detailJobError,
    loading: detailJobLoading,
    job: detailJob,
  } = jobDetail;

  useEffect(() => {
    dispatch(jobDetailAction(id, slug));
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
            DETAIL JOB
          </Typography>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            {/* This is the add section */}
          </Grid>
          {detailJobLoading ? (
            <Loaders />
          ) : detailJobError ? (
            <ErrorMessage type="error" error={detailJobError} />
          ) : (
            <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
              {/* <DetailCard key={detailJob.id} item={detailJob}/> */}
              <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
                <Card className={classes.card}>
                  <img src={detailJob.image} alt={detailJob.title} />

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
                      {detailJob.createdAt && detailJob.createdAt.split('T', 1)}  {detailJob.createdAt && detailJob.createdAt.substr(11, 8)}
                    </Typography>
                    <h2
                      style={{
                        fontSize: "12px",
                        paddingBottom: "10px",
                        margin: "0px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      Start Date: {detailJob.startDate && detailJob.startDate.split("T", 1)}
                    </h2>
                    <h2
                      style={{
                        fontSize: "12px",
                        paddingBottom: "10px",
                        margin: "0px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      End Date: {detailJob.endDate && detailJob.endDate.split("T", 1)}
                    </h2>
                    <Typography variant={"caption"} color='primary'  gutterBottom>
                      {detailJob.state}
                    </Typography>
                    <br />

                    <Typography variant={"h6"} gutterBottom>
                      {detailJob.title}
                    </Typography>

                    <h2
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        fontWeight: "500",
                        letterSpacing: "1px",
                      }}
                    >
                      {detailJob.content}
                    </h2>

                    <br />
                    <Typography gutterBottom color="blue">
                      {detailJob.country}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailJob.state}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailJob.address}
                    </Typography>
                    <Typography gutterBottom color="blue">
                      {detailJob.contact}
                    </Typography>

                    <Divider className={classes.divider} />
                    <Typography variant={"h6"} gutterBottom>
                      share
                    </Typography>
                    <SocialShare url={socialmedia} />
                  </CardContent>
                </Card>
              </div>
            </Grid>
          )}

          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
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

export default JobDetail;
