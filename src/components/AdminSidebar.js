import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { profileDetailActions } from "../actions/userActions";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { userLogoutActions } from "../actions/userActions";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  item: {
    margin: "0px",
    flexWrap: "wrap",
    cursor: "pointer",
    color:"black"
  },
  title: {
    margin: "5px 8px",
    fontFamily: "Monospace",
    color: "black",
    fontSize: "14px",
    fontWeight: 600,
  },
  link: {
    textDecoration: "none",
  },
});

const AdminSidebar = () => {
  const classes = useStyles();
  const listCategory = [
    {
      title: "Education",
      link: "/education",
    },
    {
      title: "News",
      link: "/",
    },
    {
      title: "Jobs",
      link: "/jobs",
    },
    {
      title: "Advertise",
      link: "/advertise",
    },
    {
      title: "Event/Scheme",
      link: "/event",
    },
    {
      title: "Tourisms",
      link: "/tourisms",
    },
    {
      title: "Celebrity",
      link: "/celebrity",
    },
    {
      title: "Resell",
      link: "/resell",
    },
    {
      title: "Rent In My Area",
      link: "/rental",
    },
  ];

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const profileDetail = useSelector((state) => state.profileDetail);

  const { profile } = profileDetail;

  useEffect(() => {
    dispatch(profileDetailActions());
  }, [dispatch, userInfo]);

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
            {/* <div className="profile-img">
              {profile ? <img src={profile.image} /> : <p>No Profile</p>}
            </div> */}
            <div className="dashboard_email">
              {profile ? <h3> {profile.username} </h3> : <h3>No profile </h3>}
            </div>
          </Link>
          {profile && (
            <Link className="text-link" to={`/user-update/${profile.id}`}>
              <div className="dashboard_edit">
                <h3> Edit Profile </h3>
              </div>
            </Link>
          )}
          {userInfo ? (
            <div className="icon-text" onClick={logoutHandler}>
              <span className="icon">
                <LogoutIcon />
              </span>
              <h3>Logout</h3>
            </div>
          ) : (
            <Link className="text-link" to="/login">
              <div className="icon-text">
                <span className="icon">
                  <LoginIcon />
                </span>
                <h3>Login</h3>
              </div>
            </Link>
          )}
        </div>
        <div className="Scroll">
          <div className="dashboard_performance">
            {/* <h3 className="text_header">PERFORMANCE</h3> */}
            <div className="dashboard_performance_items">
              <div className="dashboard_performance_items1">
                {userInfo && userInfo.isAdmin && (
                  <Link className="text-link" to="/admin-dashboard">
                    <div className="icon-text">
                      <span className="icon">
                        <DashboardCustomizeIcon />
                      </span>
                      <h3>Admin</h3>
                    </div>
                  </Link>
                )}
                {userInfo && (
                  <Link className="text-link" to="/my-dashboard">
                    <div className="icon-text">
                      <span className="icon">
                        <DashboardCustomizeIcon />
                      </span>
                      <h3>Dashboard</h3>
                    </div>
                  </Link>
                )}
                {!userInfo && <h3>No Dashboard</h3>}
              </div>
            </div>
          </div>

          {listCategory &&
            listCategory.map((list) => (
              <div className={classes.item} key={list.title}>
                <Link className={classes.link} to={list.link}>
                  <h2 className={classes.title} variant="h3">
                    {list.title}
                  </h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
