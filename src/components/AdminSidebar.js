import React, {useEffect} from "react";
import "../css_styles/AdminSidebar.css";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { profileDetailActions } from "../actions/userActions";
import {Typography, Grid} from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { userLogoutActions } from "../actions/userActions";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


import {useSelector, useDispatch} from "react-redux"


const AdminSidebar = ({ tech }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch() 
  const profileDetail = useSelector((state) => state.profileDetail);

  const {
    profile
  } = profileDetail

  useEffect(() => {
    dispatch(profileDetailActions())
  }, [dispatch,userInfo])

  const logoutHandler = () => {
    if (window.confirm("Are You Sure You Want To Logout ")) {
      dispatch(userLogoutActions());
    }
  };


  return (
    <>
      <div className="dashboard">
      
        <div className="dashboard_header">
          <Link className="text-link" to={`/user-detail`}>
            <div className="profile-img">
              {profile 
              ? <img src={profile.image}/>
              : <p>No Profile</p>
              }
              
              </div>
            <div className="dashboard_email">
              {
              profile
              ? <h3> {profile.username} </h3>
              :<h3>No profile </h3>
              
              }
            </div>
          </Link>
          {profile &&
          <Link className="text-link" to={`/user-update/${profile.id}`}>
            <div className="dashboard_edit">

              <h3> Edit Profile </h3>
            </div>
          </Link>
          }
          {userInfo ? (
              <div className="icon-text" onClick={logoutHandler}>
                <span className="icon"><LogoutIcon/></span>
                <h3>Logout</h3>
              </div>
            ) : (
              <Link className="text-link" to="/login">
                <div className="icon-text">
                <span className="icon"><LoginIcon/></span>
                <h3>Login</h3>
              </div>
              </Link>
            )}
        </div>
        <div className="Scroll">
          <div className="dashboard_performance">
            <h3 className="text_header">PERFORMANCE</h3>
            <div className="dashboard_performance_items">
              <div className="dashboard_performance_items1">
              {userInfo && userInfo.isAdmin && (
              <Link  className="text-link" to="/admin-dashboard">
                <div className="icon-text">
                  <span className="icon"><DashboardCustomizeIcon/></span>
                  <h3>Admin</h3>
                </div>
              </Link>
              )}
              {userInfo && (
              <Link  className="text-link" to="/my-dashboard">
                <div className="icon-text">
                  <span className="icon"><DashboardCustomizeIcon/></span>
                  <h3>Dashboard</h3>
                </div>
              </Link>
            )}
            {
              !userInfo && (
                <h3>No Dashboard</h3>
              )
            }
              </div>
              
            </div>
          </div>
          <hr />
          <div className="dashboard_pages">
            <h3>PAGES</h3>
            <hr />
            <div className="dashboard_pages_items">
              <h3 className="text_header">News</h3>
              <Link  className="text-link"  to="/">
                <div className="dashboard_pages_items1">
                  <h3>Technology</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/">
                <div className="dashboard_pages_items1">
                  <h3>Educations</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/">
                <div className="dashboard_pages_items1">
                  <h3>Science</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/">
                <div className="dashboard_pages_items1">
                  <h3>Business</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/">
                <div className="dashboard_pages_items1">
                  <h3>Local News</h3>
                </div>
              </Link>

              <h3 className="text_header">Productivity</h3>

              <Link  className="text-link"  to="/jobs">
                <div className="dashboard_pages_items1">
                  <h3>Jobs</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/reseller">
                <div className="dashboard_pages_items1">
                  <h3>Reseller</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/shops">
                <div className="dashboard_pages_items1">
                  <h3>Shops</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/advertise">
                <div className="dashboard_pages_items1">
                  <h3>Advertise</h3>
                </div>
              </Link>

              <h3 className="text_header">Luxiery</h3>

              <Link  className="text-link"  to="/celebrity">
                <div className="dashboard_pages_items1">
                  <h3>Celebrities</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/tourist">
                <div className="dashboard_pages_items1">
                  <h3>Tourisms</h3>
                </div>
              </Link>

              <Link   className="text-link" to="/hotels">
                <div className="dashboard_pages_items1">
                  <h3>Hotels</h3>
                </div>
              </Link>

              <Link  className="text-link"  to="/event">
                <div className="dashboard_pages_items1">
                  <h3>Event</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="dashboard_info">
            <h3>INFO</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
