import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AdminSidebar from "../components/AdminSidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../css_styles/Navbars.css";

export default function Navbars() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{}}>
      <AppBar position="static" className="AppBar">
        <Toolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {/* <AccountCircle /> */}
            <MenuIcon />
          </IconButton>
          <Link className="text-link" to="/">
            <h2 className="navbar-logo">inmatown</h2>
          </Link>
          {auth && (
            <Grid className="navbarGrid" container>
              {/* <Grid item xs={4} sm={4} spacing={2}>
                <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                
                {userInfo &&(
                  <h2>LogOut</h2>
                ) }
              </IconButton>

              </Grid> */}
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Photos
              </Typography> */}
              {/* <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                
                {userInfo &&(
                  <h2>LogOut</h2>
                ) }
              </IconButton> */}
              <Grid
                item
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
                xs={4}
                sm={4}
                spacing={2}
              >
                {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > */}
                {userInfo ? (
                  <Grid style={{ dispaly: "flex", flexDirection: "row" }}>
                    <span>
                      <AccountCircle />
                    </span>
                    <h2 style={{ margin: 0, padding: "0px" }}>
                      {userInfo.username}
                    </h2>
                  </Grid>
                ) : (
                  <Link className="text-link" to="/login">
                    <AccountCircle />
                  </Link>
                )}
                {/* </IconButton> */}
              </Grid>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <CancelIcon color="success" />
                  Close
                </MenuItem>
                <MenuItem onClick={handleClose} style={{ paddingTop: "30px" }}>
                  <AdminSidebar />
                </MenuItem>
              </Menu>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React from "react";
// import "../css_styles/Navbars.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import LogoutIcon from '@mui/icons-material/Logout';
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
// import AdminSidebar from "../components/AdminSidebar";
// import { Link } from "react-router-dom";
// import { userLogoutActions } from "../actions/userActions";
// import DashboardCustomize from "@mui/icons-material/DashboardCustomize";
// import LoginIcon from '@mui/icons-material/Login';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
// } from "@mui/material";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   navlinks: {
//     // marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//  logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     // fontSize: "20px",
//     // marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// const Navbars = () => {
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     if (window.confirm("Are You Sure You Want To Logout ")) {
//       dispatch(userLogoutActions());
//     }
//   };

//   const classes = useStyles();

//   return (
//     <AppBar position="static">
//     <CssBaseline />
//     <Toolbar  className="logo-text">
//       <Typography variant="h4" className={classes.logo}>
//         Navbar
//       </Typography>
//         <div className={classes.navlinks}>
//           <Link to="/" className={classes.link}>
//             Home
//           </Link>
//           <Link to="/about" className={classes.link}>
//             About
//           </Link>
//           <Link to="/contact" className={classes.link}>
//             Contact
//           </Link>
//           <Link to="/faq" className={classes.link}>
//             FAQ
//           </Link>
//         </div>
//     </Toolbar>
//   </AppBar>
// <div className="navbar">
//   <div className="navbar-container">
//     <div className="burger">
//       <div className="line1"></div>
//       <div className="line2"></div>
//       <div className="line3"></div>
//     </div>

//     <div className="navbar-logo">
//       <div className="logo">
//         <Link  className="text-link" to="/">
//           <div className="logo-text">

//             <h2>MyTown</h2>
//           </div>
//         </Link>
//       </div>
//     </div>

//     <div className="navbar-content">
//       <div className="content">
//         <h2>Home</h2>
//       </div>
//       <div className="content">
//         <h2>Contact</h2>
//       </div>
//       <div className="content">
//         <h2>About Us</h2>
//       </div>
//       <div className="content">
//         <h2>Policy</h2>
//       </div>
//     </div>

//     <div className="navbar-users">
//       <div className="navbar-user navbar-user-dashboard">
//         {userInfo && (
//           <Link  className="text-link" to="/my-dashboard">
//             <div className="navbar-user-text">
//               <h2 className="navbar-user-icon"><span><DashboardCustomizeIcon color='blue'/></span>Dashboard</h2>
//             </div>
//           </Link>
//         )}
//       </div>
//       <div className="navbar-user navbar-user-dashboard">
//         {userInfo && userInfo.isAdmin && (
//           <Link  className="text-link" to="/admin-dashboard">
//             <h2 className="navbar-user-icon"><span><DashboardCustomizeIcon/></span>Admin</h2>
//           </Link>
//         )}
//       </div>
//       <div className="navbar-user">
//         {userInfo && <h2  className="navbar-user-icon" onClick={logoutHandler}><span><LogoutIcon/></span>Logout</h2>}
//       </div>
//       <div className="navbar-user">
//         {userInfo ? (
//           <h2 className="navbar-user-icon"><span><AccountCircleIcon/></span></h2>
//         ) : (
//           <Link className="text-link" to="/login">
//             <h2 className="navbar-user-icon"><span><LoginIcon/></span>Login</h2>
//           </Link>
//         )}
//       </div>

//     </div>

//     {/* here */}
//     <div class="navbar__link">
//       <AdminSidebar />
//     </div>
//   </div>
// </div>
//   );
// };

// export default Navbars;
