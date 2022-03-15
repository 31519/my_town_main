import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { createTechs } from "../actions/techActions";
import Loaders from "../components/Loader";
// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { advertiseDetailAction } from "../actions/advertiseActions";
import { advertiseUpdateAction } from "../actions/advertiseActions";
import { ADVERTISE_UPDATE_RESET } from "../constants/productivityConstants";



const UserPostUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate =  useNavigate()
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
    <Grid style={gridStyle}>
      <Paper elevate={20} style={paperStyle}>
          <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
            
              <div style={{color:'blue', paddingBottom:'10px'}}>Let's Update Advertise</div>
            
              <FormLabel>Category</FormLabel>
              <TextField
                id="category"
                fullWidth
                type="text"
                placeholder="category"
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
              <img src={image}  alt="images" style={{width:'200px', height:'150px', margin:'0px'}} />
            </Grid>
              <input
                className="input"
                type="file"
                onChange={uploadFileHandler}
              />
              {loading && <Loaders/>}
            
            <div className="input-container ic2">
            <button className="button_input" type="submit">
              {updateAdvertiseLoading ? <Loaders/>: <>Submit</>}
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

export default UserPostUpdate;
