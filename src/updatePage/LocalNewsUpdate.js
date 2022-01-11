import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  Grid,

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
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)



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
        setImage(detailLocalnews.image);
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

      const { data } = await axios.post(`${process.env.REACT_APP_PORT}/api/localnews/image/`,
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
              <label>Author</label>
              <input
                id="country"
                className="input"
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
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
            <div className="input-container ic2">
              <label>Url</label>
              <input
                id="address"
                className="input"
                type="address"
                placeholder="Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
            <div>

              {updateLocalnewsLoading && <Loaders/>}
              {updateLocalnewsError && <ErrorMessage type="error" error={updateLocalnewsError}/>}
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

export default LocalnewsUpdate;
