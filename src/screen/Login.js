import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginActions } from "../actions/userActions";
import { USER_REGISTER_RESET } from "../constants/userConstants";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { userRegisterActions } from "../actions/userActions";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LanguageIcon from "@mui/icons-material/Language";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    width: "500px",
    padding: "25px",
    margin: "50px auto 0",
    borderTop: "5px solid blue",
    boxShadow: "0 0 5px rgba(0,0,0, 0.5)",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "80%",
    },
  },
  header: {
    fontSize: "20px",
    lineHeight: "24px",
    padding: "5px 30px",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  inputName: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
  },



  contactIcon: {
    position: "absolute",
    fontSize: "18px",
    color: "#078295",
    borderRight: "1px solid #cccccc",
    padding: "5px",
  },
  textName: {
    width: "100%",
    padding: "8px 0px 8px 40px",
    border: "1px solid #cccccc",
    outline: "none",
    transition: "all 0.30s ease-in-out",
    "&:hover": {
      backgroundColor: "#fafafa",
      border: "1px solid #078295",
    },
    "&:focus": {
      border: "1px solid #078295",
    },
  },
  radioButton: {
    marginRight: "4px",
  },
  radioButtonLabel: {
    marginRight: "30px",
  },
  textLink: {
    textDecoration: "none"
  },
  textSignup:{
    fontSize: "16px",
    fontFamily: "Helvetica",
    margin: "10px auto",
  },
  inputSubmit: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    height: "35px",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    background: "#078295",
    outline: "none",
    fontSize: "16px",
    letterSpacing: "1px",
    borderShadow: "none",
    "&:hover": {
      color: "white",
      background: "#181818",
    },
  },
}));

const Longin = () => {
  const classes = useStyles();
  // const avatarStyle = { backgroundColor: "green" };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visibility, setVisibility] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const {
    error: registerUserError,
    loading: registerUserLoading,
    success: registerUserSuccess,
  } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);

  const {
    error: loginUserError,
    loading: loginUserLoading,
    userInfo,
  } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });



  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginActions(email, password));
  };

  const visibilityHandler = (e) => {
    setVisibility(!visibility);
  };


  return (
    <>
      <SideBar />
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <h2 className={classes.header}>Registration Form</h2>

          {/* Sign up  portion */}
          <div className="signup-form">
          {loginUserError && (
              <ErrorMessage type="error" error={loginUserError} />
            )}
            <form className="form" onSubmit={loginSubmitHandler}>


              <div className={classes.inputName}>
                <LocalPostOfficeIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </div>


              <div className={classes.inputName}>
                <HttpsIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type={visibility ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </div>


              {message && <ErrorMessage type="error" error={message} />}
              <div className={classes.inputName}>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  onClick={visibilityHandler}
                  label="Show Password"
                />
              </div>

              {loginUserLoading ? (
                <Loaders />
              ) : (
                <input
                  type="submit"
                  className={classes.inputSubmit}
                  value="Login"
                />
              )}
            </form>
          </div>
          <h2 className={classes.textSignup}>
            Donot have an account ?{" "}
            <span>
              <Link className={classes.textLink} to="/signup">
                Register
              </Link>
            </span>
          </h2>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Longin;
