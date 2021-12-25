import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from 'react-router-dom'
import { createTechs } from "../actions/techActions";

import TechCreateNewsApi from "../admin-screen/TechCreateNewsApi";

import "../css_styles/TechCreate.css";

const ProductivityCreate = () => {
  const [techs, setTechs] = useState([]);
  const newsApiKey = "d049a308e4634c8b8a28ce3b4b3059be";
  const techNewsApi = () => async () => {
    console.log("Fetching api");
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newsApiKey}`
    );
    console.log("data", data);
    console.log("techs1", techs);
    setTechs(data.articles);
    console.log("techs2", techs);
  };

  techs.map((tech) => console.log("techs.author", tech.author));

  // const userLogin = useSelector(state => state.userLogin)
  // const {userInfo} = userLogin;
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [urlToImage, setUrlToImage] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const location = useLocation()
  const {models} = location.state

  // user = user,
  // author = data['author'],
  // title = data['title'],
  // description = data['description'],
  // url= data['url'],
  // urlToImage= data['urlToImage'],
  // publishedAt = data['publishedAt'],
  // content = data['content']

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTechs(
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content
      )
    );
    console.log("clicked", author);
  };

  return (
    <>
      <div className="techcreate">
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="text">
              <div className="subtitle">Let's Update {models} Models</div>
            </div>
            <div className="input-container">
              <label>Category</label>
              <input
                id="author"
                className="input"
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Country</label>
              <input
                id="title"
                className="input"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>State</label>
              <input
                id="description"
                className="input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Address</label>
              <input
                id="url"
                className="input"
                type="text"
                placeholder="Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Contact</label>
              <input
                id="urlToImage"
                className="input"
                type="text"
                placeholder="Url To Image"
                value={urlToImage}
                onChange={(e) => setUrlToImage(e.target.value)}
              />
            </div>
            <div className="input-container ic2">
              <label>Title</label>
              <input
                id="publishedAt"
                className="input"
                type="text"
                placeholder="Publish At"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
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

            <div className="input-container ic2">
              <label>isApproved</label>
              <select className="input">
                <option
                >
                  isApproved
                </option>
                <option
                  id="urlToImage"
                  className="input"
                  type="text"
                  placeholder="Url To Image"
                  value={urlToImage}
                  onChange={(e) => setUrlToImage(e.target.value)}
                >
                  True
                </option>
                <option
                  id="urlToImage"
                  className="input"
                  type="text"
                  placeholder="Url To Image"
                  value={urlToImage}
                  onChange={(e) => setUrlToImage(e.target.value)}
                >
                  False
                </option>
              </select>
            </div>
            <div className="input-container ic2">
              <label>Images</label>
              <input
                id="urlToImage"
                className="input"
                type="text"
                placeholder="Url To Image"
                value={urlToImage}
                onChange={(e) => setUrlToImage(e.target.value)}
              />
            </div>
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

export default ProductivityCreate;
