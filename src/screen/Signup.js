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
  inputRadioButton: {
    width: "90%",
    position: "relative",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
  },
  Name: {
    display: "flex",
    width: "90%",
    position: "relative",
    margin: "10px auto",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "0px",
      width: "100%",
    },
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
  country: {
    display: "inline-block",
    width: "100%",
    height: "35px",
    padding: "0px 15px",
    cursor: "pointer",
    border: "1px solid #cccccc",
    background: "white",
    color: "#7b7b7b",
    outline: "none",
    "&:hover": {
      border: "1px solid #078295",
    },
    transition: "all 0.2s ease",
    "&:focus": {
      border: "1px solid #078295",
    },
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
  required: {
    position: "absolute",
    right: "10px",
    color: "red",
  },
  textLink: {
    textDecoration: "none"
  },
  textLogin:{
    fontSize: "16px",
    fontFamily: "Helvetica",
    margin: "10px auto",
  }
}));

const Signup = () => {
  const classes = useStyles();
  // const avatarStyle = { backgroundColor: "green" };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
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

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    // dispatch(userRegisterActions({username:"noPassword3", email:"noPassord3@gmail.com", password:"cos@31519", password2:"cos@31519"}))
    if (registerUserSuccess) {
      dispatch({ type: USER_REGISTER_RESET });
      // alert("Successfully Registered");
    }
  }, [dispatch, registerUserSuccess]);

  const signupSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        userRegisterActions(
          email,
          password,
          firstName,
          lastName,
          gender,
          country,
          city,
          state,
          address,
          Number(pincode),
          phoneNumber
        )
      );
    }
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
            {registerUserError && (
              <ErrorMessage type="error" error={registerUserError} />
            )}
            <form className="form" onSubmit={signupSubmitHandler}>
              <div className={classes.Name}>
                <div className={classes.inputName}>
                  <PersonIcon className={classes.contactIcon} />
                  <input
                    className={classes.textName}
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    fullWidth
                  />
                  <div className={classes.required}>*</div>
                </div>
                <div className={classes.inputName}>
                  <PersonIcon className={classes.contactIcon} />
                  <input
                    className={classes.textName}
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    required
                  />
                  <div className={classes.required}>*</div>
                </div>
              </div>

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
                <div className={classes.required}>*</div>
              </div>
              <div className={classes.inputName}>
                <LocalPhoneIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className={classes.inputName}>
                <PersonPinCircleIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <div className={classes.required}>*</div>
              </div>
              <div className={classes.inputName}>
                <PersonPinCircleIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="text"
                  placeholder="Pin code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>

              <div className={classes.inputName}>
                <ApartmentIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className={classes.inputName}>
                <ApartmentIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className={classes.inputName}>
                {/* <LanguageIcon className={classes.contactIcon} /> */}
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  className={classes.country}
                >
                  <option
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    Select a country
                  </option>
                  <option
                    value="India"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    India
                  </option>
                  <option
                    value="Nepal"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    Nepal
                  </option>
                  <option
                    value="Bhutan"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    Bhutan
                  </option>
                  <option
                    value="Shri Lanka"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    Shri Lanka
                  </option>
                  <option
                    value="Japan"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    Japan
                  </option>
                </select>
              </div>

              <div className={classes.inputRadioButton}>
                <input
                  className={classes.radioButton}
                  type="radio"
                  name="r1"
                  value={gender}
                  onChange={(e) => setGender("Male")}
                />
                <label className={classes.radioButtonLabel}>Male</label>
                <input
                  className={classes.radioButton}
                  type="radio"
                  name="r1"
                  value={gender}
                  onChange={(e) => setGender("Female")}
                />
                <label className={classes.radioButton}>Female</label>
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
                <div className={classes.required}>*</div>
              </div>

              <div className={classes.inputName}>
                <HttpsIcon className={classes.contactIcon} />
                <input
                  className={classes.textName}
                  type={visibility ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  required
                />
                <div className={classes.required}>*</div>
              </div>

              {message && <ErrorMessage type="error" error={message} />}
              <div className={classes.inputName}>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  onClick={visibilityHandler}
                  label="Show Password"
                />
              </div>

              {registerUserLoading ? (
                <Loaders />
              ) : (
                <input
                  type="submit"
                  className={classes.inputSubmit}
                  value="Register"
                />
              )}

              {registerUserError && (
                <ErrorMessage type="error" error={registerUserError} />
              )}
            </form>
          </div>
          <h2 className={classes.textLogin}>
            Already have an account ?{" "}
            <span>
              <Link className={classes.textLink} to="/login">
                Login
              </Link>
            </span>
          </h2>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Signup;
