import React, { useEffect } from "react";
import Footers from "../components/Footers";
import ProfileOverview from "../components/ProfileOverview";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileDetailActions } from "../actions/userActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { Grid, Button } from "@mui/material";
import DataTable from "../components/DataTable";
import "../css_styles/UserDashboard.css";

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
  // RESELLER_CREATE_RESET,
  // RESELLER_DELETE_RESET,
  SHOP_CREATE_RESET,
  SHOP_DELETE_RESET,
  MEME_CREATE_RESET,
  MEME_DELETE_RESET,
  LOCAL_CREATE_RESET,
  LOCAL_DELETE_RESET,
  TOURISMS_CREATE_RESET,
  TOURISMS_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  hotelUserListAction,
  hotelCreateAction,
  hotelDeleteAction,
  jobUserListAction,
  jobCreateAction,
  jobDeleteAction,
  // resellerListAction,
  // resellerCreateAction,
  // resellerDeleteAction,
  tourismsUserListAction,
  tourismsCreateAction,
  tourismsDeleteAction,
} from "../actions/advertiseActions2";

// ACTION IMPORT

import {
  advertiseUserListAction,
  advertiseCreateAction,
  advertiseDeleteAction,
  celebrityUserListAction,
  celebrityCreateAction,
  celebrityDeleteAction,
  eventUserListAction,
  eventCreateAction,
  eventDeleteAction,
  shopUserListAction,
  shopCreateAction,
  shopDeleteAction,
  memeUserListAction,
  memeCreateAction,
  memeDeleteAction,
  localUserListAction,
  localCreateAction,
  localDeleteAction,
  formCreateAction,
} from "../actions/advertiseActions";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const profileDetail = useSelector((state) => state.profileDetail);
  const { profile, profileLoading, profileError } = profileDetail;

  // FORM CREATE

  // const formCreate = useSelector((state) => state.formCreate);
  // const {
  //   error: createFormError,
  //   loading: createFormLoading,
  //   form: createForm,
  //   success: createFormSuccess,
  // } = formCreate;

  // SHOP CREATE

  const shopCreate = useSelector((state) => state.shopCreate);
  const {
    error: createShopError,
    loading: createShopLoading,
    shop: createShop,
    success: createShopSuccess,
  } = shopCreate;

  // SHOP LIST
  const shopUserList = useSelector((state) => state.shopUserList);
  const {
    error: listShopError,
    loading: listShopLoading,
    shops: listShop,
  } = shopUserList;

  // SHOP DELETE
  const shopDelete = useSelector((state) => state.shopDelete);
  const {
    error: deleteShopError,
    loading: deleteShopLoading,
    shop: deleteShop,
    success: deleteShopSuccess,
  } = shopDelete;

  // ADVERTISE CREATE

  const advertiseCreate = useSelector((state) => state.advertiseCreate);
  const {
    error: createAdvertiseError,
    loading: createAdvertiseLoading,
    advertise: createAdvertise,
    success: createAdvertiseSuccess,
  } = advertiseCreate;

  // ADVERTISE LIST
  const advertiseUserList = useSelector((state) => state.advertiseUserList);
  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseUserList;

  // ADVERTISE DELETE
  const advertiseDelete = useSelector((state) => state.advertiseDelete);
  const {
    error: deleteAdvertiseError,
    loading: deleteAdvertiseLoading,
    advertise: deleteAdvertise,
    success: deleteAdvertiseSuccess,
  } = advertiseDelete;

  // EVENT CREATE

  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    error: createEventError,
    loading: createEventLoading,
    event: createEvent,
    success: createEventSuccess,
  } = eventCreate;

  // HOTEL CREATE

  const hotelCreate = useSelector((state) => state.hotelCreate);
  const {
    error: createHotelError,
    loading: createHotelLoading,
    hotel: createHotel,
    success: createHotelSuccess,
  } = hotelCreate;

  // HOTEL LIST
  const hotelUserList = useSelector((state) => state.hotelUserList);
  const {
    error: listHotelError,
    loading: listHotelLoading,
    hotels: listHotel,
  } = hotelUserList;

  // HOTEL DELETE
  const hotelDelete = useSelector((state) => state.hotelDelete);
  const {
    error: deleteHotelError,
    loading: deleteHotelLoading,
    hotel: deleteHotel,
    success: deleteHotelSuccess,
  } = hotelDelete;

  // CELEBRITIES CREATE

  const celebrityCreate = useSelector((state) => state.celebrityCreate);
  const {
    error: createCelebrityError,
    loading: createCelebrityLoading,
    celebrity: createCelebrity,
    success: createCelebritySuccess,
  } = celebrityCreate;

  // CELEBRITIES LIST
  const celebrityUserList = useSelector((state) => state.celebrityUserList);
  const {
    error: listCelebrityError,
    loading: listCelebrityLoading,
    celebrities: listCelebrity,
  } = celebrityUserList;

  // CELEBRITIES DELETE
  const celebrityDelete = useSelector((state) => state.celebrityDelete);
  const {
    error: deleteCelebrityError,
    loading: deleteCelebrityLoading,
    celebrity: deleteCelebrity,
    success: deleteCelebritySuccess,
  } = celebrityDelete;

  // Profile UseEffect

  useEffect(() => {
    dispatch(profileDetailActions());
  }, [dispatch, userInfo]);

  // Advertise useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(advertiseUserListAction());
    dispatch({ type: ADVERTISE_CREATE_RESET });
    dispatch({ type: ADVERTISE_DELETE_RESET });

    if (createAdvertiseSuccess) {
      navigate(
        `/advertise-update/${createAdvertise.id}/${createAdvertise.slug}`
      );
    }
  }, [
    dispatch,
    userInfo,
    createAdvertiseSuccess,
    deleteAdvertiseSuccess,
    deleteAdvertise,
  ]);

  // Hotel useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(hotelUserListAction());
    dispatch({ type: HOTEL_CREATE_RESET });
    dispatch({ type: HOTEL_DELETE_RESET });

    if (createHotelSuccess) {
      navigate(`/hotel-update/${createHotel.id}/${createHotel.slug}`);
    }
  }, [dispatch, userInfo, createHotelSuccess, deleteHotelSuccess, deleteHotel]);

  // celebrity useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(celebrityUserListAction());
    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });

    if (createCelebritySuccess) {
      navigate(
        `/celebrity-update/${createCelebrity.id}/${createCelebrity.slug}`
      );
    }
  }, [
    dispatch,
    userInfo,
    createCelebritySuccess,
    deleteCelebritySuccess,
    deleteCelebrity,
  ]);

  // CREATE form HANDLER
  const formCreateHandler = () => {
    dispatch(formCreateAction());
  };

  // CREATE ADVERTISE HANDLER
  const advertiseCreateHandler = () => {
    dispatch(advertiseCreateAction());
  };

  // DELETE ADVERTISE HANDLER
  const advertiseDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(advertiseDeleteAction(id, slug));
    }
  };

  // CREATE HOTEL HANDLER
  const hotelCreateHandler = () => {
    dispatch(hotelCreateAction());
  };

  // DELETE HOTEL HANDLER
  const hotelDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(hotelDeleteAction(id, slug));
    }
  };

  // CREATE CELEBRITY HANDLER
  const celebrityCreateHandler = () => {
    dispatch(celebrityCreateAction());
  };

  // DELETE CELEBRITY HANDLER
  const celebrityDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(celebrityDeleteAction(id, slug));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo]);

  return (
    <Grid container className="userContainer">
      {profile && <ProfileOverview profile={profile}/>}
      
      <Grid container className="grid-shop" md={12} lg={12} sm={12} xs={12}>
        {profileLoading && <Loaders />}
        {profileError && <ErrorMessage type="error" error={profileError} />}

        {profile && (
          <Grid
            item
            container
            className="profile-grid"
            md={12}
            sm={12}
            xs={12}
            lg={12}
          >
            <Grid className="image-grid" item md={12} sm={12} xs={12} lg={12}>
              {/* <img src={profile.image} alt="photo" /> */}
            </Grid>
            <Grid
              className="profile-info name"
              item
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              {profile && <h1 className="profile-name ">{profile.username}</h1>}
            </Grid>
            <Grid
              className="profile-info "
              item
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              {profile && (
                <h2 className="profile-name">{profile.profession}</h2>
              )}
            </Grid>
          </Grid>
        )}

        

        {profile && (
          <Grid
            item
            container
            className="profile-grid-detail"
            md={12}
            sm={12}
            xs={12}
            lg={12}
          >
            <Grid
              item
              className="profile-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <Grid className="profile-detail-edit" item>
                <h3>Profile Details</h3>
              </Grid>
              <Grid
                className="profile-detail-edit"
                item
                md={12}
                sm={12}
                xs={12}
                lg={12}
              >
                <Link className="text-link" to={`/user-update/${profile.id}`}>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Full Name</label>
              <Grid item>
                <span className="profile-full-name">
                  {profile.firstName} {profile.lastName}
                </span>
              </Grid>
            </Grid>

            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Email</label>
              <Grid item>
                <span className="profile-full-name">{profile.email}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Gender</label>
              <Grid item>
                <span className="profile-full-name">{profile.gender}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Phone</label>
              <Grid item>
                <span className="profile-full-name">{profile.phoneNumber}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Country</label>
              <Grid item>
                <span className="profile-full-name">{profile.country}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>State</label>
              <Grid item>
                <span className="profile-full-name">{profile.state}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Town</label>
              <Grid item>
                <span className="profile-full-name">{profile.town}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Pin code</label>
              <Grid item>
                <span className="profile-full-name">{profile.pincode}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Profession</label>
              <Grid item>
                <span className="profile-full-name">{profile.profession}</span>
              </Grid>
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Shop</label>
              {profile.isApprovedShop ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Job</label>
              {profile.isApprovedJob ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Reseller</label>
              {profile.isApprovedResseller ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Advertise</label>
              {profile.isApprovedAdvertise ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Celebrity</label>
              {profile.isApprovedCelebrities ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Tourisms</label>
              {profile.isApprovedTourisms ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Hotel</label>
              {profile.isApprovedHotel ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Event</label>
              {profile.isApprovedEvent ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              className="profile-full-detail"
              md={12}
              sm={12}
              xs={12}
              lg={12}
            >
              <label>Meme</label>
              {profile.isApprovedMeme ? (
                <Grid item>
                  <span className="profile-approved">Approved</span>
                </Grid>
              ) : (
                <Grid item>
                  <span className="profile-not-approved">Not Approved</span>
                </Grid>
              )}
            </Grid>

            {profile.isRequested ? (
              <Grid
                item
                style={{ paddingTop: "10px", color: "green", fontSize: "20px" }}
              >
                <span>Requested ...You will be approved after sometime...</span>
              </Grid>
            ) : (
              <Grid
                item
                className="profile-request"
                md={12}
                sm={12}
                xs={12}
                lg={12}
              >
                <label className="request-label">Request To Upload</label>
                <Grid item>
                  <Link to="/requestform-create">
                    <Button
                      variant="contained"
                      className="profile-request-button"
                    >
                      Request
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            )}
            <Grid md={12} sm={12} xs={12} lg={12}>
              {/* {createFormLoading && <Loaders/>}
            {createFormError && <ErrorMessage type="error" error={createFormError}/>} */}
            </Grid>
          </Grid>
        )}
      </Grid>
      
      
      {/* <DataTable
            listModelLoading={listResellerLoading}
            listModelError={listResellerError}
            listModel={listReseller}
            createModelError={createResellerError}
            deleteModelError={deleteResellerError}
            deleteModelLoading={deleteResellerLoading}
            modelCreateHandler={resellerCreateHandler}
            modelDeleteHandler={resellerDeleteHandler}
            redirect="reseller"
          /> */}

      {/* Advertise Table */}
      {profile && profile.isApprovedAdvertise && (
        <DataTable
          listModelLoading={listAdvertiseLoading}
          listModelError={listAdvertiseError}
          listModel={listAdvertise}
          createModelError={createAdvertiseError}
          deleteModelError={deleteAdvertiseError}
          deleteModelLoading={deleteAdvertiseLoading}
          modelCreateHandler={advertiseCreateHandler}
          modelDeleteHandler={advertiseDeleteHandler}
          redirect="advertise"
        />
      )}

      {/* Hotel Table */}
      {profile && profile.isApprovedHotel && (
        <DataTable
          createModelError={createHotelError}
          modelCreateHandler={hotelCreateHandler}
          listModelLoading={listHotelLoading}
          listModelError={listHotelError}
          deleteModelError={deleteHotelError}
          listModel={listHotel}
          deleteModelLoading={deleteHotelLoading}
          modelDeleteHandler={hotelDeleteHandler}
          redirect="hotel"
        />
      )}

      <Footers />
    </Grid>
  );
};

export default UserDashboard;
