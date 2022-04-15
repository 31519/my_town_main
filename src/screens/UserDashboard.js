import React, { useEffect } from "react";
// import AdminSidebar from "../components/AdminSidebar";
import Footers from "../components/Footers";
// import AdminTable from "../components/Table";
import PostTable from "../components/PostTable";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileDetailActions } from "../actions/userActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

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

  formCreateAction
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

  // EVENT LIST
  const eventUserList = useSelector((state) => state.eventUserList);
  const {
    error: listEventError,
    loading: listEventLoading,
    events: listEvent,
  } = eventUserList;

  // EVENT DELETE
  const eventDelete = useSelector((state) => state.eventDelete);
  const {
    error: deleteEventError,
    loading: deleteEventLoading,
    event: deleteEvent,
    success: deleteEventSuccess,
  } = eventDelete;

  // JOB CREATE

  const jobCreate = useSelector((state) => state.jobCreate);
  const {
    error:     createJobError,
    loading:   createJobLoading,
    job     :  createJob,
    success:   createJobSuccess,
  } = jobCreate;

  // JOB LIST
  const jobUserList = useSelector((state) => state.jobUserList);
  const {
    error:      listJobError,
    loading:    listJobLoading,
    jobs   :    listJob,
  } = jobUserList;

  // JOB DELETE
  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    error:     deleteJobError,
    loading:   deleteJobLoading,
    job :      deleteJob,
    success:   deleteJobSuccess,
  } = jobDelete;



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

  // MEME CREATE

  const memeCreate = useSelector((state) => state.memeCreate);
  const {
    error: createMemeError,
    loading: createMemeLoading,
    meme: createMeme,
    success: createMemeSuccess,
  } = memeCreate;

  // MEME LIST
  const memeUserList = useSelector((state) => state.memeUserList);
  const {
    error: listMemeError,
    loading: listMemeLoading,
    memes: listMeme,
  } = memeUserList;

  // MEME DELETE
  const memeDelete = useSelector((state) => state.memeDelete);
  const {
    error: deleteMemeError,
    loading: deleteMemeLoading,
    meme: deleteMeme,
    success: deleteMemeSuccess,
  } = memeDelete;



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


  // TOURISMS CREATE

  const tourismsCreate = useSelector((state) => state.tourismsCreate);
  const {
    error:     createTourismsError,
    loading:   createTourismsLoading,
    tourisms : createTourisms,
    success:   createTourismsSuccess,
  } = tourismsCreate;

  // TOURISMS LIST
  const tourismsUserList = useSelector((state) => state.tourismsUserList);
  const {
    error:      listTourismsError,
    loading:    listTourismsLoading,
    tourismss:  listTourisms,
  } = tourismsUserList;

  // TOURISMS DELETE
  const tourismsDelete = useSelector((state) => state.tourismsDelete);
  const {
    error:     deleteTourismsError,
    loading:   deleteTourismsLoading,
    tourisms : deleteTourisms,
    success:   deleteTourismsSuccess,
  } = tourismsDelete;

  // local new CREATE

  const localCreate = useSelector((state) => state.localCreate);
  const {
    error:     createLocalError,
    loading:   createLocalLoading,
    local : createLocal,
    success:   createLocalSuccess,
  } = localCreate;

  // local new LIST
  const localUserList = useSelector((state) => state.localUserList);
  const {
    error:      listLocalError,
    loading:    listLocalLoading,
    locals:  listLocal,
  } = localUserList;

  // local new DELETE
  const localDelete = useSelector((state) => state.localDelete);
  const {
    error:     deleteLocalError,
    loading:   deleteLocalLoading,
    local : deleteLocal,
    success:   deleteLocalSuccess,
  } = localDelete;


