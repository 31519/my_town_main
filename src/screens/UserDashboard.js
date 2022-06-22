import React, { useEffect } from "react";
import ProfileOverview from "../components/ProfileOverview";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetailActions } from "../actions/userActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Footers from "../components/Footers";
import SideBar from "../components/SideBar";
import DataTable from "../components/DataTable";

import "../css_styles/UserDashboard.css";

// CONSTANT IMPORT
import {
  ADVERTISE_CREATE_RESET,
  ADVERTISE_DELETE_RESET,
  CELEBRITY_CREATE_RESET,
  CELEBRITY_DELETE_RESET,
  HOTEL_CREATE_RESET,
  HOTEL_DELETE_RESET,
  RESELLER_CREATE_RESET,
  RESELLER_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  hotelUserListAction,
  hotelCreateAction,
  hotelDeleteAction,
  resellerUserListAction,
  resellerCreateAction,
  resellerDeleteAction,
} from "../actions/advertiseActions2";

// ACTION IMPORT

import {
  advertiseUserListAction,
  advertiseCreateAction,
  advertiseDeleteAction,
  celebrityUserListAction,
  formCreateAction,
} from "../actions/advertiseActions";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetail = useSelector((state) => state.userDetail);
  const {
    user: detailUser,
    loading: loadingUser,
    error: errorUser,
  } = userDetail;

  // UserDetail useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    {
      userInfo && userInfo.id && dispatch(userDetailActions(userInfo.id));
    }
  }, [dispatch, userInfo]);

  // FORM CREATE

  // const formCreate = useSelector((state) => state.formCreate);
  // const {
  //   error: createFormError,
  //   loading: createFormLoading,
  //   form: createForm,
  //   success: createFormSuccess,
  // } = formCreate;

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

  // RESELLER CREATE

  const resellerCreate = useSelector((state) => state.resellerCreate);
  const {
    error: createResellerError,
    loading: createResellerLoading,
    reseller: createReseller,
    success: createResellerSuccess,
  } = resellerCreate;

  // Reseller LIST
  const resellerUserList = useSelector((state) => state.resellerUserList);
  const {
    error: listResellerError,
    loading: listResellerLoading,
    resellers: listReseller,
  } = resellerUserList;

  // Reseller DELETE
  const resellerDelete = useSelector((state) => state.resellerDelete);
  const {
    error: deleteResellerError,
    loading: deleteResellerLoading,
    reseller: deleteReseller,
    success: deleteResellerSuccess,
  } = resellerDelete;

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

  // useEffect(() => {
  //   dispatch(profileDetailActions());
  // }, [dispatch, userInfo]);

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

  // Reseller useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(resellerUserListAction());
    dispatch({ type: RESELLER_CREATE_RESET });
    dispatch({ type: RESELLER_DELETE_RESET });

    if (createResellerSuccess) {
      navigate(`/reseller-update/${createReseller.id}/${createReseller.slug}`);
    }
  }, [
    dispatch,
    userInfo,
    createResellerSuccess,
    deleteResellerSuccess,
    deleteReseller,
  ]);

  // CREATE reseller HANDLER
  const resellerCreateHandler = () => {
    dispatch(resellerCreateAction());
  };

  // DELETE reseller HANDLER
  const resellerDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(resellerDeleteAction(id, slug));
    }
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

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <SideBar />
      <div className="userContainer">
        <div>
          {detailUser && <ProfileOverview user={detailUser} />}
          {/* <AnalyticOverview /> */}

          {/* RESELLER */}
          {detailUser && detailUser.is_approved && (
            <DataTable
              listModelLoading={listResellerLoading}
              listModelError={listResellerError}
              listModel={listReseller}
              createModelError={createResellerError}
              deleteModelError={deleteResellerError}
              deleteModelLoading={deleteResellerLoading}
              modelCreateHandler={resellerCreateHandler}
              modelDeleteHandler={resellerDeleteHandler}
              redirect="reseller"
              isApprovedViews={true}
              name="resell-detail"
              reseller={true}
            />
          )}

          {/* Advertise Table */}
          {detailUser && detailUser.is_approved && (
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
              isApprovedViews={true}
              name="advertise-detail"
            />
          )}

          {/* Hotel Table */}
          {/* {userInfo && (
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
          )} */}
        </div>
      </div>
      <Footers />
    </>
  );
};

export default UserDashboard;
