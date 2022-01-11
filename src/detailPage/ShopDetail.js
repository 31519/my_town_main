
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footers from "../components/Footers";
import "../css_styles/DetailProductivity.css";
import { useParams} from "react-router-dom";

import { shopDetailAction } from "../actions/advertiseActions";
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

const ShopDetail = () => {
  const params = useParams();
  const {id, slug} = params;


  const classes = useStyles();
  const dispatch = useDispatch();


  const shopDetail = useSelector((state) => state.shopDetail);

  const {
    error: detailShopError,
    loading: detailShopLoading,
    shop : detailShop,
  } = shopDetail;

  useEffect(() => {
    dispatch(shopDetailAction(id, slug));
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
                SHOP DETAIL
              </Typography>
            </Grid>
      
            <Grid spacing={2} className={classes.gridContent} container>
              <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
                 {/* This is the add section */}
              </Grid>
              {detailShopLoading ? (
                <Loaders />
              ) : detailShopError ? (
                <ErrorMessage type="error" error={detailShopError} />
              ) : (
                <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
                  
                    <DetailCard key={detailShop.id} item={detailShop}/>

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

export default ShopDetail;