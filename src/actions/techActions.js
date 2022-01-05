import {
  TECH_LIST_REQUEST,
  TECH_LIST_SUCCESS,
  TECH_LIST_FAIL,

  HEALTH_LIST_REQUEST,
  HEALTH_LIST_SUCCESS,
  HEALTH_LIST_FAIL,

  SCIENCE_LIST_REQUEST,
  SCIENCE_LIST_SUCCESS,
  SCIENCE_LIST_FAIL,

  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,

  TECH_DETAIL_REQUEST,
  TECH_DETAIL_SUCCESS,
  TECH_DETAIL_FAIL,


  BUSINESS_DETAIL_REQUEST,
  BUSINESS_DETAIL_SUCCESS,
  BUSINESS_DETAIL_FAIL,

  SCIENCE_DETAIL_REQUEST,
  SCIENCE_DETAIL_SUCCESS,
  SCIENCE_DETAIL_FAIL,


  
  CREATE_TECH_REQUEST,
  CREATE_TECH_SUCCESS,
  CREATE_TECH_FAIL,


  CREATE_HEALTH_REQUEST,
  CREATE_HEALTH_SUCCESS,
  CREATE_HEALTH_FAIL,

  CREATE_SCIENCE_REQUEST,
  CREATE_SCIENCE_SUCCESS,
  CREATE_SCIENCE_FAIL,

  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,

} from "../constants/techConstants";

import axios from "axios";

export const listTechs = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: TECH_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/api/technology/list${keyword}`
    );

    dispatch({
      type: TECH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECH_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};



export const listHealth = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: HEALTH_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/api/health/list${keyword}`
    );

    dispatch({
      type: HEALTH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HEALTH_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const listScience = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SCIENCE_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/api/science/list${keyword}`
    );

    dispatch({
      type: SCIENCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCIENCE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const listBusiness = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/api/business/list${keyword}`
    );

    dispatch({
      type: BUSINESS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUSINESS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const techDetailAction = (id, slug) => async (dispatch) => {
  try {
    dispatch({ type: TECH_DETAIL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_PORT}/api/technology/list/${id}/${slug}/`
    );

    dispatch({
      type: TECH_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECH_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};




export const createTechs= (  
  category,     
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content ) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_TECH_REQUEST });
    const {
      userLogin: {userInfo}, 
    }  = getState()
    
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    };


    const { data } = await axios.post(
      `${process.env.REACT_APP_PORT}/api/${category}/create/`,
      {
        'author':author,
        'title':title,
        'description':description,
        'url': url,
        'urlToImage':urlToImage,
        'publishedAt':publishedAt,
        'content':content,
      },
      config
    );

    
    dispatch({ type: CREATE_TECH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_TECH_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};




export const createHealth= (  
  category,     
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content ) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_HEALTH_REQUEST });
    const {
      userLogin: {userInfo}, 
    }  = getState()
    
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    };
    console.log('category health', category)

    const { data } = await axios.post(
      `${process.env.REACT_APP_PORT}/api/health/create/`,
      {
        'author':author,
        'title':title,
        'description':description,
        'url': url,
        'urlToImage':urlToImage,
        'publishedAt':publishedAt,
        'content':content,
      },
      config
    );

    
    dispatch({ type: CREATE_HEALTH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_HEALTH_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};






export const createScience= (  
  category,     
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content ) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_SCIENCE_REQUEST });
    const {
      userLogin: {userInfo}, 
    }  = getState()
    
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_PORT}/api/science/create/`,
      {
        'author':author,
        'title':title,
        'description':description,
        'url': url,
        'urlToImage':urlToImage,
        'publishedAt':publishedAt,
        'content':content,
      },
      config
    );

    
    dispatch({ type: CREATE_SCIENCE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_SCIENCE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};






export const createBusiness= (  
  category,     
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content ) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_BUSINESS_REQUEST });
    const {
      userLogin: {userInfo}, 
    }  = getState()
    
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_PORT}/api/business/create/`,
      {
        'author':author,
        'title':title,
        'description':description,
        'url': url,
        'urlToImage':urlToImage,
        'publishedAt':publishedAt,
        'content':content,
      },
      config
    );

    
    dispatch({ type: CREATE_BUSINESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
