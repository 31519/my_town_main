import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

import {
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";
// IMPORT COMPONENT



import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { formCreateAction } from "../actions/advertiseActions";
import { FORM_CREATE_RESET } from "../constants/productivityConstants";

// import "../css_styles/TechCreate.css";

const RequestFormCreate = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const paperStyle = { padding: '30px 20px' , width:250, margin: "20px auto"}
  const gridStyle = { backgroundColor: '#e0e7e9ee'}
  const avatarStyle = {backgroundColor: '#1bd7e'}
  const marginTop = { marginTop:5}

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  // FORM CREATE

  const formCreate = useSelector((state) => state.formCreate);
  const {
    error: createFormError,
    loading: createFormLoading,
    form: createForm,
    success: createFormSuccess,
  } = formCreate;

  useEffect(() => {
    if (!userInfo) {
        navigate("/");
      }
    if (createFormSuccess) {
      dispatch({ type: FORM_CREATE_RESET });
        navigate("/my-dashboard"); 
    }
    }
  , [
    dispatch,
    createFormSuccess,
    createForm,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      formCreateAction({
        category,
        username,
        content,
        email
      })
    );
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevate={20} style={paperStyle}>
          <form onSubmit={submitHandler} style={{margin:0, padding:0}}>
            <FormLabel component='legend'>Username</FormLabel>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth 
              placeholder="Enter your username" />

            <FormLabel component='legend'>Email</FormLabel>
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl fullWidth>
            <FormLabel component='legend'>Category</FormLabel>
              <Select

                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              >
                <MenuItem value="Shop" >Shop</MenuItem>
                <MenuItem value="Meme" >Meme</MenuItem>
                <MenuItem value="Advertise" >Advertise</MenuItem>
                <MenuItem value="Celebrity" >Celebrity</MenuItem>
                <MenuItem value="Tourisms" >Place</MenuItem>
                <MenuItem value="Event" >Event</MenuItem>
                <MenuItem value="Hotel" >Hotel</MenuItem>

              </Select>
            </FormControl>

            <FormLabel component='legend'>About </FormLabel>
            <TextareaAutosize
              style={{width: 230}}
              minRows={3}
              type="text"
              placeholder="Write Something"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            
            <div className="input-container ic2">
              <button className="button_input" type="submit">
                Submit
              </button>
            </div>
            <div>

              {createFormLoading && <Loaders/>}
              {createFormError && <ErrorMessage type="error" error={createFormError}/>}
            </div>
          </form>
      </Paper>
    </Grid>
  );
};

export default RequestFormCreate;
