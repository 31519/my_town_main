import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Grid,
  Paper,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";

import Loaders from "../components/Loader";

// IMPORT COMPONENT
import ErrorMessage from "../components/ErrorMessage";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { celebrityDetailAction } from "../actions/advertiseActions";
import { celebrityUpdateAction } from "../actions/advertiseActions";
import { CELEBRITY_UPDATE_RESET , CELEBRITY_DETAIL_RESET} from "../constants/productivityConstants";

// import "../css_styles/TechCreate.css";

const CelebrityUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  // console.log("params celeb", params)
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
  const [url, setUrl] = useState("");
  const [oneImage, setOneImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const celebrityDetail = useSelector((state) => state.celebrityDetail);
  const {
    error: detailCelebrityError,
    loading: detailCelebrityLoading,
    celebrity: detailCelebrity,
  } = celebrityDetail;

  const celebrityUpdate = useSelector((state) => state.celebrityUpdate);
  const {
    error: updateCelebrityError,
    loading: updateCelebrityLoading,
    success: updateCelebritySuccess,
    advertise: updateCelebrity,
  } = celebrityUpdate;


  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateCelebritySuccess) {
      dispatch({ type: CELEBRITY_UPDATE_RESET });
      // dispatch({ type: CELEBRITY_DETAIL_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/my-dashboard")
      }
    } else {
      if (
        !detailCelebrity.title ||
        detailCelebrity.id !== Number(id) 
      ) {
        dispatch(celebrityDetailAction(id, slug));
      } else {
        setCategory(detailCelebrity.category);
        setCountry(detailCelebrity.country);
        setState(detailCelebrity.state);
        setAddress(detailCelebrity.address);
        setContact(detailCelebrity.contact);
        setImage(detailCelebrity.manyImages);
        setTitle(detailCelebrity.title);
        setContent(detailCelebrity.content);
        setUrl(detailCelebrity.url);
      }
    }
  }, [dispatch, id, detailCelebrity,updateCelebritySuccess, updateCelebrity]);


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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/celebrities/many-image/`,
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
      celebrityUpdateAction({
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
        url
      })
    );
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevate={20} style={paperStyle}>
        {detailCelebrityLoading && <Loaders/>}
            <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
            <div style={{color:'blue', paddingBottom:'10px'}}>Let's Update Celebrity</div>
              
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
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
              <FormLabel>Content Link</FormLabel>
              <TextField
                id="address"
                fullWidth
                type="url"
                placeholder="Enter your content url (link)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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

              <Grid >
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
                {updateCelebrityLoading ? <Loaders/>: <>Submit</>}
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

export default CelebrityUpdate;
