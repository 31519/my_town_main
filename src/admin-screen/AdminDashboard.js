import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileOverview from "../components/ProfileOverview";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";
import axios from "axios";
// COMPONENT IMPORT
import DataTable from "../components/DataTable";

// CSS IMPORT

import { userListActions } from "../actions/userActions";
import { userDetailActions } from "../actions/userActions";
import AnalyticOverview from "../components/AnalyticOverview";

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
  allAdvertiseListAction,
  advertiseCreateAction,
  advertiseDeleteAction,
  celebrityListAction,
  celebrityCreateAction,
  celebrityDeleteAction,
  eventListAction,
  eventCreateAction,
  eventDeleteAction,
  shopCreateAction,
  shopDeleteAction,
} from "../actions/advertiseActions";

import { objectViewListAction } from "../actions/analyticsActions";

// ACTION IMPORT
import {
  hotelListAction,
  hotelCreateAction,
  hotelDeleteAction,
  jobListAction,
  jobCreateAction,
  jobDeleteAction,
  resellerListAction,
  allResellerListAction,
  resellerCreateAction,
  resellerDeleteAction,
  tourismsListAction,
  tourismsCreateAction,
  tourismsDeleteAction,
} from "../actions/advertiseActions2";

const useStyles = makeStyles({
  admin: {
    margin: "20px",
    color: "white",
  },
});

