import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { Grid} from "@mui/material";
import Loaders from "../components/Loader";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import {
  resellerDetailAction,
  resellerUpdateAction,
} from "../actions/advertiseActions2";

import { RESELLER_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const ResellerUpdate = () => {
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
  const resellerDetail = useSelector((state) => state.resellerDetail);
  const {
    error:   detailResellerError,
    loading: detailResellerLoading,
    reseller:   detailReseller,
  } = resellerDetail;

  const resellerUpdate = useSelector((state) => state.resellerUpdate);
  const {
    error:   updateResellerError,
    loading: updateResellerLoading,
    success: updateResellerSuccess,
    reseller:   updateReseller,
  } = resellerUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateResellerSuccess) {
      dispatch({ type: RESELLER_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/reseller-create")
      }
    } else {
      if (!detailReseller.title || detailReseller.id !== Number(id)) {
        dispatch(resellerDetailAction(id,slug));
      } else {
        setCategory(detailReseller.category);
        setCountry(detailReseller.country);
        setState(detailReseller.state);
        setAddress(detailReseller.address);
        setContact(detailReseller.contact);
        setImage(detailReseller.image);
        setTitle(detailReseller.title);
        setContent(detailReseller.content);
      }
    }
  }, [dispatch, id, detailReseller, updateResellerSuccess, updateReseller]);

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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/resell/image/`,
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
      resellerUpdateAction({
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

export default ResellerUpdate;
