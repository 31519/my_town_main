import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import "../css_styles/TechList.css";
import Footers from "../components/Footers";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import CelebCarousel from "../components/CelebCarousel";
import Paginate from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import AllCards from "../components/AllCards";
import { Link } from "react-router-dom";
import {jobListAction} from "../actions/advertiseActions2";
import { Grid, Typography } from "@mui/material";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";
import SocialShare from "../components/SocialShare";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import {
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";

const celeb = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};

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


const CelebrityScreen = () => {

  const location = useLocation();
  let keyword = location.search;
  const socialmedia = window.location.href;

  // const pathname = window.location.pathname

  const classes = useStyles();
  const dispatch = useDispatch();

  const jobList = useSelector((state) => state.jobList);

  const { error: listJobError, loading: listJobLoading , jobs: listJob, pages, page } = jobList;

  useEffect(() => {
    dispatch(jobListAction(keyword));
  }, [dispatch, keyword]);
  return (

    <>
    <div className="techlist">
      <CelebCarousel celeb={celeb} />
      <Banners />
      <Categories />

      <SearchBox />
      {/* Content */}

      <Grid className={classes.gridHeader} container item>
        <Typography className={classes.header} color="green" variant="h3">
          JOBS
        </Typography>
      </Grid>

      <Grid spacing={2} className={classes.gridContent} container>
        <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
           {/* This is the add section */}
        </Grid>
        {listJobLoading ? (
          <Loaders />
        ) : listJobError ? (
          <ErrorMessage type="error" error={listJobError} />
        ) : (
          <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
            {listJob.map((job) => (
              // <AllCards key={job.id} item={job} model="job" socialmedia="jobs" />
            
              <div className="App" style={{ backgrounColor: "#e0e7e9ee" }}>
                <Card className={classes.card}>
                  <Link
                    className="text-link"
                    to={`/job-detail/${job.id}/${job.slug}`}
                  >
                    {/* {job.manyImages ? (
                      <img src={job.manyImages[0].image} alt={job.title} />
                    ) : (
                      <CardMedia className={classes.media} image={job.image} />
                    )} */}
                    <img src={job.image} className={classes.media} alt={job.title} />
                  </Link>
                  <CardContent className={classes.content}>
                    <Typography variant={"caption"} gutterBottom>
                      <CalendarTodayIcon
                        style={{ fill: "green", fontSize: "12px", fontWeight: "700" }}
                      />
                      {job.createdAt.split('T', 1)}  {job.createdAt.substr(11, 8)}
                      
                      
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
                      Start Date: {job.startDate.split('T', 1)}
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
                      End Date: {job.endDate.split('T', 1)}
                    </h2>
                    <Typography variant={"caption"} color='primary' gutterBottom>
                      {job.state}
                    </Typography>
                    <Typography variant={"h6"} gutterBottom>
                      {job.title}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant={"h6"} gutterBottom>
                      share
                    </Typography>
                    <SocialShare url={socialmedia} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </Grid>
        )}

        <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
           {/* This is the add section */}
        </Grid>
      </Grid>
      <Paginate keyword={keyword} page={page} pages={pages}/>

      {/* <CategoryCarousel celeb={techss} /> */}

      <Footers />
    </div>
    </>
  );
};

export default CelebrityScreen;
