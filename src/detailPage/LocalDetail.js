
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footers from "../components/Footers";
import "../css_styles/DetailProductivity.css";
import { useParams} from "react-router-dom";

import { localDetailAction } from "../actions/advertiseActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";
import DetailCard from "../components/DetailCard";

import { Grid, Typography } from "@mui/material";
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
    paddingTop: "20px"
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
  const {id, slug} = params;


  const classes = useStyles();
  const dispatch = useDispatch();


  const localDetail = useSelector((state) => state.localDetail);

  const {
    error: detailLocalError,
    loading: detailLocalLoading,
    local: detailLocal,
  } = localDetail;

  useEffect(() => {
    dispatch(localDetailAction(id, slug));
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
                DETAIL NEW
              </Typography>
            </Grid>
      
            <Grid spacing={2} className={classes.gridContent} container>
              <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
                 {/* This is the add section */}
              </Grid>
              {detailLocalLoading ? (
                <Loaders />
              ) : detailLocalError ? (
                <ErrorMessage type="error" error={detailLocalError} />
              ) : (
                <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
                  
                    <DetailCard key={detailLocal.id} item={detailLocal}/>

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
