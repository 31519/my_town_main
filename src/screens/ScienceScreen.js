import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCards from "../components/newsCards";
import Footers from "../components/Footers";
import Banners from "../components/Banners";
import { useLocation } from "react-router-dom";

import "../css_styles/TechList.css";

import ReactGA from "react-ga4";
// IMPORT FROM ACTIONS
import { listScience } from "../actions/techActions";

import Categories from "../components/Categories";
import CelebCarousel from "../components/CelebCarousel";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import DetailCategory from "../components/DetailCategory";
import SearchBox from "../components/SearchBox";
import Paginate from "../components/Pagination";

import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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



const BusinessScreen = () => {
  const location = useLocation();
  let keyword = location.search;

  const pathname = window.location.pathname

  const classes = useStyles();
  const dispatch = useDispatch();

  const scienceList = useSelector((state) => state.scienceList);

  const { error: scienceListError, loading: scienceListLoading, science, pages, page } = scienceList;

  useEffect(() => {
    ReactGA.initialize("G-PY5JB3D19S");
    ReactGA.send(pathname);
    console.log(pathname,"pathname")
    dispatch(listScience(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <div className="techlist">
        <CelebCarousel/>
        <Banners />
        <Categories />
        <DetailCategory/>

        <SearchBox />
        {/* Content */}

        <Grid className={classes.gridHeader} container item>
          <Typography className={classes.header} color="green" variant="h4">
            SCIENCE
          </Typography>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
             {/* This is the add section */}
          </Grid>
          {scienceListLoading ? (
            <Loaders />
          ) : scienceListError ? (
            <ErrorMessage type="error" error={scienceListError} />
          ) : (
            <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
              {science && science.map((tech) => (
                <NewsCards key={tech.id} news={tech} model="science"/>
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

export default BusinessScreen;
