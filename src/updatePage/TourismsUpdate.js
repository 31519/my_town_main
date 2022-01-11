import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// IMPORT COMPONENT

import axios from "axios";
import { Grid} from "@mui/material";
import Loaders from "../components/Loader";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import {
  tourismsDetailAction,
  tourismsUpdateAction,
} from "../actions/advertiseActions2";

import { TOURISMS_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const TourismsUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const tourismsDetail = useSelector((state) => state.tourismsDetail);
  const {
    error:   detailTourismsError,
    loading: detailTourismsLoading,
    tourisms:detailTourisms,
  } = tourismsDetail;

  const tourismsUpdate = useSelector((state) => state.tourismsUpdate);
  const {
    error:   updateTourismsError,
    loading: updateTourismsLoading,
    success: updateTourismsSuccess,
    tourisms:updateTourisms,
  } = tourismsUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateTourismsSuccess) {
      dispatch({ type: TOURISMS_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/my-dashboard")
      }
    } else {
      if (!detailTourisms.title || detailTourisms.id !== Number(id)) {
        dispatch(tourismsDetailAction(id,slug));
      } else {
        setCategory(detailTourisms.category);
        setCountry(detailTourisms.country);
        setState(detailTourisms.state);
        setAddress(detailTourisms.address);
        setContact(detailTourisms.contact);
        setImage(detailTourisms.image);
        setTitle(detailTourisms.title);
        setContent(detailTourisms.content);
      }
    }
  }, [dispatch, id, detailTourisms, updateTourismsSuccess, updateTourisms]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('product_id', id)

    setLoading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/tourisms/image/`,
      formData, config)

      setImage(data.image)
      setLoading(false)
    } catch (error){
      setLoading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      tourismsUpdateAction({
        id: id,
        slug:slug,
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
      <div className="techcreate">
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="text">
              <div className="subtitle">Let's Update Models</div>
            </div>
            <div className="input-container">
              <label>Category</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="categorygfhfg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Country</label>
              <input
                id="country"
                className="input"
                type="text"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>State</label>
              <input
                id="state"
                className="input"
                type="state"
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Address</label>
              <input
                id="address"
                className="input"
                type="address"
                placeholder="Url"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Contact</label>
              <input
                id="contact"
                className="input"
                type="text"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Title</label>
              <input
                id="title"
                className="input"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-container ic2">
              <label>Content</label>
              <textarea
                id="content"
                className="input"
                type="textfield"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>


            <Grid className="input-container ic2">
                <label>Images</label>
                <img src={image} style={{widht:'80px', height:'50px'}} />
            </Grid>
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
            />
            {loading && <Loaders/>}
            <div className="input-container ic2">
              <button className="button_input" type="submit">
                Submit
              </button>
            </div>
          </form>
          {/* <div className="techcreate">
            {<TechCreateNewsApi/>}
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TourismsUpdate;
