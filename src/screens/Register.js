import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { USER_REGISTER_RESET } from "../constants/userConstants";

import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { userRegisterActions } from "../actions/userActions";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormLabel from "@mui/material/FormLabel";

import "../css_styles/Signup.css";

const Register = () => {
  // const avatarStyle = { backgroundColor: "green" };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const {
    error: registerUserError,
    loading: registerUserLoading,
    success: registerUserSuccess,
  } = userRegister;

  useEffect(() => {
    // dispatch(userRegisterActions({username:"noPassword3", email:"noPassord3@gmail.com", password:"cos@31519", password2:"cos@31519"}))
    if (registerUserSuccess) {
      dispatch({ type: USER_REGISTER_RESET });
      navigate("/login");
    }
  }, [dispatch, registerUserSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegisterActions(
      username, 
      email, 
      password, 
      password2,
      firstName,
      lastName,
      gender,
      country,
      state,
      town,
      Number(pincode),
      Number(phoneNumber),
      profession

      ));
  };


  // const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const textStyle = { margin: 0,}
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }
  return (
    <>
      <Grid >
        <Paper className="paperHeader" elevation={10}>
          <Grid  className="gridHeader">
            <Grid item sm={12} xs={12} lg={12} md={12} className="gridIcon" align="center">
              {registerUserLoading && <Loaders />}
              {registerUserError && (
                <ErrorMessage type="error" error={registerUserError} />
              )}
              <Avatar style={avatarStyle}>
                <LockOpenIcon />
              </Avatar>
              <h2>sign Up</h2>
              <Typography className="text">
                Please fill this form to create an account.
              </Typography>
            </Grid>
            <form className="form" onSubmit={submitHandler}>
              <Grid container>
              <Grid spacing={2} item sm={6} xs={6} lg={6} md={6}>
                <TextField
                  id="username"
                  className="input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid spacing={2} item  sm={6} xs={6} lg={6} md={6}>
                <TextField
                  id="password"
                  className={textStyle}
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <TextField
                id="username"
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
              />

              <TextField
                id="password"
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <Grid item  sm={12} xs={12} lg={12} md={12}>
              <FormControl aria-label="gender" name="gender" style={marginTop}>
                <FormLabel conmponent="legend" name="gender">
                  Gender
                </FormLabel>
                  <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </RadioGroup>
              </FormControl>
              </Grid>

              <Grid spacing={2} item  sm={6} xs={6} lg={6} md={6}>
                <TextField
                  id="password"
                  className="input"
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid spacing={2} item  sm={6} xs={6} lg={6} md={6}>
                <TextField
                  id="username"
                  className="input"
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  fullWidth
                />
              </Grid>

              <Grid spacing={2} item  sm={6} xs={6} lg={6} md={6}>
              <TextField
                id="password"
                className="input"
                type="text"
                placeholder="Town"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                fullWidth
              />
              </Grid>
              <Grid spacing={2} item  sm={6} xs={6} lg={6} md={6}>
              <TextField
                id="password"
                className="input"
                type="number"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                fullWidth
              />
              </Grid>
              <TextField
                id="password"
                className="input"
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
              />
              <TextField
                id="password"
                className="input"
                type="text"
                placeholder="Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                fullWidth
              />

              <Grid spacing={2} item sm={6} xs={6} lg={6} md={6}>

              <TextField
                id="password"
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                />
                </Grid>
              <Grid spacing={2} item sm={6} xs={6} lg={6} md={6}>

              <TextField
                id="password"
                className="input"
                type="password"
                placeholder="Confirm Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                fullWidth
                required
                />
              </Grid>

              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />
              <Button
                className="button"
                // onClick={submitHandler}
                type="submit"
                color="success"
                variant="contained"
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>
              
            </form>

            {/* <Link className="linkText" to="/forgotPassword">
              <Typography>Forgot password ?</Typography>
            </Link> */}
            <Typography className="text">Already have an account?</Typography>
            <Link className="linkText" to="/login">
              <Typography className="text">Sign In</Typography>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
