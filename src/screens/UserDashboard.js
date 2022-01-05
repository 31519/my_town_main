import React, { useEffect } from "react";
import "../css_styles/UserDashboard.css";
import AdminSidebar from "../components/AdminSidebar";
import Footers from "../components/Footers";
// import AdminTable from "../components/Table";
import PostTable from "../components/PostTable";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileDetailActions } from "../actions/userActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AdminTable from "../components/Table";

import { Grid, Button, Paper } from "@mui/material";

// CONSTANT IMPORT
import {
  ADVERTISE_CREATE_RESET,
  ADVERTISE_DELETE_RESET,
  CELEBRITY_CREATE_RESET,
  CELEBRITY_DELETE_RESET,
  EVENT_CREATE_RESET,
  EVENT_DELETE_RESET,
  HOTEL_CREATE_RESET,
  HOTEL_DELETE_RESET,
  JOBS_CREATE_RESET,
  JOBS_DELETE_RESET,
  RESELLER_CREATE_RESET,
  RESELLER_DELETE_RESET,
  SHOP_CREATE_RESET,
  SHOP_DELETE_RESET,
  TOURISMS_CREATE_RESET,
  TOURISMS_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT

import {
  advertiseListAction,
  advertiseCreateAction,
  advertiseDeleteAction,
  celebrityListAction,
  celebrityCreateAction,
  celebrityDeleteAction,
  eventListAction,
  eventCreateAction,
  eventDeleteAction,
  shopListAction,
  shopCreateAction,
  shopDeleteAction,
} from "../actions/advertiseActions";

const UserDashboard = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const profileDetail = useSelector((state) => state.profileDetail);

  const { profile, profileLoading, profileError } = profileDetail;

  // SHOP CREATE

  const shopCreate = useSelector((state) => state.shopCreate);
  const {
    error: createShopError,
    loading: createShopLoading,
    shop: createShop,
    success: createShopSuccess,
  } = shopCreate;

  // SHOP LIST
  const shopList = useSelector((state) => state.shopList);
  const {
    error: listShopError,
    loading: listShopLoading,
    shops: listShop,
  } = shopList;

  // SHOP DELETE
  const shopDelete = useSelector((state) => state.shopDelete);
  const {
    error: deleteShopError,
    loading: deleteShopLoading,
    shop: deleteShop,
    success: deleteShopSuccess,
  } = shopDelete;

  useEffect(() => {
    dispatch(profileDetailActions());
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(shopListAction());
    dispatch({ type: SHOP_CREATE_RESET });
    dispatch({ type: SHOP_DELETE_RESET });

    if (createShopSuccess) {
      navigate(`/shop-update/${createShop.id}/${createShop.slug}`);
    }
  }, [dispatch, userInfo, createShopSuccess]);

  // CREATE SHOP HANDLER
  const shopCreateHandler = () => {
    dispatch(shopCreateAction());
  };

  // DELETE SHOP HANDLER
  const shopDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(shopDeleteAction(id, slug));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo]);

  return (
    <div className="user_dashboard">
      <Grid container className="grid-shop" md={10} lg={10} sm={12} xs={12}>
        {profileLoading && <Loaders />}
        {profileError && <ErrorMessage type="error" error={profileError} />}
        {profile && profile.isApprovedShop && (
          <Grid item md={12} lg={12} sm={12} xs={12}>
            {listShop ? null : (
              <Button
                variant="contained"
                color="primary"
                onClick={shopCreateHandler}
              >
                Create Shop
              </Button>
            )}
          </Grid>
        )}
        {listShop && (
          <div className="shop-info">
            <div className='shop-info-1'>
              <div>Owner's Shop {listShop.title}</div>
              <div>{process.env.REACT_APP_TEST}</div>
            </div>
            
          </div>
        )}
        <Grid item md={12} lg={12} sm={12} xs={12} className="users_post">
          {/* {profile && profile.isApprovedShop && (
            <AdminTable
              listModelLoading={listShopLoading}
              listModelError={listShopError}
              listModel={listShop}
              createModelError={createShopError}
              deleteModelError={deleteShopError}
              deleteModelLoading={deleteShopLoading}
              modelCreateHandler={shopCreateHandler}
              modelDeleteHandler={shopDeleteHandler}
              redirect="shop product"
            />
          )} */}
        </Grid>
      </Grid>
      <Footers />
    </div>
  );
};

export default UserDashboard;
