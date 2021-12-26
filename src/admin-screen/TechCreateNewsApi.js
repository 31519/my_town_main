import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createTechs } from "../actions/techActions";

import "../css_styles/TechCreate.css";

const TechCreateNewsApi = () => {

  const [techsx, setTechsx] = useState([]);
  const newsApiKey = "d049a308e4634c8b8a28ce3b4b3059be";
  const dispatch = useDispatch();


  //   FETCH THE DATA
  const techNewsApi = (categories) => async () => {
    console.log("Fetching api");
    const category = categories

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${newsApiKey}`
    );

    const techs = data.articles;

    console.log("datas", techs.length);
    console.log("techs2", techs);

    for (let i = 0; i< techs.length; i++) {
      
    console.log("interval start", techs.length)
    const author = techs[i].author
    const title = techs[i].title
    const description = techs[i].description
    const url = techs[i].url
    const urlToImage = techs[i].urlToImage
    const publishedAt = techs[i].publishedAt
    const content = techs[i].content
    console.log("interval ended author", techs[i].author )

    dispatch(
          createTechs(
            category,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content
          )
        )

      console.log("for loop ended dispatch", techs[i].author)
    }
    console.log("finished")


  };

  return (
    <>
      <div className="techcreate">
        <button onClick={techNewsApi('technology')}>Upload Technology api</button>
        {/* <div>{techs && <h2>length {techs.length}</h2>}</div> */}
        {/* <div>Title -- {title && <h2>{title}</h2>}</div> */}
        {/* <div>Author -- {author && <h2>{author}</h2>}</div> */}
      </div>
    </>
  );
};

export default TechCreateNewsApi;
