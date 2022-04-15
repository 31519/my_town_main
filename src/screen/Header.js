import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import {localListAction} from "../actions/advertiseActions";
import CategoryCarousel from "../components/CategoryCarousel";
import AdvertiseBanner from "../components/AdvertiseBanner";




const Header = () => {

  const location = useLocation();
  let keyword = location.search;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(localListAction(keyword));
  }, [dispatch, keyword]);
  return (

    <>
    <div className="techlist">
      <Banners />
      <CategoryCarousel  />
      <Categories />
      <AdvertiseBanner/>
      

    </div>
    </>
  );
};

export default Header;


