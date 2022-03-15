import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// IMPORT COMPONENT

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
import { eventDetailAction } from "../actions/advertiseActions";
import { eventUpdateAction } from "../actions/advertiseActions";
import { EVENT_UPDATE_RESET } from "../constants/productivityConstants";


const EventUpdate = () => {
  const params = useParams();
  const {id,slug} = params;
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
  const eventDetail = useSelector((state) => state.eventDetail);
  const {
    error: detailEventError,
    loading: detailEventLoading,
    event: detailEvent,
  } = eventDetail;

  const eventUpdate = useSelector((state) => state.eventUpdate);
  const {
    error: updateEventError,
    loading: updateEventLoading,
    success: updateEventSuccess,
    event: updateEvent,
  } = eventUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateEventSuccess) {
      dispatch({ type: EVENT_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/my-dashboard")
      }
    } else {
      if (!detailEvent.title || detailEvent.id !== Number(id)) {
        dispatch(eventDetailAction(id, slug));
      } else {
        setCategory(detailEvent.category);
        setCountry(detailEvent.country);
        setState(detailEvent.state);
        setAddress(detailEvent.address);
        setContact(detailEvent.contact);
        setImage(detailEvent.image);
        setTitle(detailEvent.title);
        setContent(detailEvent.content);
      }
    }
  }, [dispatch, id, detailEvent, updateEventSuccess, updateEvent]);

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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/event/image/`,
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
      eventUpdateAction({
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
            <div  >
              <div style={{color:'blue', marginBottom:'20px'}}>Let's Update Event</div>
            </div>
            {detailEventLoading && <Loaders/>}
            <FormLabel component='legend'>Category</FormLabel>
            <TextField
              fullWidth 
                type="text"
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

            <Grid>
                <img src={image}  alt="images" style={{width:'200px', height:'150px', margin:'5px'}} />
              </Grid>
                <input
                  className="input"
                  type="file"
                  onChange={uploadFileHandler}
                />
                {loading && <Loaders/>}
            
            <div className="input-container ic2">
              <button className="button_input" type="submit">
              {updateEventLoading ? <Loaders/>: <>Submit</>}
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

export default EventUpdate;
