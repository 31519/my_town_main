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

import { Grid, Button } from "@mui/material";

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
    <Grid container className="user_dashboard">
      <Grid container className="grid-shop" md={4} lg={4} sm={12} xs={12}>
        {profileLoading && <Loaders />}
        {profileError && <ErrorMessage type="error" error={profileError} />}

        {profile && (
        <Grid item container className="profile-grid" md={12} sm={12} xs={12} lg={12}>
          <Grid className="image-grid" item md={12} sm={12} xs={12} lg={12}>
            <img src={"../images/music.png"} alt="photo" />
          </Grid>
          <Grid className="profile-info name" item md={12} sm={12} xs={12} lg={12}>
            {profile && <h1 className="profile-name ">{profile.username}</h1>}
          </Grid>
          <Grid className="profile-info " item md={12} sm={12} xs={12} lg={12}>
            {profile && <h2 className="profile-name">{profile.profession}</h2>}
          </Grid>
          
        </Grid>
        )}
        
        {profile && (
        <Grid item container className="profile-grid-detail" md={12} sm={12} xs={12} lg={12}>
          <Grid item className="profile-detail"  md={12} sm={12} xs={12} lg={12}>
            <Grid className="profile-detail-edit" item><h3>Profile Details</h3></Grid>
            <Grid  className="profile-detail-edit" item md={12} sm={12} xs={12} lg={12}>
            <Button variant='contained' color='primary'>Edit</Button>
            </Grid>

          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Full Name</label>
            <Grid item>
              <span className="profile-full-name">{profile.firstName} {profile.lastName}</span>
            </Grid>
          </Grid>

          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Email</label>
            <Grid item>
              <span className="profile-full-name">{profile.email}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Gender</label>
            <Grid item>
              <span className="profile-full-name">{profile.gender}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Phone</label>
            <Grid item>
              <span className="profile-full-name">{profile.phone}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Country</label>
            <Grid item>
              <span className="profile-full-name">{profile.country}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>State</label>
            <Grid item>
              <span className="profile-full-name">{profile.state}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Town</label>
            <Grid item>
              <span className="profile-full-name">{profile.town}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Pin code</label>
            <Grid item>
              <span className="profile-full-name">{profile.pincode}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Profession</label>
            <Grid item>
              <span className="profile-full-name">{profile.profession}</span>
            </Grid>
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Shop</label>
            {
            profile.isApprovedShop
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Job</label>
            {
            profile.isApprovedJob
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Reseller</label>
            {
            profile.isApprovedResseller
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Advertise</label>
            {
            profile.isApprovedAdvertise
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Celebrity</label>
            {
            profile.isApprovedCelebrities
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Tourisms</label>
            {
            profile.isApprovedTourisms
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Hotel</label>
            {
            profile.isApprovedHotel
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Event</label>
            {
            profile.isApprovedEvent
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>
          <Grid item className="profile-request"  md={12} sm={12} xs={12} lg={12}>
            <label className='request-label'>Request To Upload</label>
            <Grid item>
              <span className="profile-request-button">Request</span>
            </Grid>
          </Grid>
          
          
        </Grid>
        )}

        
    
        {/* {profile && profile.isApprovedShop && (
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
        )} */}
        {/* {listShop && (
          <div className="shop-info">
            <div className="shop-info-1">
              <div>Owner's Shop {listShop.title}</div>
              <div>{process.env.REACT_APP_TEST}</div>
            </div>
          </div>
        )} */}
        {/* <Grid item md={12} lg={12} sm={12} xs={12} className="users_post"> */}
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
        {/* </Grid> */}
      </Grid>
      <Grid container className="grid-shop" md={8} lg={8} sm={12} xs={12}>
        <Grid
            className="profile-grid"
            container
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
          
          <Grid>
            {/* <PostTable cat='new'/> */}
          </Grid>

        </Grid>
      </Grid>
      <Footers />
    </Grid>
  );
};

export default UserDashboard;