// Profile UseEffect

  useEffect(() => {
    dispatch(profileDetailActions());
  }, [dispatch, userInfo]);

  // Shop useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(shopUserListAction());
    dispatch({ type: SHOP_CREATE_RESET });
    dispatch({ type: SHOP_DELETE_RESET });

    if (createShopSuccess) {
      navigate(`/shop-update/${createShop.id}/${createShop.slug}`);
    }

    // if (createFormSuccess) {
    //   navigate(`/requestform-update/${createForm.id}/${createForm.slug}`);
    // }
  }, [dispatch, userInfo, createShopSuccess, deleteShopSuccess, deleteShop]);

   // Advertise useEffect
   useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(advertiseUserListAction());
    dispatch({ type: ADVERTISE_CREATE_RESET });
    dispatch({ type: ADVERTISE_DELETE_RESET });

    if (createAdvertiseSuccess) {
      navigate(`/advertise-update/${createAdvertise.id}/${createAdvertise.slug}`);
    }
  }, [dispatch, userInfo, createAdvertiseSuccess, deleteAdvertiseSuccess, deleteAdvertise]);


   // Event useEffect
   useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(eventUserListAction());
    dispatch({ type: EVENT_CREATE_RESET });
    dispatch({ type: EVENT_DELETE_RESET });

    if (createEventSuccess) {
      navigate(`/event-update/${createEvent.id}/${createEvent.slug}`);
    }
  }, [dispatch, userInfo, createEventSuccess, deleteEventSuccess, deleteEvent]);


  // Jobs useEffect
  useEffect(() => {
  if (!userInfo) {
    navigate("/");
  }
  dispatch(jobUserListAction());
  dispatch({ type: JOBS_CREATE_RESET });
  dispatch({ type: JOBS_DELETE_RESET });

  if (createJobSuccess) {
    navigate(`/job-update/${createJob.id}/${createJob.slug}`);
  }
}, [dispatch, userInfo, createJobSuccess, deleteJobSuccess, deleteJob]);

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

  // MEME useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(memeUserListAction());
    dispatch({ type: MEME_CREATE_RESET });
    dispatch({ type: MEME_DELETE_RESET });
  
    if (createMemeSuccess) {
      navigate(`/meme-update/${createMeme.id}/${createMeme.slug}`);
    }
  }, [dispatch, userInfo, createMemeSuccess, deleteMemeSuccess, deleteMeme]);
    

  
  // celebrity useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(celebrityUserListAction());
    dispatch({ type: CELEBRITY_CREATE_RESET });
    dispatch({ type: CELEBRITY_DELETE_RESET });
  
    if (createCelebritySuccess) {
      navigate(`/celebrity-update/${createCelebrity.id}/${createCelebrity.slug}`);
    }
  }, [dispatch, userInfo, createCelebritySuccess, deleteCelebritySuccess, deleteCelebrity]);
    
     
  // Tourisms useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(tourismsUserListAction());
    dispatch({ type: TOURISMS_CREATE_RESET });
    dispatch({ type: TOURISMS_DELETE_RESET });
  
    if (createTourismsSuccess) {
      navigate(`/tourisms-update/${createTourisms.id}/${createTourisms.slug}`);
    }
  }, [dispatch, userInfo, createTourismsSuccess, deleteTourismsSuccess, deleteTourisms]);
    
     
  // Local news useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    dispatch(localUserListAction());
    dispatch({ type: LOCAL_CREATE_RESET });
    dispatch({ type: LOCAL_DELETE_RESET });
  
    if (createLocalSuccess) {
      navigate(`/local-update/${createLocal.id}/${createLocal.slug}`);
    }
  }, [dispatch, userInfo, createLocalSuccess, deleteLocalSuccess, deleteLocal]);
    
  
  

  // CREATE SHOP HANDLER
  const shopCreateHandler = () => {
    dispatch(shopCreateAction());
  };

  // CREATE form HANDLER
  const formCreateHandler = () => {
    dispatch(formCreateAction());
  };

  // DELETE SHOP HANDLER
  const shopDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(shopDeleteAction(id, slug));
    }
  };


  // CREATE ADVERTISE HANDLER
  const advertiseCreateHandler = () => {
    dispatch(advertiseCreateAction());
  };

  // DELETE ADVERTISE HANDLER
  const advertiseDeleteHandler = (id,slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(advertiseDeleteAction(id,slug));
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

  // CREATE Meme HANDLER
  const memeCreateHandler = () => {
    dispatch(memeCreateAction());
  };

  // DELETE Meme HANDLER
  const memeDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(memeDeleteAction(id, slug));
    }
  };

  // CREATE CELEBRITY HANDLER
  const celebrityCreateHandler = () => {
    dispatch(celebrityCreateAction());
  };

  // DELETE CELEBRITY HANDLER
  const celebrityDeleteHandler = (id,slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(celebrityDeleteAction(id,slug));
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

  // CREATE local new HANDLER
  const localCreateHandler = () => {
    dispatch(localCreateAction());
  };

  // DELETE lcoal new HANDLER
  const localDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(localDeleteAction(id, slug));
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
            <img src={profile.image} alt="photo" />
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
              <Link className="text-link" to={`/user-update/${profile.id}`}>
                <Button variant='contained' color='primary'>Edit</Button>
              </Link>
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
              <span className="profile-full-name">{profile.phoneNumber}</span>
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
          <Grid item className="profile-full-detail"  md={12} sm={12} xs={12} lg={12}>
            <label>Meme</label>
            {
            profile.isApprovedMeme
            ? (<Grid item>
              <span className="profile-approved">Approved</span>
            </Grid>)
            : (<Grid item>
              <span className="profile-not-approved">Not Approved</span>
            </Grid>)
            }
          </Grid>

          {
          profile.isRequested
          ?(<Grid item style={{paddingTop:'10px', color:'green', fontSize:'20px'}}>
              <span>Requested ...You will be approved after sometime...</span>
            </Grid>
          )
          :(<Grid item className="profile-request"  md={12} sm={12} xs={12} lg={12}>
            <label className='request-label'>Request To Upload</label>
            <Grid item>
              <Link to='/requestform-create'>
                <Button variant='contained' className="profile-request-button">Request</Button>
              </Link>
            </Grid>
          </Grid>)
          }
          <Grid md={12} sm={12} xs={12} lg={12}>

            {/* {createFormLoading && <Loaders/>}
            {createFormError && <ErrorMessage type="error" error={createFormError}/>} */}
          </Grid>
          
          
        </Grid>
        )}

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
            {/* Shop Table */}
            {profile && profile.isApprovedShop && (
            <PostTable
              listModelLoading={listShopLoading}
              listModelError={listShopError}
              listModel={listShop}
              createModelError={createShopError}
              deleteModelError={deleteShopError}
              deleteModelLoading={deleteShopLoading}
              modelCreateHandler={shopCreateHandler}
              modelDeleteHandler={shopDeleteHandler}
              redirect="shop"
            />
            )} 

            {/* Advertise Table */}
            {profile && profile.isApprovedAdvertise && (
            <PostTable
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

            {/* Event Table */}
            {profile && profile.isApprovedEvent && (
            <PostTable
              listModelLoading={listEventLoading}
              listModelError={listEventError}
              listModel={listEvent}
              createModelError={createEventError}
              deleteModelError={deleteEventError}
              deleteModelLoading={deleteEventLoading}
              modelCreateHandler={eventCreateHandler}
              modelDeleteHandler={eventDeleteHandler}
              redirect="event"
            />
            )} 

          {/* Job Table */}
          {profile && profile.isApprovedJob && (
            <PostTable
              listModelLoading={listJobLoading}
              listModelError={listJobError}
              listModel={listJob}
              createModelError={createJobError}
              deleteModelError={deleteJobError}
              deleteModelLoading={deleteJobLoading}
              modelCreateHandler={jobCreateHandler}
              modelDeleteHandler={jobDeleteHandler}
              redirect="job"
            />
            )} 

          {/* Hotel Table */}
          {profile && profile.isApprovedHotel && (
          <PostTable
            listModelLoading={listHotelLoading}
            listModelError={listHotelError}
            listModel={listHotel}
            createModelError={createHotelError}
            deleteModelError={deleteHotelError}
            deleteModelLoading={deleteHotelLoading}
            modelCreateHandler={hotelCreateHandler}
            modelDeleteHandler={hotelDeleteHandler}
            redirect="hotel"
          />
          )} 

          {/* Meme Table */}
          {profile && profile.isApprovedMeme && (
          <PostTable
            listModelLoading={listMemeLoading}
            listModelError={listMemeError}
            listModel={listMeme}
            createModelError={createMemeError}
            deleteModelError={deleteMemeError}
            deleteModelLoading={deleteMemeLoading}
            modelCreateHandler={memeCreateHandler}
            modelDeleteHandler={memeDeleteHandler}
            redirect="meme"
          />
          )} 

          {/* celebrity Table */}
          {profile && profile.isApprovedCelebrities && (
          <PostTable
            listModelLoading={listCelebrityLoading}
            listModelError={listCelebrityError}
            listModel={listCelebrity}
            createModelError={createCelebrityError}
            deleteModelError={deleteCelebrityError}
            deleteModelLoading={deleteCelebrityLoading}
            modelCreateHandler={celebrityCreateHandler}
            modelDeleteHandler={celebrityDeleteHandler}
            redirect="celebrity"
          />
          )} 

          {/* Tourisms Table */}
          {profile && profile.isApprovedTourisms && (
          <PostTable
            listModelLoading={listTourismsLoading}
            listModelError={listTourismsError}
            listModel={listTourisms}
            createModelError={createTourismsError}
            deleteModelError={deleteTourismsError}
            deleteModelLoading={deleteTourismsLoading}
            modelCreateHandler={tourismsCreateHandler}
            modelDeleteHandler={tourismsDeleteHandler}
            redirect="tourisms"
          />
          )} 
  
          {/* Local news Table */}
          {profile && profile.isApproved && (
          <PostTable
            listModelLoading={listLocalLoading}
            listModelError={listLocalError}
            listModel={listLocal}
            createModelError={createLocalError}
            deleteModelError={deleteLocalError}
            deleteModelLoading={deleteLocalLoading}
            modelCreateHandler={localCreateHandler}
            modelDeleteHandler={localDeleteHandler}
            redirect="local"
          />
          )} 
          </Grid>

        </Grid>
      </Grid>
      <Footers />
    </Grid>
  );
};

export default UserDashboard;