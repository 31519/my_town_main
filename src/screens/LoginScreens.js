import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLoginActions } from "../actions/userActions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";


const LoginScreens = () => {
  const avatarStyle = {backgroundColor:'green'}
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);

  const {
    error: loginUserError,
    loading: loginUserLoading,
    userInfo,
  } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  });

  const submitHandler = (e) => {

    e.preventDefault();
    dispatch(userLoginActions(username, password));
  };

  const visibilityHandler = (e) => {
    setVisibility(!visibility)
  }

  return (
    <>
      <Grid>
        <Paper className="paperHeader" elevation={10}>
          <Grid className="gridHeader">
            <Grid className="gridIcon" align="center">
              
              {loginUserError && (
                <ErrorMessage type="error" error={loginUserError} />
              )}
              <Avatar style={avatarStyle}>
                <LockOpenIcon />
              </Avatar>
              <h2>sign In</h2>
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
              type={visibility?"text" :"password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            {/* <input
            type="checkbox"
            onClick={setVisibility("text")}
            /> */}
            <FormControlLabel
              label="Show Password"
              control={<Checkbox name="checkedB" color="success" />}
              onClick={visibilityHandler}
            />

            <Button
              onClick={submitHandler}
              type="submit"
              color="success"
              variant="contained"
              fullWidth
            >
              {
                  loginUserLoading
                  ?<Loaders/>
                  :<>Sign In</>
                }
            </Button>

            {/* <Link className="linkText" to="/forgotPassword">
              <Typography>Forgot password ?</Typography>
            </Link> */}
            {/* <Typography className="text">No Account ?</Typography>
            <Link className="linkText" to="/register">
              <Typography className="text">Create Account</Typography>

            </Link> */}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default LoginScreens;
