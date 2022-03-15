import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


import {
  Grid,
  Paper,
  FormLabel,
  TextField,
  TextareaAutosize
} from "@mui/material";
// IMPORT COMPONENT


import axios from "axios";

import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";
import { localDetailAction } from "../actions/advertiseActions";
import { localUpdateAction } from "../actions/advertiseActions";
import { LOCAL_UPDATE_RESET } from "../constants/productivityConstants";

import "../css_styles/TechCreate.css";

const LocalnewsUpdate = () => {
  const params = useParams();
  const {id,slug} = params;
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)
  const [oneImage, setOneImage] = useState("");



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const localDetail = useSelector((state) => state.localDetail);
  const {
    error: detailLocalnewsError,
    loading: detailLocalnewsLoading,
    local: detailLocalnews,
  } = localDetail;

  const localUpdate = useSelector((state) => state.localUpdate);
  const {
    error: updateLocalnewsError,
    loading: updateLocalnewsLoading,
    success: updateLocalnewsSuccess,
    local: updateLocalnews,
  } = localUpdate;

  const paperStyle = { padding: '0px' , width:'80%', margin: "20px auto"}
  const gridStyle = { backgroundColor: 'rgb(223, 232, 229)'}

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (updateLocalnewsSuccess) {
      dispatch({ type: LOCAL_UPDATE_RESET });
      if (userInfo.isAdmin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/my-dashboard");
      }
    } else {
      if (
        // !detailAdvertise.title ||
        detailLocalnews.id !== Number(id)
      ) {
        dispatch(localDetailAction(id, slug));
      } else {
        setCategory(detailLocalnews.category);
        setAuthor(detailLocalnews.author);
        setDescription(detailLocalnews.description);
        setUrl(detailLocalnews.url);
        setImage(detailLocalnews.manyImages);
        setTitle(detailLocalnews.title);
        setContent(detailLocalnews.content);
      }
    }
  }, [
    dispatch,
    id,
    slug,
    detailLocalnews,
    updateLocalnewsSuccess,
    updateLocalnews,
  ]);

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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/localnews/many-image/`,
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
      localUpdateAction({
        id: id,
        slug: slug,
        category,
        author,
        url,
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
              <FormLabel>Category</FormLabel>
              <TextField
                fullWidth 
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <FormLabel>Author</FormLabel>
              <TextField
                fullWidth 
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />

            {/* <div className="input-container">
              <label>Description</label>
              <input
                id="state"
                className="input"
                type="state"
                placeholder="state"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div> */}
              <FormLabel>Url</FormLabel>
              <TextField
                fullWidth 
                type="address"
                placeholder="Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
              <FormLabel>Content</FormLabel>
              <TextareaAutosize
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
                  <img src={images.image} alt="images" style={{width:'200px', height:'200px', margin:'20px'}} />
                ))
               )}
            </Grid>
            {
              oneImage && (

                <img src={oneImage} alt="images" style={{width:'200px', height:'200px', margin:'20px'}} />
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
                Submit
              </button>
            </div>
            <div>

              {updateLocalnewsLoading && <Loaders/>}
              {updateLocalnewsError && <ErrorMessage type="error" error={updateLocalnewsError}/>}
            </div>
          </form>
          {/* <div className="techcreate">
            {<TechCreateNewsApi/>}
            
          </div> */}
        </Paper>
      </Grid>
  );
};

export default LocalnewsUpdate;
