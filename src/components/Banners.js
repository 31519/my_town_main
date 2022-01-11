import React, {useEffect} from "react";
import "../css_styles/Banner.css";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {bannerListAction} from "../actions/advertiseActions";
import {useSelector, useDispatch} from "react-redux"
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const image = "images/banner.png"



const Banners = () => {
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);

  const { error: listBannerError, loading: listBannerLoading , banners: listBanner } = bannerList;

  useEffect(() => {
    dispatch(bannerListAction());
  }, [dispatch,]);
  return (
    <Grid className="banner" container>
        {listBanner && listBanner.length === 0 && (<><img src={image} alt="banner" /></>)}
        {listBannerLoading ? (
          <Loaders />
        ) : listBannerError ? (
          // <ErrorMessage type="error" error={listBannerError} />
          (<><img src={image} alt="banner" /></>)
        ) : (
          <>
            {listBanner.map((banner) => (
              <img key={banner.id} src={banner.image} alt={banner.title}/>
            ))}
          </>
        )}
        
    </Grid>
  );
};

export default Banners;
