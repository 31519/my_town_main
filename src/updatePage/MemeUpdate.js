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
  memeDetailAction,
  memeUpdateAction,
} from "../actions/advertiseActions";

import { MEME_UPDATE_RESET } from "../constants/productivityConstants";


const MemeUpdate = () => {
  const params = useParams();
  const {id, slug} = params;
  const navigate = useNavigate();

  
  const paperStyle = { padding: '0px' , width:'80%', margin: "20px auto"}
  const gridStyle = { backgroundColor: 'rgb(223, 232, 229)'}

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const memeDetail = useSelector((state) => state.memeDetail);
  const {
    error:   detailMemeError,
    loading: detailMemeLoading,
    meme    :detailMeme,
  } = memeDetail;

  const memeUpdate = useSelector((state) => state.memeUpdate);
  const {
    error:   updateMemeError,
    loading: updateMemeLoading,
    success: updateMemeSuccess,
    meme  :  updateMeme,
  } = memeUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateMemeSuccess) {
      dispatch({ type: MEME_UPDATE_RESET });
      if (userInfo.isAdmin){
        navigate("/admin-dashboard");

      } else{
        navigate("/my-dashboard")
      }
    } else {
      if (!detailMeme.title || detailMeme.id !== Number(id)) {
        dispatch(memeDetailAction(id, slug));
      } else {
        setImage(detailMeme.image);
        setTitle(detailMeme.title);
      }
    }
  }, [dispatch, id, detailMeme, updateMemeSuccess, updateMeme]);

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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/meme/image/`,
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
      memeUpdateAction({
        id: id,
        slug:slug,
        image,
        title,
      })
    );
  };

  return (
    <Grid style={gridStyle}>
    <Paper elevate={20} style={paperStyle}>
      {detailMemeLoading && <Loaders/>}
      <form onSubmit={submitHandler} style={{margin:'10px', padding:0}}>
            <div >
              <div style={{marginBottom:'10px', color:'blue'}}>Let's Update Meme</div>
            </div>
           
            <Grid>
              <img src={image} alt="images" style={{width:'200px', height:'150px', margin:'0px'}} />
            </Grid>
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
            />

            <FormLabel>Title</FormLabel>
              <TextField
                required
                fullWidth 
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            {loading && <Loaders/>}
            <div className="input-container ic2">
              <button className="button_input" type="submit">
                {updateMemeLoading ? <Loaders/>: <>Submit</>}
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

export default MemeUpdate;
