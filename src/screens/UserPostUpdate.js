import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { createTechs } from "../actions/techActions";
import Loaders from "../components/Loader";
// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { advertiseDetailAction } from "../actions/advertiseActions";
import { advertiseUpdateAction } from "../actions/advertiseActions";
import { ADVERTISE_UPDATE_RESET } from "../constants/productivityConstants";


import "../css_styles/TechCreate.css";

const UserPostUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate =  useNavigate()


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
  const advertiseDetail = useSelector((state) => state.advertiseDetail);
  const {
    error: advertiseDetailError,
    loading: advertiseDetailLoading,
    advertise: detailAdvertise,
  } = advertiseDetail;

  const advertiseUpdate = useSelector((state) => state.advertiseUpdate);
  const {
    error: updateAdvertiseError,
    loading: updateAdvertiseLoading,
    success: updateAdvertiseSuccess,
    advertise: updateAdvertise,
  } = advertiseUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateAdvertiseSuccess) {
      dispatch({ type: ADVERTISE_UPDATE_RESET });
      navigate('/my-dashboard')
    } else {
      if (
        !detailAdvertise.title ||
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
  }, [dispatch, slug, id, detailAdvertise, updateAdvertiseSuccess, ]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('product_id', id)
    console.log("file upload")

    setLoading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/advertisement/image/`,
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
      advertiseUpdateAction({
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
              <div className="subtitle">Let's Update Advertise</div>
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
              <input
                className="input"
                type="file"
                onChange={uploadFileHandler}
              />
              {loading && <Loaders/>}
            </Grid>
            
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

export default UserPostUpdate;
