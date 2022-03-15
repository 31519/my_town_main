import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { makeStyles } from "@mui/styles";

import CssBaseline from "@mui/material/CssBaseline";
import PageHeader from "../components/PageHeader";
import PeopleIcon from "@mui/icons-material/People";

// COMPONENT IMPORT
import AdminSidebar from "../components/AdminSidebar";
import PerformanceChart from "../components/PerformanceChart";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AdminTable from "../components/Table";

import TechCreateNewsApi from "./TechCreateNewsApi";

// CSS IMPORT
import "../css_styles/AdminDashboard.css";
import "../css_styles/UserTable.css";
import "../css_styles/Advertise.css";

import { userListActions } from "../actions/userActions";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

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

// ACTION IMPORT
import {
  hotelListAction,
  hotelCreateAction,
  hotelDeleteAction,
  jobListAction,
  jobCreateAction,
  jobDeleteAction,
  resellerListAction,
  resellerCreateAction,
  resellerDeleteAction,
  tourismsListAction,
  tourismsCreateAction,
  tourismsDeleteAction,
} from "../actions/advertiseActions2";

const useStyles = makeStyles({
  navbar: {
    paddingLeft: "320px",
    width: "100%",
    paddingBottom: "50px",
    // opacity:'0.2%'
  },
});

