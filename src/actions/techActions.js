import {
  TECH_LIST_REQUEST,
  TECH_LIST_SUCCESS,
  TECH_LIST_FAIL,
  
  CREATE_TECH_REQUEST,
  CREATE_TECH_SUCCESS,
  CREATE_TECH_FAIL,
} from "../constants/techConstants";

import axios from "axios";

export const listTechs = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: TECH_LIST_REQUEST });
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/technology/list${keyword}`
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
    console.log('category', category)

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/${category}/create/`,
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
