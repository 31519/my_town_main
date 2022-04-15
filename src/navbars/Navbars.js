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
            {/* <h2 className="navbar-logo">inmatown</h2> */}
            <img style={{width:'100px', height:'40px', margin:'0px', padding:'0px'}} src="images/mylogo.png" alt="inmatown"/>

          </Link>
          {auth && (
            <Grid className="navbarGrid" container>

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

                {/* {userInfo ? (
                  <Grid style={{ dispaly: "flex", flexDirection: "row" }}>
                    <span>
                      <AccountCircle />
                    </span>
                    <h2 style={{ margin: 0, padding: "0px" }}>
                      {userInfo.username.split("@", 1)}
                    </h2>
                  </Grid>
                ) : (
                  <Link className="text-link" to="/login">
                    <AccountCircle />
                  </Link>
                )} */}
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
