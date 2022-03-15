import _ from 'lodash'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// IMPORT COMPONENT

import axios from "axios";
import Loaders from "../components/Loader";



import {
  Grid,
  Paper,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";
// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import {
  tourismsDetailAction,
  tourismsUpdateAction,
} from "../actions/advertiseActions2";

import { TOURISMS_UPDATE_RESET } from "../constants/productivityConstants";



const TourismsUpdate = () => {
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
  const [image, setImage] = useState([]);
  const [oneImage, setOneImage] = useState("");
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
        setImage(detailTourisms.manyImages);
        setTitle(detailTourisms.title);
        setContent(detailTourisms.content);
      }
    }
  }, [dispatch, id, detailTourisms, updateTourismsSuccess, updateTourisms]);

  const uploadFileHandler = async (e) => {
    // const files = e.target.files
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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/tourisms/many-image/`,
      formData, config)

      setOneImage(data.image)
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
        title,
        content,
      })
    );
  };

  return (
      <Grid style={gridStyle}>
        <Paper elevate={20} style={paperStyle}>
          {detailTourismsLoading && <Loaders/>}
          <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
           
            <FormLabel component='legend'>Category</FormLabel>
            <TextField
              fullWidth 
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
              <FormLabel>Country</FormLabel>
              <TextField
                fullWidth 
                id="country"
                type="text"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <FormLabel>State</FormLabel>
              <TextField
                id="state"
                fullWidth 
                className="input"
                type="state"
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <FormLabel>Address</FormLabel>
              <TextField
                id="address"
                fullWidth 
                className="input"
                type="address"
                placeholder="Url"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <FormLabel>Contact</FormLabel>
              <TextField
                id="contact"
                fullWidth 
                className="input"
                type="text"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <FormLabel>Title</FormLabel>
              <TextField
                id="title"
                fullWidth 
                required
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


            <Grid>
              {image && image.length > 1 && (
                image.map((images) => (
                  <img src={images.image} alt="images" style={{width:'200px', height:'150px', margin:'5px'}} />
                ))
               )}
                
            </Grid>
            {
              oneImage && (

                <img src={oneImage} alt="images" style={{width:'200px', height:'150px', margin:'0px'}} />
              )
            }
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
            />
            {loading && <Loaders/>}
            <div className="input-container ic2">
              <button className="button_input" type="submit">
                {updateTourismsLoading ? <Loaders/>: <>Submit</>}
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

export default TourismsUpdate;
