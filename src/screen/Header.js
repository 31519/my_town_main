import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import {localListAction} from "../actions/advertiseActions";
import CategoryCarousel from "../components/CategoryCarousel";
import AdvertiseBanner from "../components/AdvertiseBanner";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    overflowX: 'hidden'
  }
}));


const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  let keyword = location.search;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(localListAction(keyword));
  }, [dispatch, keyword]);
  return (

    <>
    <div className={classes.container}>
      <Banners />
      {/* <!-- Ezoic - under_page_title - under_page_title --> */}
      <div id="ezoic-pub-ad-placeholder-105"> </div>
      {/* <!-- End Ezoic - under_page_title - under_page_title --> */}

      <CategoryCarousel  />
      <Categories />
      <AdvertiseBanner/>

      {/* <!-- Ezoic - under_first_paragraph - under_first_paragraph --> */}
      <div id="ezoic-pub-ad-placeholder-108"> </div>
      {/* <!-- End Ezoic - under_first_paragraph - under_first_paragraph --> */}
      

    </div>
    </>
  );
};

export default Header;


