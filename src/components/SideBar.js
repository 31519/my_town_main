import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { profileDetailActions } from "../actions/userActions";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { userLogoutActions } from "../actions/userActions";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import "../css_styles/SideBar.css";
import SchoolIcon from "@mui/icons-material/School";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import EventIcon from "@mui/icons-material/Event";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { userDetailActions } from "../actions/userActions";

const logoImage = "images/inmatownLogo2.png";

const listCategory = [
  {
    title: "Education",
    link: "/education",
    icon: <SchoolIcon />,
  },
  {
    title: "News",
    link: "/",
    icon: <EventIcon />,
  },
  {
    title: "Jobs",
    link: "/jobs",
    icon: <ConstructionIcon />,
  },
  {
    title: "Advertise",
    link: "/advertise",
    icon: <FeaturedVideoIcon />,
  },
  {
    title: "Event/Scheme",
    link: "/event",
    icon: <EventIcon />,
  },
  {
    title: "Tourisms",
    link: "/tourisms",
    icon: <LandscapeIcon />,
  },
  {
    title: "Resell",
    link: "/resell",
    icon: <TwoWheelerIcon />,
  },
  // {
  //   title: "Rent In My Area",
  //   link: "/rental",
  //   icon: <HomeIcon />,
  // },
];

const SideBar = () => {
  const userDefaultImage = "images/default/userDefaultImage.png";
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const {
    user: detailUser,
    loading: loadingUser,
    error: errorUser,
  } = userDetail;

  // UserDetail useEffect
  useEffect(() => {
    {
      userInfo && userInfo.id && dispatch(userDetailActions(userInfo.id));
    }
  }, [dispatch, userInfo]);

  const logoutHandler = () => {
    if (window.confirm("Are You Sure You Want To Logout ")) {
      dispatch(userLogoutActions());
    }
  };

  const close = () => {
    var cancelBtn = document.querySelector("#cancel");
    var menuBtn = document.querySelector("#btn");
    var sidebar = document.querySelector(".sidebar");

    if (sidebar) {
      sidebar.style.cssText = "left: -250px";
      menuBtn.style.cssText = "left: 4px; opacity: 10; ";
      cancelBtn.style.cssText = "left: -195px";
    }
  };
  const open = () => {
    // var checkBox = document.querySelector("#check").checked;
    var cancelBtn = document.querySelector("#cancel");
    var menuBtn = document.querySelector("#btn");
    var sidebar = document.querySelector("#sidebar");

    sidebar.style.cssText = "left:0px";
    cancelBtn.style.cssText = "left: 195px";
    menuBtn.style.cssText = "left: 250px; opacity: 0; pointer-events:none ";
  };

  document.addEventListener("click", function (evt) {
    var navBar = document.getElementById("check"),
      targetEl = evt.target;
    do {
      if (targetEl === navBar) {
        open();
        return;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl);
    close();
  });

  document.addEventListener("scroll", function (event) {
    var scrollId = document.getElementById("check"),
      scrollTarget = event.target;
    {
      scrollTarget !== scrollId && close();
    }
    //   do {
    //     if(scrollTarget !== scrollId){
    //       close()
    //       return;
    //     } while ()
    //   }
  });

  return (
    <>
      <nav>
        <div>
          <input type="checkbox" id="check" />
          <label for="check">
            <div id="btn" onClick={open}>
              {" "}
              <MenuIcon />
            </div>
          </label>
          <input type="checkbox" id="checkClose" />
          <label for="checkClose">
            <div id="cancel">
              {" "}
              <CloseIcon />
            </div>
          </label>
          <div className="sidebar" id="sidebar">
            <header>
              {userInfo && (
                <>
                  {detailUser && detailUser.image ? (
                    <div className="profile-img">
                      <img src={detailUser.image} alt=""/>
                    </div>
                  ) : (
                    <>
                      <div className="profile-img">
                        <img src={userDefaultImage} alt="name" />
                      </div>
                    </>
                  )}

                  <div className="dashboard-email">
                    {detailUser && <h3> {detailUser.email} </h3>}
                  </div>
                  {userInfo && (
                    <Link
                      className="text-link"
                      to={`/user-update/${userInfo.id}`}
                    >
                      <div className="dashboard-edit" onClick={close}>
                        <h3> Edit Profile </h3>
                      </div>
                    </Link>
                  )}
                </>
              )}
              {userInfo ? (
                <div className="icon-text logout" onClick={logoutHandler}>
                  <h3 onClick={close}>Logout</h3>
                </div>
              ) : (
                <Link className="text-link" to="/login">
                  <>
                      <div className="profile-img">
                        <img src={userDefaultImage} alt="name" />
                      </div>
                    </>
                  <div className="icon-text login" onClick={close}>
                    <h3>Login</h3>
                  </div>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <Link
                  className="text-link"
                  to="/admin-dashboard"
                  onClick={close}
                >
                  <div className="icon-text dashboard">
                    <h3>Admin</h3>
                  </div>
                </Link>
              )}

              {userInfo && (
                <Link className="text-link" to="/my-dashboard">
                  <div className="icon-text dashboard" onClick={close}>
                    <h3>Dashboard</h3>
                  </div>
                </Link>
              )}
            </header>
            <div className="listContainer">
              <ul>
                {listCategory &&
                  listCategory.map((list) => (
                    <Link key={list.title} className="link" to={list.link}>
                      <li className="list" onClick={close}>
                        {list.icon} <h4>{list.title}</h4>
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="logo">
          <Link className="text-link" to="/">
            {logoImage ? (
              <img className="image-log" src={logoImage} alt="inmatown" />
            ) : (
              <h2
                className="navbar-logo"
                style={{ padding: "0px", margin: "0px" }}
              >
                INMATOWN
              </h2>
            )}
          </Link>
        </div>
      </nav>
      <div className="containerNav" style={{ marginTop: "50px" }}></div>
    </>
  );
};

export default SideBar;
