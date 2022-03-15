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
import {
  jobDetailAction,
  jobUpdateAction,
} from "../actions/advertiseActions2";

import { JOBS_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const JobUpdate = () => {
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const jobDetail = useSelector((state) => state.jobDetail);
  const {
    error:   detailJobError,
    loading: detailJobLoading,
    job     :detailJob,
  } = jobDetail;

  const jobUpdate = useSelector((state) => state.jobUpdate);
  const {
    error:   updateJobError,
    loading: updateJobLoading,
    success: updateJobSuccess,
    job    : updateJob,
  } = jobUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateJobSuccess) {
      dispatch({ type: JOBS_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/my-dashboard")
      }
    } else {
      if (!detailJob.title || detailJob.id !== Number(id)) {
        dispatch(jobDetailAction(id, slug));
      } else {
        setCategory(detailJob.category);
        setCountry(detailJob.country);
        setState(detailJob.state);
        setAddress(detailJob.address);
        setContact(detailJob.contact);
        setImage(detailJob.image);
        setTitle(detailJob.title);
        setStartDate(detailJob.startDate);
        setEndDate(detailJob.endDate);
        setContent(detailJob.content);
      }
    }
  }, [dispatch, id, detailJob, updateJobSuccess, updateJob]);

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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/jobs/image/`,
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
      jobUpdateAction({
        id: id,
        slug:slug,
        category,
        country,
        state,
        address,
        contact,
        image,
        title,
        startDate,
        endDate,
        content,
      })
    );
  };

  return (

      <Grid style={gridStyle}>
        <Paper elevate={20} style={paperStyle}>
          <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
            <div className="text">
              <div className="subtitle">Let's Update Job Models</div>
            </div>
            
              <FormLabel>Category</FormLabel>
              <TextField
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
                fullWidth
                id="state"
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

              <FormLabel>Start Date</FormLabel>
              <TextField
                id="title"
                fullWidth
                type="date"
                placeholder="title"
                value={startDate.split('T', 1)}
                onChange={(e) => setStartDate(e.target.value)}
              />

              <FormLabel>End Date</FormLabel>
              <TextField
                id="title"
                fullWidth
                type="date"
                placeholder="title"
                value={endDate.split('T', 1)}
                onChange={(e) => setEndDate(e.target.value)}
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
                <img src={image}  alt="images" style={{width:'200px', height:'200px', margin:'0px'}}  />
            </Grid>
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
            />
           
            <div className="input-container ic2">
              <button className="button_input" type="submit">
              {updateJobLoading ? <Loaders/>: (<>Submit</>)}
                
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

export default JobUpdate;
