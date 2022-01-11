import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Card,
  Input,
  FormControl
} from "@mui/material";
// IMPORT COMPONENT
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { advertiseDetailAction } from "../actions/advertiseActions";
import { advertiseUpdateAction } from "../actions/advertiseActions";
import { ADVERTISE_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const AdvertiseUpdate = () => {
  const gridStyle = { margin: 0, paddingBottom: "20px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const params = useParams();
  const { id, slug } = params;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const advertiseDetail = useSelector((state) => state.advertiseDetail);
  const {
    error: detailAdvertiseError,
    loading: detailAdvertiseLoading,
    advertise: detailAdvertise,
  } = advertiseDetail;

  const advertiseUpdate = useSelector((state) => state.advertiseUpdate);
  const {
    error: updateAdvertiseError,
    loading: updateAdvertiseLoading,
    success: updateAdvertiseSuccess,
    advertise: updateAdvertise,
  } = advertiseUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateAdvertiseSuccess) {
      dispatch({ type: ADVERTISE_UPDATE_RESET });
      if (userInfo.isAdmin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } else {
      if (
        // !detailAdvertise.title ||
        detailAdvertise.id !== Number(id)
      ) {
        dispatch(advertiseDetailAction(id, slug));
      } else {
        setCategory(detailAdvertise.category);
        setCountry(detailAdvertise.country);
        setState(detailAdvertise.state);
        setAddress(detailAdvertise.address);
        setContact(detailAdvertise.contact);
        setImage(detailAdvertise.image);
        setTitle(detailAdvertise.title);
        setContent(detailAdvertise.content);
      }
    }
  }, [
    dispatch,
    id,
    slug,
    detailAdvertise,
    updateAdvertiseSuccess,
    updateAdvertise,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      advertiseUpdateAction({
        id: id,
        slug: slug,
        category,
        country,
        state,
        address,
        contact,
        image,
        title,
        content,
      })
    );
  };

  return (
    <>
      <Grid container className="techcreate">
        <Grid container style={{border: "1px solid white"}}>
          <form className="form" onSubmit={submitHandler}>
            <Grid item sm={12} xs={12} lg={12} md={12} className="text">
              <div className="subtitle">Let's Update Advertise</div>
            </Grid>
            {/* <Grid style={gridStyle} container> */}
              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container"
              >
                <TextField
                  id="category"
                  className="input"
                  type="text"
                  placeholder="categorygfhfg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Grid>
              <Grid style={gridStyle} container>
              <Grid
                item
                sm={6}
                xs={6}
                lg={6}
                md={6}
                // className="input-container"
              >
                <label>Country</label>
                <TextField
                  id="country"
                  className="input"
                  type="text"
                  placeholder="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>

              <Grid
                item
                sm={6}
                xs={6}
                lg={6}
                md={6}
                // className="input-container"
              >
                <label>State</label>
                <TextField
                  id="state"
                  className="input"
                  type="state"
                  placeholder="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Grid>
              </Grid>

              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container ic2"
              >
                <label>Address</label>
                <TextField
                  id="address"
                  className="input"
                  type="address"
                  placeholder="Url"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container ic2"
              >
                <label>Contact</label>
                <TextField
                  id="contact"
                  className="input"
                  type="text"
                  placeholder="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container ic2"
              >
                <label>Title</label>
                <TextField
                  id="title"
                  className="input"
                  type="text"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container ic2"
              >
                <label>Content</label>
                <textarea
                  id="content"
                  className="input"
                  type="textfield"
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>

              <Grid
                item
                sm={12}
                xs={12}
                lg={12}
                md={12}
                className="input-container ic2"
              >
                <label>Imagess</label>
                <img src={image} />
                <Input
                  id="image"
                  className="input"
                  type="file"
                  placeholder="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Grid>
              {/* {userInfo.isAdmin && (
              <Grid item sm={12} xs={12} lg={12} md={12}  className="input-container ic2">
              <label>Approved</label>
              <input
                id="approved"
                className="input"
                type="text"
                placeholder="approved"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>
            )} */}
              <Grid
              item
              sm={12}
              xs={12}
              lg={12}
              md={12}
              // className="input-container ic2"
            > 
            
            <Button className="button_input" type="submit">
              Submit
            </Button>
            </Grid>
          </form>
          {/* <div className="techcreate">
            {<TechCreateNewsApi/>}
            
          </div> */}
        </Grid>
      </Grid>
    </>
  );
};

export default AdvertiseUpdate;
