import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginActions } from "../actions/userActions";
import { USER_REGISTER_RESET } from "../constants/userConstants";
import "../css_styles/Register.css";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { userRegisterActions } from "../actions/userActions";
import SideBar from "../components/SideBar";
import Footers from "../components/Footers";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const Register = () => {
  // const avatarStyle = { backgroundColor: "green" };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
      login();
      dispatch({ type: USER_REGISTER_RESET });
      // alert("Successfully Registered");
    }
  }, [dispatch, registerUserSuccess]);

  const signupSubmitHandler = (e) => {
    e.preventDefault();

    if ( password !== confirmPassword){
      setMessage('Passwords do not match')
    } else{

      dispatch(
        userRegisterActions(
          email,
          password,
          firstName,
          lastName,
          // gender,
          // country,
          // state,
          // address,
          // Number(pincode),
          // phoneNumber,
          // profession
        )
      );
    }
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginActions(loginEmail, loginPassword));
  };
  const visibilityHandler = (e) => {
    setVisibility(!visibility);
  };

  const login = () => {
    const signupForm = document.querySelector(".signup-form");
    const loginForm = document.querySelector(".login-form");
    const signupLink = document.querySelector(".a2");
    const loginLink = document.querySelector(".a1");

    signupLink.style.background = "#34495e";
    loginLink.style.background = "#2981bc";
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    // setUsername("");
    setPassword("");
  };

  const signup = () => {
    const signupForm = document.querySelector(".signup-form");
    const loginForm = document.querySelector(".login-form");
    const signupLink = document.querySelector(".a2");
    const loginLink = document.querySelector(".a1");

    loginLink.style.background = "#34495e";
    signupLink.style.background = "#2981bc";

    loginForm.style.display = "none";
    signupForm.style.display = "block";
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <>
    <SideBar />
    <div className="main">
      <div className="center" style={{minHeight: "80vh"}}>
        <div className="center2">
          <div className="btns">
            <div className="a1" onClick={login}>
              Log in
            </div>
            <div className="a2" onClick={signup}>
              Sign Up
            </div>
          </div>

          {/* Login portion */}
          <div className="login-form">
            <div className="header header1">Login For Free</div>
            {loginUserError && (
              <ErrorMessage type="error" error={loginUserError} />
            )}
            <form className="form" onSubmit={loginSubmitHandler}>
              <input
                className="loginUsername"
                type="text"
                placeholder="Username"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <input
                className="loginPassword"
                type={visibility ? "text" : "password"}
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                fullWidth
                required
              />

              <FormControlLabel
                className="showPassword"
                control={<Checkbox name="checkedA" />}
                onClick={visibilityHandler}
                label="Show Password"
              />

              {loginUserLoading ? (
                <Loaders />
              ) : (
                <input type="submit" className="login-sub" value="Login" />
              )}
            </form>
          </div>
          {/* Sign up  portion */}
          <div className="signup-form">
            <div className="header">Signup For Free</div>
            {registerUserError && (
              <ErrorMessage type="error" error={registerUserError} />
            )}
            <form className="form" onSubmit={signupSubmitHandler}>
              <input
                className="firstname"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
              />
              <input
                className="lastname"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
              />

              <input
                className="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              {/* <input
              className="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> */}

              <input
                className="email"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                fullWidth
                required
              />
              <input
                className="password1"
                type={visibility ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
              <input
                className="password2"
                type={visibility ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
              />
              { message && (
                <ErrorMessage type="error" error={message} />
              )}
              <div className="showPassword">
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  onClick={visibilityHandler}
                  label="Show Password"
                />
              </div>

              {registerUserLoading ? (
                <Loaders />
              ) : (
                <input type="submit" className="signup-sub" value="Signup" />
              )}

              {registerUserError && (
                <ErrorMessage type="error" error={registerUserError} />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footers />
    </>
  );
};

export default Register;
