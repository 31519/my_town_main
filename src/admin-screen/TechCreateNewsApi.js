import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createTechs, createHealth, createBusiness, createScience } from "../actions/techActions";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "../css_styles/TechCreate.css";

import { Grid, Button } from "@mui/material";

const TechCreateNewsApi = () => {
  const [techFlag, setTechFlag] = useState(true)
  const [businessFlag, setBusinessFlag] = useState(true)
  const [healthFlag, setHealthFlag] = useState(true)
  const [scienceFlag, setScienceFlag] = useState(true)

  const newsApiKey = "d049a308e4634c8b8a28ce3b4b3059be";
  const dispatch = useDispatch();

  const techCreate = useSelector((state) => state.techCreate)
  const { error: techCreateError, loading: techCreateLoading, techs} = techCreate;

  const businessCreate = useSelector((state) => state.businessCreate)
  const { error: businessCreateError, loading: businessCreateLoading, business} = businessCreate;

  const healthCreate = useSelector((state) => state.healthCreate)
  const { error: healthCreateError, loading: healthCreateLoading, health} = healthCreate;

  const scienceCreate = useSelector((state) => state.scienceCreate)
  const { error: scienceCreateError, loading: scienceCreateLoading, science} = scienceCreate;

  //   FETCH THE DATA
  const techNewsApi = (categories) => async () => {
    const category = categories;

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${newsApiKey}`
    );

    const techs = data.articles;

    for (let i = 0; i < techs.length; i++) {
      const author = techs[i].author;
      const title = techs[i].title;
      const description = techs[i].description;
      const url = techs[i].url;
      const urlToImage = techs[i].urlToImage;
      const publishedAt = techs[i].publishedAt;
      const content = techs[i].content;

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
      );
    }
  };

    //   FETCH THE DATA
    const healthNewsApi = (categories) => async () => {
      const category = categories;
  
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${newsApiKey}`
      );
  
      const techs = data.articles;
  
      for (let i = 0; i < techs.length; i++) {
        console.log("interval start", techs.length);
        const author = techs[i].author;
        const title = techs[i].title;
        const description = techs[i].description;
        const url = techs[i].url;
        const urlToImage = techs[i].urlToImage;
        const publishedAt = techs[i].publishedAt;
        const content = techs[i].content;
        console.log("interval ended author", techs[i].author);
  
        dispatch(
          createHealth(
            category,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content
          )
        );
      }
    };



  
    //   FETCH THE DATA
    const businessNewsApi = (categories) => async () => {
      const category = categories;
  
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${newsApiKey}`
      );
  
      const techs = data.articles;
  
      for (let i = 0; i < techs.length; i++) {
        console.log("interval start", techs.length);
        const author = techs[i].author;
        const title = techs[i].title;
        const description = techs[i].description;
        const url = techs[i].url;
        const urlToImage = techs[i].urlToImage;
        const publishedAt = techs[i].publishedAt;
        const content = techs[i].content;
        console.log("interval ended author", techs[i].author);
  
        dispatch(
          createBusiness(
            category,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content
          )
        );
      }
    };



      //   FETCH THE DATA
      const scienceNewsApi = (categories) => async () => {
        const category = categories;
    
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${newsApiKey}`
        );
    
        const techs = data.articles;
    
        for (let i = 0; i < techs.length; i++) {
          console.log("interval start", techs.length);
          const author = techs[i].author;
          const title = techs[i].title;
          const description = techs[i].description;
          const url = techs[i].url;
          const urlToImage = techs[i].urlToImage;
          const publishedAt = techs[i].publishedAt;
          const content = techs[i].content;
          console.log("interval ended author", techs[i].author);
    
          dispatch(
            createScience(
              category,
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
              content
            )
          );
        }
      };
  


    
  

  return (
    <>
      <div className="techcreateapi">
        <Grid container>
          {techCreateError && <ErrorMessage  type="error" error={techCreateError}/>}
          <Grid className="grid-item" item md={12} sm={12} lg={12} xs={12}>
            <Button 
              variant='contained'
              color='primary'
              disabled={techFlag}
              onClick={techNewsApi("technology")} >
              {techCreateLoading && <Loaders/>}
              Upload Technology api
            </Button>
            <Grid>
              {techs && <h3>{techs.length} Length</h3>}
            </Grid>
            <Grid>
              <Button
                color='error'
                variant='contained'
                onClick={() =>setTechFlag(!techFlag) }
              >
                Open/Close

              </Button>
            </Grid>
          </Grid>

          {techCreateError && <ErrorMessage  type="error" error={scienceCreateError}/>}
          <Grid className="grid-item" item md={12} sm={12} lg={12} xs={12}>
            <Button 
              variant='contained'
              color='primary'
              disabled={scienceFlag}
              onClick={scienceNewsApi("science")} >
              {scienceCreateLoading && <Loaders/>}
              Upload Science api
            </Button>
            <Grid>
              {science && <h3>{science.length} Length</h3>}
            </Grid>
            <Grid>
              <Button
                color='error'
                variant='contained'
                onClick={() =>setScienceFlag(!scienceFlag) }
              >
                Open/Close

              </Button>
            </Grid>
          </Grid>

          {techCreateError && <ErrorMessage  type="error" error={businessCreateError}/>}
          <Grid className="grid-item" item md={12} sm={12} lg={12} xs={12}>
            <Button 
              variant='contained'
              color='primary'
              disabled={businessFlag}
              onClick={businessNewsApi("business")} >
              {businessCreateLoading && <Loaders/>}
              Upload Business api
            </Button>
            <Grid>
              {business && <h3>{business.length} Length</h3>}
            </Grid>
            <Grid>
              <Button
                color='error'
                variant='contained'
                onClick={() =>setBusinessFlag(!businessFlag) }
              >
                Open/Close

              </Button>
            </Grid>
          </Grid>

          {healthCreateError && <ErrorMessage  type="error" error={healthCreateError}/>}
          <Grid className="grid-item" item md={12} sm={12} lg={12} xs={12}>
            <Button 
              variant='contained'
              color='primary'
              disabled={healthFlag}
              onClick={healthNewsApi("health")} >
              {healthCreateLoading && <Loaders/>}
              Upload Health api
            </Button>
            <Grid>
              {health && <h3>{health.length} Length</h3>}
            </Grid>
            <Grid>
              <Button
                color='error'
                variant='contained'
                onClick={() =>setHealthFlag(!healthFlag) }
              >
                Open/Close

              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TechCreateNewsApi;
