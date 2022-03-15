import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Grid,
  Paper,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";
import Loaders from "../components/Loader";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import {
  resellerDetailAction,
  resellerUpdateAction,
} from "../actions/advertiseActions2";

import { RESELLER_UPDATE_RESET } from "../constants/productivityConstants";

// import "../css_styles/TechCreate.css";                          

const ResellerUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate = useNavigate();

  const paperStyle = { padding: '0px' , width:'80%', margin: "20px auto"}
  const gridStyle = { backgroundColor: 'rgb(223, 232, 229)'}

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

    <Grid style={gridStyle}>
      <Paper elevate={20} style={paperStyle}>
          <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
            <div className="text">
              <div className="subtitle">Let's Update Reseller Models</div>
            </div>
              <FormLabel>Category</FormLabel>
              <TextField                  
                id="category"
                fullWidth 
                type="text"
                placeholder="categorygfhfg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />                                                       
              <FormLabel>Country</FormLabel>
              <TextField
                id="country"
                fullWidth 
                type="text"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <FormLabel>State</FormLabel>
              <TextField
                id="state"
                fullWidth 
                type="state"
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <FormLabel>Address</FormLabel>
              <TextField
                id="address"
                fullWidth 
                type="address"
                placeholder="Url"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <FormLabel>Contact</FormLabel>
              <TextField
                id="contact"
                fullWidth 
                type="text"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <FormLabel>Title</FormLabel>
              <TextField
                id="title"
                fullWidth 
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel>Content</FormLabel>
              <TextareaAutosize
                id="content"
                fullWidth 
                style={{width: '100%'}}
                minRows={10}
                type="textfield"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

            <Grid className="input-container ic2">
                <label>Images</label>
                <img src={image} alt="images" style={{width:'200px', height:'200px', margin:'20px'}} />
            </Grid>
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
            />
            {loading && <Loaders/>}
            <div className="input-container ic2">
              <button className="button_input" type="submit">
              {updateResellerLoading ? <Loaders/>: <>Submit</>}
              </button>
            </div>
          </form>
          {/* <div className="techcreate">
            {<TechCreateNewsApi/>}
            
          </div> */}
        </Paper>
      </Grid>
  );
};

export default ResellerUpdate;