const AdminDashboard = () => {
  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const location = useLocation();
  let keyword = location.search;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [advertiseLoading, setAdvertiseLoading] = useState(false);
  const [resellLoading, setResellLoading] = useState(false);

  const userList = useSelector((state) => state.userList);
  const { error: listUserError, loading: listUserLoading, users } = userList;

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

  const viewList = useSelector((state) => state.viewList);
  const { view, loading: loadingView, error: errorView } = viewList;

  useEffect(() => {
    dispatch(objectViewListAction());
  }, [dispatch, userInfo]);

  // Analytics

  // ADVERTISE PORTION
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
    page: listAdvertisePage,
    pages: listAdvertisePages,
  } = advertiseList;

  const allAdvertiseList = useSelector((state) => state.allAdvertiseList);
  const {
    error: listAllAdvertiseError,
    loading: listAllAdvertiseLoading,
    advertises: listAllAdvertise,
  } = allAdvertiseList;

  // ADVERTISE DELETE
  const advertiseDelete = useSelector((state) => state.advertiseDelete);
  const {
    error: deleteAdvertiseError,
    loading: deleteAdvertiseLoading,
    advertise: deleteAdvertise,
    success: deleteAdvertiseSuccess,
  } = advertiseDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(advertiseListAction());
    dispatch(allAdvertiseListAction());
    dispatch({ type: ADVERTISE_CREATE_RESET });
    dispatch({ type: ADVERTISE_DELETE_RESET });

    if (createAdvertiseSuccess) {
      navigate(`/advertise-update/${advertise.id}/${advertise.slug}`);
    }
  }, [
    dispatch,
    createAdvertiseSuccess,
    deleteAdvertiseSuccess,
    advertiseLoading,
  ]);

  // END OF ADVERTISE

  // CELEBRITIES PORTION

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
    page: listCelebrityPage,
    pages: listCelebrityPages,
  } = celebrityList;

  // CELEBRITIES DELETE
  const celebrityDelete = useSelector((state) => state.celebrityDelete);
  const {
    error: deleteCelebrityError,
    loading: deleteCelebrityLoading,
    celebrity: deleteCelebrity,
    success: deleteCelebritySuccess,
  } = celebrityDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(celebrityListAction());
    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });

    if (createCelebritySuccess) {
      navigate(
        `/celebrity-update/${createCelebrity.id}/${createCelebrity.slug}`
      );
    }
  }, [dispatch, createCelebritySuccess, deleteCelebritySuccess]);

  // END OF CELEBRITIES

  // EVEN AND SCHEME PORTION

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
    page: listEventPage,
    pages: listEventPages,
  } = eventList;

  // EVENT DELETE
  const eventDelete = useSelector((state) => state.eventDelete);
  const {
    error: deleteEventError,
    loading: deleteEventLoading,
    event: deleteEvent,
    success: deleteEventSuccess,
  } = eventDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(eventListAction());
    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });

    if (createEventSuccess) {
      navigate(`/event-update/${createEvent.id}/${createEvent.slug}`);
    }
  }, [dispatch, createEventSuccess, deleteEventSuccess]);

  // END OF EVENT PORTION

  // HOTEL OR RENTAL PORTION

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
    page: listHotelPage,
    pages: listHotelPages,
  } = hotelList;

  // HOTEL DELETE
  const hotelDelete = useSelector((state) => state.hotelDelete);
  const {
    error: deleteHotelError,
    loading: deleteHotelLoading,
    hotel: deleteHotel,
    success: deleteHotelSuccess,
  } = hotelDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(hotelListAction());
    dispatch({ type: HOTEL_CREATE_RESET });
    dispatch({ type: HOTEL_DELETE_RESET });

    if (createHotelSuccess) {
      navigate(`/hotel-update/${createHotel.id}/${createHotel.slug}`);
    }
  }, [dispatch, createHotelSuccess, deleteHotelSuccess]);

  // END OF HOTEL

  // JOB PORTION
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
    page: listJobPage,
    pages: listJobPages,
  } = jobList;

  // JOB DELETE
  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    error: deleteJobError,
    loading: deleteJobLoading,
    job: deleteJob,
    success: deleteJobSuccess,
  } = jobDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(jobListAction());
    dispatch({ type: JOBS_CREATE_RESET });
    dispatch({ type: JOBS_DELETE_RESET });

    if (createJobSuccess) {
      navigate(`/job-update/${createJob.id}/${createJob.slug}`);
    }
  }, [dispatch, createJobSuccess, deleteJobSuccess]);

  // END OF JOB PORTION

  // RESELLER PORTION

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
    page: listResellerPage,
    pages: listResellerPages,
  } = resellerList;

  const allResellerList = useSelector((state) => state.allResellerList);
  const {
    error: listAllResellerError,
    loading: listAllResellerLoading,
    resellers: listAllReseller,
  } = allResellerList;

  // RESELLER DELETE
  const resellerDelete = useSelector((state) => state.resellerDelete);
  const {
    error: deleteResellerError,
    loading: deleteResellerLoading,
    reseller: deleteReseller,
    success: deleteResellerSuccess,
  } = resellerDelete;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(resellerListAction());
    dispatch(allResellerListAction());
    dispatch({ type: RESELLER_CREATE_RESET });
    dispatch({ type: RESELLER_DELETE_RESET });
    if (createResellerSuccess) {
      navigate(`/reseller-update/${createReseller.id}/${createReseller.slug}`);
    }
  }, [dispatch, createResellerSuccess, deleteResellerSuccess, resellLoading]);

  // END OF RESELLER PORTION
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
    page: listShopPage,
    pages: listShopPages,
  } = shopList;

  // SHOP DELETE
  const shopDelete = useSelector((state) => state.shopDelete);
  const {
    error: deleteShopError,
    loading: deleteShopLoading,
    shop: deleteShop,
    success: deleteShopSuccess,
  } = shopDelete;

  // TOURISMS PORTION
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
    page: listTourismsPage,
    pages: listTourismsPages,
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
    dispatch(tourismsListAction(keyword));
    dispatch({ type: TOURISMS_CREATE_RESET });
    dispatch({ type: TOURISMS_DELETE_RESET });

    if (createTourismsSuccess) {
      navigate(`/tourisms-update/${createTourisms.id}/${createTourisms.slug}`);
    }
  }, [dispatch, createTourismsSuccess, deleteTourismsSuccess, keyword]);

  // END OF TOURISMS PORTION

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

  // APPROVE Advertise HANDLER
  const advertiseApprovedHandler = async (id, slug, isApproved) => {
    if (
      window.confirm("Are You Sure You Want To Approve/UnApprove This Items")
    ) {
      try {
        setAdvertiseLoading(true);
        const { data } = await axios.put(
          `api/advertisement/approve/${id}/${slug}/`,
          {
            isApprovedData: !isApproved,
          }
        );
        setAdvertiseLoading(false);
      } catch (eror) {
        return;
      }
    }
  };

    // APPROVE Resell HANDLER
    const resellApprovedHandler = async (id, slug, isApproved) => {
      if (
        window.confirm("Are You Sure You Want To Approve/UnApprove This Items")
      ) {
        try {
          setResellLoading(true);
          const { data } = await axios.put(
            `api/resell/approve/${id}/${slug}/`,
            {
              isApprovedData: !isApproved,
            }
          );
          setResellLoading(false);
        } catch (eror) {
          return;
        }
      }
    };

  return (
    <>
      <SideBar />
      <div className="admin">
        <div className="admin_top" style={{ marginBottom: "50px" }}>
          {detailUser && <ProfileOverview user={detailUser} />}
          <AnalyticOverview data={view} />
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

          <div>
            <a
              className={classes.admin}
              href={`${process.env.REACT_APP_PORT}/admin`}
              target="_blank"
            >
              Admin Headers
            </a>
          </div>
        </div>

        {/* ************************BIG CONTENT FOR ADMIN USER ************************** */}
        {/* ADVERTISEMENT */}
        <DataTable
          listModelLoading={listAdvertiseLoading}
          listModelError={listAdvertiseError}
          listModel={listAllAdvertise}
          page={listAdvertisePage}
          pages={listAdvertisePages}
          createModelError={createAdvertiseError}
          deleteModelError={deleteAdvertiseError}
          deleteModelLoading={deleteAdvertiseLoading}
          modelCreateHandler={advertiseCreateHandler}
          modelDeleteHandler={advertiseDeleteHandler}
          redirect="advertise"
          user={detailUser}
          approvedHandler={advertiseApprovedHandler}
          isApprovedViews={true}
          name="advertise-detail"
          isAdmin={true}
        />

        {/* RESELLER PORTIOn */}
        <DataTable
          listModelLoading={listResellerLoading}
          listModelError={listResellerError}
          listModel={listAllReseller}
          page={listResellerPage}
          pages={listResellerPages}
          createModelError={createResellerError}
          deleteModelError={deleteResellerError}
          deleteModelLoading={deleteResellerLoading}
          modelCreateHandler={resellerCreateHandler}
          modelDeleteHandler={resellerDeleteHandler}
          redirect="reseller"
          user={detailUser}
          isApprovedViews={true}
          approvedHandler={resellApprovedHandler}
          name="resell-detail"
          isAdmin={true}
          reseller={true}
        />
        {/* CELEBRITY */}

        <DataTable
          listModelLoading={listCelebrityLoading}
          listModelError={listCelebrityError}
          listModel={listCelebrities}
          page={listCelebrityPage}
          pages={listCelebrityPages}
          createModelError={createCelebrityError}
          deleteModelError={deleteCelebrityError}
          deleteModelLoading={deleteCelebrityLoading}
          modelCreateHandler={celebrityCreateHandler}
          modelDeleteHandler={celebrityDeleteHandler}
          redirect="celebrity"
          user={detailUser}
        />
        {/* EVENT PORTION */}
        <DataTable
          listModelLoading={listEventLoading}
          listModelError={listEventError}
          listModel={listEvent}
          page={listEventPage}
          pages={listEventPages}
          createModelError={createEventError}
          deleteModelError={deleteEventError}
          deleteModelLoading={deleteEventLoading}
          modelCreateHandler={eventCreateHandler}
          modelDeleteHandler={eventDeleteHandler}
          redirect="event"
          user={detailUser}
        />

        {/* HOTEL PORTION */}
        <DataTable
          createModelError={createHotelError}
          modelCreateHandler={hotelCreateHandler}
          listModelLoading={listHotelLoading}
          listModelError={listHotelError}
          deleteModelError={deleteHotelError}
          listModel={listHotel}
          page={listHotelPage}
          pages={listHotelPages}
          deleteModelLoading={deleteHotelLoading}
          modelDeleteHandler={hotelDeleteHandler}
          redirect="hotel"
          user={detailUser}
        />

        {/* JOB PORTIOn */}
        <DataTable
          listModelLoading={listJobLoading}
          listModelError={listJobError}
          listModel={listJob}
          page={listJobPage}
          pages={listJobPages}
          createModelError={createJobError}
          deleteModelError={deleteJobError}
          deleteModelLoading={deleteJobLoading}
          modelCreateHandler={jobCreateHandler}
          modelDeleteHandler={jobDeleteHandler}
          redirect="job"
          user={detailUser}
        />

        {/*  SHOP PORTIOn */}
        <DataTable
          listModelLoading={listShopLoading}
          listModelError={listShopError}
          listModel={listShop}
          page={listShopPage}
          pages={listShopPages}
          createModelError={createShopError}
          deleteModelError={deleteShopError}
          deleteModelLoading={deleteShopLoading}
          modelCreateHandler={shopCreateHandler}
          modelDeleteHandler={shopDeleteHandler}
          redirect="shop"
          user={detailUser}
        />

        {/*  TOURISMS PORTIOn */}
        <DataTable
          listModelLoading={listTourismsLoading}
          listModelError={listTourismsError}
          listModel={listTourisms}
          page={listTourismsPage}
          pages={listTourismsPages}
          createModelError={createTourismsError}
          deleteModelError={deleteTourismsError}
          deleteModelLoading={deleteTourismsLoading}
          modelCreateHandler={tourismsCreateHandler}
          modelDeleteHandler={tourismsDeleteHandler}
          redirect="tourisms"
          user={detailUser}
        />

        {/* <TechCreateNewsApi/> */}
        {/* ************************BIG CONTENT FOR ADMIN USER ************************** */}

        {/* {listUserError && <ErrorMessage type="error" error={listUserError} />}
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
        </div> */}
      </div>
      <Footers />
    </>
  );
};

export default AdminDashboard;
