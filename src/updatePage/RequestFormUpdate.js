import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  Grid,

} from "@mui/material";
// IMPORT COMPONENT



import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";


import { formDetailAction } from "../actions/advertiseActions";
import { formUpdateAction } from "../actions/advertiseActions";
import { FORM_UPDATE_RESET } from "../constants/productivityConstants";


const RequestFormUpdate = () => {
  const params = useParams();
  const {id,slug} = params;
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const formDetail = useSelector((state) => state.formDetail);
  const {
    error: detailFormError,
    loading: detailFormLoading,
    form: detailForm,
  } = formDetail;

  const formUpdate = useSelector((state) => state.formUpdate);
  const {
    error: updateFormError,
    loading: updateFormLoading,
    success: updateFormSuccess,
    form: updateForm,
  } = formUpdate;

  useEffect(() => {
    if (!userInfo) {
        navigate("/");
      }
    if (updateFormSuccess) {
      dispatch({ type: FORM_UPDATE_RESET });
        navigate("/my-dashboard"); 
    } else {
      if (
        !detailForm.username ||
        detailForm.id !== Number(id)
      ) {
        dispatch(formDetailAction(id, slug));
      } else {
        setUsername(detailForm.username);
        setEmail(detailForm.email);
        setCategory(detailForm.category);
        setContent(detailForm.content);
      }
    } 
    }
  , [
    dispatch,
    id,
    slug,
    updateFormSuccess,
    updateForm,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      formUpdateAction({
        id: id,
        slug:slug,
        category,
        username,
        content,
        email
      })
    );
  };

  return (
    <>
      <div className="techcreate">

      {detailFormLoading && <Loaders/>}
      {detailFormError && <ErrorMessage type="error" error={detailFormError}/>}
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="text">
              {/* <div className="subtitle">Let's Update Models</div> */}
            </div>
            <div className="input-container">
              <label>Username</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Email</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div className="input-container">
              <label>Category</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div> */}
            <div className="input-container">
              <label for="category">Category</label>
              <select onChange={(e) => setCategory(e.target.value)}  name="category" id="category" >
                <option value="Shop">Shop</option>
                <option value="Advertise">Advertise</option>
              </select>
              {/* <input
                id="category"
                className="input"
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              /> */}
            </div>
            <div className="input-container">
              <label>Purpose</label>
              <input
                id="category"
                className="input"
                type="text"
                placeholder="Write Somethinng"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            
            <div className="input-container ic2">
              <button className="button_input" type="submit">
                Submit
              </button>
            </div>
            <div>

              {updateFormLoading && <Loaders/>}
              {updateFormError && <ErrorMessage type="error" error={updateFormError}/>}
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

export default RequestFormUpdate;