const AdminDashboard = ({ tech }) => {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { error: listUserError, loading: listUserLoading, users } = userList;

  // ADVERTISE CREATE

  const advertiseCreate = useSelector((state) => state.advertiseCreate);
  const {
    error: createAdvertiseError,
    loading: createAdvertiseLoading,
    advertise: advertise,
    success: createAdvertiseSuccess,
  } = advertiseCreate;

  // ADVERTISE LIST
  const advertiseList = useSelector((state) => state.advertiseList);
  const {
    error: listAdvertiseError,
    loading: listAdvertiseLoading,
    advertises: listAdvertise,
  } = advertiseList;

  // ADVERTISE DELETE
  const advertiseDelete = useSelector((state) => state.advertiseDelete);
  const {
    error: deleteAdvertiseError,
    loading: deleteAdvertiseLoading,
    advertise: deleteAdvertise,
    success: deleteAdvertiseSuccess,
  } = advertiseDelete;

  // CELEBRITIES CREATE

  const celebrityCreate = useSelector((state) => state.celebrityCreate);
  const {
    error: createCelebrityError,
    loading: createCelebrityLoading,
    celebrity: createCelebrity,
    success: createCelebritySuccess,
  } = celebrityCreate;

  // CELEBRITIES LIST
  const celebrityList = useSelector((state) => state.celebrityList);
  const {
    error: listCelebrityError,
    loading: listCelebrityLoading,
    celebrities: listCelebrities,
  } = celebrityList;

  // CELEBRITIES DELETE
  const celebrityDelete = useSelector((state) => state.celebrityDelete);
  const {
    error: deleteCelebrityError,
    loading: deleteCelebrityLoading,
    celebrity: deleteCelebrity,
    success: deleteCelebritySuccess,
  } = celebrityDelete;

  // EVENT CREATE

  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    error: createEventError,
    loading: createEventLoading,
    event: createEvent,
    success: createEventSuccess,
  } = eventCreate;

  // EVENT LIST
  const eventList = useSelector((state) => state.eventList);
  const {
    error: listEventError,
    loading: listEventLoading,
    events: listEvent,
  } = eventList;

  // EVENT DELETE
  const eventDelete = useSelector((state) => state.eventDelete);
  const {
    error: deleteEventError,
    loading: deleteEventLoading,
    event: deleteEvent,
    success: deleteEventSuccess,
  } = eventDelete;

  // HOTEL CREATE

  const hotelCreate = useSelector((state) => state.hotelCreate);
  const {
    error: createHotelError,
    loading: createHotelLoading,
    hotel: createHotel,
    success: createHotelSuccess,
  } = hotelCreate;

  // HOTEL LIST
  const hotelList = useSelector((state) => state.hotelList);
  const {
    error: listHotelError,
    loading: listHotelLoading,
    hotels: listHotel,
  } = hotelList;

  // HOTEL DELETE
  const hotelDelete = useSelector((state) => state.hotelDelete);
  const {
    error: deleteHotelError,
    loading: deleteHotelLoading,
    hotel: deleteHotel,
    success: deleteHotelSuccess,
  } = hotelDelete;

  // JOB CREATE

  const jobCreate = useSelector((state) => state.jobCreate);
  const {
    error: createJobError,
    loading: createJobLoading,
    job: createJob,
    success: createJobSuccess,
  } = jobCreate;

  // JOB LIST
  const jobList = useSelector((state) => state.jobList);
  const {
    error: listJobError,
    loading: listJobLoading,
    jobs: listJob,
  } = jobList;

  // JOB DELETE
  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    error: deleteJobError,
    loading: deleteJobLoading,
    job: deleteJob,
    success: deleteJobSuccess,
  } = jobDelete;

  // RESELLER CREATE

  const resellerCreate = useSelector((state) => state.resellerCreate);
  const {
    error: createResellerError,
    loading: createResellerLoading,
    reseller: createReseller,
    success: createResellerSuccess,
  } = resellerCreate;

  // RESELLER LIST
  const resellerList = useSelector((state) => state.resellerList);
  const {
    error: listResellerError,
    loading: listResellerLoading,
    resellers: listReseller,
  } = resellerList;

  // RESELLER DELETE
  const resellerDelete = useSelector((state) => state.resellerDelete);
  const {
    error: deleteResellerError,
    loading: deleteResellerLoading,
    reseller: deleteReseller,
    success: deleteResellerSuccess,
  } = resellerDelete;

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

  // TOURISMS CREATE

  const tourismsCreate = useSelector((state) => state.tourismsCreate);
  const {
    error: createTourismsError,
    loading: createTourismsLoading,
    tourisms: createTourisms,
    success: createTourismsSuccess,
  } = tourismsCreate;

  // TOURISMS LIST
  const tourismsList = useSelector((state) => state.tourismsList);
  const {
    error: listTourismsError,
    loading: listTourismsLoading,
    tourismss: listTourisms,
  } = tourismsList;

  // TOURISMS DELETE
  const tourismsDelete = useSelector((state) => state.tourismsDelete);
  const {
    error: deleteTourismsError,
    loading: deleteTourismsLoading,
    tourisms: deleteTourisms,
    success: deleteTourismsSuccess,
  } = tourismsDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }

    dispatch(userListActions());
    dispatch(celebrityListAction());
    dispatch(eventListAction());
    dispatch(hotelListAction());
    dispatch(jobListAction());
    dispatch(resellerListAction());
    dispatch(shopListAction());
    dispatch(tourismsListAction());

    // ADVERTISE PORTION
    dispatch(advertiseListAction());
    dispatch({ type: ADVERTISE_CREATE_RESET });
    dispatch({ type: ADVERTISE_DELETE_RESET });

    if (createAdvertiseSuccess) {
      navigate(`/advertise-update/${advertise.id}/${advertise.slug}`);
    }
    // CELEBRITY PORTION

    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });

    if (createCelebritySuccess) {
      navigate(
        `/celebrity-update/${createCelebrity.id}/${createCelebrity.slug}`
      );
    }

    // EVENT PORTIONS

    dispatch({ type: EVENT_CREATE_RESET });
    dispatch({ type: EVENT_DELETE_RESET });

    if (createEventSuccess) {
      navigate(`/event-update/${createEvent.id}/${createEvent.slug}`);
    }

    // Hotel PORTION

    dispatch({ type: HOTEL_CREATE_RESET });
    dispatch({ type: HOTEL_DELETE_RESET });

    if (createHotelSuccess) {
      navigate(`/hotel-update/${createHotel.id}/${createHotel.slug}`);
    }

    // JOB PORTION

    dispatch(jobListAction());
    dispatch({ type: JOBS_CREATE_RESET });
    dispatch({ type: JOBS_DELETE_RESET });

    if (createJobSuccess) {
      navigate(`/job-update/${createJob.id}/${createJob.slug}`);
    }

    // RESELLER PORTION

    dispatch({ type: RESELLER_CREATE_RESET });
    dispatch({ type: RESELLER_DELETE_RESET });
    if (createResellerSuccess) {
      navigate(`/reseller-update/${createReseller.id}/${createReseller.slug}`);
    }

    // SHOP PORTIONS

    dispatch({ type: SHOP_CREATE_RESET });
    dispatch({ type: SHOP_DELETE_RESET });

    if (createShopSuccess) {
      navigate(`/shop-update/${createShop.id}/${createShop.slug}`);
    }

    // TOURISMS PORTIONS

    dispatch({ type: TOURISMS_CREATE_RESET });
    dispatch({ type: TOURISMS_DELETE_RESET });

    if (createTourismsSuccess) {
      navigate(`/tourisms-update/${createTourisms.id}/${createTourisms.slug}`);
    }
  }, [
    dispatch,
    userInfo,
    createAdvertiseSuccess,
    deleteAdvertiseSuccess,
    createCelebritySuccess,
    deleteCelebritySuccess,
    createEventSuccess,
    deleteEventSuccess,
    createHotelSuccess,
    deleteHotelSuccess,
    createJobSuccess,
    deleteJobSuccess,
    createResellerSuccess,
    deleteResellerSuccess,
    createShopSuccess,
    deleteShopSuccess,
    createTourismsSuccess,
    deleteTourismsSuccess,
  ]);

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

  // CREATE EVENT HANDLER
  const eventCreateHandler = () => {
    dispatch(eventCreateAction());
  };

  // DELETE EVENT HANDLER
  const eventDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(eventDeleteAction(id, slug));
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

  // CREATE JOB HANDLER
  const jobCreateHandler = () => {
    dispatch(jobCreateAction());
  };

  // DELETE JOB HANDLER
  const jobDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(jobDeleteAction(id, slug));
    }
  };

  // CREATE RESELLER HANDLER
  const resellerCreateHandler = () => {
    dispatch(resellerCreateAction());
  };

  // DELETE RESELLER HANDLER
  const resellerDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(resellerDeleteAction(id, slug));
    }
  };

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

  // CREATE TOURISMS HANDLER
  const tourismsCreateHandler = () => {
    dispatch(tourismsCreateAction());
  };

  // DELETE TOURISMS HANDLER
  const tourismsDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(tourismsDeleteAction(id, slug));
    }
  };



  return (
    <div className="admin">
      <div className="admin_top">
        {/* <SideBar /> */}
        {/* <Grid className={classes.navbar}>
          <CssBaseline />

          <Navbar />
          <PageHeader
            title="PageHeader"
            subtitle="description"
            icon={<PeopleIcon />}
          />
        </Grid> */}

        <a href={`${process.env.REACT_APP_PORT}/admin`} target="_blank">
          Admin Headers
        </a>
      </div>


            {/* ************************BIG CONTENT FOR ADMIN USER ************************** */}
      {/* ADVERTISEMENT */}
      <AdminTable
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
      {/* CELEBRITY */}
      <AdminTable
        listModelLoading={listCelebrityLoading}
        listModelError={listCelebrityError}
        listModel={listCelebrities}
        createModelError={createCelebrityError}
        deleteModelError={deleteCelebrityError}
        deleteModelLoading={deleteCelebrityLoading}
        modelCreateHandler={celebrityCreateHandler}
        modelDeleteHandler={celebrityDeleteHandler}
        redirect="celebrity"
      />
      {/* EVENT PORTION */}
      <AdminTable 
                  listModelLoading=  {listEventLoading}
                  listModelError=    {listEventError}
                  listModel=         {listEvent}
                  createModelError=  {createEventError}
                  deleteModelError=  {deleteEventError}
                  deleteModelLoading={deleteEventLoading}
                  modelCreateHandler={eventCreateHandler}
                  modelDeleteHandler={eventDeleteHandler}
                  redirect ="event"
              />

      {/* HOTEL PORTION */}
      <AdminTable createModelError={createHotelError}
                  modelCreateHandler={hotelCreateHandler}
                  listModelLoading={listHotelLoading}
                  listModelError={listHotelError}
                  deleteModelError={deleteHotelError}
                  listModel={listHotel}
                  deleteModelLoading={deleteHotelLoading}
                  modelDeleteHandler={hotelDeleteHandler}
                  redirect ="hotel"
              />

      {/* JOB PORTIOn */}
      <AdminTable 
                  listModelLoading=  {listJobLoading}
                  listModelError=    {listJobError}
                  listModel=         {listJob}
                  createModelError=  {createJobError}
                  deleteModelError=  {deleteJobError}
                  deleteModelLoading={deleteJobLoading}
                  modelCreateHandler={jobCreateHandler}
                  modelDeleteHandler={jobDeleteHandler}
                  redirect ="job"
              />

      {/* RESELLER PORTIOn */}
      <AdminTable 
                  listModelLoading=  {listResellerLoading}
                  listModelError=    {listResellerError}
                  listModel=         {listReseller}
                  createModelError=  {createResellerError}
                  deleteModelError=  {deleteResellerError}
                  deleteModelLoading={deleteResellerLoading}
                  modelCreateHandler={resellerCreateHandler}
                  modelDeleteHandler={resellerDeleteHandler}
                  redirect ="reseller"
              />

      {/*  SHOP PORTIOn */}
      <AdminTable 
                listModelLoading=  {listShopLoading}
                listModelError=    {listShopError}
                listModel=         {listShop}
                createModelError=  {createShopError}
                deleteModelError=  {deleteShopError}
                deleteModelLoading={deleteShopLoading}
                modelCreateHandler={shopCreateHandler}
                modelDeleteHandler={shopDeleteHandler}
                redirect ="shop"
            />

      {/*  TOURISMS PORTIOn */}
      <AdminTable 
                listModelLoading=  {listTourismsLoading}
                listModelError=    {listTourismsError}
                listModel=         {listTourisms}
                createModelError=  {createTourismsError}
                deleteModelError=  {deleteTourismsError}
                deleteModelLoading={deleteTourismsLoading}
                modelCreateHandler={tourismsCreateHandler}
                modelDeleteHandler={tourismsDeleteHandler}
                redirect ="tourisms"
            />

      {/* <TechCreateNewsApi/> */}
      {/* ************************BIG CONTENT FOR ADMIN USER ************************** */}

        {listUserError && <ErrorMessage type="error" error={listUserError} />}
        {listUserLoading && <Loaders />}
        <div className="users">
          <div className="user_table">
            <table className="user_scroll">
              <thead>
                <tr className="user_header">
                  <th>user</th>
                  <th>username</th>
                  <th>password aafjalfdjlsajfdljdfksajdfljskldajflskajflskjflksjdfkljjsdkfkjfsd</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
